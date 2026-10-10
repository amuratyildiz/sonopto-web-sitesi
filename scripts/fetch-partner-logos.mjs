#!/usr/bin/env node
/**
 * Downloads partner logos from the "PartnerLogos" SharePoint document library
 * into public/partners/ before `astro build` runs, so the homepage logo strip
 * is served from our own origin instead of hot-linking SharePoint.
 *
 * The file's extension is decided by its own bytes, never by the name the
 * library reports, and the name is reduced to a bare stem before use. It used
 * to be written verbatim: `writeFile(path.join(outDir, file.name))` put an
 * externally-authored name straight into public/partners/, which is tracked in
 * git and served from the web root. A file named x.js therefore became
 * https://<site>/partners/x.js — an allowed source under the site's
 * `script-src 'self'`, needing no polyglot trick at all. "../" in the name
 * would likewise have escaped the directory.
 *
 * No-ops (exits 0) when GRAPH_* env vars are not set, so the build keeps
 * working from the committed fallback logos. See README.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';

const { GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET, GRAPH_PARTNER_LOGOS_DRIVE_ID } = process.env;

if (!GRAPH_TENANT_ID || !GRAPH_CLIENT_ID || !GRAPH_CLIENT_SECRET || !GRAPH_PARTNER_LOGOS_DRIVE_ID) {
  console.log('[fetch-partner-logos] GRAPH_* env vars not set — skipping (using committed logos).');
  process.exit(0);
}

const credential = new ClientSecretCredential(GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET);
const client = Client.initWithMiddleware({
  authProvider: {
    getAccessToken: async () => (await credential.getToken('https://graph.microsoft.com/.default')).token,
  },
});

const outDir = path.resolve('public', 'partners');

/**
 * The image types this script will write, recognised by their own bytes.
 * SVG is deliberately absent: it can carry script.
 */
const TYPES = [
  {
    extension: '.webp',
    matches: (b) => b.length > 12 && b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP',
  },
  { extension: '.png', matches: (b) => b.toString('hex', 0, 8) === '89504e470d0a1a0a' },
  { extension: '.jpg', matches: (b) => b.toString('hex', 0, 2) === 'ffd8' },
  { extension: '.gif', matches: (b) => b.toString('ascii', 0, 3) === 'GIF' },
];

/**
 * The reported name reduced to a stem, with the extension the bytes actually
 * say. The stem stays author-controlled on purpose — a new logo should still
 * arrive without a code change — but a stem cannot make a file executable;
 * only the extension decides how it is served.
 *
 * Returns null when nothing usable is left.
 */
function safeName(reported, extension) {
  // Split on both separators: path.basename does not treat "\" as one on Linux,
  // where this runs in CI.
  const base = String(reported ?? '').split(/[\\/]/).pop() ?? '';
  const stem = base
    .slice(0, base.length - path.extname(base).length)
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/^[.\-]+/, '');
  return stem ? `${stem}${extension}` : null;
}

async function main() {
  // No .select() here: @microsoft.graph.downloadUrl is an instance annotation
  // that Graph only includes on the full response — an explicit $select
  // silently drops it and every file gets skipped.
  const children = await client.api(`/drives/${GRAPH_PARTNER_LOGOS_DRIVE_ID}/root/children`).get();
  const files = (children.value ?? []).filter((item) => item['@microsoft.graph.downloadUrl']);

  if (files.length === 0) {
    console.log('[fetch-partner-logos] library is empty — keeping committed logos.');
    return;
  }

  await mkdir(outDir, { recursive: true });

  for (const file of files) {
    const response = await fetch(file['@microsoft.graph.downloadUrl']);
    const buffer = Buffer.from(await response.arrayBuffer());

    const type = TYPES.find((candidate) => candidate.matches(buffer));
    if (!type) {
      console.warn(`[fetch-partner-logos] not a recognised image, skipped: ${file.name}`);
      continue;
    }
    const name = safeName(file.name, type.extension);
    if (!name) {
      console.warn(`[fetch-partner-logos] unusable name, skipped: ${file.name}`);
      continue;
    }

    await writeFile(path.join(outDir, name), buffer);
    console.log(
      `[fetch-partner-logos] downloaded ${name}${name === file.name ? '' : ` (library name: ${file.name})`}`,
    );
  }
}

main().catch((error) => {
  // Non-fatal: a transient Graph hiccup shouldn't take down the build. The
  // committed logos under public/partners/ stay in place.
  console.error('[fetch-partner-logos] failed:', error);
});
