/**
 * Report Turkish knowledge-base articles that still link into the English
 * section although the target has since been translated.
 *
 * A Turkish article is allowed to link to /en/support/... — the category pages
 * already send readers there with an EN badge, and a working English link beats
 * no link at all. What goes stale is the moment that target gets a Turkish
 * version: the link keeps working, so nothing breaks and nothing complains, but
 * the reader is now bounced out of their own language for no reason. Nothing
 * else in the build catches that, because a valid link to a real page is
 * exactly what it looks like.
 *
 * Run it after every translation batch. Exits non-zero when a link is stale.
 *
 *   node scripts/kb-check-tr-links.mjs
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const EN_DIR = 'src/content/kb/en';
const TR_DIR = 'src/content/kb/tr';

/** category key -> { tr, en } slugs, read straight from the data file. */
function categorySlugs() {
  const src = readFileSync('src/data/kb.ts', 'utf8');
  const table = src.match(/kbCategoryEntries[^{]*\{([\s\S]*?)\n\};/)?.[1] ?? '';
  const slugs = new Map();
  for (const m of table.matchAll(
    /'?([\w-]+)'?:\s*\{\s*slug:\s*\{\s*tr:\s*'([^']+)',\s*en:\s*'([^']+)'/g,
  )) {
    slugs.set(m[1], { tr: m[2], en: m[3] });
  }
  return slugs;
}

const field = (body, name) => body.match(new RegExp(`^${name}:\\s*'(.*)'$`, 'm'))?.[1] ?? null;

function articles(dir) {
  const out = [];
  for (const category of readdirSync(dir, { withFileTypes: true })) {
    if (!category.isDirectory()) continue;
    for (const f of readdirSync(path.join(dir, category.name))) {
      if (!f.endsWith('.md')) continue;
      const rel = path.join(category.name, f);
      const text = readFileSync(path.join(dir, rel), 'utf8');
      const front = text.split('---')[1] ?? '';
      out.push({ rel, category: category.name, urlSlug: field(front, 'urlSlug'), text });
    }
  }
  return out;
}

const slugs = categorySlugs();
const en = articles(EN_DIR);

/** English public path -> the file it came from, so we can test its Turkish pair. */
const byEnPath = new Map();
for (const a of en) {
  const cat = slugs.get(a.category)?.en;
  if (!cat || !a.urlSlug) continue;
  byEnPath.set(`/en/support/${cat}/${a.urlSlug}/`, a.rel);
}

const stale = [];
for (const a of articles(TR_DIR)) {
  for (const m of a.text.matchAll(/\]\((\/en\/support\/[^)#\s]*)\)/g)) {
    const target = m[1];
    const enRel = byEnPath.get(target);
    if (!enRel) continue;
    if (!existsSync(path.join(TR_DIR, enRel))) continue;
    const front = readFileSync(path.join(TR_DIR, enRel), 'utf8').split('---')[1] ?? '';
    const trCat = slugs.get(path.dirname(enRel))?.tr;
    const trSlug = field(front, 'urlSlug');
    stale.push({ from: a.rel, target, to: `/destek/${trCat}/${trSlug}/` });
  }
}

if (stale.length === 0) {
  console.log('no stale English links in the Turkish articles');
  process.exit(0);
}

console.log(`${stale.length} Turkish article link(s) now have a Turkish target:\n`);
for (const s of stale) console.log(`  ${s.from}\n    ${s.target}\n    -> ${s.to}\n`);
process.exit(1);
