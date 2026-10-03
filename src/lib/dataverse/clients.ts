import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { getDataverseClient } from './client';
import { getProjects } from './projects';

export interface Client {
  id: string;
  name: string;
  logo: string;
  /** The case study the logo links to, when one is attached. */
  slug?: string;
  slugEn?: string;
}

interface ClientRow {
  cr0c0_webmusteriid: string;
  cr0c0_ad?: string;
  cr0c0_sira?: number;
  _cr0c0_referans_value?: string;
}

/**
 * Logos downloaded by the prebuild step, indexed by the record id the file is
 * named after. Read once: the strip asks about every client, and hitting the
 * disk per row for a handful of files is wasteful either way.
 */
function logoFiles(): Map<string, string> {
  const dir = path.resolve('public', 'clients');
  if (!existsSync(dir)) return new Map();
  const out = new Map<string, string>();
  for (const file of readdirSync(dir)) {
    const id = file.replace(/\.[^.]+$/, '');
    out.set(id, file);
  }
  return out;
}

/**
 * Named clients for the homepage logo strip.
 *
 * A row with no logo on disk is left out rather than rendered as a gap: the
 * section is data-driven on purpose, because several of these logos still
 * need permission to use and the strip should simply not mention a client
 * until one is uploaded.
 *
 * Never throws. Unlike the write-ups, an empty strip is a legitimate state —
 * it is what the homepage looked like before this existed — so a Dataverse
 * hiccup here hides a section rather than failing the build.
 */
export async function getClients(): Promise<Client[]> {
  const client = getDataverseClient();
  if (!client) return [];

  try {
    const [rows, projects] = await Promise.all([
      client.list<ClientRow>(
        '/cr0c0_webmusteris?$select=cr0c0_ad,cr0c0_sira,_cr0c0_referans_value' +
          '&$filter=cr0c0_yayinda eq true&$orderby=cr0c0_sira asc',
      ),
      getProjects(),
    ]);

    const byId = new Map(projects.map((project) => [project.id, project]));
    const logos = logoFiles();

    return rows.flatMap((row) => {
      const file = logos.get(row.cr0c0_webmusteriid);
      if (!file || !row.cr0c0_ad) return [];
      const project = row._cr0c0_referans_value ? byId.get(row._cr0c0_referans_value) : undefined;
      return [
        {
          id: row.cr0c0_webmusteriid,
          name: row.cr0c0_ad,
          logo: `/clients/${file}`,
          slug: project?.slug,
          slugEn: project?.slugEn,
        },
      ];
    });
  } catch (error) {
    console.error('[musteriler] Dataverse okunamadı, logo şeridi gizleniyor:', error);
    return [];
  }
}
