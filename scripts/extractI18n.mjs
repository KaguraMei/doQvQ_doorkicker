import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function extractBalancedObject(source, marker) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) throw new Error(`Missing marker: ${marker}`);
  const start = source.indexOf('{', markerIndex);
  if (start === -1) throw new Error(`Missing object after marker: ${marker}`);
  let depth = 0;
  let inString = false;
  let quote = '';
  let escaped = false;
  for (let i = start; i < source.length; i += 1) {
    const ch = source[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) inString = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      quote = ch;
      continue;
    }
    if (ch === '{') depth += 1;
    if (ch === '}') {
      depth -= 1;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error(`Unclosed object after marker: ${marker}`);
}

const root = process.cwd();
const nativePath = join(root, 'assets', 'native-pet-CTNtZgMA.js');
const source = readFileSync(nativePath, 'utf8');
const localeObjectLiteral = extractBalancedObject(source, 'const On =');
const locales = Function(`return ${localeObjectLiteral}`)();

const outDir = join(root, 'src', 'i18n', 'locales');
mkdirSync(outDir, { recursive: true });
for (const [locale, table] of Object.entries(locales)) {
  writeFileSync(
    join(outDir, `${locale}.js`),
    `// Extracted from assets/native-pet-CTNtZgMA.js.\nconst ${locale.replace(/[^a-zA-Z0-9_$]/g, '_')} = ${JSON.stringify(table, null, 2)};\n\nexport default ${locale.replace(/[^a-zA-Z0-9_$]/g, '_')};\n`
  );
}

const lazyPacks = ['zh', 'en'];
for (const locale of lazyPacks) {
  const existing = join(outDir, `${locale}.js`);
  if (!existsSync(existing)) {
    writeFileSync(existing, `// Placeholder locale pack. The shipped mirror did not include assets/${locale}-*.js in this checkout.\nexport default {};\n`);
  }
}

const keyCounts = Object.fromEntries(Object.entries(locales).map(([locale, table]) => [locale, Object.keys(table).length]));
writeFileSync(join(root, 'docs', 'i18n-inventory.json'), `${JSON.stringify({ source: 'assets/native-pet-CTNtZgMA.js', keyCounts }, null, 2)}\n`);
console.log(`Extracted locales: ${Object.entries(keyCounts).map(([k, v]) => `${k}=${v}`).join(', ')}`);
