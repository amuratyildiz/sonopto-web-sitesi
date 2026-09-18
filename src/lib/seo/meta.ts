import type { Locale } from '../i18n/routes';

const SITE_URL = 'https://www.sonopto.com';

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  alternatePath?: string;
  image?: string;
  type?: 'website' | 'article';
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildTitle(pageTitle: string): string {
  return pageTitle === 'Sonopto' ? pageTitle : `${pageTitle} | Sonopto`;
}

export { SITE_URL };
