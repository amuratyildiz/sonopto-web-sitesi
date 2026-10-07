import { existsSync } from 'node:fs';
import path from 'node:path';
import { getDataverseClient } from './client';
import { sampleProjects } from '../../data/projects.sample';
import type { FaqItem, Project, ProjectFact, ProjectImage } from './types';

interface ReferenceRow {
  cr0c0_webreferansid: string;
  cr0c0_ad: string;
  cr0c0_basliken?: string;
  cr0c0_slug?: string;
  cr0c0_slugen?: string;
  cr0c0_musteri?: string;
  cr0c0_lokasyon?: string;
  cr0c0_tarih?: string;
  cr0c0_yayinda?: boolean;
  cr0c0_sira?: number;
  cr0c0_istipi?: string;
  cr0c0_musteritipi?: number;
  cr0c0_govdetr?: string;
  cr0c0_govdeen?: string;
  cr0c0_metatr?: string;
  cr0c0_metaen?: string;
  /** Dataverse rides the display annotations alongside the columns. */
  [annotation: string]: unknown;
}

interface ChildRow {
  _cr0c0_referans_value?: string;
  cr0c0_sira?: number;
}

interface FactRow extends ChildRow {
  cr0c0_ad?: string;
  cr0c0_deger?: string;
}

interface FaqRow extends ChildRow {
  cr0c0_ad?: string;
  cr0c0_soruen?: string;
  cr0c0_cevaptr?: string;
  cr0c0_cevapen?: string;
}

interface ImageRow extends ChildRow {
  cr0c0_ad?: string;
  cr0c0_altmetin?: string;
  cr0c0_kapak?: boolean;
}

/**
 * Stable keys for the two filter columns.
 *
 * Keyed on the option value rather than the label because the label is Turkish
 * and the key reaches the English pages and the query string. An option added
 * in Dataverse later still works — it falls through to a slug of its label —
 * but it will want a dictionary entry, so it is logged.
 */
const JOB_TYPE = new Map<number, string>([
  [100000000, 'led-ekran'],
  [100000001, 'led-video-wall'],
  [100000002, 'lcd-videowall'],
  [100000003, 'konferans'],
  [100000004, 'ses'],
  [100000005, 'sahne-isik'],
  [100000006, 'dijital-tabela'],
  [100000007, 'bakim-onarim'],
]);

const CLIENT_TYPE = new Map<number, string>([
  [100000000, 'kamu'],
  [100000001, 'finans'],
  [100000002, 'saglik'],
  [100000003, 'egitim'],
  [100000004, 'teknoloji'],
  [100000005, 'perakende'],
  [100000006, 'stk'],
  [100000007, 'sanayi'],
  [100000008, 'medya'],
]);

const FOLD: Record<string, string> = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', İ: 'i' };

const slugify = (label: string) =>
  label
    .toLowerCase()
    .replace(/[çğıöşüİ]/g, (c) => FOLD[c] ?? c)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

function keyFor(map: Map<number, string>, value: number, label: string | undefined, kind: string) {
  const known = map.get(value);
  if (known) return known;
  const fallback = slugify(label ?? String(value));
  console.warn(`[referanslar] ${kind} için sözlükte karşılığı olmayan seçenek: ${value} (${fallback})`);
  return fallback;
}

/** The formatted annotation Dataverse adds next to a choice column. */
const formatted = (row: Record<string, unknown>, column: string) =>
  row[`${column}@OData.Community.Display.V1.FormattedValue`] as string | undefined;

/**
 * A multi-select choice arrives as "100000000,100000003" with the labels in a
 * matching semicolon-separated annotation.
 */
function jobTypes(row: ReferenceRow): string[] {
  if (!row.cr0c0_istipi) return [];
  const values = row.cr0c0_istipi.split(',').map((v) => Number(v.trim()));
  const labels = (formatted(row, 'cr0c0_istipi') ?? '').split(';').map((l) => l.trim());
  return values.map((value, i) => keyFor(JOB_TYPE, value, labels[i], 'iş tipi'));
}

const byOrder = (a: ChildRow, b: ChildRow) => (a.cr0c0_sira ?? 0) - (b.cr0c0_sira ?? 0);

function groupByParent<T extends ChildRow>(rows: T[]): Map<string, T[]> {
  const out = new Map<string, T[]>();
  for (const row of rows) {
    const parent = row._cr0c0_referans_value;
    if (!parent) continue;
    const list = out.get(parent);
    if (list) list.push(row);
    else out.set(parent, [row]);
  }
  for (const list of out.values()) list.sort(byOrder);
  return out;
}

/**
 * Photos are downloaded into public/references/<slug>/ by the prebuild step
 * (scripts/fetch-project-media.mjs). A row whose file is not on disk is left
 * out rather than rendered as a broken image: that happens when the download
 * was skipped, and the page should fall back to the placeholder instead.
 */
function images(rows: ImageRow[], slug: string, mediaBase: string) {
  const present = rows.filter((row) => {
    const name = row.cr0c0_ad;
    return name ? existsSync(path.resolve('public', 'references', slug, name)) : false;
  });

  const coverRow = present.find((row) => row.cr0c0_kapak) ?? present[0];
  const gallery: ProjectImage[] = present
    .filter((row) => row !== coverRow)
    .map((row) => ({
      src: `${mediaBase}/${slug}/${row.cr0c0_ad}`,
      alt: row.cr0c0_altmetin ?? '',
    }));

  return {
    coverImage: coverRow ? `${mediaBase}/${slug}/${coverRow.cr0c0_ad}` : '/references/placeholder-cover.svg',
    coverAlt: coverRow?.cr0c0_altmetin ?? '',
    gallery,
  };
}

