import type { Dictionary } from '../content/i18n/tr';
import type { RouteId } from '../lib/i18n/routes';

export type SolutionKey = keyof Dictionary['solutions']['items'];

/** Display order for the hub grid and the "other solutions" strip. */
export const solutionKeys = ['conference', 'education', 'hotel', 'publicSector'] as const;

export const solutionEntries: Record<SolutionKey, { routeId: RouteId; image: string }> = {
  conference: {
    routeId: 'solutionsConference',
    image: '/cozumler/konferans-salonu-av-sistemi-sonopto.webp',
  },
  education: {
    routeId: 'solutionsEducation',
    image: '/cozumler/okul-akilli-tahta-sistemi-sonopto.webp',
  },
  hotel: {
    routeId: 'solutionsHotel',
    image: '/cozumler/otel-balo-salonu-ses-isik-sonopto.webp',
  },
  publicSector: {
    routeId: 'solutionsPublic',
    image: '/cozumler/kamu-meclis-salonu-sistemi-sonopto.webp',
  },
};
