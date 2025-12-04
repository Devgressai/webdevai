const { google } = require('googleapis');
const fs = require('fs');

// Path to your service account key file (on Desktop, not in repo)
const keyFilePath = '/Users/george/Desktop/webvello-service-account.json';

// Your website base URL
const baseUrl = 'https://www.webvello.com';

// Load the 200 URLs from the generated file
const urlsFromFile = fs.readFileSync('batch-200-urls.txt', 'utf8')
  .split('\n')
  .filter(line => line.trim().length > 0)
  .map(url => url.replace(baseUrl, '')); // Remove base URL to get path only

console.log(`📊 Loaded ${urlsFromFile.length} URLs from batch-200-urls.txt\n`);

// Use all 200 URLs (Google's daily quota)
const pagesToSubmit = urlsFromFile.slice(0, 200);

async function submitUrlForIndexing(url) {
  try {
    // Create auth client from JSON key file
    const auth = new google.auth.GoogleAuth({
      credentials: require(keyFilePath),
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    // Get the auth client
    const authClient = await auth.getClient();

    // Create the indexing API client
    const indexing = google.indexing({
      version: 'v3',
      auth: authClient,
    });

    // Submit the URL for indexing
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED', // Use 'URL_UPDATED' for new or updated content
      },
    });

    return { success: true, url };
  } catch (error) {
    return { success: false, url, error: error.message };
  }
}

async function submitAllPages() {
  console.log('🚀 Starting Google Indexing API submission...\n');
  console.log(`📄 Submitting ${pagesToSubmit.length} URLs`);
  console.log(`⏱️  Delay: 3 seconds between each submission`);
  console.log(`📈 Daily Limit: 200 URLs\n`);
  
  const results = { successful: [], failed: [] };
  const startTime = Date.now();

  for (let i = 0; i < pagesToSubmit.length; i++) {
    const page = pagesToSubmit[i];
    const fullUrl = baseUrl + page;
    
    // Progress indicator
    process.stdout.write(`\r[${i + 1}/${pagesToSubmit.length}] Submitting... (${results.successful.length} ✅ | ${results.failed.length} ❌)`);
    
    const result = await submitUrlForIndexing(fullUrl);
    
    if (result.success) {
      results.successful.push(fullUrl);
    } else {
      results.failed.push({ url: fullUrl, error: result.error });
    }
    
    // Wait 3 seconds between requests to avoid rate limiting
    if (i < pagesToSubmit.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  const endTime = Date.now();
  const duration = Math.round((endTime - startTime) / 1000);
  const minutes = Math.round(duration / 60);

  console.log('\n\n' + '='.repeat(70));
  console.log('📊 SUBMISSION SUMMARY');
  console.log('='.repeat(70));
  console.log(`✅ Successful: ${results.successful.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log(`⏱️  Duration: ${duration} seconds (${minutes} minutes)`);
  console.log(`📈 Success Rate: ${Math.round((results.successful.length / pagesToSubmit.length) * 100)}%`);
  
  if (results.failed.length > 0 && results.failed.length <= 10) {
    console.log('\n❌ Failed URLs:');
    results.failed.forEach(item => {
      console.log(`   - ${item.url}`);
      console.log(`     Error: ${item.error}`);
    });
  } else if (results.failed.length > 10) {
    console.log(`\n❌ ${results.failed.length} URLs failed. First 5:`);
    results.failed.slice(0, 5).forEach(item => {
      console.log(`   - ${item.url}: ${item.error}`);
    });
  }
  
  console.log('\n✨ Submission complete!');
  console.log(`📊 Total pages submitted: ${results.successful.length}/200`);
  console.log(`🔄 Remaining quota: ${200 - results.successful.length} pages`);
  
  // Save results to file
  const resultsFile = {
    timestamp: new Date().toISOString(),
    total: pagesToSubmit.length,
    successful: results.successful.length,
    failed: results.failed.length,
    duration: duration,
    successRate: Math.round((results.successful.length / pagesToSubmit.length) * 100),
    successfulUrls: results.successful,
    failedUrls: results.failed
  };
  
  fs.writeFileSync('submission-results.json', JSON.stringify(resultsFile, null, 2));
  console.log('\n💾 Results saved to: submission-results.json');
  
  // Update already-indexed-pages.txt with successful submissions
  const alreadyIndexedPath = 'already-indexed-pages.txt';
  let content = fs.readFileSync(alreadyIndexedPath, 'utf8');
  
  // Extract the path from successful URLs and add them
  const successfulPaths = results.successful.map(url => {
    return url.replace(baseUrl, '');
  });
  
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Check submission-results.json for details`);
  console.log(`   2. Wait 1-7 days for Google to process`);
  console.log(`   3. Verify indexing: site:webvello.com`);
  console.log(`   4. Monitor in Google Search Console`);
}

// Run the submission
submitAllPages().catch(console.error);









