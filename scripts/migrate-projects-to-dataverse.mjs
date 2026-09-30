#!/usr/bin/env node
/**
 * One-time migration: SharePoint "Projects" list -> Dataverse Web Referansı.
 *
 * The SharePoint list is left untouched and keeps working until the site is
 * switched over; this script only writes, never deletes, and refuses to run
 * twice against the same record (it matches on Slug).
 *
 * What it unpacks along the way:
 *   ProjectFacts / FaqItems  hand-written JSON -> real child rows
 *   Category                 one choice        -> multi-select İş Tipi
 *   (new)                    Müşteri Tipi guessed from the title, for review
 *   ProjectMedia/<slug>/     files             -> image rows, cover flagged
 *
 * Runs in two passes so it survives being run with either identity:
 *   --skip-media  text, facts and FAQ only (a delegated user token is enough)
 *   (default)     also uploads photos, which needs the service principal —
 *                 SharePoint refuses a download link presented with an Azure
 *                 CLI user token and hands back a sign-in page instead.
 * A second run adds photos to records that already exist without any.
 *
 *   node scripts/migrate-projects-to-dataverse.mjs [--dry] [--skip-media] [--only <slug>]
 */
import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import { execFileSync } from 'node:child_process';

const DV = process.env.DATAVERSE_URL;
const API = `${DV}/api/data/v9.2`;
const DRY = process.argv.includes('--dry');
const SKIP_MEDIA = process.argv.includes('--skip-media');
// indexOf returns -1 when the flag is absent, and argv[0] is node's own
// path — which would filter every record out rather than none.
const onlyAt = process.argv.indexOf('--only');
const ONLY = onlyAt === -1 ? null : process.argv[onlyAt + 1];

for (const key of ['DATAVERSE_URL', 'GRAPH_SITE_ID', 'GRAPH_PROJECTS_LIST_ID', 'GRAPH_MEDIA_DRIVE_ID']) {
  if (!process.env[key]) {
    console.error(`eksik ortam degiskeni: ${key}`);
    process.exit(1);
  }
}

/**
 * Either identity works. The service principal is what CI uses; the signed-in
 * Azure CLI user is what you have to hand for a one-off local run, and this is
 * a one-off script. Falling back rather than failing keeps it runnable without
 * copying the client secret onto a laptop.
 */
function azToken(resource) {
  const out = execFileSync('az', ['account', 'get-access-token', '--resource', resource, '-o', 'json'],
    { encoding: 'utf8', shell: true });
  return JSON.parse(out).accessToken;
}

const spn = (tenant, client, secret) =>
  process.env[tenant] && process.env[client] && process.env[secret]
    ? new ClientSecretCredential(process.env[tenant], process.env[client], process.env[secret])
    : null;

/** Option values follow the order the columns were created in. */
const IS_TIPI = ['LED Ekran', 'LED Video Wall', 'LCD Videowall', 'Konferans Sistemleri',
  'Ses Sistemleri', 'Sahne Işık', 'Dijital Tabela', 'Bakım ve Onarım'];
const MUSTERI_TIPI = ['Kamu', 'Finans', 'Sağlık', 'Eğitim', 'Teknoloji', 'Perakende', 'STK', 'Sanayi'];
const value = (list, name) => {
  const i = list.indexOf(name);
  return i < 0 ? null : 100000000 + i;
};

/**
 * A first pass at the client sector, from words already in the title. It is a
 * starting point for review, not an answer: every migrated record gets one and
 * the report lists them so they can be corrected in the app.
 */
function guessMusteriTipi(text) {
  const t = text.toLocaleLowerCase('tr');
  if (/hastane|memorial|sağlık/.test(t)) return 'Sağlık';
  if (/üniversite|okul|eğitim/.test(t)) return 'Eğitim';
  if (/finans|banka/.test(t)) return 'Finans';
  if (/kızılay|vakıf|dernek/.test(t)) return 'STK';
  // Named institutions are checked before sector words on purpose: KOSGEB is a
  // public body whose full name contains "Teknoloji Geliştirme Merkezi", and
  // the sector word would otherwise win.
  if (/kamu|bakanlı|kosgeb|hakimevi|belediye|kurumu/.test(t)) return 'Kamu';
  if (/teknoloji|deneyim merkezi/.test(t)) return 'Teknoloji';
  if (/showroom|mobilya|fuar|mağaza|perakende/.test(t)) return 'Perakende';
  return null;
}

