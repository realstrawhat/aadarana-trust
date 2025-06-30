const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_DIR = path.join(__dirname, 'aadarana-trust', 'public', 'images');
const exts = ['.jpg', '.jpeg', '.png'];

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!exts.includes(ext)) return;
  const webpPath = filePath.replace(ext, '.webp');
  if (fs.existsSync(webpPath)) return; // Skip if .webp already exists
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log(`Converted: ${filePath} -> ${webpPath}`);
  } catch (err) {
    console.error(`Failed to convert ${filePath}:`, err.message);
  }
}

function walkDir(dir, cb) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, cb);
    } else {
      cb(fullPath);
    }
  });
}

walkDir(IMAGE_DIR, (filePath) => {
  if (!filePath.endsWith('.webp')) {
    convertImage(filePath);
  }
}); 