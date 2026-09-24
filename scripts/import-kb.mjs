#!/usr/bin/env node
/**
 * Imports the vendor's product documentation into src/content/kb/en/ and its
 * assets into public/destek/.
 *
 * NOT part of the build. Run by hand:
 *   node scripts/import-kb.mjs              full import
 *   node scripts/import-kb.mjs --check      report drift, write nothing
 *   node scripts/import-kb.mjs --limit 5    first five articles, for testing
 *   node scripts/import-kb.mjs --only troubleshoot
 *
 * Why not a prebuild step, unlike fetch-partner-logos.mjs: that script pulls a
 * dozen files from our own SharePoint and degrades to committed fallbacks. This
 * one pulls 120 articles and ~500 assets from a third party with no contract
 * and no change notification. Running it at build time would mean any vendor
 * edit publishes to sonopto.com unreviewed — including edits that reintroduce
 * their brand name into body copy — and there would be nowhere to keep the
 * hand-written Turkish translations. Import once, review the diff, commit.
 *
 * The white-label rule in src/data/signage.ts is absolute, so this script
 * refuses to write anything if a forbidden string survives the rewrite.
 */
import { parse } from 'node-html-parser';
import TurndownService from 'turndown';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';

const sharp = createRequire(import.meta.url)('sharp');

const BASE = 'https://digitalsignage.web.app';
const CONTENT_DIR = path.resolve('src', 'content', 'kb', 'en');
// Not public/destek: that is the page namespace, and Astro copies public/
// verbatim, so asset folders would appear as sibling URLs of the category
// pages and could one day collide with a category slug.
const ASSET_DIR = path.resolve('public', 'kb');

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const value = (n) => {
  const i = args.indexOf(n);
  return i >= 0 ? args[i + 1] : undefined;
};
const CHECK_ONLY = flag('--check');
const LIMIT = Number(value('--limit') ?? 0);
const ONLY = value('--only');

/** Articles we deliberately do not publish. Mirrors src/data/kb.ts. */
const EXCLUDED = new Set(['installation/install-hexa-ai-apk']);

/**
 * Strings that must never reach our output. The first two are the vendor's
 * company and brand; the third is their unbranded portal host.
 */
const FORBIDDEN = [/easysignage/i, /beetek/i, /web\.app/i, /hexa/i];

/**
 * Vendor identity. Applied to titles AND bodies, unlike the phrasing rules
 * below: the SSO article named the vendor in its own heading, and the title
 * path deliberately skips PRODUCT_RULES.
 *
 * "Hexa"/"CloudHexa" is the vendor's platform name, and the article told our
 * customer to email the "Hexa Support Team" — that both names them and routes
 * the support request away from us. Compound names go before the bare one.
 */
const BRAND_RULES = [
  [/\bEasy\s?Signage\b/gi, 'sonopto.signage'],
  [/Hexa\s+Support\s+Team/gi, 'Sonopto support'],
  [/\bCloudHexa\b/gi, 'sonopto.signage'],
  [/\bHexa\b/gi, 'sonopto.signage'],
];

/**
 * Product naming. Deliberately a curated list of qualified phrases rather than
 * a blanket replace of "Digital Signage": the bare term is generic, it is the
 * keyword this site wants to rank for, and rewriting every instance would give
 * sentences like "sonopto.signage playlists let you play sonopto.signage".
 */
// A rule that replaces into the bare brand has to swallow the plural too:
// "Digital Signage Applications" once left its s behind and produced
// "sonopto.signages". Rules replacing into a common noun keep theirs.
const PRODUCT_RULES = [
  [/Digital Signage Dashboards?\b/g, 'sonopto.signage'],
  [/Digital Signage Applications?\b/g, 'sonopto.signage'],
  [/Digital Signage Player App/g, 'sonopto.signage player'],
  [/Digital Signage App\b/g, 'sonopto.signage app'],
  [/Digital Signage Portals?\b/g, 'sonopto.signage'],
  [/Digital Signage Account/g, 'sonopto.signage account'],
  [/Digital Signage Web Player/g, 'sonopto.signage web player'],
  // The source spells the vendor brand at least three ways in body copy
  // ("EasySignage", "Easysignage", "easysignage"), so this rule is
  // deliberately case-insensitive. The FORBIDDEN guard is what proves it worked.
];

