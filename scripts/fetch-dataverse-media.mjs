#!/usr/bin/env node
/**
 * Downloads the images Dataverse holds — reference photos into
 * public/references/<slug>/ and client logos into public/clients/ — before
 * `astro build` runs, so astro:assets can optimize them into the static
 * output.
 *
 * A reference photo's file name comes from the image row's "Ad" column, which
 * is also what src/lib/dataverse/projects.ts expects on disk: the row is the
 * one source of truth for both. Which photo is the cover comes from the
 * "Kapak mı" flag, not from the name. Logos have no name column, so they are
 * written as <record id>.<ext> and src/lib/dataverse/clients.ts matches them
 * back by that id.
 *
 * No-ops (exits 0) when DATAVERSE_* env vars are not set, so the build keeps
 * working from the committed sample data. See README.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ClientSecretCredential } from '@azure/identity';

const { DATAVERSE_URL, DATAVERSE_TENANT_ID, DATAVERSE_CLIENT_ID, DATAVERSE_CLIENT_SECRET } = process.env;

if (!DATAVERSE_URL || !DATAVERSE_TENANT_ID || !DATAVERSE_CLIENT_ID || !DATAVERSE_CLIENT_SECRET) {
  console.log('[dataverse-media] DATAVERSE_* ayarlı değil — atlanıyor (placeholder görseller kullanılacak).');
  process.exit(0);
}

const base = DATAVERSE_URL.replace(/\/$/, '');
const api = `${base}/api/data/v9.2`;
const credential = new ClientSecretCredential(DATAVERSE_TENANT_ID, DATAVERSE_CLIENT_ID, DATAVERSE_CLIENT_SECRET);

let cached = null;
async function token() {
  if (cached && cached.expiresOnTimestamp > Date.now() + 60_000) return cached.token;
  cached = await credential.getToken(`${base}/.default`);
  if (!cached) throw new Error('Dataverse access token alınamadı.');
  return cached.token;
}

async function list(query) {
  const rows = [];
  let next = `${api}${query}`;
  while (next) {
    const res = await fetch(next, {
      headers: { Authorization: `Bearer ${await token()}`, Accept: 'application/json' },
    });
    if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 200)}`);
    const page = await res.json();
    rows.push(...(page.value ?? []));
    next = page['@odata.nextLink'] ?? null;
  }
  return rows;
}

const EXTENSION = { ffd8: '.jpg', '8950': '.png', 4749: '.gif' };

/**
 * Reads an image column. Without ?size=full Dataverse serves the 144px
 * thumbnail it keeps alongside the real image, and a JSON Accept header
 * returns nothing at all — both produce a file the page cannot use.
 */
async function image(entitySet, id, column) {
  const res = await fetch(`${api}/${entitySet}(${id})/${column}/$value?size=full`, {
    headers: { Authorization: `Bearer ${await token()}`, Accept: 'application/octet-stream' },
  });
  const buffer = Buffer.from(await res.arrayBuffer());
  const kind = EXTENSION[buffer.subarray(0, 2).toString('hex')];
  if (!res.ok || !kind) return { error: `${res.status}, ${buffer.length} bayt` };
  return { buffer, extension: kind };
}

async function referencePhotos() {
  const references = await list('/cr0c0_webreferanses?$select=cr0c0_slug,cr0c0_yayinda');
  const slugs = new Map(
    references.filter((r) => r.cr0c0_yayinda && r.cr0c0_slug).map((r) => [r.cr0c0_webreferansid, r.cr0c0_slug]),
  );

  const rows = await list(
    '/cr0c0_webreferansgorsels?$select=cr0c0_ad,cr0c0_sira,_cr0c0_referans_value&$orderby=cr0c0_sira asc',
  );

  let saved = 0;
  const skipped = [];
  for (const row of rows) {
    const slug = slugs.get(row._cr0c0_referans_value);
    if (!slug || !row.cr0c0_ad) continue;

    const result = await image('cr0c0_webreferansgorsels', row.cr0c0_webreferansgorselid, 'cr0c0_gorsel');
    if (result.error) {
      skipped.push(`${slug}/${row.cr0c0_ad} (${result.error})`);
      continue;
    }
    const dir = path.resolve('public', 'references', slug);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, row.cr0c0_ad), result.buffer);
    saved += 1;
  }
  return { saved, total: rows.length, skipped, label: 'referans fotoğrafı' };
}

async function clientLogos() {
  const rows = await list('/cr0c0_webmusteris?$select=cr0c0_ad,cr0c0_yayinda&$filter=cr0c0_yayinda eq true');

  let saved = 0;
  const skipped = [];
  for (const row of rows) {
    const result = await image('cr0c0_webmusteris', row.cr0c0_webmusteriid, 'cr0c0_logo');
    if (result.error) {
      // A client row with no logo yet is the normal case, not a failure:
      // the strip simply leaves it out until someone uploads one.
      skipped.push(`${row.cr0c0_ad} (${result.error})`);
      continue;
    }
    const dir = path.resolve('public', 'clients');
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, `${row.cr0c0_webmusteriid}${result.extension}`), result.buffer);
    saved += 1;
  }
  return { saved, total: rows.length, skipped, label: 'müşteri logosu' };
}

async function main() {
  for (const run of [referencePhotos, clientLogos]) {
    const { saved, total, skipped, label } = await run();
    console.log(`[dataverse-media] ${saved}/${total} ${label} indirildi.`);
    if (skipped.length) {
      console.warn(`[dataverse-media] ${label} atlanan ${skipped.length}: ${skipped.slice(0, 10).join(', ')}`);
    }
  }
}

main().catch((error) => {
  // Non-fatal: a transient Dataverse hiccup shouldn't take down the whole
  // build. Pages fall back to the placeholder cover when photos are missing,
  // and the logo strip disappears rather than rendering broken images.
  console.error('[dataverse-media] başarısız:', error);
});
