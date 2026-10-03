#!/usr/bin/env node
/**
 * Downloads reference photos from Dataverse into public/references/<slug>/
 * before `astro build` runs, so astro:assets can optimize them into the
 * static output.
 *
 * The file name comes from the image row's "Ad" column, which is also what
 * src/lib/dataverse/projects.ts expects on disk — the two have to agree, and
 * the row is the one source of truth for both. Which photo is the cover comes
 * from the "Kapak mı" flag, not from the name.
 *
 * No-ops (exits 0) when DATAVERSE_* env vars are not set, so the build keeps
 * working from the committed sample data. See README.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ClientSecretCredential } from '@azure/identity';

const { DATAVERSE_URL, DATAVERSE_TENANT_ID, DATAVERSE_CLIENT_ID, DATAVERSE_CLIENT_SECRET } = process.env;

if (!DATAVERSE_URL || !DATAVERSE_TENANT_ID || !DATAVERSE_CLIENT_ID || !DATAVERSE_CLIENT_SECRET) {
  console.log('[fetch-project-media] DATAVERSE_* ayarlı değil — atlanıyor (placeholder görseller kullanılacak).');
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

const outDir = path.resolve('public', 'references');

async function main() {
  const references = await list('/cr0c0_webreferanses?$select=cr0c0_slug,cr0c0_yayinda');
  const slugs = new Map(
    references.filter((r) => r.cr0c0_yayinda && r.cr0c0_slug).map((r) => [r.cr0c0_webreferansid, r.cr0c0_slug]),
  );

  const images = await list(
    '/cr0c0_webreferansgorsels?$select=cr0c0_ad,cr0c0_sira,_cr0c0_referans_value&$orderby=cr0c0_sira asc',
  );

  let saved = 0;
  const skipped = [];

  for (const image of images) {
    const slug = slugs.get(image._cr0c0_referans_value);
    if (!slug || !image.cr0c0_ad) continue;

    // Without ?size=full Dataverse serves the 144px thumbnail it keeps
    // alongside the real photo, and the JSON Accept header returns nothing
    // at all — both produce a file the page cannot use.
    const res = await fetch(
      `${api}/cr0c0_webreferansgorsels(${image.cr0c0_webreferansgorselid})/cr0c0_gorsel/$value?size=full`,
      {
        headers: { Authorization: `Bearer ${await token()}`, Accept: 'application/octet-stream' },
      },
    );
    const buffer = Buffer.from(await res.arrayBuffer());
    const magic = buffer.subarray(0, 4).toString('hex');
    if (!res.ok || !(magic.startsWith('ffd8') || magic.startsWith('89504e47') || magic.startsWith('47494638'))) {
      skipped.push(`${slug}/${image.cr0c0_ad} (${res.status}, ${buffer.length} bayt)`);
      continue;
    }

    const targetDir = path.join(outDir, slug);
    await mkdir(targetDir, { recursive: true });
    await writeFile(path.join(targetDir, image.cr0c0_ad), buffer);
    saved += 1;
  }

  console.log(`[fetch-project-media] ${saved}/${images.length} görsel indirildi.`);
  if (skipped.length) {
    console.warn(`[fetch-project-media] atlanan ${skipped.length}: ${skipped.slice(0, 10).join(', ')}`);
  }
}

main().catch((error) => {
  // Non-fatal: a transient Dataverse hiccup shouldn't take down the whole
  // build. Pages fall back to the placeholder cover when photos are missing.
  console.error('[fetch-project-media] başarısız:', error);
});
