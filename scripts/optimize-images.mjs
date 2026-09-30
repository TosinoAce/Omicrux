// Converts the full-size originals in raw-images/ into compressed WebP files in
// public/images/. Run with `npm run optimize-images` after adding or changing an image.
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const SRC = "raw-images";
const OUT = "public/images";

// widths: one output file per width, named <name>-<width>.webp
const images = [
  { src: "hero3.jpg", name: "hero", widths: [600, 1200] },
  { src: "AboutBG.jpg", name: "about-bg", widths: [960, 1920] },
  { src: "servicesBG.jpg", name: "services-bg", widths: [960, 1920] },
  { src: "contactBG.jpg", name: "contact-bg", widths: [960, 1920] },
  { src: "hero1.jpg", name: "blog-1", widths: [800, 1400] },
  { src: "hero2.jpg", name: "blog-2", widths: [800, 1400] },
  { src: "pexels-ivan-samkov-8117415.jpg", name: "blog-3", widths: [800, 1400] },
  { src: "pexels-rdne-7647996.jpg", name: "blog-4", widths: [800, 1400] },
  { src: "omicrux-logo-white.png", name: "logo-white", widths: [600] },
];

await mkdir(OUT, { recursive: true });

for (const { src, name, widths } of images) {
  for (const width of widths) {
    const file = `${OUT}/${name}-${width}.webp`;
    const info = await sharp(`${SRC}/${src}`)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(file);
    console.log(`${file}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
  }
}

// ===== Social share images (1200x630 JPEG: the format every platform accepts) =====
const OG = "public/og";
await mkdir(OG, { recursive: true });

const logo = await sharp(`${SRC}/omicrux-logo-white.png`).resize({ width: 620 }).toBuffer();
const tagline = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect x="290" y="392" width="620" height="6" rx="3" fill="#87e64b"/>
  <text x="600" y="462" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-size="34" font-weight="700" fill="#fafafa" letter-spacing="1">PR &amp; BRANDING AGENCY</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#1a1919" } })
  .composite([{ input: logo, top: 205, left: 290 }, { input: tagline, top: 0, left: 0 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(`${OG}/og-default.jpg`);
console.log(`${OG}/og-default.jpg`);

// One per blog post, cropped from its cover image (named after the post's `image`).
for (const { src, name } of images.filter((image) => image.name.startsWith("blog-"))) {
  await sharp(`${SRC}/${src}`)
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(`${OG}/${name}.jpg`);
  console.log(`${OG}/${name}.jpg`);
}

// ===== App icons + favicon =====
const ICONS = "public/icons";
await mkdir(ICONS, { recursive: true });
const icon = (size, file, background = { r: 0, g: 0, b: 0, alpha: 0 }) =>
  sharp("public/small-logo.png")
    .resize(size, size, { fit: "contain", background })
    .flatten(background.alpha === 0 ? false : { background })
    .png()
    .toFile(file);
await icon(192, `${ICONS}/icon-192.png`);
await icon(512, `${ICONS}/icon-512.png`);
await icon(180, `${ICONS}/apple-touch-icon.png`, { r: 255, g: 255, b: 255, alpha: 1 });

// favicon.ico holding a single 32x32 PNG (supported by all current browsers).
const png32 = await sharp("public/small-logo.png").resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png32.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
await writeFile("public/favicon.ico", Buffer.concat([header, png32]));
console.log(`${ICONS}/*.png, public/favicon.ico`);
