#!/usr/bin/env node
/**
 * Index Final 28 Pages (Remaining Quota Today)
 * 172 already indexed, 28 remaining in daily quota
 * 
 * Usage: node scripts/index-final-28.js
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';
const API_KEY = 'c13b5a20be67ad7add766e118761cb5bbb56feda0127a01b276737ad39ef59b2';

// Final 28 pages to use up today's quota (172 + 28 = 200)
const FINAL_28_PAGES = [
  // Remaining service pages (6)
  '/services/core-web-vitals-optimization',
  '/services/programmatic-seo',
  '/services/schema-markup-services',
  '/services/voice-search-optimization',
  '/services/zero-click-search-optimization',
  '/services/dairy-industry-website-design-los-angeles',
  
  // Next 22 city pages
  '/jersey-city-nj',
  '/chula-vista-ca',
  '/buffalo-ny',
  '/chandler-az',
  '/north-las-vegas-nv',
  '/gilbert-az',
  '/madison-wi',
  '/reno-nv',
  '/norfolk-va',
  '/winston-salem-nc',
  '/glendale-az',
  '/hialeah-fl',
  '/garland-tx',
  '/scottsdale-az',
  '/boise-id',
  '/irving-tx',
  '/chesapeake-va',
  '/fremont-ca',
  '/baton-rouge-la',
  '/richmond-va',
  '/spokane-wa',
  '/des-moines-ia',
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
          console.log('⚠️  Raw response:', responseData.substring(0, 200));
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
  console.log('🚀 Starting Final 28 Pages Indexing (Using Remaining Quota)...\n');
  console.log(`📊 Previously indexed today: 172 pages`);
  console.log(`🎯 Remaining quota: 28 requests`);
  console.log(`🆕 Pages to index now: ${FINAL_28_PAGES.length}\n`);
  console.log(`⏱️  Estimated time: ~${Math.ceil(FINAL_28_PAGES.length * 3 / 60)} minutes (3 sec delay per page)\n`);
  console.log('━'.repeat(60));

  const results = {
    total: FINAL_28_PAGES.length,
    successful: 0,
    failed: 0,
    quotaExceeded: 0,
    startTime: Date.now(),
  };

  for (let i = 0; i < FINAL_28_PAGES.length; i++) {
    const path = FINAL_28_PAGES[i];
    const productionUrl = `https://www.webvello.com${path}`;
    const progress = `[${i + 1}/${FINAL_28_PAGES.length}]`;
    const percentComplete = ((i + 1) / FINAL_28_PAGES.length * 100).toFixed(1);
    const totalIndexed = 172 + results.successful;
    
    console.log(`\n${progress} (${percentComplete}%) [Total: ${totalIndexed}/200]`);
    console.log(`📄 ${productionUrl}`);
    
    try {
      const response = await makeRequest(
        `${BASE_URL}/api/indexing/notify`,
        { url: productionUrl, type: 'URL_UPDATED' }
      );

      if (response.success) {
        console.log(`✅ SUCCESS: Indexed successfully`);
        results.successful++;
      } else if (response.error && response.error.includes('Quota exceeded')) {
        console.log(`⚠️  QUOTA EXCEEDED: Daily limit reached (200/200)`);
        results.quotaExceeded = FINAL_28_PAGES.length - i;
        break;
      } else {
        console.log(`❌ FAILED: ${response.error || 'Unknown error'}`);
        if (response.raw) {
          console.log(`   Raw: ${response.raw}`);
        }
        results.failed++;
      }
    } catch (error) {
      console.log(`❌ FAILED: ${error.message}`);
      results.failed++;
    }

    // Add delay between requests (3 seconds)
    if (i < FINAL_28_PAGES.length - 1) {
      const remaining = FINAL_28_PAGES.length - (i + 1);
      const estimatedMinutes = Math.ceil(remaining * 3 / 60);
      console.log(`⏳ Waiting 3 seconds... (${remaining} pages remaining, ~${estimatedMinutes} min left)`);
      await delay(3000);
    }
  }

  const endTime = Date.now();
  const totalTime = ((endTime - results.startTime) / 1000 / 60).toFixed(1);
  const grandTotal = 172 + results.successful;

  console.log('\n' + '━'.repeat(60));
  console.log('\n🎉 Indexing Complete!\n');
  console.log(`✅ This batch: ${results.successful} pages`);
  console.log(`❌ Failed: ${results.failed} pages`);
  if (results.quotaExceeded > 0) {
    console.log(`⏸️  Quota Exceeded: ${results.quotaExceeded} pages remaining`);
  }
  console.log(`📊 GRAND TOTAL TODAY: ${grandTotal}/200 pages indexed`);
  console.log(`⏱️  Time: ${totalTime} minutes`);
  
  console.log('\n✨ Done! All pages submitted to Google for indexing.');
  console.log('⏱️  It may take 24-48 hours for pages to appear in search results.');
  
  if (results.quotaExceeded > 0) {
    console.log(`\n⏰ ${results.quotaExceeded} pages remaining for tomorrow`);
    console.log('🕐 Quota resets at midnight PT (3am ET)');
  } else if (grandTotal >= 200) {
    console.log('\n🎊 QUOTA FULLY USED! (200/200 pages indexed today)');
    console.log('🕐 Quota resets at midnight PT for more indexing tomorrow');
  }
  
  console.log('\n💡 Check Google Search Console to monitor indexing progress.\n');
}

// Run
indexPages()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  });

