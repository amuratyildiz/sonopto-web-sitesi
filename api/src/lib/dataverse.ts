import { ClientSecretCredential } from '@azure/identity';

export interface ContactSubmissionInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

/**
 * Creates a record in the "Web Sitesi Iletisim Formu" (cr0c0_iletisimformukaydi)
 * Dataverse table — a dedicated table for website contact form submissions,
 * separate from the standard Lead table and from the org's own "Fırsat"
 * (cr0c0_firsat) pipeline table, which requires an existing linked Company
 * record that an anonymous website visitor won't have.
 *
 * Uses a dedicated, least-privilege Entra app registration + Dataverse
 * Application User (Create-only on this table) — intentionally separate
 * from the build-time Microsoft Graph/SharePoint credential in the main
 * site, per the integration plan (PLAN.md).
 *
 * When DATAVERSE_* env vars are not configured, logs the submission instead
 * of throwing, so the contact form keeps working end-to-end before the
 * Power Platform side has been provisioned.
 */
export async function createContactSubmission(input: ContactSubmissionInput): Promise<void> {
  const { DATAVERSE_URL, DATAVERSE_TENANT_ID, DATAVERSE_CLIENT_ID, DATAVERSE_CLIENT_SECRET } = process.env;

  if (!DATAVERSE_URL || !DATAVERSE_TENANT_ID || !DATAVERSE_CLIENT_ID || !DATAVERSE_CLIENT_SECRET) {
    console.warn('[contact-submit] DATAVERSE_* env vars not set — submission was NOT persisted to Dataverse:', input);
    return;
  }

  const credential = new ClientSecretCredential(DATAVERSE_TENANT_ID, DATAVERSE_CLIENT_ID, DATAVERSE_CLIENT_SECRET);
  const token = await credential.getToken(`${DATAVERSE_URL}/.default`);

  if (!token) {
    throw new Error('Failed to acquire a Dataverse access token.');
  }

  const response = await fetch(`${DATAVERSE_URL}/api/data/v9.2/cr0c0_iletisimformukaydis`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'OData-MaxVersion': '4.0',
      'OData-Version': '4.0',
    },
    body: JSON.stringify({
      cr0c0_adsoyad: input.name,
      cr0c0_eposta: input.email,
      cr0c0_telefon: input.phone ?? undefined,
      cr0c0_sirketadi: input.company ?? undefined,
      cr0c0_konu: input.subject,
      cr0c0_mesaj: input.message,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Dataverse contact submission create failed (${response.status}): ${body}`);
  }
}
