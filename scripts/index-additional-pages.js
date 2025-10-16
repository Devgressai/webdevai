#!/usr/bin/env node
/**
 * Additional Pages Indexing Script
 * Index all the remaining pages that haven't been submitted yet
 * 
 * Usage: node scripts/index-additional-pages.js
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';
const API_KEY = 'c13b5a20be67ad7add766e118761cb5bbb56feda0127a01b276737ad39ef59b2';

// Additional pages to index (excluding the ones we already indexed)
const ADDITIONAL_PAGES = [
  // Core service pages
  '/services/ui-ux-design',
  '/services/software-development',
  '/services/digital-marketing',
  '/services/content-marketing',
  '/services/ai-consulting',
  '/services/ai-digital-marketing',
  '/services/ai-agent-development',
  '/services/ai-gpt-integration',
  '/services/chatgpt-optimization',
  '/services/app-design-development',
  '/services/answer-engine-optimization',
  '/services/core-web-vitals-optimization',
  '/services/cro-ecommerce',
  '/services/cro-lead-generation',
  '/services/ecommerce-design',
  '/services/email-marketing-design',
  '/services/enterprise-geo-services',
  '/services/generative-engine-optimization',
  '/services/programmatic-seo',
  '/services/rapid-web-design',
  '/services/real-estate-seo-california',
  '/services/schema-markup-services',
  '/services/shopify-development',
  '/services/social-media-design',
  '/services/software-design-development',
  '/services/voice-search-optimization',
  '/services/website-redesign',
  '/services/wordpress-development',
  '/services/zero-click-search-optimization',
  
  // Industry-specific service pages
  '/services/auto-repair-website-design-milwaukee',
  '/services/biotech-website-design-chicago',
  '/services/dairy-industry-website-design-los-angeles',
  '/services/educational-website-development-charlotte',
  '/services/medical-website-design-austin',
  
  // City-specific service pages (additional ones)
  '/services/seo-company-mesa-arizona',
  '/services/seo-services-louisville',
  '/services/web-development-fresno',
  
  // Blog posts
  '/blog/ai-powered-seo-machine-learning',
  '/blog/arizona-organic-seo-growth-strategy',
  '/blog/best-seo-software-seattle-businesses-2025',
  '/blog/content-development-services-milwaukee-complete-guide',
  '/blog/detroit-conversion-rate-optimization-services',
  '/blog/education-companies-el-paso-guide',
  '/blog/el-paso-conversion-rate-optimization-services',
  '/blog/essential-website-features-2024',
  '/blog/freight-forwarder-web-design-guide',
  '/blog/government-companies-el-paso-guide',
  '/blog/healthcare-web-design-companies-guide',
  '/blog/local-seo-checklist-25-steps',
  '/blog/local-seo-guide-sacramento-businesses',
  '/blog/logistics-web-design-california',
  '/blog/louisville-conversion-rate-optimization-services',
  '/blog/milwaukee-auto-repair-shop-website-design',
  '/blog/milwaukee-content-development',
  '/blog/oklahoma-city-conversion-rate-optimization-company',
  '/blog/oklahoma-city-conversion-rate-optimization-services',
  '/blog/seattle-software-development-guide',
  '/blog/seo-partnership-milwaukee-guide',
  '/blog/seo-service-complete-guide',
  '/blog/voice-search-seo-optimization-2024',
  '/blog/web-developer-fresno',
  '/blog/website-design-detroit',
  '/blog/website-design-in-detroit',
  
  // Additional important pages
  '/about',
  '/case-studies',
  '/seo-audit',
  '/pricing',
  '/contact',
  '/solutions/google-visibility',
  '/solutions/declining-traffic',
  '/solutions/website-leads',
  '/solutions/website-roi',
  '/industries',
  '/locations',
  '/resources',
  '/studio',
  '/website-speed-test',
  '/enhanced-demo',
  
  // More city pages
  '/philadelphia-pa',
  '/san-antonio-tx',
  '/san-diego-ca',
  '/dallas-tx',
  '/san-francisco-ca',
  '/austin-tx',
  '/jacksonville-fl',
  '/fort-worth-tx',
  '/columbus-oh',
  '/charlotte-nc',
  '/seattle-wa',
  '/denver-co',
  '/washington-dc',
  '/boston-ma',
  '/el-paso-tx',
  '/nashville-tn',
  '/detroit-mi',
  '/oklahoma-city-ok',
  '/portland-or',
  '/las-vegas-nv',
  '/memphis-tn',
  '/louisville-ky',
  '/baltimore-md',
  '/milwaukee-wi',
  '/albuquerque-nm',
  '/tucson-az',
  '/fresno-ca',
  '/mesa-az',
  '/sacramento-ca',
  '/atlanta-ga',
  '/kansas-city-mo',
  '/colorado-springs-co',
  '/omaha-ne',
  '/raleigh-nc',
  '/miami-fl',
  '/long-beach-ca',
  '/virginia-beach-va',
  '/oakland-ca',
  '/minneapolis-mn',
  '/tulsa-ok',
  '/arlington-tx',
  '/tampa-fl',
  '/new-orleans-la',
  '/wichita-ks',
  '/cleveland-oh',
  '/bakersfield-ca',
  '/aurora-co',
  '/anaheim-ca',
  '/honolulu-hi',
  '/santa-ana-ca',
  '/corpus-christi-tx',
  '/riverside-ca',
  '/lexington-ky',
  '/stockton-ca',
  '/toledo-oh',
  '/st-paul-mn',
  '/newark-nj',
  '/greensboro-nc',
  '/plano-tx',
  '/henderson-nv',
  '/lincoln-ne',
  '/buffalo-ny',
  '/jersey-city-nj',
  '/chula-vista-ca',
  '/fort-wayne-in',
  '/orlando-fl',
  '/st-petersburg-fl',
  '/chandler-az',
  '/laredo-tx',
  '/norfolk-va',
  '/durham-nc',
  '/madison-wi',
  '/lubbock-tx',
  '/irvine-ca',
  '/winston-salem-nc',
  '/glendale-az',
  '/garland-tx',
  '/hialeah-fl',
  '/reno-nv',
  '/chesapeake-va',
  '/gilbert-az',
  '/baton-rouge-la',
  '/irving-tx',
  '/scottsdale-az',
  '/north-las-vegas-nv',
  '/fremont-ca',
  '/boise-id',
  '/richmond-va',
  '/san-bernardino-ca',
  '/birmingham-al',
  '/spokane-wa',
  '/rochester-ny',
  '/des-moines-ia',
  '/modesto-ca',
  '/fayetteville-nc',
  '/tacoma-wa',
  '/oxnard-ca',
  '/fontana-ca',
  '/columbus-ga',
  '/montgomery-al',
  '/moreno-valley-ca',
  '/shreveport-la',
  '/aurora-il',
  '/yonkers-ny',
  '/akron-oh',
  '/huntington-beach-ca',
  '/little-rock-ar',
  '/augusta-ga',
  '/amarillo-tx',
  '/glendale-ca',
  '/mobile-al',
  '/grand-rapids-mi',
  '/salt-lake-city-ut',
  '/tallahassee-fl',
  '/huntsville-al',
  '/grand-prairie-tx',
  '/knoxville-tn',
  '/worcester-ma',
  '/newport-news-va',
  '/brownsville-tx',
  '/overland-park-ks',
  '/santa-clara-ca',
  '/providence-ri',
  '/garden-grove-ca',
  '/chattanooga-tn',
  '/oceanside-ca',
  '/jackson-ms',
  '/fort-lauderdale-fl',
  '/santa-rosa-ca',
  '/rancho-cucamonga-ca',
  '/port-st-lucie-fl',
  '/tempe-az',
  '/ontario-ca',
  '/vancouver-wa',
  '/sioux-falls-sd',
  '/springfield-mo',
  '/peoria-az',
  '/pembroke-pines-fl',
  '/elk-grove-ca',
  '/rockford-il',
  '/palmdale-ca',
  '/corona-ca',
  '/salinas-ca',
  '/pomona-ca',
  '/pasadena-tx',
  '/joliet-il',
  '/paterson-nj',
  '/kent-wa',
  '/torrance-ca',
  '/syracuse-ny',
  '/bridgeport-ct',
  '/stockton-ca',
  '/pasadena-ca',
  '/mesquite-tx',
  '/olathe-ks',
  '/naperville-il',
  '/dayton-oh',
  '/savannah-ga',
  '/clarksville-tn',
  '/orange-ca',
  '/palm-bay-fl',
  '/fullerton-ca',
  '/hampton-va',
  '/mckinney-tx',
  '/cary-nc',
  '/warren-mi',
  '/west-valley-city-ut',
  '/columbia-mo',
  '/olathe-ks',
  '/sterling-heights-mi',
  '/new-haven-ct',
  '/miramar-fl',
  '/waco-tx',
  '/thousand-oaks-ca',
  '/cedar-rapids-ia',
  '/charleston-sc',
  '/visalia-ca',
  '/topeka-ks',
  '/elizabeth-nj',
  '/simi-valley-ca',
  '/hartford-ct',
  '/winston-salem-nc',
  '/richardson-tx',
  '/arvada-co',
  '/provo-ut',
  '/cambridge-ma',
  '/antioch-ca',
  '/pearland-tx',
  '/lansing-mi',
  '/evansville-in',
  '/independence-mo',
  '/fairfield-ca',
  '/berkeley-ca',
  '/high-point-nc',
  '/murrieta-ca',
  '/palmdale-ca',
  '/westminster-ca',
  '/richmond-ca',
  '/midland-tx',
  '/west-covina-ca',
  '/costa-mesa-ca',
  '/inglewood-ca',
  '/waterbury-ct',
  '/clarksville-tn',
  '/mckinney-tx',
  '/cary-nc',
  '/warren-mi',
  '/west-valley-city-ut',
  '/columbia-mo',
  '/sterling-heights-mi',
  '/new-haven-ct',
  '/miramar-fl',
  '/waco-tx',
  '/thousand-oaks-ca',
  '/cedar-rapids-ia',
  '/charleston-sc',
  '/visalia-ca',
  '/topeka-ks',
  '/elizabeth-nj',
  '/simi-valley-ca',
  '/hartford-ct',
  '/richardson-tx',
  '/arvada-co',
  '/provo-ut',
  '/cambridge-ma',
  '/antioch-ca',
  '/pearland-tx',
  '/lansing-mi',
  '/evansville-in',
  '/independence-mo',
  '/fairfield-ca',
  '/berkeley-ca',
  '/high-point-nc',
  '/murrieta-ca',
  '/westminster-ca',
  '/richmond-ca',
  '/midland-tx',
  '/west-covina-ca',
  '/costa-mesa-ca',
  '/inglewood-ca',
  '/waterbury-ct'
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
  console.log('🚀 Starting Additional Pages Indexing...\n');
  console.log(`📊 Total URLs to index: ${ADDITIONAL_PAGES.length}\n`);
  console.log('━'.repeat(60));

  const results = {
    total: ADDITIONAL_PAGES.length,
    successful: 0,
    failed: 0,
  };

  for (let i = 0; i < ADDITIONAL_PAGES.length; i++) {
    const path = ADDITIONAL_PAGES[i];
    const productionUrl = `https://www.webvello.com${path}`;
    const progress = `[${i + 1}/${ADDITIONAL_PAGES.length}]`;
    
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
    if (i < ADDITIONAL_PAGES.length - 1) {
      console.log('⏳ Waiting 6 seconds before next request...');
      await delay(6000);
    }
  }

  console.log('\n' + '━'.repeat(60));
  console.log('\n📊 Additional Pages Indexing Complete!\n');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${((results.successful / results.total) * 100).toFixed(1)}%`);
  
  console.log('\n✨ Done! Additional pages have been submitted to Google for indexing.');
  console.log('⏱️  It may take 24-48 hours for pages to appear in search results.\n');
}

// Run
indexPages()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  });
