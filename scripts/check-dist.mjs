/**
 * Post-build checks on dist/: every internal link resolves, every JSON-LD block
 * parses, every page has one H1, a title and a description of sane length.
 * Run after `astro build`: node scripts/check-dist.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist', import.meta.url));
const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) files.push(p);
  }
};
walk(dist);

const toRoute = (file) => {
  const r = '/' + relative(dist, file).split(sep).join('/').replace(/index\.html$/, '').replace(/\.html$/, '');
  return r === '/' ? r : r.replace(/\/$/, '');
};
const routes = new Set(files.map(toRoute));

const problems = [];
const types = {};
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const route = toRoute(file);

  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      const obj = JSON.parse(m[1]);
      types[obj['@type']] = (types[obj['@type']] ?? 0) + 1;
    } catch {
      problems.push(`${route}: invalid JSON-LD`);
    }
  }

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const url = m[1].replace(/\/$/, '') || '/';
    if (/\.(xml|ico|png|svg|jpg|webp|webmanifest|txt|woff2)$/.test(url)) continue;
    if (!routes.has(url)) problems.push(`${route}: broken link ${url}`);
  }

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? '';
  const desc = html.match(/name="description" content="(.*?)"/)?.[1] ?? '';
  if (h1 !== 1) problems.push(`${route}: ${h1} H1 elements`);
  if (!title) problems.push(`${route}: missing title`);
  if (desc.length < 50 || desc.length > 170) problems.push(`${route}: description length ${desc.length}`);
}

console.log(`Pages: ${files.length}. JSON-LD: ${JSON.stringify(types)}`);
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log('dist check passed');
