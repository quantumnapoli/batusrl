// Genera le immagini del sito.
// - Se in src-photos/ ci sono JPG/PNG (le foto originali del sito), li converte
//   in WebP + AVIF a 800 / 1600 px di larghezza in assets/img/<nome>-{800,1600}.{webp,avif}
// - Per i nomi elencati in PLACEHOLDERS che non hanno una foto sorgente, genera
//   un segnaposto tonale (da sostituire con le foto reali).
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const OUT = 'assets/img';
const SRC = 'src-photos';
const WIDTHS = [800, 1600];

// nome file (senza estensione) -> [colore chiaro, colore scuro, ratio h/w]
const PLACEHOLDERS = {
  'hero-1': ['#9aa58a', '#3f4a38', 0.66],
  'hero-2': ['#c9bfa6', '#6e6650', 0.66],
  'hero-3': ['#8f9c96', '#31403b', 0.66],
  'hero-4': ['#b6ad94', '#54503f', 0.66],
  'archivio-01': ['#a9ad93', '#454a3a', 0.66],
  'archivio-02': ['#bcb7a3', '#5b5846', 0.75],
  'archivio-03': ['#95a091', '#3a4439', 1.25],
  'archivio-04': ['#b3ad97', '#4f4c3d', 1.25],
  'archivio-05': ['#a0a68f', '#454a3a', 0.66],
  'molosiglio-01': ['#a6b094', '#3e4a36', 0.66],
  'molosiglio-02': ['#c2b9a1', '#5f5843', 0.75],
  'molosiglio-03': ['#93a08c', '#38433a', 1.25],
  'molosiglio-04': ['#b0ab93', '#4c4a3a', 1.25],
  'molosiglio-05': ['#9ea88f', '#414b3a', 0.66],
  'molosiglio-06': ['#c7c0ab', '#66604c', 0.75],
  'terrazza-01': ['#b7b49b', '#55533f', 0.66],
  'terrazza-02': ['#9faa93', '#3f4a3a', 0.75],
  'terrazza-03': ['#c5bfa8', '#605b47', 1.25],
  'terrazza-04': ['#a3a891', '#474b3b', 0.75],
  'secco-01': ['#c0b79e', '#5c5744', 0.66],
  'secco-02': ['#98a38e', '#3b453a', 0.75],
  'secco-03': ['#b9b19a', '#524f3f', 1.25],
  'secco-04': ['#a5ad96', '#454b3c', 1.25],
  'secco-05': ['#c6bda6', '#65604a', 0.66],
  'studio-01': ['#a8ae98', '#464b3c', 1.25],
};


function placeholderSvg(w, h, light, dark, seed) {
  // pseudo-random ma deterministico per nome
  let s = 0; for (const c of seed) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  const r = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 2 ** 32; };
  let blobs = '';
  for (let i = 0; i < 7; i++) {
    const cx = (r() * 1.2 - 0.1) * w, cy = (r() * 1.2 - 0.1) * h;
    const rx = (0.25 + r() * 0.4) * w, ry = (0.2 + r() * 0.4) * h;
    const op = 0.25 + r() * 0.4;
    blobs += `<ellipse cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" rx="${rx.toFixed(0)}" ry="${ry.toFixed(0)}" fill="${i % 2 ? light : dark}" opacity="${op.toFixed(2)}" filter="url(#b)"/>`;
  }
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="${light}"/><stop offset="1" stop-color="${dark}"/></linearGradient>
    <filter id="b"><feGaussianBlur stdDeviation="${(w * 0.08).toFixed(0)}"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>${blobs}
</svg>`);
}

async function writeVariants(name, input) {
  for (const w of WIDTHS) {
    const base = sharp(input).resize({ width: w, withoutEnlargement: false });
    await base.clone().webp({ quality: 78 }).toFile(`${OUT}/${name}-${w}.webp`);
    await base.clone().avif({ quality: 50 }).toFile(`${OUT}/${name}-${w}.avif`);
  }
}

await mkdir(OUT, { recursive: true });
await mkdir(SRC, { recursive: true });
const sources = new Set();
for (const f of await readdir(SRC)) {
  const ext = path.extname(f).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
  const name = path.basename(f, ext);
  sources.add(name);
  await writeVariants(name, path.join(SRC, f));
  console.log('foto   ', name);
}
for (const [name, [light, dark, ratio]] of Object.entries(PLACEHOLDERS)) {
  if (sources.has(name)) continue;
  if (existsSync(`${OUT}/${name}-1600.webp`) && process.argv.includes('--keep')) continue;
  const w = 1600, h = Math.round(w * ratio);
  await writeVariants(name, placeholderSvg(w, h, light, dark, name));
  console.log('segnaposto', name);
}
