const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, 'public');
const outputDir = '/Users/george/Desktop/Webvello';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image extensions to convert (excluding PNG since we'll just copy those)
const imageExtensions = ['.jpg', '.jpeg', '.webp', '.svg'];

// Function to find all image files recursively
function findImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext) || ext === '.png') {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Find all image files
console.log('Finding all image files...');
const imageFiles = findImageFiles(sourceDir);
console.log(`Found ${imageFiles.length} image files\n`);

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

// Process each image
async function processImages() {
  for (let index = 0; index < imageFiles.length; index++) {
    const imagePath = imageFiles[index];
    const relativePath = path.relative(sourceDir, imagePath);
    const ext = path.extname(imagePath).toLowerCase();
    const fileName = path.basename(imagePath, ext);
    
    // Preserve directory structure
    const relativeDir = path.dirname(relativePath);
    let outputPath;
    
    if (relativeDir !== '.') {
      const outputSubDir = path.join(outputDir, relativeDir);
      if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
      }
      outputPath = path.join(outputSubDir, `${fileName}.png`);
    } else {
      outputPath = path.join(outputDir, `${fileName}.png`);
    }
    
    try {
      // If it's already PNG, just copy it
      if (ext === '.png') {
        fs.copyFileSync(imagePath, outputPath);
        console.log(`[${index + 1}/${imageFiles.length}] Copied PNG: ${relativePath}`);
        skipCount++;
      } else {
        // Convert to PNG using sharp
        await sharp(imagePath)
          .png()
          .toFile(outputPath);
        console.log(`[${index + 1}/${imageFiles.length}] Converted: ${relativePath} -> ${path.relative(outputDir, outputPath)}`);
        successCount++;
      }
    } catch (error) {
      console.error(`[${index + 1}/${imageFiles.length}] Error processing ${relativePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n✅ Conversion complete!`);
  console.log(`   Successfully converted: ${successCount}`);
  console.log(`   Copied PNG files: ${skipCount}`);
  console.log(`   Errors: ${errorCount}`);
  console.log(`   All files saved to: ${outputDir}`);
}

processImages().catch(console.error);
