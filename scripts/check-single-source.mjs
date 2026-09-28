/**
 * Fails the build when a value that must live only in src/config/site.ts or
 * src/config/pricing.ts is typed anywhere else under src/.
 * Values are read from the config files themselves, so the check follows them.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const src = join(root, 'src');
const owners = [join(src, 'config', 'site.ts'), join(src, 'config', 'pricing.ts')];

const siteTs = readFileSync(owners[0], 'utf8');
const pricingTs = readFileSync(owners[1], 'utf8');

const pick = (re, text) => [...text.matchAll(re)].map((m) => m[1]);

// Values that change over time: phone, WhatsApp, email, license numbers, business id, hours.
const guarded = [
  ...pick(/phone: '([^']+)'/g, siteTs),
  ...pick(/whatsapp: '([^']+)'/g, siteTs),
  ...pick(/email: '([^']+)'/g, siteTs),
  ...pick(/number: '([^']+)'/g, siteTs),
  ...pick(/inspectorNumber: '([^']+)'/g, siteTs),
  ...pick(/businessId: '([^']+)'/g, siteTs),
  ...pick(/time: '([^']+)'/g, siteTs),
  ...pick(/from: (\d{3,})/g, pricingTs).flatMap((n) => [n, Number(n).toLocaleString('en-US')]),
].filter((v) => v && v.length >= 4);

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|ts|tsx|js|mjs|md)$/.test(name) && !owners.includes(p)) files.push(p);
  }
};
walk(src);

const problems = [];
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const value of guarded) {
    if (text.includes(value)) problems.push(`${relative(root, file).split(sep).join('/')}: "${value}"`);
  }
}

if (problems.length) {
  console.error('Single-source check failed. These values belong in src/config only:');
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`Single-source check passed (${guarded.length} values, ${files.length} files).`);
