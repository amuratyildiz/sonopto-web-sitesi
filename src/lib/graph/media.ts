import type { Client } from '@microsoft/microsoft-graph-client';

export interface DriveChildFile {
  name: string;
  downloadUrl: string;
}

/**
 * Lists the files directly inside a folder of the "ProjectMedia" document
 * library (one folder per project, named after its Slug — see README).
 * Used by scripts/fetch-project-media.mjs ahead of `astro build`, not from
 * page components: Graph binary downloads should happen once at build
 * time, not per request.
 */
export async function listProjectMediaFiles(client: Client, driveId: string, folderPath: string): Promise<DriveChildFile[]> {
  const response = await client
    .api(`/drives/${driveId}/root:/${folderPath}:/children`)
    .select('name,@microsoft.graph.downloadUrl')
    .get();

  const items = (response.value ?? []) as Array<{ name: string; '@microsoft.graph.downloadUrl'?: string }>;

  return items
    .filter((item) => Boolean(item['@microsoft.graph.downloadUrl']))
    .map((item) => ({ name: item.name, downloadUrl: item['@microsoft.graph.downloadUrl'] as string }));
}
