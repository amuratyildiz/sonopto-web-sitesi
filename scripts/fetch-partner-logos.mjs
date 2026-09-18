#!/usr/bin/env node
/**
 * Downloads partner logos from the "PartnerLogos" SharePoint document library
 * into public/partners/ before `astro build` runs, so the homepage logo strip
 * is served from our own origin instead of hot-linking SharePoint.
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
    await writeFile(path.join(outDir, file.name), buffer);
    console.log(`[fetch-partner-logos] downloaded ${file.name}`);
  }
}

main().catch((error) => {
  // Non-fatal: a transient Graph hiccup shouldn't take down the build. The
  // committed logos under public/partners/ stay in place.
  console.error('[fetch-partner-logos] failed:', error);
});
