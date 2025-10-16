#!/usr/bin/env node
/**
 * Simple Page Indexing Script
 * Uses your existing API endpoint - NO new dependencies needed!
 * 
 * Usage: node scripts/index-pages-simple.js
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';
const API_KEY = 'c13b5a20be67ad7add766e118761cb5bbb56feda0127a01b276737ad39ef59b2';

// Priority pages to index
const PRIORITY_PAGES = [
  '/',
  '/services/seo',
  '/services/local-seo',
  '/services/ai-seo',
  '/services/web-development',
  '/services/website-design',
  '/contact',
  '/pricing',
  
  // New service pages
  '/services/seo-consulting-charlotte',
  '/services/web-design-albuquerque',
  '/services/seo-baltimore',
  '/services/web-development-las-vegas',
  '/services/web-application-development-chicago',
  '/services/website-design-louisville',
  '/services/web-design-columbus',
  '/services/website-design-oklahoma-city',
  '/services/seo-company-mesa',
  '/services/web-design-oklahoma-city',
  
  // Top cities
  '/new-york-ny',
  '/los-angeles-ca',
  '/chicago-il',
  '/houston-tx',
  '/phoenix-az',
  
  // New blog posts
  '/blog/louisville-conversion-rate-optimization-services',
  '/blog/website-design-detroit',
  '/blog/el-paso-conversion-rate-optimization-services',
  '/blog/oklahoma-city-conversion-rate-optimization-company',
  '/blog/detroit-conversion-rate-optimization-services',
  '/blog/oklahoma-city-conversion-rate-optimization-services',
  '/blog/logistics-web-design-california',
  '/blog/milwaukee-content-development',
  '/blog/milwaukee-auto-repair-shop-website-design',
  '/blog/web-developer-fresno',
];

// Make HTTP request
function makeRequest(url, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'x-api-key': API_KEY,
      },
    };

    const req = http.request(url, options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          resolve(parsed);
        } catch (e) {
          console.log('Raw response:', responseData.substring(0, 500));
          resolve({ success: false, error: 'Invalid response', raw: responseData.substring(0, 200) });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

// Delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Main function
async function indexPages() {
  console.log('🚀 Starting Google Indexing API submission...\n');
  console.log(`📊 Total URLs to index: ${PRIORITY_PAGES.length}\n`);
  console.log('━'.repeat(60));

  const results = {
    total: PRIORITY_PAGES.length,
    successful: 0,
    failed: 0,
  };

  for (let i = 0; i < PRIORITY_PAGES.length; i++) {
    const path = PRIORITY_PAGES[i];
    const productionUrl = `https://www.webvello.com${path}`;
    const progress = `[${i + 1}/${PRIORITY_PAGES.length}]`;
    
    console.log(`${progress} Processing: ${productionUrl}`);
    
    try {
      const response = await makeRequest(
        `${BASE_URL}/api/indexing/notify`,
        { url: productionUrl, type: 'URL_UPDATED' }
      );

      if (response.success) {
        console.log(`✅ Indexed: ${productionUrl}`);
        results.successful++;
      } else {
        console.log(`❌ Failed: ${productionUrl} - ${response.error || 'Unknown error'}`);
        results.failed++;
      }
    } catch (error) {
      console.log(`❌ Failed: ${productionUrl} - ${error.message}`);
      results.failed++;
    }

    // Add delay between requests (6 seconds as requested)
    if (i < PRIORITY_PAGES.length - 1) {
      console.log('⏳ Waiting 6 seconds before next request...');
      await delay(6000);
    }
  }

  console.log('\n' + '━'.repeat(60));
  console.log('\n📊 Indexing Complete!\n');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${((results.successful / results.total) * 100).toFixed(1)}%`);
  
  console.log('\n✨ Done! Your pages have been submitted to Google for indexing.');
  console.log('⏱️  It may take 24-48 hours for pages to appear in search results.\n');
}

// Run
indexPages()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  });

