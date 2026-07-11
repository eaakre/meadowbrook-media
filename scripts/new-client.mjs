#!/usr/bin/env node
import { existsSync, cpSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.resolve(fileURLToPath(import.meta.url), "../..");
const templateDir = path.join(rootDir, "templates", "starter-template");

const name = process.argv[2];

if (!name) {
  console.error("Usage: npm run new-client -- <client-folder-name>");
  process.exit(1);
}

const destDir = path.join(rootDir, "clients", name);

if (existsSync(destDir)) {
  console.error(`clients/${name} already exists.`);
  process.exit(1);
}

cpSync(templateDir, destDir, {
  recursive: true,
  filter: (src) => !src.includes(`${path.sep}node_modules`) && !src.includes(`${path.sep}.next`),
});

const pkgPath = path.join(destDir, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
pkg.name = name;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`Created clients/${name} from templates/starter-template.`);
console.log(`Next steps:`);
console.log(`  1. cd clients/${name} && cp .env.local.example .env.local`);
console.log(`  2. Fill in the Sanity project ID/dataset for this client.`);
console.log(`  3. npm install (from repo root) to link @meadowbrook/ui-core.`);
console.log(`  4. npm run dev --workspace=${name}`);
