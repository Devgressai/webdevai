const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
// Try multiple possible source file formats (prioritize logo files)
const POSSIBLE_SOURCES = [
  path.join(__dirname, '..', 'public', 'favicon-source.png'),
  path.join(__dirname, '..', 'public', 'webvello_logo.jpg'),
  path.join(__dirname, '..', 'public', 'logo.png'),
  path.join(__dirname, '..', 'public', 'favicon-source.jpg'),
  path.join(__dirname, '..', 'public', 'favicon-source.jpeg'),
  path.join(__dirname, '..', 'public', 'favicon-source.svg'),
  path.join(__dirname, '..', 'public', 'favicon-source.webp'),
];

const OUTPUT_DIR = path.join(__dirname, '..', 'public');

// Find the first existing source file
function findSourceImage() {
  for (const source of POSSIBLE_SOURCES) {
    if (fs.existsSync(source)) {
      return source;
    }
  }
  return null;
}

// Favicon sizes to generate
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 150, name: 'mstile-150x150.png' }
];

async function generateFavicons() {
  console.log('🎨 Generating favicon package from source image...\n');
  
  // Find source image
  const SOURCE_IMAGE = findSourceImage();
  
  // Check if source image exists
  if (!SOURCE_IMAGE) {
    console.error('❌ Source image not found!');
    console.error('   Please save your blue "W" image as one of:');
    POSSIBLE_SOURCES.forEach(src => {
      console.error(`   - ${path.basename(src)}`);
    });
    console.error('   Supported formats: PNG, JPG, SVG, WebP');
    process.exit(1);
  }
  
  console.log(`📸 Using source image: ${path.basename(SOURCE_IMAGE)}\n`);

  try {
    // Generate all PNG sizes
    console.log('📐 Generating favicon sizes...');
    for (const { size, name } of faviconSizes) {
      const outputPath = path.join(OUTPUT_DIR, name);
      
      await sharp(SOURCE_IMAGE)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png()
        .toFile(outputPath);
      
      const fileSize = (fs.statSync(outputPath).size / 1024).toFixed(2);
      console.log(`   ✅ ${name} (${size}x${size}) - ${fileSize} KB`);
    }

    // Generate favicon.ico (16x16 and 32x32 combined)
    console.log('\n📦 Creating favicon.ico...');
    const favicon16 = await sharp(SOURCE_IMAGE)
      .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    
    const favicon32 = await sharp(SOURCE_IMAGE)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    // For ICO file, we'll use a simple approach - create a multi-size PNG
    // Note: True ICO format requires special handling, but most browsers accept PNG in ICO wrapper
    // Using sharp to create a basic ICO-compatible format
    const icoPath = path.join(OUTPUT_DIR, 'favicon.ico');
    
    // Create ICO file - using 32x32 as the main size (most common)
    await sharp(SOURCE_IMAGE)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(icoPath.replace('.ico', '-temp.png'));
    
    // Copy the 32x32 PNG as favicon.ico (browsers will accept this)
    fs.copyFileSync(
      path.join(OUTPUT_DIR, 'favicon-32x32.png'),
      icoPath
    );
    
    // Clean up temp file
    const tempPath = icoPath.replace('.ico', '-temp.png');
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    
    const icoSize = (fs.statSync(icoPath).size / 1024).toFixed(2);
    console.log(`   ✅ favicon.ico - ${icoSize} KB`);

    // Generate SVG favicon (scalable version)
    console.log('\n🎨 Creating SVG favicon...');
    const svgPath = path.join(OUTPUT_DIR, 'favicon.svg');
    
    // If source is SVG, copy and optimize it; otherwise create a simple SVG wrapper
    if (SOURCE_IMAGE.endsWith('.svg')) {
      // Read and optimize the SVG
      const svgContent = fs.readFileSync(SOURCE_IMAGE, 'utf-8');
      fs.writeFileSync(svgPath, svgContent);
      console.log('   ✅ favicon.svg (copied from source)');
    } else {
      // Create a simple SVG that references the PNG
      // For a proper SVG, you'd want to trace the image or use the original vector
      const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <image href="/favicon-32x32.png" width="32" height="32"/>
</svg>`;
      fs.writeFileSync(svgPath, svgContent);
      console.log('   ✅ favicon.svg (generated from PNG)');
    }

    console.log('\n🎉 Favicon package generated successfully!');
    console.log('\n📋 Generated files:');
    console.log('   - favicon.ico');
    console.log('   - favicon.svg');
    faviconSizes.forEach(({ name }) => {
      console.log(`   - ${name}`);
    });
    console.log('\n✨ Your favicon is ready to use!');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

// Run the script
generateFavicons();

