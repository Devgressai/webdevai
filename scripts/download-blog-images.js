const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// Extract all unique Unsplash URLs from blog pages
function extractUnsplashUrls() {
  const blogDir = path.join(__dirname, '../app/blog');
  const urls = new Set();
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\s"']+/g);
        
        if (matches) {
          matches.forEach(url => {
            // Extract the base photo ID
            const photoIdMatch = url.match(/photo-(\d+)/);
            if (photoIdMatch) {
              urls.add({
                fullUrl: url,
                photoId: photoIdMatch[1],
                originalUrl: url.split('?')[0] // Base URL without params
              });
            }
          });
        }
      }
    }
  }
  
  scanDirectory(blogDir);
  return Array.from(urls);
}

// Download image and convert to WebP
function downloadAndConvert(imageData, outputDir) {
  return new Promise((resolve, reject) => {
    const { photoId, originalUrl } = imageData;
    const tempFile = path.join(outputDir, `${photoId}.jpg`);
    const webpFile = path.join(outputDir, `${photoId}.webp`);
    
    // Skip if already exists
    if (fs.existsSync(webpFile)) {
      console.log(`✓ Already exists: ${photoId}.webp`);
      resolve(webpFile);
      return;
    }
    
    console.log(`Downloading: ${photoId}...`);
    
    // Download the image
    const file = fs.createWriteStream(tempFile);
    https.get(`${originalUrl}?w=1200&q=85&auto=format&fit=crop`, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        
        // Convert to WebP using sharp (if available) or cwebp
        try {
          // Try using sharp first (faster, better quality)
          try {
            const sharp = require('sharp');
            sharp(tempFile)
              .webp({ quality: 85 })
              .toFile(webpFile)
              .then(() => {
                fs.unlinkSync(tempFile); // Delete temp file
                console.log(`✓ Converted: ${photoId}.webp`);
                resolve(webpFile);
              })
              .catch(err => {
                console.error(`Error converting with sharp: ${err.message}`);
                // Fallback to cwebp
                convertWithCwebp(tempFile, webpFile, resolve);
              });
          } catch (e) {
            // Sharp not available, use cwebp
            convertWithCwebp(tempFile, webpFile, resolve);
          }
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', (err) => {
      fs.unlinkSync(tempFile);
      reject(err);
    });
  });
}

function convertWithCwebp(tempFile, webpFile, resolve) {
  try {
    // Try cwebp command (requires webp tools installed)
    execSync(`cwebp -q 85 "${tempFile}" -o "${webpFile}"`, { stdio: 'ignore' });
    fs.unlinkSync(tempFile);
    console.log(`✓ Converted: ${path.basename(webpFile)}`);
    resolve(webpFile);
  } catch (err) {
    // If cwebp fails, just copy the jpg (better than nothing)
    console.warn(`⚠ Could not convert to WebP, keeping JPG: ${path.basename(tempFile)}`);
    fs.renameSync(tempFile, webpFile.replace('.webp', '.jpg'));
    resolve(webpFile.replace('.webp', '.jpg'));
  }
}

// Create mapping of old URLs to new local paths
function createImageMapping(images, outputDir) {
  const mapping = {};
  
  images.forEach(img => {
    const filename = `${img.photoId}.webp`;
    const localPath = `/images/blog/${filename}`;
    mapping[img.fullUrl] = localPath;
    
    // Also map variations of the URL
    const baseUrl = img.originalUrl;
    mapping[baseUrl] = localPath;
    mapping[`${baseUrl}?w=1200&q=80&auto=format&fit=crop`] = localPath;
    mapping[`${baseUrl}?w=1200&q=85&auto=format&fit=crop`] = localPath;
  });
  
  return mapping;
}

// Main execution
async function main() {
  console.log('🔍 Scanning blog pages for Unsplash images...\n');
  
  const images = extractUnsplashUrls();
  console.log(`Found ${images.length} unique images\n`);
  
  const outputDir = path.join(__dirname, '../public/images/blog');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('📥 Downloading and converting images...\n');
  
  // Download all images
  for (let i = 0; i < images.length; i++) {
    try {
      await downloadAndConvert(images[i], outputDir);
    } catch (err) {
      console.error(`✗ Failed to download ${images[i].photoId}: ${err.message}`);
    }
    
    // Small delay to avoid rate limiting
    if (i < images.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  console.log('\n✅ Download complete!');
  console.log(`\n📝 Image mapping created. Next step: Update blog pages with local paths.`);
  
  // Create mapping file for reference
  const mapping = createImageMapping(images, outputDir);
  fs.writeFileSync(
    path.join(__dirname, '../blog-image-mapping.json'),
    JSON.stringify(mapping, null, 2)
  );
  
  console.log('\n💡 Mapping saved to blog-image-mapping.json');
}

main().catch(console.error);