/**
 * Player download and player-endpoint hosts, left exactly as the source writes
 * them: the vendor publishes the current software there and keeps it current,
 * and Sonopto has no build of its own to serve instead. They are still listed
 * in the report so a new one never appears unnoticed, and the FORBIDDEN guard
 * runs over the finished article, so a branded host would fail the import.
 */
const DOWNLOAD_HOSTS = /^https?:\/\/(download\.cloud-digitalsignage\.com|download\.beetek\.com\.au|appds\.io|app-ds\.net|dsplayer\.io)/i;

const ua = { 'user-agent': 'Mozilla/5.0 (compatible; sonopto-kb-import)' };
const get = async (u) => {
  const r = await fetch(u, { headers: ua });
  if (!r.ok) throw new Error(`${r.status} ${u}`);
  return r.text();
};


/**
 * The source HTML is minified with unquoted attribute values. When such a value
 * ends in a slash — `href=/help/troubleshoot/x/>` — the parser reads the final
 * `/>` as a self-closing tag, empties the element and spills its text out as a
 * sibling. That silently produced 54 empty links across 31 articles.
 *
 * Quoting those values before parsing is the fix; HTML itself is ambiguous here
 * and quoting is what the spec expects.
 */
const quoteTrailingSlashAttrs = (html) => html.replace(/=([^\s"'>]*\/)>/g, '="$1">');

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9.\-_/]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-.]+|[-.]+$/g, '');

const report = {
  written: [], skipped: [], changed: [], unchanged: [],
  assets: 0, assetsSkipped: 0, downloads: [], emptyAlt: [], productHits: 0, unmappedLinks: [], droppedLinks: [], missingAssets: new Set(),
};

// ---------------------------------------------------------------- discovery

async function discover() {
  const sitemap = await get(`${BASE}/sitemap.xml`);
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => !u.endsWith('/search/'));

  const root = parse(await get(urls[0]));
  const nav = root.querySelector('ul.sidenav');
  const kids = (el) => el.childNodes.filter((n) => n.tagName === 'LI');

  // Order comes from the sidebar, which walks a new user through the product.
  // The 10 single-article categories are absent from it, so their one article
  // is recovered from the sitemap instead.
  const order = new Map();
  let i = 0;
  for (const li of kids(nav)) {
    const sub = li.childNodes.find((n) => n.tagName === 'UL');
    if (sub) for (const c of kids(sub)) order.set(c.getAttribute('data-nav-id'), i++);
    else order.set(null, i++);
  }

  return urls
    .map((url) => {
      const rel = url.replace(`${BASE}/`, '').replace(/\/$/, '');
      const [category, slug] = rel.split('/');
      return { url, rel, category, slug, order: order.get(url) ?? order.get(url + '/') ?? 999 };
    })
    .filter((a) => !EXCLUDED.has(a.rel))
    .sort((a, b) => a.order - b.order);
}

// ------------------------------------------------------------------ parsing

