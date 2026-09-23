export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';

/**
 * Canonical per-page path segments, keyed by a stable route id.
 * TR paths intentionally match the legacy Odoo URLs so the migration needs
 * zero redirects on the highest-equity pages. EN paths live under /en/.
 */
export const routes = {
  home: { tr: '', en: '' },
  services: { tr: 'hizmetler', en: 'services' },
  servicesInstallation: { tr: 'hizmetler/kurulum-ve-montaj', en: 'services/installation-and-assembly' },
  servicesMaintenance: { tr: 'hizmetler/bakim-ve-onarim', en: 'services/maintenance-and-repair' },
  servicesConsulting: { tr: 'hizmetler/danismanlik-hizmetleri', en: 'services/consulting' },
  servicesSupply: { tr: 'hizmetler/satis-ve-tedarik', en: 'services/sales-and-supply' },
  solutions: { tr: 'cozumler', en: 'solutions' },
  solutionsConference: {
    tr: 'cozumler/konferans-ve-toplanti-salonu-sistemleri',
    en: 'solutions/conference-and-meeting-room-systems',
  },
  solutionsEducation: {
    tr: 'cozumler/okul-ve-egitim-kurumlari-ses-sistemleri',
    en: 'solutions/school-and-education-audio-systems',
  },
  solutionsHotel: {
    tr: 'cozumler/otel-ses-ve-goruntu-cozumleri',
    en: 'solutions/hotel-audio-and-video-solutions',
  },
  solutionsPublic: {
    tr: 'cozumler/kamu-kurumlari-av-sistemleri',
    en: 'solutions/public-sector-av-systems',
  },
  /* The segment is the product name, so it is identical in both languages;
     only the /en/ prefix differs. */
  signage: { tr: 'signage', en: 'signage' },
  /* Signage sector pages sit under the product rather than under /cozumler/:
     they target signage buying intent ("dijital menü ekranı"), which is a
     different search than the AV solution pages, and nesting them here keeps
     the two sets from competing for the same terms. */
  signageRetail: { tr: 'signage/perakende', en: 'signage/retail' },
  signageFood: { tr: 'signage/restoran-ve-kafe', en: 'signage/restaurants-and-cafes' },
  signageOffice: { tr: 'signage/kurumsal-ofis', en: 'signage/corporate-office' },
  signageHealth: { tr: 'signage/saglik', en: 'signage/healthcare' },
  signageTransport: { tr: 'signage/ulasim', en: 'signage/transport' },
  /* Distinct from solutionsEducation, which is about school audio and PA: this
     one targets signage intent ("okul duyuru ekranı"), not "okul ses sistemi". */
  signageEducation: { tr: 'signage/egitim', en: 'signage/education' },
  about: { tr: 'kurumsal/hakkimizda', en: 'about' },
  visionMission: { tr: 'vizyon-misyon', en: 'vision-and-mission' },
  references: { tr: 'referanslar', en: 'references' },
  faq: { tr: 'sss', en: 'faq' },
  contact: { tr: 'iletisim', en: 'contact' },
} as const;

export type RouteId = keyof typeof routes;

export function pathFor(routeId: RouteId, locale: Locale): string {
  const segment = routes[routeId][locale];
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return segment ? `${prefix}/${segment}/` : `${prefix}/` || '/';
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'tr' ? 'en' : 'tr';
}

/** Resolves the current locale from an Astro URL. */
export function localeFromUrl(url: URL): Locale {
  const first = url.pathname.split('/').filter(Boolean)[0];
  return locales.includes(first as Locale) ? (first as Locale) : defaultLocale;
}
