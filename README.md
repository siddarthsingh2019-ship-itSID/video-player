# video-player

## Repository metadata and validation

This repository now includes a minimal Node.js-based validation toolchain so contributors and automated review systems can discover the expected checks directly from the root metadata files.

### Files included

- `package.json` defines the project metadata, supported Node.js version, development dependencies, and named scripts.
- `eslint.config.js` configures ESLint for the repository's JavaScript-based tooling files and tests.
- `tsconfig.json` provides a TypeScript-aware project definition for static validation via `tsc --noEmit`.
- `.prettierrc.json` defines the formatting rules used by the repository checks.
- `tests/repository-metadata.test.js` verifies that the metadata files and expected script names remain present.

### Install dependencies

```bash
npm install
```

Expected result:
- npm installs the development dependencies listed in `package.json` and creates `package-lock.json`.

### Available commands

| Command | Purpose | Expected successful output |
| --- | --- | --- |
| `npm run lint` | Runs ESLint across the repository. | ESLint exits with status code `0` and prints no error diagnostics. |
| `npm run format` | Applies Prettier formatting to tracked repository files. | Prettier reports the files it formatted. |
| `npm run format:check` | Verifies formatting without modifying files. | Prettier reports that all checked files match the expected format. |
| `npm run typecheck` | Runs `tsc --noEmit` using `tsconfig.json`. | TypeScript exits with status code `0` and emits no type errors. |
| `npm run test` | Executes the repository metadata smoke tests with Node's built-in test runner. | Node reports passing tests for the metadata files and script coverage assertions. |
| `npm run validate` | Runs the full static review sequence in the expected order. | All validation steps complete successfully with exit status `0`. |

### Intended validation flow

For local verification and future CI setup, run the combined validation command:

```bash
npm run validate
```

This should complete the following sequence successfully:
1. `npm run lint`
2. `npm run format:check`
3. `npm run typecheck`
4. `npm run test`
