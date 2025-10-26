/**
 * CORRECT METHOD: Google Search Console URL Inspection API
 * 
 * This is the proper way to request indexing for regular web pages.
 * The Indexing API only works for JobPosting and BroadcastEvent content.
 * 
 * Setup Required:
 * 1. Enable "Google Search Console API" in Google Cloud Console
 * 2. Add the service account email to your Search Console property as an owner
 * 3. Update the service account permissions
 */

const { google } = require('googleapis');

const keyFilePath = '/Users/george/Desktop/webvello-service-account.json';
const siteUrl = 'sc-domain:webvello.com'; // or 'https://www.webvello.com' if URL property

// Priority pages to index (start with high-value pages)
const pagesToIndex = [
  '',  // Homepage
  '/about',
  '/contact',
  '/pricing',
  '/services/seo',
  '/services/web-development',
  '/services/website-design',
  // Add more URLs here
].slice(0, 10); // Start with 10 for testing

async function requestIndexingViaSearchConsole(inspectionUrl) {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: authClient,
    });

    // First, inspect the URL
    const inspection = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: inspectionUrl,
        siteUrl: siteUrl,
      },
    });

    console.log(`✅ Inspected: ${inspectionUrl}`);
    console.log(`   Status: ${inspection.data.inspectionResult.indexStatusResult.verdict}`);
    
    // Note: There's no direct "request indexing" API endpoint
    // You need to use the URL Inspection Tool in Search Console UI
    // OR ensure your sitemap is submitted and crawlable
    
    return { success: true, url: inspectionUrl, data: inspection.data };
  } catch (error) {
    console.log(`❌ Failed: ${inspectionUrl}`);
    console.log(`   Error: ${error.message}`);
    return { success: false, url: inspectionUrl, error: error.message };
  }
}

async function main() {
  console.log('🔍 Using Google Search Console API...\n');
  console.log('⚠️  NOTE: The Indexing API only works for JobPosting/BroadcastEvent.');
  console.log('For regular pages, use Search Console URL Inspection API.\n');
  console.log('━'.repeat(70));
  
  for (const page of pagesToIndex) {
    const fullUrl = 'https://www.webvello.com' + page;
    await requestIndexingViaSearchConsole(fullUrl);
    console.log('');
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\n💡 IMPORTANT NEXT STEPS:');
  console.log('1. Verify your sitemap is submitted to Search Console');
  console.log('2. Use URL Inspection Tool in Search Console UI to request indexing');
  console.log('3. Ensure robots.txt allows Google to crawl your pages');
  console.log('4. Check that pages are returning 200 status codes');
}

main().catch(error => {
  console.error('Error:', error.message);
  console.log('\n⚠️  Setup Required:');
  console.log('1. Enable "Google Search Console API" in Google Cloud Console');
  console.log('2. Add service account as owner in Search Console');
  console.log('3. Use the correct siteUrl format');
});

