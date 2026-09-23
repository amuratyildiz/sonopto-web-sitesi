import { pathFor, type Locale } from '../i18n/routes';
import { kbCategoryEntries, type KbCategoryKey } from '../../data/kb';

/**
 * Knowledge base URLs.
 *
 * Only the section root is a route id; the category and article segments are
 * assembled here. That is the same concession the references pages make, but
 * kept in one place instead of inlined at every call site — with 19 categories
 * and 119 articles the inline version would be unmaintainable.
 */
export function kbCategoryPath(category: KbCategoryKey, locale: Locale): string {
  return `${pathFor('support', locale)}${kbCategoryEntries[category].slug[locale]}/`;
}

export function kbArticlePath(
  entry: { data: { category: KbCategoryKey; urlSlug: string } },
  locale: Locale,
): string {
  return `${kbCategoryPath(entry.data.category, locale)}${entry.data.urlSlug}/`;
}
