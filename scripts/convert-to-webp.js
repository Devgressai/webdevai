const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// List of images to convert
const imagesToConvert = [
  'og-image.jpg',
  'og-contact.jpg', 
  'og-pricing.jpg',
  'og-web-development.jpg',
  'og-wordpress-development.jpg',
  'og-seo-services.jpg',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'mstile-150x150.png'
];

// Unsplash images to download and convert
const unsplashImages = [
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center',
    name: 'hero-team-collaboration.webp',
    width: 800,
    height: 600
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center',
    name: 'hero-analytics.webp',
    width: 1200,
    height: 600
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center',
    name: 'hero-data-analysis.webp',
    width: 1920,
    height: 1080
  },
  {
    url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&crop=center',
    name: 'hero-business-meeting.webp',
    width: 1920,
    height: 1080
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=2070&h=1200&fit=crop&crop=center',
    name: 'hero-office.webp',
    width: 2070,
    height: 1200
  }
];

async function convertLocalImages() {
  console.log('🔄 Converting local images to WebP...');
  
  for (const imageName of imagesToConvert) {
    const inputPath = path.join(__dirname, '..', 'public', imageName);
    const outputPath = path.join(__dirname, '..', 'public', imageName.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const webpSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${imageName} → ${path.basename(outputPath)} (${savings}% smaller)`);
      } catch (error) {
        console.error(`❌ Failed to convert ${imageName}:`, error.message);
      }
    } else {
      console.log(`⚠️  ${imageName} not found, skipping...`);
    }
  }
}

async function downloadAndConvertUnsplashImages() {
  console.log('\n🔄 Downloading and converting Unsplash images to WebP...');
  
  const https = require('https');
  const fs = require('fs');
  
  for (const image of unsplashImages) {
    const outputPath = path.join(__dirname, '..', 'public', 'images', image.name);
    
    // Create images directory if it doesn't exist
    const imagesDir = path.dirname(outputPath);
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    try {
      await new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);
        https.get(image.url, (response) => {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      });
      
      // Convert to WebP
      await sharp(outputPath)
        .resize(image.width, image.height)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      console.log(`✅ Downloaded and converted: ${image.name}`);
    } catch (error) {
      console.error(`❌ Failed to download ${image.name}:`, error.message);
    }
  }
}

async function generateImageOptimizationReport() {
  console.log('\n📊 Image Optimization Report:');
  console.log('================================');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  let totalOriginalSize = 0;
  let totalWebpSize = 0;
  let webpCount = 0;
  
  // Check local images
  for (const imageName of imagesToConvert) {
    const originalPath = path.join(publicDir, imageName);
    const webpPath = path.join(publicDir, imageName.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    if (fs.existsSync(originalPath) && fs.existsSync(webpPath)) {
      const originalSize = fs.statSync(originalPath).size;
      const webpSize = fs.statSync(webpPath).size;
      
      totalOriginalSize += originalSize;
      totalWebpSize += webpSize;
      webpCount++;
      
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      console.log(`${imageName}: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    }
  }
  
  // Check Unsplash images
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    for (const file of files) {
      if (file.endsWith('.webp')) {
        const filePath = path.join(imagesDir, file);
        const size = fs.statSync(filePath).size;
        totalWebpSize += size;
        webpCount++;
        console.log(`${file}: ${(size / 1024).toFixed(1)}KB`);
      }
    }
  }
  
  if (webpCount > 0) {
    const totalSavings = ((totalOriginalSize - totalWebpSize) / totalOriginalSize * 100).toFixed(1);
    console.log('\n📈 Summary:');
    console.log(`Total original size: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
    console.log(`Total WebP size: ${(totalWebpSize / 1024).toFixed(1)}KB`);
    console.log(`Total savings: ${totalSavings}%`);
    console.log(`Images converted: ${webpCount}`);
  }
}

async function main() {
  try {
    await convertLocalImages();
    await downloadAndConvertUnsplashImages();
    await generateImageOptimizationReport();
    console.log('\n🎉 Image conversion completed successfully!');
  } catch (error) {
    console.error('❌ Error during conversion:', error);
  }
}

main();