function toProject(
  row: ReferenceRow,
  facts: FactRow[],
  faqRows: FaqRow[],
  imageRows: ImageRow[],
  mediaBase: string,
): Project {
  const slug = row.cr0c0_slug ?? '';
  const clientTypeValue = row.cr0c0_musteritipi;

  return {
    id: row.cr0c0_webreferansid,
    title: row.cr0c0_ad,
    titleEn: row.cr0c0_basliken || undefined,
    slug,
    slugEn: row.cr0c0_slugen || undefined,
    client: row.cr0c0_musteri || undefined,
    location: row.cr0c0_lokasyon || undefined,
    categories: jobTypes(row),
    clientType:
      clientTypeValue == null
        ? undefined
        : keyFor(CLIENT_TYPE, clientTypeValue, formatted(row, 'cr0c0_musteritipi'), 'müşteri tipi'),
    publishDate: row.cr0c0_tarih ?? new Date().toISOString(),
    published: row.cr0c0_yayinda ?? false,
    sortOrder: row.cr0c0_sira,
    ...images(imageRows, slug, mediaBase),
    bodyTr: row.cr0c0_govdetr ?? '',
    bodyEn: row.cr0c0_govdeen || undefined,
    metaDescriptionTr: row.cr0c0_metatr || undefined,
    metaDescriptionEn: row.cr0c0_metaen || undefined,
    facts: facts
      .filter((f): f is FactRow & { cr0c0_ad: string } => Boolean(f.cr0c0_ad))
      .map<ProjectFact>((f) => ({ label: f.cr0c0_ad, value: f.cr0c0_deger ?? '' })),
    faq: faqRows
      .filter((f) => f.cr0c0_ad && f.cr0c0_cevaptr)
      .map<FaqItem>((f) => ({ question: f.cr0c0_ad!, answer: f.cr0c0_cevaptr! })),
    faqEn: faqRows
      .filter((f) => f.cr0c0_soruen && f.cr0c0_cevapen)
      .map<FaqItem>((f) => ({ question: f.cr0c0_soruen!, answer: f.cr0c0_cevapen! })),
  };
}

let cache: Promise<Project[]> | null = null;

/**
 * Published reference write-ups, read from Dataverse at build time.
 *
 * Every page that lists references calls this, so the result is memoised for
 * the length of the build — otherwise a 300-page build would re-read the same
 * four tables for each one.
 *
 * A read failure degrades to the committed sample data rather than taking the
 * whole build down, the same way getPartners() does.
 */
export async function getProjects(): Promise<Project[]> {
  if (cache) return cache;

  cache = (async () => {
    const client = getDataverseClient();
    const mediaBase = process.env.REFERENCE_MEDIA_BASE_URL ?? '/references';

    if (!client) {
      // Locally this is the documented way to build without credentials. In CI
      // it would quietly publish three placeholder write-ups over the real 22,
      // which is worse than a red build.
      if (process.env.CI) {
        throw new Error(
          'DATAVERSE_* ortam değişkenleri ayarlı değil. Site örnek veriyle yayına ' +
            'çıkmasın diye derleme durduruldu — GitHub Actions secrets kontrol edin.',
        );
      }
      return sampleProjects.filter((project) => project.published);
    }

    try {
      // Four flat reads rather than one $expand: an expanded collection pages
      // separately, and joining in memory is simpler than chasing those links.
      const [references, facts, faqRows, imageRows] = await Promise.all([
        client.list<ReferenceRow>(
          '/cr0c0_webreferanses?$select=cr0c0_ad,cr0c0_basliken,cr0c0_slug,cr0c0_slugen,' +
            'cr0c0_musteri,cr0c0_lokasyon,cr0c0_tarih,cr0c0_yayinda,cr0c0_sira,cr0c0_istipi,' +
            'cr0c0_musteritipi,cr0c0_govdetr,cr0c0_govdeen,cr0c0_metatr,cr0c0_metaen',
        ),
        client.list<FactRow>(
          '/cr0c0_webreferanskunyes?$select=cr0c0_ad,cr0c0_deger,cr0c0_sira,_cr0c0_referans_value',
        ),
        client.list<FaqRow>(
          '/cr0c0_webreferansssses?$select=cr0c0_ad,cr0c0_soruen,cr0c0_cevaptr,cr0c0_cevapen,' +
            'cr0c0_sira,_cr0c0_referans_value',
        ),
        client.list<ImageRow>(
          '/cr0c0_webreferansgorsels?$select=cr0c0_ad,cr0c0_altmetin,cr0c0_kapak,cr0c0_sira,' +
            '_cr0c0_referans_value',
        ),
      ]);

      const factsBy = groupByParent(facts);
      const faqBy = groupByParent(faqRows);
      const imagesBy = groupByParent(imageRows);

      return references
        .filter((row) => row.cr0c0_yayinda && row.cr0c0_slug)
        .map((row) =>
          toProject(
            row,
            factsBy.get(row.cr0c0_webreferansid) ?? [],
            faqBy.get(row.cr0c0_webreferansid) ?? [],
            imagesBy.get(row.cr0c0_webreferansid) ?? [],
            mediaBase,
          ),
        )
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    } catch (error) {
      // Unlike the partner logos, the committed fallback here is three
      // placeholders rather than an equivalent of the live data, so shipping
      // it would lose 22 write-ups. Local builds may degrade; CI may not.
      if (process.env.CI) throw error;
      console.error('[referanslar] Dataverse okunamadı, örnek veriye düşülüyor:', error);
      return sampleProjects.filter((project) => project.published);
    }
  })();

  return cache;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug || project.slugEn === slug);
}
