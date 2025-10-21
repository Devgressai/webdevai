#!/usr/bin/env node
/**
 * Index Remaining Pages Script
 * Submits NEW pages that weren't indexed in the first batch
 * 
 * Usage: node scripts/index-remaining-pages.js
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';
const API_KEY = 'c13b5a20be67ad7add766e118761cb5bbb56feda0127a01b276737ad39ef59b2';

// Previously indexed pages (from first batch)
const ALREADY_INDEXED = [
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
  '/solutions/agency-results',
  '/solutions/declining-traffic',
  '/solutions/google-visibility',
  '/solutions/website-conversion',
  '/solutions/website-leads',
  '/solutions/website-roi',
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
];

// NEW pages to index (remaining services and cities)
const NEW_PAGES = [
  // Remaining service pages not indexed yet
  '/services/content-marketing',
  '/services/core-web-vitals-optimization',
  '/services/programmatic-seo',
  '/services/schema-markup-services',
  '/services/voice-search-optimization',
  '/services/zero-click-search-optimization',
  '/services/dairy-industry-website-design-los-angeles',
  
  // Remaining city pages (30 more cities to reach ~100 total)
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
  '/salt-lake-city-ut',
  '/huntsville-al',
  '/tallahassee-fl',
  '/grand-prairie-tx',
  '/overland-park-ks',
  '/knoxville-tn',
  '/worcester-ma',
  '/brownsville-tx',
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
  console.log('🚀 Starting Google Indexing API submission (NEW PAGES ONLY)...\n');
  console.log(`📊 Previously indexed: ${ALREADY_INDEXED.length} pages`);
  console.log(`🆕 New URLs to index: ${NEW_PAGES.length} pages\n`);
  console.log(`⏱️  Estimated time: ~${Math.ceil(NEW_PAGES.length * 3 / 60)} minutes (3 sec delay per page)\n`);
  console.log('━'.repeat(60));

  const results = {
    total: NEW_PAGES.length,
    successful: 0,
    failed: 0,
    quotaExceeded: 0,
    startTime: Date.now(),
  };

  for (let i = 0; i < NEW_PAGES.length; i++) {
    const path = NEW_PAGES[i];
    const productionUrl = `https://www.webvello.com${path}`;
    const progress = `[${i + 1}/${NEW_PAGES.length}]`;
    const percentComplete = ((i + 1) / NEW_PAGES.length * 100).toFixed(1);
    
    console.log(`\n${progress} (${percentComplete}%) Processing: ${productionUrl}`);
    
    try {
      const response = await makeRequest(
        `${BASE_URL}/api/indexing/notify`,
        { url: productionUrl, type: 'URL_UPDATED' }
      );

      if (response.success) {
        console.log(`✅ SUCCESS: Indexed successfully`);
        results.successful++;
      } else if (response.error && response.error.includes('Quota exceeded')) {
        console.log(`⚠️  QUOTA EXCEEDED: Stopping (daily limit reached)`);
        results.quotaExceeded = NEW_PAGES.length - i;
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
    if (i < NEW_PAGES.length - 1) {
      const remaining = NEW_PAGES.length - (i + 1);
      const estimatedMinutes = Math.ceil(remaining * 3 / 60);
      console.log(`⏳ Waiting 3 seconds... (${remaining} pages remaining, ~${estimatedMinutes} min left)`);
      await delay(3000);
    }
  }

  const endTime = Date.now();
  const totalTime = ((endTime - results.startTime) / 1000 / 60).toFixed(1);

  console.log('\n' + '━'.repeat(60));
  console.log('\n🎉 Indexing Complete!\n');
  console.log(`✅ Successful: ${results.successful} pages`);
  console.log(`❌ Failed: ${results.failed} pages`);
  if (results.quotaExceeded > 0) {
    console.log(`⏸️  Quota Exceeded: ${results.quotaExceeded} pages remaining`);
  }
  console.log(`📈 Success Rate: ${((results.successful / (results.successful + results.failed)) * 100).toFixed(1)}%`);
  console.log(`⏱️  Total Time: ${totalTime} minutes`);
  
  console.log('\n✨ Done! Your NEW pages have been submitted to Google for indexing.');
  console.log('⏱️  It may take 24-48 hours for pages to appear in search results.');
  if (results.quotaExceeded > 0) {
    console.log(`\n⏰ ${results.quotaExceeded} pages remaining - quota resets at midnight PT`);
    console.log('💡 Run this script again tomorrow to index the remaining pages.');
  }
  console.log('💡 Tip: Check Google Search Console to monitor indexing progress.\n');
}

// Run
indexPages()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  });

