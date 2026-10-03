/**
 * Build-time Dataverse reader (client credentials flow).
 *
 * The same environment that holds the CRM holds the website's content tables,
 * and the service principal this uses is granted *read only* on those five
 * tables through a role of its own — it cannot write anything, and it cannot
 * see the rest of the CRM.
 *
 * Returns `null` when the env vars are not configured, so `astro build` keeps
 * working from the committed sample data (src/data/projects.sample.ts).
 */
import { ClientSecretCredential } from '@azure/identity';

/** Labels as a person would read them, alongside the raw option values. */
const FORMATTED = 'odata.include-annotations="OData.Community.Display.V1.FormattedValue"';

export interface DataverseClient {
  /** Runs an OData query and follows paging, returning every row. */
  list<T>(query: string): Promise<T[]>;
}

export function getDataverseClient(): DataverseClient | null {
  const url = process.env.DATAVERSE_URL?.replace(/\/$/, '');
  const tenantId = process.env.DATAVERSE_TENANT_ID;
  const clientId = process.env.DATAVERSE_CLIENT_ID;
  const clientSecret = process.env.DATAVERSE_CLIENT_SECRET;

  if (!url || !tenantId || !clientId || !clientSecret) {
    return null;
  }

  const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
  const api = `${url}/api/data/v9.2`;
  let cached: { token: string; expiresOn: number } | null = null;

  async function token(): Promise<string> {
    // A build makes several calls in quick succession; one token covers them.
    if (cached && cached.expiresOn > Date.now() + 60_000) return cached.token;
    const result = await credential.getToken(`${url}/.default`);
    if (!result) throw new Error('Dataverse access token alınamadı.');
    cached = { token: result.token, expiresOn: result.expiresOnTimestamp };
    return result.token;
  }

  return {
    async list<T>(query: string): Promise<T[]> {
      const rows: T[] = [];
      let next: string | null = query.startsWith('http') ? query : `${api}${query}`;

      while (next) {
        const response: Response = await fetch(next, {
          headers: {
            Authorization: `Bearer ${await token()}`,
            Accept: 'application/json',
            'OData-MaxVersion': '4.0',
            'OData-Version': '4.0',
            Prefer: FORMATTED,
          },
        });
        if (!response.ok) {
          throw new Error(`Dataverse ${response.status}: ${(await response.text()).slice(0, 300)}`);
        }
        const page = (await response.json()) as { value?: T[]; '@odata.nextLink'?: string };
        rows.push(...(page.value ?? []));
        next = page['@odata.nextLink'] ?? null;
      }

      return rows;
    },
  };
}
