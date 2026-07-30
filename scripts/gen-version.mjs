// Copies src/version.json -> public/version.json at build time, so the deployed
// site always serves the version the running bundle was built from. The app
// fetches /version.json and compares it to its baked-in version to detect updates.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('../src/version.json', import.meta.url));
const dest = fileURLToPath(new URL('../public/version.json', import.meta.url));
writeFileSync(dest, readFileSync(src));
console.log('version.json synced to public/');
