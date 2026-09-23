import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';
import { kbCategoryKeys } from './data/kb';

/**
 * Knowledge base articles.
 *
 * Two collections rather than one with a `locale` field: the existence of a
 * Turkish file *is* the translation gate, exactly as `project.bodyEn` is for
 * the references pages. getStaticPaths in each locale then needs no filtering,
 * and it mirrors the two-dictionary shape the rest of the site already uses.
 *
 * The entry id is locale-independent (`playlists/playlist-management`), so it
 * doubles as the pairing key for hreflang; the localised, SEO-bearing slug
 * lives in frontmatter and must not change once published.
 */
const article = z.object({
  title: z.string(),
  /* NOT `slug`: that is reserved by Astro's glob loader, which requires it to
     be unique across the whole collection. Ours only has to be unique within a
     category, because the category is in the URL — two articles legitimately
     share the name "digital-signage-media-assets". */
  urlSlug: z.string(),
  summary: z.string(),
  category: z.enum(kbCategoryKeys),
  order: z.number(),
  /** Vendor path, e.g. "playlists/digital-signage-playlist". A path, never a
      URL: committing their host into 240 files would defeat the white label. */
  source: z.string(),
  /** sha256 of the imported markdown — the drift tripwire for --check. */
  sourceHash: z.string(),
  importedAt: z.string(),
  reviewedAt: z.string().optional(),
  draft: z.boolean().optional(),
});

export const collections = {
  kbEn: defineCollection({
    loader: glob({ base: './src/content/kb/en', pattern: '**/*.md' }),
    schema: article,
  }),
  kbTr: defineCollection({
    loader: glob({ base: './src/content/kb/tr', pattern: '**/*.md' }),
    schema: article,
  }),
};
