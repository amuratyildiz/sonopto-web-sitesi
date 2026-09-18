import { tr } from './tr';
import { en } from './en';
import type { Locale } from '../../lib/i18n/routes';

export const dictionaries = { tr, en } satisfies Record<Locale, typeof tr>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Dictionary } from './tr';
