const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Get desktop path
const desktopPath = path.join(os.homedir(), 'Desktop', 'webvello');

// Create directory if it doesn't exist
if (!fs.existsSync(desktopPath)) {
  fs.mkdirSync(desktopPath, { recursive: true });
  console.log(`Created directory: ${desktopPath}`);
}

// Base URL - change to your production URL or use localhost
// Set BASE_URL environment variable to override, or change the default below
const BASE_URL = process.env.BASE_URL || 'https://www.webvello.com';

// Screenshot configurations
const screenshots = [
  // Homepage sections
  {
    name: 'homepage-hero',
    url: '/',
    selector: 'section:first-of-type',
    description: 'Homepage Hero Section'
  },
  {
    name: 'homepage-services',
    url: '/',
    selector: 'section:nth-of-type(5)',
    description: 'Homepage Services Section'
  },
  {
    name: 'homepage-stats',
    url: '/',
    selector: 'section:nth-of-type(6)',
    description: 'Homepage Stats Section'
  },
  {
    name: 'homepage-testimonials',
    url: '/',
    selector: 'section:nth-of-type(3)',
    description: 'Homepage Testimonials Section'
  },
  {
    name: 'homepage-cta',
    url: '/',
    selector: 'section:last-of-type',
    description: 'Homepage CTA Section'
  },
  
  // Services page
  {
    name: 'services-hero',
    url: '/services',
    selector: 'section:first-of-type',
    description: 'Services Page Hero'
  },
  {
    name: 'services-grid',
    url: '/services',
    selector: 'section:nth-of-type(2)',
    description: 'Services Grid'
  },
  
  // About page
  {
    name: 'about-hero',
    url: '/about',
    selector: 'section:first-of-type',
    description: 'About Page Hero'
  },
  {
    name: 'about-team',
    url: '/about',
    selector: 'section:nth-of-type(4)',
    description: 'About Page Team Section'
  },
  
  // Contact page
  {
    name: 'contact-page',
    url: '/contact',
    selector: 'main',
    description: 'Contact Page'
  },
  
  // Case studies
  {
    name: 'case-studies',
    url: '/case-studies',
    selector: 'main',
    description: 'Case Studies Page'
  },
  
  // Individual service pages
  {
    name: 'ai-seo-service',
    url: '/services/ai-seo',
    selector: 'main',
    description: 'AI SEO Service Page'
  },
  {
    name: 'local-seo-service',
    url: '/services/local-seo',
    selector: 'main',
    description: 'Local SEO Service Page'
  },
  {
    name: 'web-development-service',
    url: '/services/web-development',
    selector: 'main',
    description: 'Web Development Service Page'
  },
  
  // Pricing page
  {
    name: 'pricing-page',
    url: '/pricing',
    selector: 'main',
    description: 'Pricing Page'
  },
  
  // Industries page
  {
    name: 'industries-page',
    url: '/industries',
    selector: 'main',
    description: 'Industries Page'
  },
];

async function captureScreenshot(browser, config) {
  try {
    console.log(`Capturing: ${config.description}...`);
    
    const page = await browser.newPage();
    
    // Set viewport for consistent screenshots
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2, // High DPI for crisp images
    });
    
    // Navigate to page
    const fullUrl = `${BASE_URL}${config.url}`;
    await page.goto(fullUrl, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });
    
    // Wait a bit for any animations or lazy loading
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Try to find the selector
    let element;
    try {
      await page.waitForSelector(config.selector, { timeout: 5000 });
      element = await page.$(config.selector);
    } catch (e) {
      console.log(`  ⚠️  Selector not found, capturing full page for ${config.name}`);
      element = null;
    }
    
    // Take screenshot
    const filePath = path.join(desktopPath, `${config.name}.webp`);
    
    if (element) {
      await element.screenshot({
        path: filePath,
        type: 'webp',
        quality: 90,
      });
    } else {
      // Fallback to full page screenshot
      await page.screenshot({
        path: filePath,
        type: 'webp',
        quality: 90,
        fullPage: true,
      });
    }
    
    await page.close();
    console.log(`  ✅ Saved: ${filePath}`);
    
    return { success: true, file: filePath };
  } catch (error) {
    console.error(`  ❌ Error capturing ${config.name}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🚀 Starting screenshot capture...');
  console.log(`📁 Output directory: ${desktopPath}`);
  console.log(`🌐 Base URL: ${BASE_URL}\n`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  
  const results = [];
  
  for (const config of screenshots) {
    const result = await captureScreenshot(browser, config);
    results.push({ ...config, ...result });
    
    // Small delay between screenshots
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  await browser.close();
  
  // Summary
  console.log('\n📊 Summary:');
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`\n📁 All screenshots saved to: ${desktopPath}`);
  
  // Save a manifest file
  const manifest = {
    generated: new Date().toISOString(),
    baseUrl: BASE_URL,
    screenshots: results.map(r => ({
      name: r.name,
      description: r.description,
      url: r.url,
      success: r.success,
      file: r.file || null,
      error: r.error || null,
    })),
  };
  
  fs.writeFileSync(
    path.join(desktopPath, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log(`📄 Manifest saved: ${path.join(desktopPath, 'manifest.json')}`);
}

// Run the script
main().catch(console.error);

