import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { basename, extname, join } from 'node:path';

const root = process.cwd();
const mainPath = join(root, 'assets', 'main-BO9xa-SQ.js');
const source = readFileSync(mainPath, 'utf8');
const marker = 'm.f ||= [';
const start = source.indexOf(marker);
if (start === -1) throw new Error('Could not find __vite__mapDeps asset array');
let i = start + marker.length - 1;
let depth = 0;
let inString = false;
let quote = '';
let escaped = false;
let end = -1;
for (; i < source.length; i += 1) {
  const ch = source[i];
  if (inString) {
    if (escaped) escaped = false;
    else if (ch === '\\') escaped = true;
    else if (ch === quote) inString = false;
    continue;
  }
  if (ch === '"' || ch === "'") {
    inString = true;
    quote = ch;
    continue;
  }
  if (ch === '[') depth += 1;
  if (ch === ']') {
    depth -= 1;
    if (depth === 0) {
      end = i + 1;
      break;
    }
  }
}
if (end === -1) throw new Error('Could not parse asset array');
const assetArray = Function(`return ${source.slice(start + marker.length - 1, end)}`)();
const items = assetArray.map((path, index) => {
  const name = basename(path);
  const ext = extname(name).slice(1);
  let group = 'shared';
  if (/vendor|modulepreload|workbox/.test(name)) group = 'vendor-runtime';
  else if (/Screen|App|Tab|Modal|Renderer|Settings|Receiver|Monitor/.test(name)) group = 'feature-ui';
  else if (/Service|service|Scheduler|Store|Backup|Diagnostics|Compressor|Generator|Prompts|Defaults|Integration|Sync/.test(name)) group = 'service';
  else if (ext === 'css') group = 'style';
  return { index, path, name, ext, group };
});
const byGroup = items.reduce((acc, item) => {
  (acc[item.group] ||= []).push(item);
  return acc;
}, {});
const summary = {
  source: 'assets/main-BO9xa-SQ.js',
  total: items.length,
  counts: Object.fromEntries(Object.entries(byGroup).map(([key, value]) => [key, value.length])),
  items,
};
mkdirSync(join(root, 'docs'), { recursive: true });
writeFileSync(join(root, 'docs', 'bundle-inventory.json'), `${JSON.stringify(summary, null, 2)}\n`);
console.log(`Wrote docs/bundle-inventory.json with ${items.length} assets`);
