const https = require('https');
const fs = require('fs');

// Your sitemap URL
const SITEMAP_URL = 'https://www.webvello.com/sitemap.xml';

// URL to ping
const GOOGLE_PING_URL = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;

console.log('🚀 Submitting sitemap to Google...\n');
console.log(`📍 Sitemap: ${SITEMAP_URL}\n`);

// Ping Google
https.get(GOOGLE_PING_URL, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ Successfully submitted sitemap to Google!');
      console.log('📊 Response:', data);
    } else {
      console.log('⚠️  Unexpected response:', res.statusCode);
      console.log('📄 Response:', data);
    }
    
    console.log('\n' + '='.repeat(70));
    console.log('📝 NEXT STEPS:');
    console.log('='.repeat(70));
    console.log('\n1. Go to Google Search Console:');
    console.log('   https://search.google.com/search-console');
    console.log('\n2. Navigate to: Sitemaps (left sidebar)');
    console.log('\n3. Enter: sitemap.xml');
    console.log('\n4. Click "Submit"');
    console.log('\n5. Monitor indexing progress in Coverage Report');
    console.log('\n' + '='.repeat(70));
    console.log('⏰ Expected Timeline:');
    console.log('   • 1-3 days: Google starts crawling');
    console.log('   • 3-7 days: Priority pages indexed');
    console.log('   • 7-14 days: Most pages indexed');
    console.log('   • 14-30 days: Full indexing complete');
    console.log('='.repeat(70));
  });
}).on('error', (err) => {
  console.error('❌ Error submitting sitemap:', err.message);
  console.log('\n💡 You can manually submit by visiting:');
  console.log('   ' + GOOGLE_PING_URL);
});












