import { existsSync } from 'node:fs';
import path from 'node:path';
import { getGraphClient } from './graphClient';
import { partners as fallbackPartners, type Partner } from '../../data/partners';

interface PartnerListItemFields {
  Title: string;
  LogoFile?: string;
  AltText?: string;
  Website?: string;
  SortOrder?: number;
  Published?: boolean;
}

/**
 * Fetches the partner/brand logo strip from the "Partners" SharePoint list at
 * build time. Logo files themselves are downloaded into public/partners/ by
 * scripts/fetch-partner-logos.mjs (prebuild step); a row whose file never made
 * it there is dropped rather than rendered as a broken image.
 *
 * Falls back to src/data/partners.ts when Graph is not configured.
 */
export async function getPartners(): Promise<Partner[]> {
  const client = getGraphClient();
  const siteId = process.env.GRAPH_SITE_ID;
  const listId = process.env.GRAPH_PARTNERS_LIST_ID;

  if (!client || !siteId || !listId) {
    return fallbackPartners;
  }

  // Unlike projects, the committed fallback here is a complete equivalent of
  // the live data, so a transient Graph failure should degrade to it rather
  // than take down the whole build.
  let items: Array<{ id: string; fields: PartnerListItemFields }>;
  try {
    const response = await client
      .api(`/sites/${siteId}/lists/${listId}/items`)
      .expand('fields')
      .top(100)
      .get();
    items = (response.value ?? []) as Array<{ id: string; fields: PartnerListItemFields }>;
  } catch (error) {
    console.error('[partners] SharePoint read failed, using committed logos:', error);
    return fallbackPartners;
  }

  return items
    .filter((item) => item.fields.Published !== false && item.fields.LogoFile)
    .filter((item) => existsSync(path.resolve('public', 'partners', item.fields.LogoFile!)))
    .sort((a, b) => (a.fields.SortOrder ?? 0) - (b.fields.SortOrder ?? 0))
    .map((item) => ({
      name: item.fields.Title,
      logo: `/partners/${item.fields.LogoFile}`,
      alt: item.fields.AltText ?? `${item.fields.Title} logosu`,
      website: item.fields.Website,
    }));
}
