const sharp = require('sharp');
const path = require('path');

const sizes = [
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

const svgPath = path.join(__dirname, '../public/images/logo/logo-icon.svg');
const outputDir = path.join(__dirname, '../public/icons');

async function generateIcons() {
  for (const { name, size } of sizes) {
    const outputPath = path.join(outputDir, name);
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`Generated: ${name} (${size}x${size})`);
  }
  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
