// Generate a prioritized list of URLs for manual submission in Google Search Console
// This helps get critical pages indexed faster

const fs = require('fs');

// High-priority pages to manually submit first (top 20)
const highPriorityPages = [
  // Core pages
  '',
  '/about',
  '/contact',
  '/pricing',
  
  // Top services
  '/services/website-design',
  '/services/web-development',
  '/services/seo',
  '/services/local-seo',
  '/services/ai-seo',
  '/services/digital-marketing',
  
  // Major cities (top 10)
  '/new-york-ny',
  '/los-angeles-ca',
  '/chicago-il',
  '/houston-tx',
  '/phoenix-az',
  '/dallas-tx',
  '/san-diego-ca',
  '/san-jose-ca',
  '/austin-tx',
  '/miami-fl',
];

// City + Service combinations (high value)
const cityServiceCombos = [
  '/new-york-ny/seo',
  '/los-angeles-ca/web-development',
  '/chicago-il/website-design',
  '/houston-tx/seo',
  '/boston-ma/web-development',
  '/seattle-wa/seo',
  '/atlanta-ga/website-design',
  '/miami-fl/seo',
  '/portland-or/web-development',
  '/las-vegas-nv/seo',
];

// Additional pages (medium priority)
const additionalPages = [
  '/blog',
  '/services',
  '/solutions',
  '/case-studies',
  '/industries',
  '/seo-audit',
  '/website-speed-test',
];

const baseUrl = 'https://www.webvello.com';

// Generate all URLs
const allUrls = [
  ...highPriorityPages.map(page => `${baseUrl}${page}`),
  ...cityServiceCombos.map(page => `${baseUrl}${page}`),
  ...additionalPages.map(page => `${baseUrl}${page}`),
];

// Generate output
const output = {
  summary: {
    totalUrls: allUrls.length,
    highPriority: highPriorityPages.length,
    cityServiceCombos: cityServiceCombos.length,
    additional: additionalPages.length,
    generatedAt: new Date().toISOString(),
  },
  urls: allUrls,
  submissionInstructions: {
    method: 'Google Search Console URL Inspection Tool',
    url: 'https://search.google.com/search-console',
    steps: [
      'Go to Google Search Console',
      'Click "URL Inspection" at the top',
      'Paste each URL below',
      'Click "Request Indexing"',
      'Wait a few seconds between each submission',
      'Limited to ~20 submissions per day',
    ],
  },
};

// Write to file
fs.writeFileSync('manual-submission-urls.json', JSON.stringify(output, null, 2));

// Also create a simple text file
fs.writeFileSync('manual-submission-urls.txt', output.urls.join('\n'));

console.log('✅ Generated submission lists!\n');
console.log('📊 Summary:');
console.log(`   Total URLs: ${output.summary.totalUrls}`);
console.log(`   High Priority: ${output.summary.highPriority}`);
console.log(`   City+Service Combo: ${output.summary.cityServiceCombos}`);
console.log(`   Additional: ${output.summary.additional}`);
console.log('\n📁 Files created:');
console.log('   • manual-submission-urls.json (detailed)');
console.log('   • manual-submission-urls.txt (URLs only)');
console.log('\n📝 To submit manually:');
console.log('   1. Open: https://search.google.com/search-console');
console.log('   2. Click "URL Inspection"');
console.log('   3. Copy URLs from manual-submission-urls.txt');
console.log('   4. Paste and click "Request Indexing"');
console.log('   5. Wait 3 seconds between submissions');
console.log('\n💡 Tip: Submit the first 20 URLs today, then continue tomorrow!');








