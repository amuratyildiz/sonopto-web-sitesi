#!/usr/bin/env node
/**
 * Downloads project photos from the "ProjectMedia" SharePoint document
 * library into public/references/<slug>/ before `astro build` runs, so
 * astro:assets can optimize them into the static output.
 *
 * No-ops (exits 0) when GRAPH_* env vars are not set, so the build keeps
 * working before the M365 side has been provisioned. See README.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';

const { GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET, GRAPH_MEDIA_DRIVE_ID } = process.env;

if (!GRAPH_TENANT_ID || !GRAPH_CLIENT_ID || !GRAPH_CLIENT_SECRET || !GRAPH_MEDIA_DRIVE_ID) {
  console.log('[fetch-project-media] GRAPH_* env vars not set — skipping (using placeholder images).');
  process.exit(0);
}

const credential = new ClientSecretCredential(GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET);
const client = Client.initWithMiddleware({
  authProvider: {
    getAccessToken: async () => {
      const token = await credential.getToken('https://graph.microsoft.com/.default');
      return token.token;
    },
  },
});

const outDir = path.resolve('public', 'references');

async function downloadFolder(slug) {
  // No .select() here: @microsoft.graph.downloadUrl is an instance
  // annotation that Graph only includes on the full (unselected) response —
  // an explicit $select silently drops it and every file gets skipped.
  const children = await client.api(`/drives/${GRAPH_MEDIA_DRIVE_ID}/root:/${slug}:/children`).get();

  const files = (children.value ?? []).filter((item) => item['@microsoft.graph.downloadUrl']);
  if (files.length === 0) return;

  const targetDir = path.join(outDir, slug);
  await mkdir(targetDir, { recursive: true });

  for (const file of files) {
    const response = await fetch(file['@microsoft.graph.downloadUrl']);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(path.join(targetDir, file.name), buffer);
    console.log(`[fetch-project-media] downloaded ${slug}/${file.name}`);
  }
}

async function main() {
  const rootChildren = await client.api(`/drives/${GRAPH_MEDIA_DRIVE_ID}/root/children`).select('name,folder').get();
  const folders = (rootChildren.value ?? []).filter((item) => item.folder).map((item) => item.name);

  for (const slug of folders) {
    await downloadFolder(slug);
  }
}

main().catch((error) => {
  // Non-fatal: a transient Graph hiccup shouldn't take down the whole site
  // build. Pages fall back to the placeholder cover when photos are missing.
  console.error('[fetch-project-media] failed:', error);
});
