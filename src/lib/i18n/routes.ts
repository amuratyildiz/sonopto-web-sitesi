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
