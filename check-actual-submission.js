const { google } = require('googleapis');

// Let's actually test submitting ONE URL and see the real response
const keyFilePath = '/Users/george/Desktop/webvello-service-account.json';

async function testActualSubmission() {
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

    const testUrl = 'https://www.webvello.com/test-page-verification';
    
    console.log('🔍 Testing actual API submission...\n');
    console.log(`📄 Submitting: ${testUrl}\n`);

    // Submit the URL
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: testUrl,
        type: 'URL_UPDATED',
      },
    });

    console.log('✅ API Response:');
    console.log(JSON.stringify(response.data, null, 2));
    console.log('\n📊 HTTP Status:', response.status);
    console.log('📊 Status Text:', response.statusText);
    
    if (response.status === 200) {
      console.log('\n✅ SUCCESS: API accepted the submission!');
      console.log('💡 The URL was successfully submitted to Google Indexing API');
      console.log('⏳ It may take 24-48 hours to see in Search Console');
    }

    // Now try to get metadata immediately
    console.log('\n\n🔍 Checking metadata immediately after submission...\n');
    
    try {
      const metadata = await indexing.urlNotifications.getMetadata({
        url: testUrl,
      });
      
      console.log('✅ Metadata found:');
      console.log(JSON.stringify(metadata.data, null, 2));
    } catch (metaError) {
      console.log('⚠️  Metadata not found (this is normal immediately after submission)');
      console.log('Error:', metaError.message);
      console.log('\n💡 This doesn\'t mean the submission failed!');
      console.log('   Metadata may take time to be available via the API.');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

testActualSubmission();

