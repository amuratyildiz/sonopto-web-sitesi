#!/usr/bin/env node
/**
 * One-time provisioning script: creates the "Projects" SharePoint list and
 * "ProjectMedia" document library in the sonopto-web-sitesi SharePoint site,
 * with the full column schema from PLAN.md.
 *
 * Run locally (never commit real secrets):
 *   GRAPH_TENANT_ID=... GRAPH_CLIENT_ID=... GRAPH_CLIENT_SECRET=... node scripts/provision-sharepoint-list.mjs
 *
 * Requires the app registration to already have Sites.ReadWrite.All
 * (application permission, admin-consented) — see README.
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

const projectsList = {
  displayName: 'Projects',
  description: 'Referans/proje icerikleri - sonopto-web-sitesi',
  columns: [
    { name: 'TitleEN', text: { allowMultipleLines: false } },
    { name: 'Slug', text: { allowMultipleLines: false } },
    { name: 'SlugEN', text: { allowMultipleLines: false } },
    {
      name: 'ContentType',
      choice: { choices: ['Project', 'News'], displayAs: 'dropDownMenu' },
      defaultValue: { value: 'Project' },
    },
    { name: 'Client', text: { allowMultipleLines: false } },
    { name: 'Location', text: { allowMultipleLines: false } },
    {
      name: 'Category',
      choice: {
        choices: ['LED Video Wall', 'Konferans Sistemleri', 'Ses Sistemleri', 'Sahne Isik', 'LED Ekran'],
        displayAs: 'dropDownMenu',
      },
    },
    { name: 'PublishDate', dateTime: { displayAs: 'default', format: 'dateOnly' } },
    { name: 'Published', boolean: {}, defaultValue: { value: '0' } },
    { name: 'SortOrder', number: { decimalPlaces: 'none' } },
    { name: 'BodyTR', text: { allowMultipleLines: true, textType: 'richText' } },
    { name: 'BodyEN', text: { allowMultipleLines: true, textType: 'richText' } },
    { name: 'MetaDescriptionTR', text: { allowMultipleLines: false } },
    { name: 'MetaDescriptionEN', text: { allowMultipleLines: false } },
    { name: 'ProjectFacts', text: { allowMultipleLines: true, textType: 'plain' } },
    { name: 'FaqItems', text: { allowMultipleLines: true, textType: 'plain' } },
  ],
};

const projectMediaLibrary = {
  displayName: 'ProjectMedia',
  description: 'Proje fotograflari - proje basina bir klasor, klasor adi = Slug',
  list: { template: 'documentLibrary' },
};

async function main() {
  console.log('Creating "Projects" list...');
  const list = await client.api(`/sites/${SITE_ID}/lists`).post(projectsList);
  console.log('  -> created, list id:', list.id);

  console.log('Creating "ProjectMedia" document library...');
  const library = await client.api(`/sites/${SITE_ID}/lists`).post(projectMediaLibrary);
  console.log('  -> created, list id:', library.id);

  const drive = await client.api(`/sites/${SITE_ID}/lists/${library.id}/drive`).get();
  console.log('  -> drive id (GRAPH_MEDIA_DRIVE_ID):', drive.id);

  console.log('\nDone. Save these as GitHub repository secrets:');
  console.log('  GRAPH_SITE_ID          =', SITE_ID);
  console.log('  GRAPH_PROJECTS_LIST_ID =', list.id);
  console.log('  GRAPH_MEDIA_DRIVE_ID   =', drive.id);
}

main().catch((error) => {
  console.error('Failed:', error.message ?? error);
  process.exit(1);
});
