const { google } = require('googleapis');
const fs = require('fs');

const keyFilePath = '/Users/george/Desktop/webvello-service-account.json';

// Load the submission results to verify
const results = JSON.parse(fs.readFileSync('submission-results.json', 'utf8'));

async function verifyUrl(url) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: require(keyFilePath),
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const authClient = await auth.getClient();
    const indexing = google.indexing({
      version: 'v3',
      auth: authClient,
    });

    const response = await indexing.urlNotifications.getMetadata({
      url: url,
    });

    return {
      url,
      found: true,
      data: response.data
    };
  } catch (error) {
    return {
      url,
      found: false,
      error: error.message
    };
  }
}

async function verifySubmissions() {
  console.log('🔍 Verifying Recent Submissions...\n');
  console.log(`Total URLs submitted: ${results.total}`);
  console.log(`Submission timestamp: ${results.timestamp}\n`);
  
  // Check first 5, middle 5, and last 5 URLs
  const urlsToCheck = [
    ...results.successfulUrls.slice(0, 5),
    ...results.successfulUrls.slice(Math.floor(results.successfulUrls.length / 2), Math.floor(results.successfulUrls.length / 2) + 5),
    ...results.successfulUrls.slice(-5)
  ];
  
  console.log(`Checking ${urlsToCheck.length} sample URLs...\n`);
  
  let found = 0;
  let notFound = 0;
  
  for (let i = 0; i < urlsToCheck.length; i++) {
    const url = urlsToCheck[i];
    process.stdout.write(`\r[${i + 1}/${urlsToCheck.length}] Verifying... (${found} ✅ | ${notFound} ❌)`);
    
    const result = await verifyUrl(url);
    
    if (result.found) {
      found++;
      console.log(`\n✅ FOUND: ${url}`);
      if (result.data.latestUpdate) {
        console.log(`   Last updated: ${result.data.latestUpdate.notifyTime}`);
        console.log(`   Type: ${result.data.latestUpdate.type}`);
      }
    } else {
      notFound++;
      console.log(`\n❌ NOT FOUND: ${url}`);
    }
    
    // Wait 1 second between checks
    if (i < urlsToCheck.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log('\n\n' + '='.repeat(70));
  console.log('📊 VERIFICATION SUMMARY');
  console.log('='.repeat(70));
  console.log(`✅ Found in API: ${found}`);
  console.log(`❌ Not Found: ${notFound}`);
  console.log(`📈 Verification Rate: ${Math.round((found / urlsToCheck.length) * 100)}%`);
  console.log('\n⚠️  NOTE: Google Indexing API only tracks JobPosting/BroadcastEvent');
  console.log('   Regular web pages may show as "NOT FOUND" even if submitted.');
  console.log('   Check Google Search Console Coverage Report for actual status.');
  console.log('\n💡 To verify actual indexing:');
  console.log('   1. Go to: https://search.google.com/search-console');
  console.log('   2. Check: Coverage → Valid');
  console.log('   3. Search: site:webvello.com/jersey-city-nj');
}

verifySubmissions().catch(console.error);








