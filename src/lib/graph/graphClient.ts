import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import type { AuthenticationProvider } from '@microsoft/microsoft-graph-client';

/**
 * Build-time Microsoft Graph client (client credentials flow).
 *
 * Requires an Entra ID app registration with the *application* permission
 * `Sites.Selected`, granted read access to exactly the one SharePoint site
 * via a one-time `POST /sites/{site-id}/permissions` call (see README).
 * This keeps the blast radius of a CI-stored secret limited to that one
 * site instead of the whole tenant.
 *
 * Returns `null` when the required env vars are not configured, so pages
 * can fall back to sample data during local/early development instead of
 * failing the build.
 */
export function getGraphClient(): Client | null {
  const tenantId = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.GRAPH_CLIENT_ID;
  const clientSecret = process.env.GRAPH_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    return null;
  }

  const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

  const authProvider: AuthenticationProvider = {
    getAccessToken: async () => {
      const token = await credential.getToken('https://graph.microsoft.com/.default');
      if (!token) {
        throw new Error('Failed to acquire a Microsoft Graph access token.');
      }
      return token.token;
    },
  };

  return Client.initWithMiddleware({ authProvider });
}
