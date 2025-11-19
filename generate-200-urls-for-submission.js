const fs = require('fs');

// Read the already-indexed-pages.txt to get what we've already submitted
const alreadyIndexedContent = fs.readFileSync('already-indexed-pages.txt', 'utf8');
const alreadyIndexedMatch = alreadyIndexedContent.match(/const ALREADY_INDEXED = \[(.*?)\];/s);
const alreadyIndexed = alreadyIndexedMatch 
  ? alreadyIndexedMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''))
  : [];

console.log(`📊 Found ${alreadyIndexed.length} already indexed pages\n`);

// All available cities (118 total from lib/cities.ts)
const allCities = [
  'jersey-city-nj', 'chula-vista-ca', 'buffalo-ny', 'chandler-az',
  'gilbert-az', 'madison-wi', 'reno-nv', 'norfolk-va', 'winston-salem-nc',
  'glendale-az', 'hialeah-fl', 'boise-id', 'richmond-va', 'spokane-wa',
  'des-moines-ia', 'durham-nc', 'st-petersburg-fl', 'laredo-tx', 'lubbock-tx',
  'honolulu-hi', 'long-beach-ca', 'virginia-beach-va', 'rochester-ny',
  'fremont-ca', 'irving-tx'
];

// All services (28 services total)
const allServices = [
  'website-design', 'website-redesign', 'web-development', 'rapid-web-design',
  'ui-ux-design', 'ecommerce-design', 'app-design-development',
  'software-design-development', 'software-development', 'shopify-development',
  'wordpress-development', 'ai-consulting', 'ai-seo', 'ai-digital-marketing',
  'ai-gpt-integration', 'ai-agent-development', 'chatgpt-optimization',
  'generative-engine-optimization', 'answer-engine-optimization',
  'enterprise-geo-services', 'seo', 'local-seo', 'digital-marketing',
  'email-marketing-design', 'social-media-design', 'cro-ecommerce',
  'cro-lead-generation', 'content-marketing'
];

const baseUrl = 'https://www.webvello.com';

// Generate city+service combinations
const cityServiceCombos = [];

// Generate combinations from cities NOT already indexed as city pages
alreadyIndexed.forEach(path => {
  const cityMatch = path.match(/^\/([a-z-]+-[a-z]{2})$/);
  if (cityMatch) {
    const city = cityMatch[1];
    const cityIndex = allCities.indexOf(city);
    if (cityIndex > -1) allCities.splice(cityIndex, 1);
  }
});

console.log(`📍 Available cities not yet indexed: ${allCities.length}`);
console.log(`🔧 Total services: ${allServices.length}`);

// Generate combinations: (cities * services) to get ~200 URLs
// We'll use all cities with the most important services
const topServices = ['website-design', 'web-development', 'seo', 'local-seo', 
                     'digital-marketing', 'ai-seo', 'ai-consulting', 'ui-ux-design'];

let urlCount = 0;
const newUrls = [];

// Add city+service combinations
for (const city of allCities) {
  for (const service of topServices) {
    const url = `${baseUrl}/${city}/${service}`;
    newUrls.push(url);
    urlCount++;
    if (urlCount >= 200) break;
  }
  if (urlCount >= 200) break;
}

// If we don't have 200 yet, add more city+service combos with different services
if (urlCount < 200) {
  const remainingServices = ['ecommerce-design', 'shopify-development', 
                            'wordpress-development', 'content-marketing',
                            'cro-ecommerce', 'cro-lead-generation',
                            'email-marketing-design', 'social-media-design'];
  
  for (const city of allCities.slice(0, Math.min(15, allCities.length))) {
    for (const service of remainingServices) {
      const url = `${baseUrl}/${city}/${service}`;
      if (!newUrls.includes(url)) {
        newUrls.push(url);
        urlCount++;
        if (urlCount >= 200) break;
      }
    }
    if (urlCount >= 200) break;
  }
}

console.log(`✅ Generated ${newUrls.length} unique URLs\n`);

// Format output
const output = {
  summary: {
    totalUrls: newUrls.length,
    generatedAt: new Date().toISOString(),
    method: 'City + Service combinations',
    note: 'These are city/service pages that have not been submitted before'
  },
  urls: newUrls,
  submissionInstructions: {
    method: 'Google Search Console URL Inspection Tool',
    url: 'https://search.google.com/search-console',
    dailyLimit: '20 URLs per day',
    steps: [
      'Go to Google Search Console',
      'Click "URL Inspection" at the top',
      'Paste each URL below',
      'Click "Request Indexing"',
      'Wait 3-5 seconds between each submission',
    ],
    note: 'This will take 10 days to submit all 200 URLs (20 per day)'
  }
};

// Write files
fs.writeFileSync('batch-200-urls.json', JSON.stringify(output, null, 2));
fs.writeFileSync('batch-200-urls.txt', newUrls.join('\n'));

// Create a daily batch file for easier submission
const batches = [];
for (let i = 0; i < newUrls.length; i += 20) {
  batches.push({
    day: Math.floor(i / 20) + 1,
    urls: newUrls.slice(i, i + 20),
    count: Math.min(20, newUrls.length - i)
  });
}

fs.writeFileSync('daily-batches.json', JSON.stringify({ batches }, null, 2));

console.log('📁 Files created:');
console.log('   • batch-200-urls.json (detailed)');
console.log('   • batch-200-urls.txt (all URLs)');
console.log('   • daily-batches.json (split into daily batches of 20)\n');

console.log('📊 Submission Plan:');
console.log(`   • Total URLs: ${newUrls.length}`);
console.log(`   • Daily batches: ${batches.length}`);
console.log(`   • URLs per batch: 20\n`);

console.log('🚀 To submit:');
console.log('   1. Go to: https://search.google.com/search-console');
console.log('   2. Click "URL Inspection"');
console.log('   3. Copy URLs from batch-200-urls.txt');
console.log('   4. Submit 20 URLs today');
console.log('   5. Continue with next 20 tomorrow\n');

console.log('💡 Tip: Use daily-batches.json to see which URLs to submit each day!');




