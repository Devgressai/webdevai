#!/usr/bin/env node
/**
 * Comprehensive 200-Page Indexing Script
 * Submits 200 high-priority pages to Google Indexing API
 * 
 * Usage: node scripts/index-200-pages.js
 */

const https = require('https');

const BASE_URL = 'https://www.webvello.com';
const API_KEY = 'c13b5a20be67ad7add766e118761cb5bbb56feda0127a01b276737ad39ef59b2';

// 200 High-Priority Pages for Indexing
const PRIORITY_PAGES = [
  // Core Pages (13)
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

  // Top Services (55 total)
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
  
  // New comprehensive landing pages (10)
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
  
  // Regional service pages (18)
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

  // Solutions Pages (6)
  '/solutions/agency-results',
  '/solutions/declining-traffic',
  '/solutions/google-visibility',
  '/solutions/website-conversion',
  '/solutions/website-leads',
  '/solutions/website-roi',

  // Top Blog Posts (28)
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
  '/blog/dairy-industry-website-design-los-angeles',
  '/blog/logistics-companies-website-design',

  // Top 70 City Hub Pages
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

    const req = https.request(url, options, (res) => {
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
  console.log('⏱️  Estimated time: ~${Math.ceil(PRIORITY_PAGES.length * 6 / 60)} minutes (6 sec delay per page)\n');
  console.log('━'.repeat(60));

  const results = {
    total: PRIORITY_PAGES.length,
    successful: 0,
    failed: 0,
    startTime: Date.now(),
  };

  for (let i = 0; i < PRIORITY_PAGES.length; i++) {
    const path = PRIORITY_PAGES[i];
    const productionUrl = `https://www.webvello.com${path}`;
    const progress = `[${i + 1}/${PRIORITY_PAGES.length}]`;
    const percentComplete = ((i + 1) / PRIORITY_PAGES.length * 100).toFixed(1);
    
    console.log(`\n${progress} (${percentComplete}%) Processing: ${productionUrl}`);
    
    try {
      const response = await makeRequest(
        `${BASE_URL}/api/indexing/notify`,
        { url: productionUrl, type: 'URL_UPDATED' }
      );

      if (response.success) {
        console.log(`✅ SUCCESS: Indexed successfully`);
        results.successful++;
      } else {
        console.log(`❌ FAILED: ${response.error || 'Unknown error'}`);
        results.failed++;
      }
    } catch (error) {
      console.log(`❌ FAILED: ${error.message}`);
      results.failed++;
    }

    // Add delay between requests (6 seconds)
    if (i < PRIORITY_PAGES.length - 1) {
      const remaining = PRIORITY_PAGES.length - (i + 1);
      const estimatedMinutes = Math.ceil(remaining * 6 / 60);
      console.log(`⏳ Waiting 6 seconds... (${remaining} pages remaining, ~${estimatedMinutes} min left)`);
      await delay(6000);
    }
  }

  const endTime = Date.now();
  const totalTime = ((endTime - results.startTime) / 1000 / 60).toFixed(1);

  console.log('\n' + '━'.repeat(60));
  console.log('\n🎉 Indexing Complete!\n');
  console.log(`✅ Successful: ${results.successful} pages`);
  console.log(`❌ Failed: ${results.failed} pages`);
  console.log(`📈 Success Rate: ${((results.successful / results.total) * 100).toFixed(1)}%`);
  console.log(`⏱️  Total Time: ${totalTime} minutes`);
  
  console.log('\n✨ Done! Your pages have been submitted to Google for indexing.');
  console.log('⏱️  It may take 24-48 hours for pages to appear in search results.');
  console.log('💡 Tip: Check Google Search Console to monitor indexing progress.\n');
}

// Run
indexPages()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  });

