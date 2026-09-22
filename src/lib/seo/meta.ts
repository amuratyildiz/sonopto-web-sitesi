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

/**
 * The wordmark form from the identity guide §1.1 — all lowercase, trailing
 * period. Used for the browser title and og:site_name; sentence-cased
 * "Sonopto" stays correct in running copy.
 */
export const BRAND = 'sonopto.';

/** A title that already leads with the wordmark (the homepage) is left alone;
    everything else gets the brand appended. */
export function buildTitle(pageTitle: string): string {
  return pageTitle.startsWith(BRAND) ? pageTitle : `${pageTitle} | ${BRAND}`;
}

export { SITE_URL };
