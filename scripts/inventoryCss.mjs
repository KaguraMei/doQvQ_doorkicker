import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const assetsDir = join(root, 'assets');
const cssFiles = readdirSync(assetsDir).filter((name) => name.endsWith('.css'));
const inventory = cssFiles.map((file) => {
  const source = readFileSync(join(assetsDir, file), 'utf8');
  const selectors = Array.from(source.matchAll(/([^{}@][^{}]*)\{/g))
    .map((match) => match[1].trim())
    .filter(Boolean)
    .slice(0, 200);
  const urls = Array.from(source.matchAll(/url\(([^)]+)\)/g)).map((match) => match[1].replace(/^['"]|['"]$/g, ''));
  return {
    file: `assets/${file}`,
    bytes: Buffer.byteLength(source),
    selectorSample: selectors,
    selectorSampleTruncated: selectors.length >= 200,
    urls: Array.from(new Set(urls)),
  };
});
mkdirSync(join(root, 'docs'), { recursive: true });
writeFileSync(join(root, 'docs', 'css-inventory.json'), `${JSON.stringify(inventory, null, 2)}\n`);
console.log(`Wrote docs/css-inventory.json for ${inventory.length} CSS files`);
