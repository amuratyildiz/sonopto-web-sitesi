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

// TEMPORARY diagnostic: CI log output from this script isn't showing up, so
// write a status file we can fetch directly from the deployed site instead.
async function writeDebug(data) {
  await mkdir(path.resolve('public', 'references'), { recursive: true });
  await writeFile(path.resolve('public', 'references', '_debug.json'), JSON.stringify(data, null, 2));
}

if (!GRAPH_TENANT_ID || !GRAPH_CLIENT_ID || !GRAPH_CLIENT_SECRET || !GRAPH_MEDIA_DRIVE_ID) {
  console.log('[fetch-project-media] GRAPH_* env vars not set — skipping (using placeholder images).');
  await writeDebug({ branch: 'skipped-missing-env', hasTenant: Boolean(GRAPH_TENANT_ID), hasClientId: Boolean(GRAPH_CLIENT_ID), hasSecret: Boolean(GRAPH_CLIENT_SECRET), hasDriveId: Boolean(GRAPH_MEDIA_DRIVE_ID) });
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
  // annotation that Graph only includes on the full (unselected) response.
  const children = await client.api(`/drives/${GRAPH_MEDIA_DRIVE_ID}/root:/${slug}:/children`).get();

  const files = (children.value ?? []).filter((item) => item['@microsoft.graph.downloadUrl']);
  if (files.length === 0) return [];

  const targetDir = path.join(outDir, slug);
  await mkdir(targetDir, { recursive: true });

  for (const file of files) {
    const response = await fetch(file['@microsoft.graph.downloadUrl']);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(path.join(targetDir, file.name), buffer);
    console.log(`[fetch-project-media] downloaded ${slug}/${file.name}`);
  }
  return files.map((f) => f.name);
}

async function main() {
  const rootChildren = await client.api(`/drives/${GRAPH_MEDIA_DRIVE_ID}/root/children`).select('name,folder').get();
  const allItems = (rootChildren.value ?? []).map((item) => ({ name: item.name, isFolder: Boolean(item.folder) }));
  const folders = (rootChildren.value ?? []).filter((item) => item.folder).map((item) => item.name);

  const downloaded = [];
  for (const slug of folders) {
    const files = await downloadFolder(slug);
    downloaded.push({ slug, files });
  }

  await writeDebug({ branch: 'ran-main', driveId: GRAPH_MEDIA_DRIVE_ID, rootItems: allItems, folders, downloaded });
}

main().catch(async (error) => {
  console.error('[fetch-project-media] failed:', error);
  await writeDebug({ branch: 'error', message: error instanceof Error ? error.message : String(error), stack: error instanceof Error ? error.stack : undefined });
  process.exit(0); // don't fail the whole site build over a media-fetch diagnostic
});