function parseArticle(html, article, urlIndex) {
  const root = parse(quoteTrailingSlashAttrs(html));

  const rawTitle = root.querySelector('h1')?.text?.trim() ?? article.slug;
  // Titles carry inconsistent ordering prefixes: "01 - ", "1- ", "11- ".
  const m = rawTitle.match(/^\s*(\d+(?:\.\d+)?)\s*[-–.]\s*(.+)$/);
  const title = (m ? m[2] : rawTitle).trim();
  const orderHint = m ? Number.parseFloat(m[1]) : null;

  const summary =
    root.querySelector('meta[name=description]')?.getAttribute('content')?.trim() ?? '';

  const body = root.querySelector('div.content');
  if (!body) throw new Error(`no div.content in ${article.url}`);

  // Spacer paragraphs the source uses between sections; they become stray
  // "&nbsp;" lines in markdown.
  for (const p of body.querySelectorAll('p')) {
    if (!p.text.replace(/ |\s/g, '') && !p.querySelector('img,video,iframe')) p.remove();
  }

  const assets = [];

  for (const img of body.querySelectorAll('img')) {
    const src = img.getAttribute('src') ?? '';
    if (!src) { img.remove(); continue; }
    const local = localAssetPath(src, article.category);
    if (local && DROPPED_ASSETS.has(path.basename(local.url))) { img.remove(); continue; }
    if (local) {
      assets.push({ src: absolute(src), dest: local.file });
      img.setAttribute('src', local.url);
    }
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
    const alt = img.getAttribute('alt');
    if (!alt || !alt.trim()) {
      img.setAttribute('alt', '');
      report.emptyAlt.push(`${article.rel} -> ${path.basename(src)}`);
    }
  }

  for (const v of body.querySelectorAll('video')) {
    const src = v.getAttribute('src') ?? '';
    const local = localAssetPath(src, article.category);
    if (local) {
      assets.push({ src: absolute(src), dest: local.file });
      v.setAttribute('src', local.url);
    }
    // The source autoplays looping screen recordings; that is a decision for
    // our page, not theirs.
    v.removeAttribute('autoplay');
    v.removeAttribute('loop');
    v.setAttribute('controls', '');
    v.setAttribute('preload', 'metadata');
    v.setAttribute('playsinline', '');
  }

  for (const a of body.querySelectorAll('a')) {
    const href = a.getAttribute('href') ?? '';

    // A link straight at a file on the vendor's host (config samples and the
    // like). Same rule as images: never hot-link, serve it ourselves.
    if (/^\/assets\/.+\.[a-z0-9]{2,5}$/i.test(href)) {
      const local = localAssetPath(href, article.category);
      if (local) {
        assets.push({ src: absolute(href), dest: local.file });
        a.setAttribute('href', local.url);
        continue;
      }
    }

    const mapped = mapLink(href, urlIndex);

    if (mapped === false) {
      // Link into an article we did not import. If it was the whole list item,
      // drop the item — a bare vendor feature name with no explanation is worse
      // than not mentioning it.
      const li = a.parentNode;
      if (li?.tagName === 'LI' && li.text.trim() === a.text.trim()) li.remove();
      else a.replaceWith(parse(a.innerHTML));
      continue;
    }

    if (mapped) a.setAttribute('href', mapped);
  }

  // Wide imported tables scroll rather than pushing the page sideways; the
  // hook is styled by `.prose .table-scroll` in global.css.
  for (const t of body.querySelectorAll('table')) {
    const wrap = parse('<div class="table-scroll"></div>').firstChild;
    t.replaceWith(wrap);
    wrap.appendChild(t);
  }

  return { title, orderHint, summary, html: body.innerHTML, assets };
}

const absolute = (src) => (src.startsWith('http') ? src : `${BASE}${src.startsWith('/') ? '' : '/'}${src}`);

/**
 * Two source images 404 on the vendor's own site, so nothing can be downloaded
 * for them. Where another article already carries the identical screenshot
 * under a different name, point at that one instead of shipping a broken img.
 * 'nova-start-device-id' and 'device-id' are the same Screens > Details panel.
 */
const ASSET_ALIASES = new Map([['nova-start-device-id.webp', 'device-id.webp']]);

/**
 * The second 404 has no stand-in anywhere in the corpus: it is the profile
 * drop-down, and every other account_settings screenshot is a settings tab.
 * Dropping the img keeps the prose, which describes the action anyway.
 */
const DROPPED_ASSETS = new Set(['account-settings.webp']);


function localAssetPath(src, category) {
  if (!src) return null;
  const clean = src.split('?')[0];
  let name = slugify(path.basename(clean));
  if (!name) return null;
  // Rasters are re-encoded to WebP on the way in; the source ships 19MB of
  // JPEG and PNG screenshots and they compress to a fraction of that.
  if (/\.(jpe?g|png)$/i.test(name)) name = name.replace(/\.(jpe?g|png)$/i, '.webp');
  name = ASSET_ALIASES.get(name) ?? name;
  // Source directories are sometimes capitalised (/assets/img/Door-Label/).
  // That works on a Windows dev box and 404s on Azure.
  const dir = slugify(category);
  return { file: path.join(ASSET_DIR, dir, name), url: `/kb/${dir}/${name}` };
}

let categorySlugs = new Map();

