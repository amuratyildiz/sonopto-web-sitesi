#!/usr/bin/env node
/**
 * Keeps each Turkish article's sourceHash aligned with its English pair.
 *
 * The hash is what --check uses to tell whether the vendor changed an article.
 * A Turkish file carrying a stale hash would hide that the text it was
 * translated from has moved on, which is the one thing the drift check exists
 * to catch. Hand-copying the value got it wrong once already.
 *
 *   node scripts/kb-sync-tr-meta.mjs            report only
 *   node scripts/kb-sync-tr-meta.mjs --write    align them
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { glob } from 'node:fs/promises';
import path from 'node:path';

const WRITE = process.argv.includes('--write');
const TR = path.resolve('src', 'content', 'kb', 'tr');
const EN = path.resolve('src', 'content', 'kb', 'en');
const hashOf = (text) => text.match(/^sourceHash:\s*'([^']*)'/m)?.[1];

let aligned = 0;
let missing = 0;
let ok = 0;

for await (const file of glob('**/*.md', { cwd: TR })) {
  const trPath = path.join(TR, file);
  const enPath = path.join(EN, file);
  if (!existsSync(enPath)) {
    console.log(`  no English pair: ${file}`);
    missing += 1;
    continue;
  }
  const trText = await readFile(trPath, 'utf8');
  const enHash = hashOf(await readFile(enPath, 'utf8'));
  const trHash = hashOf(trText);
  if (trHash === enHash) { ok += 1; continue; }

  console.log(`  ${trHash === 'REPLACE' ? 'fill ' : 'stale'} ${file}  ${trHash} -> ${enHash}`);
  aligned += 1;
  if (WRITE) {
    await writeFile(trPath, trText.replace(/^sourceHash:\s*'[^']*'/m, `sourceHash: '${enHash}'`), 'utf8');
  }
}

console.log(`\n  ${ok} already aligned, ${aligned} ${WRITE ? 'updated' : 'need updating'}, ${missing} without an English pair`);
if (!WRITE && aligned > 0) process.exitCode = 1;
