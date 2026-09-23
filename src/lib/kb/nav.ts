import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/routes';
import { kbCategoryKeys, type KbCategoryKey } from '../../data/kb';

/** Both collections share one schema, so either side is assignable here. */
export type KbEntry = CollectionEntry<'kbEn'> | CollectionEntry<'kbTr'>;

/** Turkish reads kbTr, English kbEn. A missing file means "not translated". */
export async function getKbEntries(locale: Locale): Promise<KbEntry[]> {
  const entries: KbEntry[] =
    locale === 'tr' ? await getCollection('kbTr') : await getCollection('kbEn');
  return entries.filter((e) => !e.data.draft);
}

export function groupByCategory(entries: KbEntry[]): Map<KbCategoryKey, KbEntry[]> {
  const map = new Map<KbCategoryKey, KbEntry[]>();
  for (const key of kbCategoryKeys) map.set(key, []);
  for (const entry of entries) map.get(entry.data.category)?.push(entry);
  for (const list of map.values()) list.sort((a, b) => a.data.order - b.data.order);
  return map;
}

/**
 * The whole knowledge base as one ordered list, so prev/next walks across a
 * category boundary instead of dead-ending at the end of a section.
 */
export function flatten(entries: KbEntry[]): KbEntry[] {
  const grouped = groupByCategory(entries);
  return kbCategoryKeys.flatMap((key) => grouped.get(key) ?? []);
}

export function siblings(entries: KbEntry[], current: KbEntry) {
  const flat = flatten(entries);
  const i = flat.findIndex((e) => e.id === current.id);
  return { prev: i > 0 ? flat[i - 1] : null, next: i >= 0 && i < flat.length - 1 ? flat[i + 1] : null };
}