function mapLink(href, urlIndex) {
  if (!href) return null;
  if (DOWNLOAD_HOSTS.test(href)) {
    report.downloads.push(href);
    return href;
  }
  // The source links internally three ways: absolute on its own host, absolute
  // on the vendor's branded help domain, and bare paths with no trailing slash.
  let rel = null;
  if (href.startsWith(BASE)) rel = href.replace(`${BASE}/`, '');
  else if (/^https?:\/\/help\.easysignage\.com\//i.test(href)) rel = href.replace(/^https?:\/\/help\.easysignage\.com\//i, '').replace(/^help\//, '');
  else if (href.startsWith('/help/')) rel = href.slice('/help/'.length);
  else if (href.startsWith('/') && !href.startsWith('//')) rel = href.slice(1);
  if (rel === null) return null;

  rel = rel.split('#')[0].replace(/\/$/, '');
  if (!rel) return '/en/support/';

  const target = urlIndex.get(rel);
  if (target) return target;

  // A bare category, e.g. href=/apps — the source's own category pages are
  // empty JS redirects, but ours are real, so point at them.
  const cat = categorySlugs.get(rel);
  if (cat) return `/en/support/${cat}/`;

  // Links into an article we deliberately did not import.
  if (EXCLUDED.has(rel)) { report.droppedLinks.push(href); return false; }

  if (!/^(assets|img)\//.test(rel)) report.unmappedLinks.push(href);
  return null;
}

// ------------------------------------------------------------------- assets

async function downloadAssets(assets) {
  for (const a of assets) {
    if (existsSync(a.dest)) { report.assetsSkipped += 1; continue; }
    try {
      const r = await fetch(a.src, { headers: ua });
      if (!r.ok) {
        // The vendor references a few images it does not actually host. Record
        // them so the tags can be pulled rather than shipping a broken image.
        report.missingAssets.add(a.dest);
        report.unmappedLinks.push(`asset ${r.status} ${a.src}`);
        continue;
      }
      await mkdir(path.dirname(a.dest), { recursive: true });
      const buf = Buffer.from(await r.arrayBuffer());
      if (a.dest.endsWith('.webp') && !/\.webp$/i.test(a.src.split('?')[0])) {
        await sharp(buf, { limitInputPixels: false }).webp({ quality: 82 }).toFile(a.dest);
      } else {
        await writeFile(a.dest, buf);
      }
      report.assets += 1;
    } catch (e) {
      report.unmappedLinks.push(`asset failed ${a.src}: ${e.message}`);
    }
  }
}

// -------------------------------------------------------------------- write

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
turndown.keep(['video', 'iframe']);
// Images carry loading/decoding/alt we set above; markdown syntax would drop them.
turndown.addRule('keepImages', { filter: 'img', replacement: (_c, node) => node.outerHTML });
turndown.addRule('keepTableWrap', {
  filter: (node) => node.nodeName === 'DIV' && node.getAttribute('class') === 'table-scroll',
  replacement: (_c, node) => `\n\n${node.outerHTML}\n\n`,
});

const yaml = (v) => `'${String(v).replace(/'/g, "''")}'`;


/**
 * Titles get their own treatment. Running the body rules over them produces
 * mid-sentence phrasing in a heading — "the sonopto.signage web player" — and
 * repeating the product name in all 119 titles is noise anyway, since the whole
 * section is about one product. Strip the qualifier and keep the feature name.
 */
function cleanTitle(raw) {
  return raw
    .replace(/^(the|your|a)\s+/i, '')
    .replace(/^sonopto\.signage\s+/i, '')
    .replace(/^Digital Signage\s+/i, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^(?!sonopto\.)[a-z]/, (c) => c.toUpperCase());
}

/**
 * Doubled articles. Two come from the source's own typos ("the the root"), the
 * rest appeared when a rewrite dropped an article next to one already in the
 * sentence. Cleaning them here keeps the fix in one place rather than in 119
 * files, since this ships as our documentation, not theirs.
 */
const fixDoubledWords = (text) =>
  text
    .replace(/\b(the|your|a|to|of|in)(\s+(?:<[^>]+>|\*\*|__)*)\1\b/gi, '$1$2')
    .replace(/  +/g, ' ');

function applyRules(text, rules) {
  let out = text;
  for (const [re, to] of rules) {
    const before = out;
    out = out.replace(re, to);
    if (out !== before) report.productHits += 1;
  }
  return out;
}

/**
 * Corrections the global rules cannot express, keyed by source path.
 *
 * The rewrite table works on phrases, so it cannot tell the two senses of
 * "Digital Signage Application" apart: in most articles it means our app and
 * the rule is right, but in the External Video article the same phrase heads a
 * list item about the physical displays, and rewriting it there leaves our
 * product name introducing the sentence "These devices are commonly used in
 * retail stores". Applied after the global rules, so it sees their output.
 */
const ARTICLE_FIXES = new Map([
  [
    'installation/samsung-digital-signage',
    [
      [/\]\(#List-of-Supported-SSSP-Models\)/g, '](#list-of-supported-sssp-models)'],
      [/\]\(#tizen-40-inuse\)/g, '](#tizen-40-option-1-follow-this-if-samsung-sssp-is-already-in-use)'],
      [/\]\(#tizen-40-brand-new\)/g, '](#tizen-40-option-2-follow-this-if-samsung-sssp-is-brand-new-or-after-a-factory-reset)'],
      [/\]\(#tizen-65-inuse\)/g, '](#tizen-65-option-1-follow-this-if-samsung-sssp-is-already-in-use)'],
      [/\]\(#tizen-65-brand-new\)/g, '](#tizen-65-option-2-follow-this-if-samsung-sssp-is-brand-new-or-after-a-factory-reset)'],
      [/\]\(#tizen-4-usb\)/g, '](#usb-setup-on-sssp6---tizen-40-display)'],
      [/\]\(#tizen-65-usb\)/g, '](#usb-setup-on-sssp10---tizen-65-display)'],
      [/\]\(#tizen-usb\)/g, '](#install-from-usb-flash-drive-1)'],
      [/\]\(#url-launcher\)/g, '](#how-to-switch-a-samsung-display-from-magicinfo-to-url-launcher)'],
      [/\]\(#connect-to-server\)/g, '](#how-to-fix-unable-to-connect-to-the-server-please-try-again-later-on-samsung-tizen-1)'],
      [/\]\(#tizen-40\)/g, '](#tizen-40-1)'],
      [/\]\(#tizen-65\)/g, '](#tizen-65-1)'],
      [/\]\(#tizen-7\)/g, '](#tizen-7-1)'],
      [/_Check the \[supported features\]\(#Supported-Features\)\._\n*/g, ''],
    ],
  ],
  [
    'apps/digital-signage-tableau',
    [
      [/\]\(#overview\)/g, '](#1-overview)'],
      [/\]\(#public-vs-secure-tableau-dashboards\)/g, '](#2-public-vs-secure-tableau-dashboards)'],
      [/\]\(#setting-up-a-tableau-connected-app\)/g, '](#3-setting-up-a-tableau-connected-app)'],
      [/\]\(#configuring-digital-signage-with-tableau\)/g, '](#4-configuring-digital-signage-with-tableau)'],
    ],
  ],
  [
    'apps/digital-signage-external-video',
    [
      [/\]\(#steps-how-to-set-the-player\)/g, '](#how-to-set-the-player)'],
      [/\*\*sonopto\.signage\*\*: These devices/g, '**Digital signage displays**: These devices'],
    ],
  ],
  [
    'screens/digital-signage-live-screen-location',
    [
      [/\]\(#configure-location\)/g, '](#1-configure-location-services-on-the-device)'],
      [/\]\(#set-screen-location\)/g, '](#2-set-screen-location-on-the-cms-portal)'],
    ],
  ],
]);

const applyProductRules = (text) => fixDoubledWords(applyRules(applyRules(text, BRAND_RULES), PRODUCT_RULES));

function assertClean(text, where) {
  for (const re of FORBIDDEN) {
    const hit = text.match(re);
    if (hit) throw new Error(`forbidden string ${JSON.stringify(hit[0])} in ${where}`);
  }
}

/** Reads the en slugs out of src/data/kb.ts, the single source of truth. */
async function readCategorySlugs() {
  const src = await readFile(path.resolve('src', 'data', 'kb.ts'), 'utf8');
  const block = src.slice(src.indexOf('kbCategoryEntries'));
  const map = new Map();
  for (const m of block.matchAll(/'?([\w-]+)'?:\s*\{\s*slug:\s*\{\s*tr:\s*'([^']+)',\s*en:\s*'([^']+)'/g)) {
    map.set(m[1], m[3]);
  }
  if (map.size === 0) throw new Error('could not read kbCategoryEntries from src/data/kb.ts');
  return map;
}

async function main() {
  const articles = await discover();
  // --only narrows what is WRITTEN, never what is indexed: the link index
  // below has to see every article or cross-category links come out unmapped.
  const selected = ONLY ? articles.filter((a) => a.category === ONLY) : articles;
  const list = LIMIT ? selected.slice(0, LIMIT) : selected;
  console.log(`discovered ${articles.length} articles; processing ${list.length}\n`);

  // Category slugs come from src/data/kb.ts so there is one source of truth.
  // Node cannot import the .ts, so it is read as text — and a miss throws
  // rather than silently falling back to the vendor's own segment names.
  categorySlugs = await readCategorySlugs();
  const catSlugs = categorySlugs;
  const urlIndex = new Map();
  for (const a of articles) {
    const cat = catSlugs.get(a.category);
    if (!cat) throw new Error(`category "${a.category}" is missing from src/data/kb.ts`);
    urlIndex.set(a.rel, `/en/support/${cat}/${slugify(a.slug)}/`);
  }

  for (const a of list) {
    const html = await get(a.url);
    const parsed = parseArticle(html, a, urlIndex);

    let bodyHtml = applyProductRules(parsed.html);
    const title = cleanTitle(applyRules(parsed.title, BRAND_RULES));
    const summary = applyProductRules(parsed.summary);

    let markdown = turndown.turndown(bodyHtml).trim();
    const fixes = ARTICLE_FIXES.get(a.rel);
    if (fixes) markdown = applyRules(markdown, fixes);
    const hash = createHash('sha256').update(markdown).digest('hex').slice(0, 16);

    const dest = path.join(CONTENT_DIR, a.category, `${slugify(a.slug)}.md`);
    const existing = existsSync(dest) ? await readFile(dest, 'utf8') : null;
    const prevHash = existing?.match(/^sourceHash:\s*'?([a-f0-9]+)'?/m)?.[1];

    if (prevHash && prevHash !== hash) report.changed.push(a.rel);
    else if (prevHash) report.unchanged.push(a.rel);

    if (CHECK_ONLY) continue;

    const frontmatter = [
      '---',
      `title: ${yaml(title)}`,
      `urlSlug: ${yaml(slugify(a.slug))}`,
      `summary: ${yaml(summary)}`,
      `category: ${yaml(a.category)}`,
      `order: ${parsed.orderHint ?? a.order}`,
      `source: ${yaml(a.rel)}`,
      `sourceHash: ${yaml(hash)}`,
      `importedAt: ${yaml(new Date().toISOString().slice(0, 10))}`,
      '---',
      '',
    ].join('\n');

    const file = `${frontmatter}${markdown}\n`;
    assertClean(file, dest);

    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, file, 'utf8');
    report.written.push(a.rel);

    await downloadAssets(parsed.assets);
    process.stdout.write(`  ${a.rel}\n`);
  }

  console.log('\n---');
  console.log(`written        ${report.written.length}`);
  console.log(`changed        ${report.changed.length}${report.changed.length ? ': ' + report.changed.slice(0, 10).join(', ') : ''}`);
  console.log(`unchanged      ${report.unchanged.length}`);
  console.log(`assets         ${report.assets} downloaded, ${report.assetsSkipped} already present`);
  console.log(`product rules  ${report.productHits} rewrites`);
  console.log(`download links ${new Set(report.downloads).size} distinct, kept as published`);
  for (const d of [...new Set(report.downloads)]) console.log(`    ${d}`);
  console.log(`empty alt      ${report.emptyAlt.length}`);
  console.log(`dropped links  ${report.droppedLinks.length} (into excluded articles)`);
  console.log(`unmapped links ${new Set(report.unmappedLinks).size}`);
  for (const u of [...new Set(report.unmappedLinks)].slice(0, 20)) console.log(`    ${u}`);

  if (CHECK_ONLY && report.changed.length) process.exit(1);
}

main().catch((e) => {
  console.error('\nimport failed:', e.message);
  process.exit(1);
});
