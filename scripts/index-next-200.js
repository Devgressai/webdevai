#!/usr/bin/env node
/**
 * Index Next 200 Pages Script
 * Submits NEW pages that haven't been indexed yet
 * Skips pages already in indexed-pages-reference.json
 * 
 * Usage: node scripts/index-next-200.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const API_KEY = 'c13b5a20be67ad7add766e118761cb5bbb56feda0127a01b276737ad39ef59b2';

// Load already indexed pages
let ALREADY_INDEXED = [];
try {
  const referenceFile = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'indexed-pages-reference.json'), 'utf8'));
  ALREADY_INDEXED = referenceFile.alreadyIndexed;
  console.log(`✅ Loaded ${ALREADY_INDEXED.length} already indexed pages\n`);
} catch (error) {
  console.log(`⚠️  Could not load indexed-pages-reference.json: ${error.message}`);
  console.log('Starting fresh...\n');
}

// Get all city slugs directly (hardcoded to avoid TS import issue)
const citySlugs = [
  'new-york-ny', 'los-angeles-ca', 'chicago-il', 'houston-tx', 'phoenix-az',
  'philadelphia-pa', 'san-antonio-tx', 'san-diego-ca', 'dallas-tx', 'san-jose-ca',
  'austin-tx', 'jacksonville-fl', 'fort-worth-tx', 'columbus-oh', 'indianapolis-in',
  'charlotte-nc', 'san-francisco-ca', 'seattle-wa', 'denver-co', 'washington-dc',
  'nashville-tn', 'oklahoma-city-ok', 'el-paso-tx', 'boston-ma', 'portland-or',
  'las-vegas-nv', 'detroit-mi', 'memphis-tn', 'louisville-ky', 'baltimore-md',
  'milwaukee-wi', 'albuquerque-nm', 'tucson-az', 'fresno-ca', 'sacramento-ca',
  'kansas-city-mo', 'mesa-az', 'raleigh-nc', 'omaha-ne', 'miami-fl',
  'oakland-ca', 'minneapolis-mn', 'tulsa-ok', 'wichita-ks', 'new-orleans-la',
  'arlington-tx', 'cleveland-oh', 'bakersfield-ca', 'tampa-fl', 'aurora-co',
  'atlanta-ga', 'salt-lake-city-ut', 'colorado-springs-co', 'st-louis-mo', 'pittsburgh-pa',
  'cincinnati-oh', 'orlando-fl', 'anaheim-ca', 'santa-ana-ca', 'corpus-christi-tx',
  'riverside-ca', 'lexington-ky', 'stockton-ca', 'anchorage-ak', 'henderson-nv',
  'greensboro-nc', 'plano-tx', 'newark-nj', 'lincoln-ne', 'irvine-ca',
  'toledo-oh', 'jersey-city-nj', 'chula-vista-ca', 'buffalo-ny', 'chandler-az',
  'north-las-vegas-nv', 'gilbert-az', 'madison-wi', 'reno-nv', 'norfolk-va',
  'winston-salem-nc', 'glendale-az', 'hialeah-fl', 'garland-tx', 'scottsdale-az',
  'boise-id', 'irving-tx', 'chesapeake-va', 'fremont-ca', 'baton-rouge-la',
  'richmond-va', 'spokane-wa', 'des-moines-ia', 'tacoma-wa', 'san-bernardino-ca',
  'modesto-ca', 'fontana-ca', 'santa-clarita-ca', 'birmingham-al', 'oxnard-ca',
  'fayetteville-nc', 'moreno-valley-ca', 'huntington-beach-ca', 'yonkers-ny', 'glendale-ca',
  'montgomery-al', 'lubbock-tx', 'shreveport-la', 'akron-oh', 'little-rock-ar',
  'augusta-ga', 'mobile-al', 'grand-rapids-mi', 'amarillo-tx', 'huntsville-al',
  'tallahassee-fl', 'grand-prairie-tx', 'overland-park-ks', 'knoxville-tn', 'worcester-ma',
  'brownsville-tx', 'virginia-beach-va', 'buffalo-ny', 'glendale-az', 'mesa-arizona'
];

// Get top 200 remaining cities NOT already indexed
const remainingCities = citySlugs.filter(city => !ALREADY_INDEXED.includes(`/${city}`));

// Priority list for next batch (200 pages)
const NEXT_200_PAGES = [
  // Services not yet indexed
  '/services/content-marketing',
  '/services/core-web-vitals-optimization',
  '/services/programmatic-seo',
  '/services/schema-markup-services',
  '/services/voice-search-optimization',
  '/services/zero-click-search-optimization',
  
  // Top 100+ remaining cities
  ...remainingCities.slice(0, 194) // Will be ~194 cities + 6 services = 200 total
];

console.log(`📊 NEW pages to index: ${NEXT_200_PAGES.length}`);
console.log(`📊 Already indexed: ${ALREADY_INDEXED.length}\n`);

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
  console.log('🚀 Starting Google Indexing API submission (NEW PAGES ONLY)...\n');
  console.log(`📊 Previously indexed: ${ALREADY_INDEXED.length} pages`);
  console.log(`🆕 New URLs to index: ${NEXT_200_PAGES.length} pages\n`);
  console.log(`⏱️  Estimated time: ~${Math.ceil(NEXT_200_PAGES.length * 3 / 60)} minutes (3 sec delay per page)\n`);
  console.log('━'.repeat(60));

  const results = {
    total: NEXT_200_PAGES.length,
    successful: 0,
    failed: 0,
    quotaExceeded: 0,
    startTime: Date.now(),
  };

  const newlyIndexed = [];

  for (let i = 0; i < NEXT_200_PAGES.length; i++) {
    const path = NEXT_200_PAGES[i];
    const productionUrl = `https://www.webvello.com${path}`;
    const progress = `[${i + 1}/${NEXT_200_PAGES.length}]`;
    const percentComplete = ((i + 1) / NEXT_200_PAGES.length * 100).toFixed(1);
    
    console.log(`\n${progress} (${percentComplete}%) Processing: ${productionUrl}`);
    
    try {
      const response = await makeRequest(
        `${BASE_URL}/api/indexing/notify`,
        { url: productionUrl, type: 'URL_UPDATED' }
      );

      if (response.success) {
        console.log(`✅ SUCCESS: Indexed successfully`);
        results.successful++;
        newlyIndexed.push(path);
      } else if (response.error && response.error.includes('Quota exceeded')) {
        console.log(`⚠️  QUOTA EXCEEDED: Stopping (daily limit reached)`);
        results.quotaExceeded = NEXT_200_PAGES.length - i;
        break;
      } else {
        console.log(`❌ FAILED: ${response.error || 'Unknown error'}`);
        results.failed++;
      }
    } catch (error) {
      console.log(`❌ FAILED: ${error.message}`);
      results.failed++;
    }

    // Add delay between requests (3 seconds)
    if (i < NEXT_200_PAGES.length - 1) {
      const remaining = NEXT_200_PAGES.length - (i + 1);
      const estimatedMinutes = Math.ceil(remaining * 3 / 60);
      console.log(`⏳ Waiting 3 seconds... (${remaining} pages remaining, ~${estimatedMinutes} min left)`);
      await delay(3000);
    }
  }

  const endTime = Date.now();
  const totalTime = ((endTime - results.startTime) / 1000 / 60);
  
  console.log('\n' + '━'.repeat(60));
  console.log('\n📊 Indexing Complete!\n');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  if (results.quotaExceeded > 0) {
    console.log(`⚠️  Quota Exceeded: ${results.quotaExceeded} pages not submitted`);
  }
  console.log(`📈 Success Rate: ${((results.successful / (results.successful + results.failed)) * 100).toFixed(1)}%`);
  console.log(`⏱️  Total Time: ${totalTime.toFixed(1)} minutes\n`);

  // Update the reference file with newly indexed pages
  if (newlyIndexed.length > 0) {
    try {
      const referenceFile = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'indexed-pages-reference.json'), 'utf8'));
      referenceFile.alreadyIndexed = [...referenceFile.alreadyIndexed, ...newlyIndexed];
      referenceFile.metadata.totalIndexed = referenceFile.alreadyIndexed.length;
      referenceFile.metadata.lastUpdated = new Date().toISOString().split('T')[0];
      fs.writeFileSync(path.join(__dirname, '..', 'indexed-pages-reference.json'), JSON.stringify(referenceFile, null, 2));
      console.log(`✅ Updated indexed-pages-reference.json with ${newlyIndexed.length} new pages`);
    } catch (error) {
      console.log(`⚠️  Could not update reference file: ${error.message}`);
    }
  }

  console.log('\n✅ Done! Reference file updated to prevent duplicate submissions.\n');
}

// Run the script
indexPages().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

