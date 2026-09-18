import { ClientSecretCredential } from '@azure/identity';

export interface LeadInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

/**
 * Creates a Dataverse Lead from a contact form submission.
 *
 * Uses a dedicated, least-privilege Entra app registration + Dataverse
 * Application User (Create-only on the Lead table) — intentionally
 * separate from the build-time Microsoft Graph/SharePoint credential in
 * the main site, per the integration plan (PLAN.md).
 *
 * When DATAVERSE_* env vars are not configured, logs the lead instead of
 * throwing, so the contact form keeps working end-to-end before the
 * Power Platform side has been provisioned. Remove this fallback once
 * Dataverse is wired up — see README "Yayına alma kontrol listesi".
 */
export async function createDataverseLead(lead: LeadInput): Promise<void> {
  const { DATAVERSE_URL, DATAVERSE_TENANT_ID, DATAVERSE_CLIENT_ID, DATAVERSE_CLIENT_SECRET } = process.env;

  if (!DATAVERSE_URL || !DATAVERSE_TENANT_ID || !DATAVERSE_CLIENT_ID || !DATAVERSE_CLIENT_SECRET) {
    console.warn('[contact-submit] DATAVERSE_* env vars not set — lead was NOT persisted to Dataverse:', lead);
    return;
  }

  const credential = new ClientSecretCredential(DATAVERSE_TENANT_ID, DATAVERSE_CLIENT_ID, DATAVERSE_CLIENT_SECRET);
  const token = await credential.getToken(`${DATAVERSE_URL}/.default`);

  if (!token) {
    throw new Error('Failed to acquire a Dataverse access token.');
  }

  const [firstName, ...rest] = lead.name.trim().split(' ');
  const lastName = rest.join(' ') || firstName;

  const response = await fetch(`${DATAVERSE_URL}/api/data/v9.2/leads`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'OData-MaxVersion': '4.0',
      'OData-Version': '4.0',
    },
    body: JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      emailaddress1: lead.email,
      telephone1: lead.phone ?? undefined,
      companyname: lead.company ?? undefined,
      subject: lead.subject,
      description: lead.message,
      leadsourcecode: 8, // "Web" — confirmed against this org's leadsourcecode option set.
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Dataverse lead creation failed (${response.status}): ${body}`);
  }
}