/** The SharePoint Category values map onto the new multi-select one for one. */
function mapIsTipi(category, title) {
  const out = new Set();
  if (category && IS_TIPI.includes(category)) out.add(category);
  // "LED Video Wall" was used for LCD walls too; the title is the better signal.
  if (/lcd videowall/i.test(title)) {
    out.delete('LED Video Wall');
    out.add('LCD Videowall');
  }
  if (/onarım|bakım/i.test(title)) out.add('Bakım ve Onarım');
  return [...out];
}

const graphCredential = spn('GRAPH_TENANT_ID', 'GRAPH_CLIENT_ID', 'GRAPH_CLIENT_SECRET');
const graph = Client.initWithMiddleware({
  authProvider: {
    getAccessToken: async () =>
      graphCredential
        ? (await graphCredential.getToken('https://graph.microsoft.com/.default')).token
        : azToken('https://graph.microsoft.com'),
  },
});

const dvCredential = spn('DATAVERSE_TENANT_ID', 'DATAVERSE_CLIENT_ID', 'DATAVERSE_CLIENT_SECRET');
let dvToken = null;
async function dv(method, path, body) {
  dvToken ??= dvCredential ? (await dvCredential.getToken(`${DV}/.default`)).token : azToken(DV);
  const res = await fetch(path.startsWith('http') ? path : API + path, {
    method,
    headers: {
      Authorization: `Bearer ${dvToken}`,
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      'OData-MaxVersion': '4.0',
      'OData-Version': '4.0',
      Prefer: 'return=representation',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status} ${(await res.text()).slice(0, 300)}`);
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

function safeJson(raw, fallback) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return null; // distinct from "empty": the report needs to flag it
  }
}

/** Uploads a project's photos as image rows. Returns how many went up. */
async function addMedia(slug, referansId) {
  const files = await mediaFiles(slug);
  for (const [i, file] of files.entries()) {
    const res = await fetch(file['@microsoft.graph.downloadUrl']);
    const bytes = Buffer.from(await res.arrayBuffer());
    // SharePoint answers an unauthorised download with an HTML sign-in page,
    // which would otherwise be stored as if it were the photo.
    if (!res.ok || bytes.length === 0) {
      throw new Error(`${slug}/${file.name}: indirilemedi (${res.status}, ${bytes.length} bayt)`);
    }
    await dv('POST', '/cr0c0_webreferansgorsels', {
      cr0c0_ad: file.name,
      cr0c0_gorsel: bytes.toString('base64'),
      cr0c0_kapak: /^cover\./i.test(file.name),
      cr0c0_sira: i,
      'cr0c0_referans@odata.bind': `/cr0c0_webreferanses(${referansId})`,
    });
  }
  return files.length;
}

async function mediaFiles(slug) {
  try {
    const children = await graph.api(`/drives/${process.env.GRAPH_MEDIA_DRIVE_ID}/root:/${slug}:/children`).get();
    return (children.value ?? []).filter((f) => f['@microsoft.graph.downloadUrl']);
  } catch {
    return [];
  }
}

async function main() {
  const list = await graph
    .api(`/sites/${process.env.GRAPH_SITE_ID}/lists/${process.env.GRAPH_PROJECTS_LIST_ID}/items`)
    .expand('fields').top(200).get();

  let items = (list.value ?? []).map((i) => i.fields).filter((f) => f.Slug);
  if (ONLY) items = items.filter((f) => f.Slug === ONLY);
  items.sort((a, b) => (a.SortOrder ?? 0) - (b.SortOrder ?? 0));

  const report = { created: 0, skipped: 0, mediaOnly: 0, badJson: [], guessed: [], noMedia: [] };

  for (const f of items) {
    const existing = await dv('GET', `/cr0c0_webreferanses?$select=cr0c0_webreferansid&$filter=cr0c0_slug eq '${f.Slug}'`);
    if (existing.value.length) {
      // Already migrated. The one thing that may still be missing is the
      // photos, if the first pass ran with --skip-media.
      const id = existing.value[0].cr0c0_webreferansid;
      const shots = await dv('GET', `/cr0c0_webreferansgorsels?$select=cr0c0_webreferansgorselid&$filter=_cr0c0_referans_value eq ${id}`);
      if (SKIP_MEDIA || shots.value.length) {
        report.skipped += 1;
        continue;
      }
      const added = await addMedia(f.Slug, id);
      if (added === 0) report.noMedia.push(f.Slug);
      report.mediaOnly += 1;
      console.log(`${f.Slug}: ${added} gorsel eklendi`);
      continue;
    }

    const facts = safeJson(f.ProjectFacts, []);
    const faq = safeJson(f.FaqItems, []);
    if (facts === null) report.badJson.push(`${f.Slug} (ProjectFacts)`);
    if (faq === null) report.badJson.push(`${f.Slug} (FaqItems)`);

    const musteriTipi = guessMusteriTipi(`${f.Title} ${f.Client ?? ''}`);
    if (musteriTipi) report.guessed.push(`${f.Slug} -> ${musteriTipi}`);

    const record = {
      cr0c0_ad: f.Title,
      cr0c0_basliken: f.TitleEN ?? null,
      cr0c0_slug: f.Slug,
      cr0c0_slugen: f.SlugEN ?? null,
      cr0c0_musteri: f.Client ?? null,
      cr0c0_lokasyon: f.Location ?? null,
      cr0c0_tarih: f.PublishDate ? f.PublishDate.slice(0, 10) : null,
      cr0c0_yayinda: f.Published ?? false,
      cr0c0_sira: f.SortOrder ?? 0,
      cr0c0_govdetr: f.BodyTR ?? null,
      cr0c0_govdeen: f.BodyEN ?? null,
      cr0c0_metatr: f.MetaDescriptionTR ?? null,
      cr0c0_metaen: f.MetaDescriptionEN ?? null,
      cr0c0_istipi: mapIsTipi(f.Category, f.Title).map((n) => value(IS_TIPI, n)).filter(Boolean).join(','),
      cr0c0_musteritipi: musteriTipi ? value(MUSTERI_TIPI, musteriTipi) : null,
    };

    if (DRY) {
      console.log(`[kuru] ${f.Slug}  is=${record.cr0c0_istipi}  musteri=${musteriTipi ?? '-'}  kunye=${facts?.length ?? '?'}  sss=${faq?.length ?? '?'}`);
      continue;
    }

    const created = await dv('POST', '/cr0c0_webreferanses', record);
    const id = created.cr0c0_webreferansid;
    const bind = { 'cr0c0_referans@odata.bind': `/cr0c0_webreferanses(${id})` };

    // If any child row fails the parent goes with it. Otherwise a half-written
    // record would sit there looking complete, and the rerun would skip it
    // because the skip check matches on slug.
    let shots = 0;
    try {
      for (const [i, fact] of (facts ?? []).entries()) {
        await dv('POST', '/cr0c0_webreferanskunyes', { cr0c0_ad: fact.label, cr0c0_deger: fact.value, cr0c0_sira: i, ...bind });
      }
      for (const [i, q] of (faq ?? []).entries()) {
        await dv('POST', '/cr0c0_webreferansssses', { cr0c0_ad: q.question, cr0c0_cevaptr: q.answer, cr0c0_sira: i, ...bind });
      }
      if (!SKIP_MEDIA) {
        shots = await addMedia(f.Slug, id);
        if (shots === 0) report.noMedia.push(f.Slug);
      }
    } catch (e) {
      await dv('DELETE', `/cr0c0_webreferanses(${id})`);
      throw new Error(`${f.Slug}: ${e.message} (kayit geri alindi)`);
    }

    report.created += 1;
    console.log(`${f.Slug}: kunye ${facts?.length ?? 0}, sss ${faq?.length ?? 0}, gorsel ${shots}`);
  }

  console.log('\n---');
  console.log(`olusturulan ${report.created}, gorsel eklenen ${report.mediaOnly}, zaten var ${report.skipped}`);
  if (report.badJson.length) console.log('BOZUK JSON:', report.badJson.join(', '));
  if (report.noMedia.length) console.log('gorseli olmayan:', report.noMedia.join(', '));
  console.log('\nMusteri tipi tahmin edildi — uygulamadan gozden gecirin:');
  for (const g of report.guessed) console.log('  ' + g);
}

main().catch((e) => {
  console.error('\ngoc basarisiz:', e.message);
  process.exit(1);
});
