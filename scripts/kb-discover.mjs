#!/usr/bin/env node
/**
 * Reconnaissance for the knowledge base import. Read-only: fetches the vendor
 * sitemap and one article's sidenav, joins them into the category tree, and
 * reports what the importer will have to deal with.
 *
 * Not part of any build. Run by hand: node scripts/kb-discover.mjs
 */
import { parse } from 'node-html-parser';
import { writeFileSync } from 'node:fs';

const BASE = 'https://digitalsignage.web.app';
const get = async (u) => (await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' } })).text();

const sitemap = await get(`${BASE}/sitemap.xml`);
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1])
  .filter((u) => !u.endsWith('/search/'));

// The sidenav is the only place the official category names and the intended
// order live; the sitemap has the URLs but no hierarchy.
const root = parse(await get(urls[0]));
const nav = root.querySelector('ul.sidenav');

// Direct children only. querySelectorAll always searches descendants, so
// asking `nav` for 'ul.sidenav > li' matches nothing — nav *is* that ul.
const topLevel = (el) => el.childNodes.filter((n) => n.tagName === 'LI');

const categories = topLevel(nav).map((li) => {
  const navId = li.getAttribute('data-nav-id') ?? '';
  const sublist = li.childNodes.find((n) => n.tagName === 'UL');
  return {
    key: navId.replace(`${BASE}/`, '').split('/').filter(Boolean)[0],
    title: li.getAttribute('title'),
    children: sublist
      ? topLevel(sublist).map((c) => ({
          title: c.getAttribute('title'),
          url: c.getAttribute('data-nav-id'),
        }))
      : [],
  };
});

const byCategory = {};
for (const u of urls) {
  const key = u.replace(`${BASE}/`, '').split('/')[0];
  (byCategory[key] ||= []).push(u);
}

console.log(`categories: ${categories.length}   sitemap articles: ${urls.length}\n`);
let navTotal = 0;
let singles = 0;
for (const c of categories) {
  navTotal += c.children.length;
  if (c.children.length === 0) singles += 1;
  const s = (byCategory[c.key] ?? []).length;
  const flag = c.children.length === 0 && s > 0 ? '  <- single-article category, absent from nav' : '';
  console.log(`  ${String(c.key).padEnd(22)} nav=${String(c.children.length).padStart(2)} sitemap=${String(s).padStart(2)}  "${c.title}"${flag}`);
}
console.log(`\n  nav children ${navTotal} + single-article categories ${singles} = ${navTotal + singles}`);

const inNav = new Set(categories.flatMap((c) => c.children.map((x) => x.url)));
const missing = urls.filter((u) => !inNav.has(u));
console.log(`\n  in sitemap but not in nav (${missing.length}):`);
for (const m of missing) console.log('   ', m.replace(`${BASE}/`, ''));

writeFileSync(process.argv[2] ?? 'kb-tree.json', JSON.stringify({ categories, urls }, null, 1));
