const { google } = require('googleapis');

// Path to your service account key file
const keyFilePath = '/Users/george/Desktop/webvello-service-account.json';

// Test a few URLs we submitted
const testUrls = [
  'https://www.webvello.com/',
  'https://www.webvello.com/about',
  'https://www.webvello.com/jersey-city-nj',
  'https://www.webvello.com/new-york-ny/website-design',
  'https://www.webvello.com/services/seo',
];

async function checkIndexingStatus(url) {
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

    // Get the status of the URL notification
    const response = await indexing.urlNotifications.getMetadata({
      url: url,
    });

    return { 
      success: true, 
      url,
      status: response.data,
      notifyTime: response.data.latestUpdate?.notifyTime || 'Not found'
    };
  } catch (error) {
    return { 
      success: false, 
      url, 
      error: error.message,
      code: error.code 
    };
  }
}

async function verifySubmissions() {
  console.log('🔍 Verifying Google Indexing API Submissions...\n');
  console.log('━'.repeat(70));
  
  for (const url of testUrls) {
    console.log(`\n📄 Checking: ${url}`);
    const result = await checkIndexingStatus(url);
    
    if (result.success) {
      console.log('✅ STATUS: Submitted to Google');
      console.log(`📅 Last Notification: ${result.notifyTime}`);
      if (result.status.latestUpdate) {
        console.log(`📊 Type: ${result.status.latestUpdate.type}`);
        console.log(`🌐 URL: ${result.status.latestUpdate.url}`);
      }
    } else {
      if (result.code === 404) {
        console.log('❌ STATUS: NOT FOUND in Google Indexing API');
        console.log('⚠️  This URL was not successfully submitted');
      } else {
        console.log(`❌ ERROR: ${result.error}`);
      }
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n━'.repeat(70));
  console.log('\n💡 Summary:');
  console.log('If URLs show "Last Notification" with today\'s date, they were successfully submitted!');
  console.log('If they show "NOT FOUND", the submission did not go through.');
}

verifySubmissions().catch(console.error);

