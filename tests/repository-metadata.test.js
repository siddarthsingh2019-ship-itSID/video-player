import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

test('repository metadata files exist', () => {
  assert.equal(existsSync(new URL('../eslint.config.js', import.meta.url)), true);
  assert.equal(existsSync(new URL('../tsconfig.json', import.meta.url)), true);
  assert.equal(existsSync(new URL('../.prettierrc.json', import.meta.url)), true);
});

test('package scripts cover validation commands', () => {
  assert.deepEqual(Object.keys(packageJson.scripts).sort(), [
    'format',
    'format:check',
    'lint',
    'test',
    'typecheck',
    'validate'
  ]);
});
