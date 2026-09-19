import type { Dictionary } from '../content/i18n/tr';
import type { RouteId } from '../lib/i18n/routes';

/**
 * Lives here rather than in ServiceIcon.astro so plain .ts modules can import
 * it — exporting a type out of .astro frontmatter works until it doesn't.
 */
export type ServiceIconName = 'installation' | 'maintenance' | 'consulting' | 'supply';

export type ServiceKey = keyof Dictionary['services']['items'];

/** Display order for the homepage grid, the services hub and the 01–04 labels. */
export const serviceKeys = ['installation', 'maintenance', 'consulting', 'supply'] as const;

/** Icon is 1:1 with the key today, but stays explicit so a future service can
    point at existing artwork instead of forcing a new drawing. */
export const serviceEntries: Record<ServiceKey, { routeId: RouteId; icon: ServiceIconName }> = {
  installation: { routeId: 'servicesInstallation', icon: 'installation' },
  maintenance: { routeId: 'servicesMaintenance', icon: 'maintenance' },
  consulting: { routeId: 'servicesConsulting', icon: 'consulting' },
  supply: { routeId: 'servicesSupply', icon: 'supply' },
};
