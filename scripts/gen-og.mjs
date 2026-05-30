// Generates public/og.png (1200×630) — the social-share card.
// On-brand: deep-violet field, the three-ring mark, wordmark + hero tagline.
// Run with: npm run gen:og
//
// Rasterizes a hand-authored SVG via sharp. Text uses a generic serif/mono
// fallback (the exact IBM Plex render isn't critical at OG scale). Re-run and
// commit public/og.png whenever the card copy changes.

import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public");
mkdirSync(outDir, { recursive: true });

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="38%" cy="42%" r="75%">
      <stop offset="0%" stop-color="#1C1033"/>
      <stop offset="80%" stop-color="#13092A"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F5A62322"/>
      <stop offset="100%" stop-color="#F5A62300"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <ellipse cx="270" cy="315" rx="340" ry="300" fill="url(#glow)"/>

  <!-- three-ring mark -->
  <g transform="translate(270 315)">
    <circle r="190" stroke="#F4EFE6" stroke-width="1.6" opacity="0.30" fill="none"/>
    <circle r="125" stroke="#F4EFE6" stroke-width="1.6" opacity="0.55" fill="none"/>
    <circle r="62" stroke="#F4EFE6" stroke-width="2" opacity="0.95" fill="none"/>
    <circle r="9" fill="#F5A623"/>
    <text x="0" y="-168" text-anchor="middle" fill="#F4EFE6" opacity="0.5" font-family="monospace" font-size="15" letter-spacing="4">WIRE</text>
    <text x="0" y="-103" text-anchor="middle" fill="#F4EFE6" opacity="0.5" font-family="monospace" font-size="15" letter-spacing="4">NODE</text>
    <text x="0" y="-40" text-anchor="middle" fill="#F4EFE6" opacity="0.5" font-family="monospace" font-size="15" letter-spacing="4">CELL</text>
  </g>

  <!-- wordmark + tagline -->
  <g transform="translate(580 250)">
    <text x="0" y="0" fill="#F4EFE6" font-family="Georgia, 'Times New Roman', serif" font-size="74" letter-spacing="-1">Cell · Node · Wire</text>
    <text x="2" y="62" fill="#F5A623" font-family="monospace" font-size="27" letter-spacing="0.5">The agent internet, on your terms.</text>
    <text x="2" y="120" fill="#F4EFE6" opacity="0.78" font-family="monospace" font-size="22">Cells talk. Nodes speak.</text>
    <text x="2" y="152" fill="#F4EFE6" opacity="0.78" font-family="monospace" font-size="22">The Wire remembers nothing.</text>
    <text x="2" y="232" fill="#F4EFE6" opacity="0.5" font-family="monospace" font-size="18" letter-spacing="3">GLOBALNODE.AI · NO CUSTODIAN · NO TRACKING</text>
  </g>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(join(outDir, "og.png"), png);
console.log(`Wrote public/og.png (${png.length} bytes, ${W}x${H})`);
