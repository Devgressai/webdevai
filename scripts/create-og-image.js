const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOGImage() {
  const width = 1200;
  const height = 630;
  const logoPath = path.join(__dirname, '../public/newlogo.png');
  const outputPath = path.join(__dirname, '../public/og-image.jpg');

  try {
    // Check if logo exists
    if (!fs.existsSync(logoPath)) {
      console.error('Logo file not found:', logoPath);
      process.exit(1);
    }

    // Create gradient background using SVG
    const gradientSVG = `
      <svg width="${width}" height="${height}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4C74B9;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#3A5A8A;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1f2937;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>
    `;

    // Create base image with gradient
    const background = sharp(Buffer.from(gradientSVG))
      .resize(width, height)
      .jpeg({ quality: 90 });

    // Resize logo to appropriate size for OG image
    const logoBuffer = await sharp(logoPath)
      .resize(300, 300, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // Create composite image
    const finalImage = await background
      .composite([
        {
          input: logoBuffer,
          top: Math.floor((height - 300) / 2) - 80,
          left: Math.floor((width - 300) / 2),
        },
        // Add text overlay using SVG (for title)
        {
          input: Buffer.from(`
            <svg width="${width}" height="${height}">
              <text x="50%" y="${Math.floor(height / 2) + 200}" 
                    font-family="Arial, sans-serif" 
                    font-size="48" 
                    font-weight="bold" 
                    fill="white" 
                    text-anchor="middle">
                Web Vello
              </text>
              <text x="50%" y="${Math.floor(height / 2) + 260}" 
                    font-family="Arial, sans-serif" 
                    font-size="28" 
                    fill="rgba(255, 255, 255, 0.9)" 
                    text-anchor="middle">
                Digital Marketing Agency
              </text>
              <text x="50%" y="${Math.floor(height / 2) + 300}" 
                    font-family="Arial, sans-serif" 
                    font-size="22" 
                    fill="rgba(255, 255, 255, 0.8)" 
                    text-anchor="middle">
                AI SEO • Local SEO • Web Development
              </text>
            </svg>
          `),
          top: 0,
          left: 0,
        }
      ])
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    console.log('✅ OG Image created successfully at:', outputPath);
    console.log(`   Size: ${width}x${height}px`);
  } catch (error) {
    console.error('❌ Error creating OG image:', error);
    process.exit(1);
  }
}

createOGImage();

