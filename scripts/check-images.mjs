// Verifies every image path referenced in src/config exists in /public. Runs before `npm run build`.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dir = join(root, "src/config");
const missing = [];
let count = 0;

for (const f of readdirSync(dir)) {
  const text = readFileSync(join(dir, f), "utf8");
  for (const [, p] of text.matchAll(/(?:src|poster):\s*"(\/[^"]+)"/g)) {
    count++;
    if (!existsSync(join(root, "public", decodeURIComponent(p)))) missing.push(`${f}: ${p}`);
  }
}

if (missing.length) {
  console.error("Missing images:\n  " + missing.join("\n  "));
  process.exit(1);
}
console.log(`check-images: all ${count} referenced images exist.`);
