const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const inputDir = 'public';
const outputDir = 'compressed';

async function compressImages() {
  const files = await glob(`${inputDir}/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}`);

  for (const file of files) {
    const relativePath = path.relative(inputDir, file);
    const outputPath = path.join(outputDir, relativePath);
    const outputFolder = path.dirname(outputPath);

    // Create output directory if it doesn't exist
    fs.mkdirSync(outputFolder, { recursive: true });

    try {
      await sharp(file)
        .resize(2000, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: 80, progressive: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);

      console.log(`✓ Processed: ${relativePath}`);
    } catch (err) {
      console.error(`✗ Failed: ${relativePath}`, err.message);
    }
  }

  console.log('\nDone! All images compressed.');
}

compressImages();
