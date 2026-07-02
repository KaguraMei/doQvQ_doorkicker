import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const assetsDir = join(root, 'assets');
const chinese = /[㐀-鿿]/;
const stringStart = /['"`]/;
const files = readdirSync(assetsDir).filter((name) => name.endsWith('.js'));
const results = [];

function collectChineseStringLiterals(source) {
  const matches = [];
  let quote = null;
  let value = '';
  let startLine = 1;
  let line = 1;
  let escaped = false;

  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (ch === '\n') line += 1;

    if (!quote) {
      if (stringStart.test(ch)) {
        quote = ch;
        value = '';
        startLine = line;
        escaped = false;
      }
      continue;
    }

    if (escaped) {
      value += ch === 'n' || ch === 'r' || ch === 't' ? ' ' : ch;
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (ch === quote) {
      if (chinese.test(value)) {
        matches.push({
          line: startLine,
          value: value.length > 160 ? `${value.slice(0, 157)}...` : value,
        });
      }
      quote = null;
      value = '';
      continue;
    }

    value += ch;
  }

  return matches;
}

for (const file of files) {
  const source = readFileSync(join(assetsDir, file), 'utf8');
  const matches = collectChineseStringLiterals(source);
  if (matches.length) results.push({ file: `assets/${file}`, count: matches.length, matches });
}

mkdirSync(join(root, 'docs'), { recursive: true });
writeFileSync(join(root, 'docs', 'hardcoded-strings.json'), `${JSON.stringify(results, null, 2)}\n`);
console.log(`Wrote docs/hardcoded-strings.json for ${results.length} JS chunks`);
