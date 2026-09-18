#!/usr/bin/env node
/**
 * One-time provisioning script: creates the "Partners" SharePoint list and the
 * "PartnerLogos" document library in the sonopto-web-sitesi SharePoint site,
 * so the homepage brand strip becomes editable without a code change.
 *
 * Run locally (never commit real secrets):
 *   GRAPH_TENANT_ID=... GRAPH_CLIENT_ID=... GRAPH_CLIENT_SECRET=... node scripts/provision-partners-list.mjs
 *
 * Requires the app registration to already have Sites.ReadWrite.All
 * (application permission, admin-consented) — see README. A delegated `az rest`
 * token is not enough: the Azure CLI's own Graph scopes do not cover list
 * creation and the call comes back 403 accessDenied.
 */
import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';

const SITE_ID = 'sonopto.sharepoint.com,d5ade59e-5289-4115-8e3e-8597fda8bb40,05d6386a-de3f-4c90-abe5-e0c43865c226';

const { GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET } = process.env;
if (!GRAPH_TENANT_ID || !GRAPH_CLIENT_ID || !GRAPH_CLIENT_SECRET) {
  console.error('GRAPH_TENANT_ID, GRAPH_CLIENT_ID and GRAPH_CLIENT_SECRET must be set as environment variables.');
  process.exit(1);
}

const credential = new ClientSecretCredential(GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET);
const client = Client.initWithMiddleware({
  authProvider: {
    getAccessToken: async () => (await credential.getToken('https://graph.microsoft.com/.default')).token,
  },
});

const partnersList = {
  displayName: 'Partners',
  description: 'Ana sayfada gosterilen marka/partner logolari',
  list: { template: 'genericList' },
  columns: [
    // Title (built-in) holds the brand name, e.g. "Audio-Technica".
    { name: 'LogoFile', text: { allowMultipleLines: false } },
    { name: 'AltText', text: { allowMultipleLines: false } },
    { name: 'Website', text: { allowMultipleLines: false } },
    { name: 'SortOrder', number: { decimalPlaces: 'none' } },
    // Defaults to true: unlike Projects there is no draft stage for a logo,
    // so a newly added row should appear on the next build without a toggle.
    { name: 'Published', boolean: {}, defaultValue: { value: '1' } },
  ],
};

const partnerLogosLibrary = {
  displayName: 'PartnerLogos',
  description: 'Partner logo dosyalari - Partners listesindeki LogoFile alani buradaki dosya adina karsilik gelir',
  list: { template: 'documentLibrary' },
};

async function main() {
  console.log('Creating "Partners" list...');
  const list = await client.api(`/sites/${SITE_ID}/lists`).post(partnersList);
  console.log('  -> created, list id:', list.id);

  console.log('Creating "PartnerLogos" document library...');
  const library = await client.api(`/sites/${SITE_ID}/lists`).post(partnerLogosLibrary);
  console.log('  -> created, list id:', library.id);

  const drive = await client.api(`/sites/${SITE_ID}/lists/${library.id}/drive`).get();
  console.log('  -> drive id (GRAPH_PARTNER_LOGOS_DRIVE_ID):', drive.id);

  console.log('\nDone. Save these as GitHub repository secrets:');
  console.log('  GRAPH_PARTNERS_LIST_ID        =', list.id);
  console.log('  GRAPH_PARTNER_LOGOS_DRIVE_ID  =', drive.id);
}

main().catch((error) => {
  console.error('Failed:', error.message ?? error);
  process.exit(1);
});
