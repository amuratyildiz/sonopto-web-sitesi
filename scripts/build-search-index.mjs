/**
 * Build the site search index from the RENDERED site.
 *
 * Runs as npm's `postbuild`, so it sees dist/ after astro build has written it.
 * It cannot be a `prebuild` step: prebuild runs before astro build, when there
 * is no rendered HTML to read.
 *
 * Reading the output rather than the sources is the whole point. Page text on
 * this site comes from five different places — the i18n dictionaries, the two
 * knowledge-base collections, SharePoint (the reference write-ups, whose count
 * changes between builds), the constants in src/data/*.ts, and paragraphs typed
 * straight into .astro files. A source-based indexer would have to know about
 * all five and would need editing every time a sixth appears. This one knows
 * about none of them: whatever ends up in <main> is searchable, so content
 * added later is indexed without anyone remembering to wire it up.
 *
 *   node scripts/build-search-index.mjs
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';
const PUBLIC = 'public';

/**
 * Sections a URL can belong to, longest prefix first. The label shown on each
 * result lives in the dictionaries under search.sections, keyed by these names.
 */
const SECTIONS = [
  ['/destek/', 'kb'],
  ['/en/support/', 'kb'],
  ['/signage/', 'signage'],
  ['/en/signage/', 'signage'],
  ['/hizmetler/', 'services'],
  ['/en/services/', 'services'],
  ['/cozumler/', 'solutions'],
  ['/en/solutions/', 'solutions'],
  ['/referanslar/', 'references'],
  ['/en/references/', 'references'],
  ['/kurumsal/', 'corporate'],
  ['/vizyon-misyon/', 'corporate'],
  ['/en/about/', 'corporate'],
  ['/en/vision-and-mission/', 'corporate'],
  ['/sss/', 'faq'],
  ['/en/faq/', 'faq'],
  ['/iletisim/', 'contact'],
  ['/en/contact/', 'contact'],
];

/** Pages that are not destinations, or would only ever match themselves. */
const SKIP = ['/404/', '/arama/', '/en/search/'];

/**
 * Turkish is written with letters that a visitor on a non-Turkish keyboard
 * cannot type, so both the index and the query are folded to plain ASCII —
 * "calma listesi" has to find "çalma listesi". Dotted capital İ folds to i the
 * same way; toLowerCase() alone would leave a combining dot behind.
 */
const FOLD = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u', İ: 'i' };
const fold = (s) => s.toLowerCase().replace(/[çğıöşüâîûİ]/g, (c) => FOLD[c] ?? c);

/** Two characters minimum: single letters match nearly everything. */
const WORD = /[0-9a-zçğıöşüâîû]{2,}/g;
const tokenize = (text) => fold(text).match(WORD) ?? [];

/** Chrome that sits inside <main> and must not be indexed — see below. */
const CHROME = /<(nav|aside|script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi;

const decode = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const attr = (html, name) =>
  decode(
    html.match(new RegExp(`<meta[^>]+name="${name}"[^>]+content="([^"]*)"`, 'i'))?.[1] ??
      html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+name="${name}"`, 'i'))?.[1] ??
      '',
  ).trim();

/**
 * The readable part of the page.
 *
 * Stripping <nav> is not cosmetic: a knowledge-base article carries four of
 * them inside <main>, one being the sidebar that lists all 19 categories and
 * their article titles on every single page. Left in, a search for "kurulum"
 * would return all 139 knowledge-base pages and rank nothing.
 */
function mainText(html) {
  const inner = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
  return decode(inner.replace(CHROME, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function pageTitle(html) {
  const raw = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim();
  // SeoHead appends " | sonopto." to every title; it is noise in a result list.
  return raw.replace(/\s*\|\s*sonopto\.?\s*$/i, '').trim();
}

const sectionFor = (url) => SECTIONS.find(([prefix]) => url.startsWith(prefix))?.[1] ?? 'home';

async function pages(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await pages(full)));
    else if (entry.name === 'index.html') out.push(full);
  }
  return out;
}

async function main() {
  const files = (await pages(DIST)).sort();
  const indexes = {
    tr: { v: 1, lang: 'tr', docs: [], terms: {} },
    en: { v: 1, lang: 'en', docs: [], terms: {} },
  };

  let skipped = 0;
  for (const file of files) {
    const url = `/${path.relative(DIST, file).split(path.sep).slice(0, -1).join('/')}/`.replace('//', '/');
    if (SKIP.some((s) => url === s)) {
      skipped += 1;
      continue;
    }

    const html = await readFile(file, 'utf8');
    const text = mainText(html);
    const title = pageTitle(html);
    if (!title || !text) {
      skipped += 1;
      continue;
    }

    const lang = url.startsWith('/en/') ? 'en' : 'tr';
    const idx = indexes[lang];
    const id = idx.docs.length;
    idx.docs.push([title, url, sectionFor(url), attr(html, 'description')]);

    // Postings are doc ids only. Term frequency would improve ranking a little
    // and cost about a third more bytes; the title boost applied at query time
    // is doing most of the work at this corpus size.
    for (const token of new Set(tokenize(`${title} ${text}`))) {
      (idx.terms[token] ??= []).push(id);
    }
  }

  for (const [lang, idx] of Object.entries(indexes)) {
    // Sorted keys keep the diff between builds readable and the file stable.
    idx.terms = Object.fromEntries(Object.entries(idx.terms).sort(([a], [b]) => (a < b ? -1 : 1)));
    const json = JSON.stringify(idx);
    const name = `arama-index.${lang}.json`;

    // dist/ is what ships. The copy in public/ is what `astro dev` serves, so
    // the search page is testable without a production build; it is gitignored
    // and overwritten by the next build, exactly like public/partners/.
    await writeFile(path.join(DIST, name), json, 'utf8');
    await writeFile(path.join(PUBLIC, name), json, 'utf8');

    const terms = Object.keys(idx.terms).length;
    console.log(
      `${lang}: ${idx.docs.length} pages, ${terms} terms, ${(json.length / 1024).toFixed(0)} KB -> ${name}`,
    );
  }
  console.log(`skipped ${skipped} page(s)`);
}

main().catch((e) => {
  console.error('\nsearch index failed:', e.message);
  process.exit(1);
});
