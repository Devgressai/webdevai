#!/usr/bin/env node
/**
 * Smart Indexing Script
 * - Reads indexed-pages-log.json to avoid re-indexing
 * - Automatically finds pages that haven't been indexed yet
 * - Updates the log file after successful indexing
 * 
 * Usage: node scripts/index-smart.js [--limit 50]
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const API_KEY = 'c13b5a20be67ad7add766e118761cb5bbb56feda0127a01b276737ad39ef59b2';
const LOG_FILE = path.join(__dirname, 'indexed-pages-log.json');

// Get limit from command line args (default 200)
const args = process.argv.slice(2);
const limitIndex = args.indexOf('--limit');
const DAILY_LIMIT = limitIndex !== -1 ? parseInt(args[limitIndex + 1]) : 200;

// All available pages on the site
const ALL_PAGES = [
  // Core Pages
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/resources',
  '/case-studies',
  '/industries',
  '/locations',
  '/solutions',
  '/blog',
  '/seo-audit',
  '/website-speed-test',
  '/enhanced-demo',

  // All Service Pages
  '/services/website-design',
  '/services/website-redesign',
  '/services/web-development',
  '/services/rapid-web-design',
  '/services/ui-ux-design',
  '/services/ecommerce-design',
  '/services/app-design-development',
  '/services/software-design-development',
  '/services/software-development',
  '/services/shopify-development',
  '/services/wordpress-development',
  '/services/ai-consulting',
  '/services/ai-seo',
  '/services/ai-digital-marketing',
  '/services/ai-gpt-integration',
  '/services/ai-agent-development',
  '/services/chatgpt-optimization',
  '/services/generative-engine-optimization',
  '/services/answer-engine-optimization',
  '/services/enterprise-geo-services',
  '/services/seo',
  '/services/local-seo',
  '/services/digital-marketing',
  '/services/email-marketing-design',
  '/services/social-media-design',
  '/services/cro-ecommerce',
  '/services/cro-lead-generation',
  '/services/content-marketing',
  '/services/core-web-vitals-optimization',
  '/services/programmatic-seo',
  '/services/schema-markup-services',
  '/services/voice-search-optimization',
  '/services/zero-click-search-optimization',
  '/services/seo-company-government-website',
  '/services/seo-doctors-kansas-city',
  '/services/portland-web-marketing',
  '/services/surgeon-web-design-austin',
  '/services/retail-development-services',
  '/services/freight-forwarder-web-design',
  '/services/energy-seo-company',
  '/services/web-application-development-company',
  '/services/wordpress-developers-denver',
  '/services/jacksonville-ai-seo',
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
  '/services/web-development-fresno',
  '/services/seo-services-louisville',
  '/services/real-estate-seo-california',
  '/services/biotech-website-design-chicago',
  '/services/medical-website-design-austin',
  '/services/educational-website-development-charlotte',
  '/services/auto-repair-website-design-milwaukee',
  '/services/seo-company-mesa-arizona',
  '/services/dairy-industry-website-design-los-angeles',

  // Solution Pages
  '/solutions/agency-results',
  '/solutions/declining-traffic',
  '/solutions/google-visibility',
  '/solutions/website-conversion',
  '/solutions/website-leads',
  '/solutions/website-roi',

  // Blog Posts
  '/blog/essential-website-features-2024',
  '/blog/voice-search-seo-optimization-2024',
  '/blog/local-seo-checklist-25-steps',
  '/blog/ai-powered-seo-machine-learning',
  '/blog/seattle-software-development-guide',
  '/blog/healthcare-web-design-companies-guide',
  '/blog/arizona-organic-seo-growth-strategy',
  '/blog/education-companies-el-paso-guide',
  '/blog/freight-forwarder-web-design-guide',
  '/blog/government-companies-el-paso-guide',
  '/blog/seo-partnership-milwaukee-guide',
  '/blog/seo-service-complete-guide',
  '/blog/detroit-conversion-rate-optimization-services',
  '/blog/el-paso-conversion-rate-optimization-services',
  '/blog/louisville-conversion-rate-optimization-services',
  '/blog/oklahoma-city-conversion-rate-optimization-company',
  '/blog/oklahoma-city-conversion-rate-optimization-services',
  '/blog/logistics-web-design-california',
  '/blog/milwaukee-auto-repair-shop-website-design',
  '/blog/milwaukee-content-development',
  '/blog/web-developer-fresno',
  '/blog/website-design-detroit',
  '/blog/website-design-in-detroit',
  '/blog/best-seo-software-seattle-businesses-2025',
  '/blog/local-seo-guide-sacramento-businesses',
  '/blog/content-development-services-milwaukee-complete-guide',

  // City Pages (100+ cities)
  '/new-york-ny',
  '/los-angeles-ca',
  '/chicago-il',
  '/houston-tx',
  '/phoenix-az',
  '/philadelphia-pa',
  '/san-antonio-tx',
  '/san-diego-ca',
  '/dallas-tx',
  '/san-jose-ca',
  '/austin-tx',
  '/jacksonville-fl',
  '/fort-worth-tx',
  '/columbus-oh',
  '/indianapolis-in',
  '/charlotte-nc',
  '/san-francisco-ca',
  '/seattle-wa',
  '/denver-co',
  '/washington-dc',
  '/nashville-tn',
  '/oklahoma-city-ok',
  '/el-paso-tx',
  '/boston-ma',
  '/portland-or',
  '/las-vegas-nv',
  '/detroit-mi',
  '/memphis-tn',
  '/louisville-ky',
  '/baltimore-md',
  '/milwaukee-wi',
  '/albuquerque-nm',
  '/tucson-az',
  '/fresno-ca',
  '/sacramento-ca',
  '/kansas-city-mo',
  '/mesa-az',
  '/raleigh-nc',
  '/omaha-ne',
  '/miami-fl',
  '/oakland-ca',
  '/minneapolis-mn',
  '/tulsa-ok',
  '/wichita-ks',
  '/new-orleans-la',
  '/arlington-tx',
  '/cleveland-oh',
  '/bakersfield-ca',
  '/tampa-fl',
  '/aurora-co',
  '/atlanta-ga',
  '/salt-lake-city-ut',
  '/colorado-springs-co',
  '/st-louis-mo',
  '/pittsburgh-pa',
  '/cincinnati-oh',
  '/orlando-fl',
  '/anaheim-ca',
  '/santa-ana-ca',
  '/corpus-christi-tx',
  '/riverside-ca',
  '/lexington-ky',
  '/stockton-ca',
  '/anchorage-ak',
  '/henderson-nv',
  '/greensboro-nc',
  '/plano-tx',
  '/newark-nj',
  '/lincoln-ne',
  '/irvine-ca',
  '/toledo-oh',
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
  '/tacoma-wa',
  '/san-bernardino-ca',
  '/modesto-ca',
  '/fontana-ca',
  '/santa-clarita-ca',
  '/birmingham-al',
  '/oxnard-ca',
  '/fayetteville-nc',
  '/moreno-valley-ca',
  '/huntington-beach-ca',
  '/yonkers-ny',
  '/glendale-ca',
  '/montgomery-al',
  '/lubbock-tx',
  '/shreveport-la',
  '/akron-oh',
  '/little-rock-ar',
  '/augusta-ga',
  '/mobile-al',
  '/grand-rapids-mi',
  '/amarillo-tx',
  '/huntsville-al',
  '/tallahassee-fl',
  '/grand-prairie-tx',
  '/overland-park-ks',
  '/knoxville-tn',
  '/worcester-ma',
  '/brownsville-tx',
];

// Load indexed pages log
function loadIndexedPages() {
  try {
    if (fs.existsSync(LOG_FILE)) {
      const data = fs.readFileSync(LOG_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn('⚠️  Could not load log file, starting fresh');
  }
  return { lastUpdated: new Date().toISOString(), totalIndexed: 0, indexedPages: [] };
}

// Save indexed pages log
function saveIndexedPages(log) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2), 'utf8');
}

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
  console.log('🚀 Smart Indexing Script Starting...\n');
  
  // Load log
  const log = loadIndexedPages();
  const alreadyIndexed = new Set(log.indexedPages);
  
  console.log(`📊 Already indexed: ${alreadyIndexed.size} pages`);
  console.log(`📄 Total available pages: ${ALL_PAGES.length}`);
  
  // Find pages that haven't been indexed
  const pagesToIndex = ALL_PAGES.filter(page => !alreadyIndexed.has(page));
  
  if (pagesToIndex.length === 0) {
    console.log('\n✅ All pages have already been indexed!');
    console.log('💡 Nothing to do. Come back when you add new pages.\n');
    return;
  }
  
  // Limit to daily quota
  const limitedPages = pagesToIndex.slice(0, DAILY_LIMIT);
  
  console.log(`🆕 New pages to index: ${pagesToIndex.length}`);
  console.log(`🎯 Indexing today: ${limitedPages.length} (limit: ${DAILY_LIMIT})\n`);
  
  if (pagesToIndex.length > DAILY_LIMIT) {
    console.log(`⏸️  ${pagesToIndex.length - DAILY_LIMIT} pages will wait for next run\n`);
  }
  
  console.log(`⏱️  Estimated time: ~${Math.ceil(limitedPages.length * 3 / 60)} minutes (3 sec delay per page)\n`);
  console.log('━'.repeat(60));

  const results = {
    total: limitedPages.length,
    successful: 0,
    failed: 0,
    startTime: Date.now(),
    newlyIndexed: [],
  };

  for (let i = 0; i < limitedPages.length; i++) {
    const path = limitedPages[i];
    const productionUrl = `https://www.webvello.com${path}`;
    const progress = `[${i + 1}/${limitedPages.length}]`;
    const percentComplete = ((i + 1) / limitedPages.length * 100).toFixed(1);
    
    console.log(`\n${progress} (${percentComplete}%)`);
    console.log(`📄 ${productionUrl}`);
    
    try {
      const response = await makeRequest(
        `${BASE_URL}/api/indexing/notify`,
        { url: productionUrl, type: 'URL_UPDATED' }
      );

      if (response.success) {
        console.log(`✅ SUCCESS: Indexed successfully`);
        results.successful++;
        results.newlyIndexed.push(path);
      } else if (response.error && response.error.includes('Quota exceeded')) {
        console.log(`⚠️  QUOTA EXCEEDED: Stopping (daily limit reached)`);
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
    if (i < limitedPages.length - 1) {
      const remaining = limitedPages.length - (i + 1);
      const estimatedMinutes = Math.ceil(remaining * 3 / 60);
      console.log(`⏳ Waiting 3 seconds... (${remaining} pages remaining, ~${estimatedMinutes} min left)`);
      await delay(3000);
    }
  }

  // Update log with newly indexed pages
  if (results.newlyIndexed.length > 0) {
    log.indexedPages.push(...results.newlyIndexed);
    log.totalIndexed = log.indexedPages.length;
    log.lastUpdated = new Date().toISOString();
    saveIndexedPages(log);
    console.log(`\n💾 Log updated: ${results.newlyIndexed.length} new pages added`);
  }

  const endTime = Date.now();
  const totalTime = ((endTime - results.startTime) / 1000 / 60).toFixed(1);

  console.log('\n' + '━'.repeat(60));
  console.log('\n🎉 Indexing Complete!\n');
  console.log(`✅ This batch: ${results.successful} pages`);
  console.log(`❌ Failed: ${results.failed} pages`);
  console.log(`📊 Total indexed (all time): ${log.totalIndexed} pages`);
  console.log(`⏱️  Time: ${totalTime} minutes`);
  
  const remaining = ALL_PAGES.length - log.totalIndexed;
  if (remaining > 0) {
    console.log(`\n📋 Remaining pages to index: ${remaining}`);
    console.log(`💡 Run this script again tomorrow to continue`);
  } else {
    console.log(`\n🎊 All ${ALL_PAGES.length} pages have been indexed!`);
  }
  
  console.log('\n✨ Pages have been submitted to Google for indexing.');
  console.log('⏱️  It may take 24-48 hours for pages to appear in search results.');
  console.log('💡 Check Google Search Console to monitor indexing progress.\n');
}

// Run
indexPages()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  });

