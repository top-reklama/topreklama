// Writes a WebP sibling for every large PNG/JPEG under public/assets that the site displays.
// Retained "-original" photographs are left alone. Usage: node scripts/optimize-images.mjs [minKB]
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../public/assets/", import.meta.url));
const minBytes = Number(process.argv[2] ?? 250) * 1024;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let before = 0, after = 0;
for await (const file of walk(root)) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext) || /-original\.[a-z]+$/.test(file)) continue;
  const { size } = await stat(file);
  if (size < minBytes) continue;
  const out = file.slice(0, -ext.length) + ".webp";
  const image = sharp(file);
  const { hasAlpha, width } = await image.metadata();
  await image
    .resize({ width: Math.min(width, 2000), withoutEnlargement: true })
    .webp({ quality: hasAlpha ? 90 : 82, alphaQuality: 95, effort: 6, smartSubsample: true })
    .toFile(out);
  const { size: outSize } = await stat(out);
  before += size; after += outSize;
  console.log(`${file.slice(root.length)}  ${(size / 1e6).toFixed(2)}MB -> ${(outSize / 1e6).toFixed(2)}MB`);
}
console.log(`Total ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB`);
