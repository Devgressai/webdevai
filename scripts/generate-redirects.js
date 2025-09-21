#!/usr/bin/env node

/**
 * Redirect Generator Script
 * Generates redirect rules for common 404 patterns and URL changes
 */

const fs = require('fs');
const path = require('path');

// Common redirect patterns based on typical SEO issues
const REDIRECT_PATTERNS = [
  // Old URL patterns that might exist
  { from: '/services/web-design', to: '/services/website-design', status: 301 },
  { from: '/services/seo-services', to: '/services/seo', status: 301 },
  { from: '/services/ai-services', to: '/services/ai-consulting', status: 301 },
  { from: '/services/digital-marketing-services', to: '/services/digital-marketing', status: 301 },
  { from: '/services/ecommerce-design', to: '/services/ecommerce-design', status: 301 },
  { from: '/services/ui-design', to: '/services/ui-ux-design', status: 301 },
  { from: '/services/ux-design', to: '/services/ui-ux-design', status: 301 },
  { from: '/services/app-development', to: '/services/app-design-development', status: 301 },
  { from: '/services/software-development-services', to: '/services/software-development', status: 301 },
  { from: '/services/wordpress-services', to: '/services/wordpress-development', status: 301 },
  { from: '/services/shopify-services', to: '/services/shopify-development', status: 301 },
  { from: '/services/local-seo-services', to: '/services/local-seo', status: 301 },
  { from: '/services/email-marketing', to: '/services/email-marketing-design', status: 301 },
  { from: '/services/social-media-marketing', to: '/services/social-media-design', status: 301 },
  { from: '/services/conversion-optimization', to: '/services/cro-ecommerce', status: 301 },
  { from: '/services/lead-generation', to: '/services/cro-lead-generation', status: 301 },
  
  // Common typos and variations
  { from: '/services/webdev', to: '/services/web-development', status: 301 },
  { from: '/services/webdevlopment', to: '/services/web-development', status: 301 },
  { from: '/services/websitedesign', to: '/services/website-design', status: 301 },
  { from: '/services/website-designing', to: '/services/website-design', status: 301 },
  { from: '/services/seo-optimization', to: '/services/seo', status: 301 },
  { from: '/services/search-engine-optimization', to: '/services/seo', status: 301 },
  { from: '/services/ai-integration', to: '/services/ai-gpt-integration', status: 301 },
  { from: '/services/chatgpt-services', to: '/services/chatgpt-optimization', status: 301 },
  { from: '/services/gpt-integration', to: '/services/ai-gpt-integration', status: 301 },
  
  // City variations
  { from: '/new-york', to: '/new-york-ny', status: 301 },
  { from: '/los-angeles', to: '/los-angeles-ca', status: 301 },
  { from: '/chicago', to: '/chicago-il', status: 301 },
  { from: '/houston', to: '/houston-tx', status: 301 },
  { from: '/phoenix', to: '/phoenix-az', status: 301 },
  { from: '/philadelphia', to: '/philadelphia-pa', status: 301 },
  { from: '/san-antonio', to: '/san-antonio-tx', status: 301 },
  { from: '/san-diego', to: '/san-diego-ca', status: 301 },
  { from: '/dallas', to: '/dallas-tx', status: 301 },
  { from: '/san-jose', to: '/san-jose-ca', status: 301 },
  { from: '/austin', to: '/austin-tx', status: 301 },
  { from: '/jacksonville', to: '/jacksonville-fl', status: 301 },
  { from: '/fort-worth', to: '/fort-worth-tx', status: 301 },
  { from: '/columbus', to: '/columbus-oh', status: 301 },
  { from: '/charlotte', to: '/charlotte-nc', status: 301 },
  { from: '/san-francisco', to: '/san-francisco-ca', status: 301 },
  { from: '/seattle', to: '/seattle-wa', status: 301 },
  { from: '/denver', to: '/denver-co', status: 301 },
  { from: '/washington', to: '/washington-dc', status: 301 },
  { from: '/boston', to: '/boston-ma', status: 301 },
  
  // Common page variations
  { from: '/about-us', to: '/about', status: 301 },
  { from: '/contact-us', to: '/contact', status: 301 },
  { from: '/pricing-plans', to: '/pricing', status: 301 },
  { from: '/our-services', to: '/services', status: 301 },
  { from: '/service', to: '/services', status: 301 },
  { from: '/portfolio', to: '/case-studies', status: 301 },
  { from: '/case-study', to: '/case-studies', status: 301 },
  { from: '/blog-posts', to: '/blog', status: 301 },
  { from: '/articles', to: '/blog', status: 301 },
  { from: '/news', to: '/blog', status: 301 },
  { from: '/resources', to: '/resources', status: 301 },
  { from: '/resource', to: '/resources', status: 301 },
  { from: '/tools', to: '/seo-audit', status: 301 },
  { from: '/seo-tools', to: '/seo-audit', status: 301 },
  { from: '/website-audit', to: '/seo-audit', status: 301 },
  { from: '/speed-test', to: '/website-speed-test', status: 301 },
  { from: '/demo', to: '/enhanced-demo', status: 301 },
  
  // Industry variations
  { from: '/industries/healthcare', to: '/industries', status: 301 },
  { from: '/industries/finance', to: '/industries', status: 301 },
  { from: '/industries/technology', to: '/industries', status: 301 },
  { from: '/industries/retail', to: '/industries', status: 301 },
  { from: '/industries/education', to: '/industries', status: 301 },
  { from: '/industry', to: '/industries', status: 301 },
  
  // Location variations
  { from: '/locations', to: '/locations', status: 301 },
  { from: '/location', to: '/locations', status: 301 },
  { from: '/cities', to: '/locations', status: 301 },
  { from: '/city', to: '/locations', status: 301 },
  
  // Solutions variations
  { from: '/solutions/agency-results', to: '/solutions/agency-results', status: 301 },
  { from: '/solutions/declining-traffic', to: '/solutions/declining-traffic', status: 301 },
  { from: '/solutions/google-visibility', to: '/solutions/google-visibility', status: 301 },
  { from: '/solutions/website-conversion', to: '/solutions/website-conversion', status: 301 },
  { from: '/solutions/website-leads', to: '/solutions/website-leads', status: 301 },
  { from: '/solutions/website-roi', to: '/solutions/website-roi', status: 301 },
  { from: '/solution', to: '/solutions', status: 301 },
  
  // Common trailing slash issues
  { from: '/about/', to: '/about', status: 301 },
  { from: '/contact/', to: '/contact', status: 301 },
  { from: '/pricing/', to: '/pricing', status: 301 },
  { from: '/services/', to: '/services', status: 301 },
  { from: '/blog/', to: '/blog', status: 301 },
  { from: '/resources/', to: '/resources', status: 301 },
  { from: '/industries/', to: '/industries', status: 301 },
  { from: '/locations/', to: '/locations', status: 301 },
  { from: '/solutions/', to: '/solutions', status: 301 },
];

// Generate Next.js redirects
function generateNextJsRedirects() {
  const redirects = REDIRECT_PATTERNS.map(pattern => ({
    source: pattern.from,
    destination: pattern.to,
    permanent: pattern.status === 301
  }));
  
  return {
    redirects,
    // Add rewrites for common patterns
    rewrites: [
      {
        source: '/sitemap.xml',
        destination: '/sitemap'
      }
    ]
  };
}

// Generate Netlify redirects
function generateNetlifyRedirects() {
  const redirects = REDIRECT_PATTERNS.map(pattern => 
    `${pattern.from} ${pattern.to} ${pattern.status}`
  );
  
  return redirects.join('\n');
}

// Generate Apache .htaccess redirects
function generateApacheRedirects() {
  const redirects = REDIRECT_PATTERNS.map(pattern => 
    `Redirect ${pattern.status === 301 ? '301' : '302'} ${pattern.from} ${pattern.to}`
  );
  
  return redirects.join('\n');
}

// Generate Nginx redirects
function generateNginxRedirects() {
  const redirects = REDIRECT_PATTERNS.map(pattern => 
    `rewrite ^${pattern.from.replace(/\//g, '\\/')}$ ${pattern.to} ${pattern.status === 301 ? 'permanent' : 'redirect'};`
  );
  
  return redirects.join('\n');
}

// Save redirects to files
function saveRedirects() {
  const outputDir = path.join(process.cwd(), 'redirects');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Next.js redirects
  const nextjsConfig = generateNextJsRedirects();
  fs.writeFileSync(
    path.join(outputDir, 'nextjs-redirects.json'),
    JSON.stringify(nextjsConfig, null, 2)
  );
  
  // Netlify redirects
  const netlifyRedirects = generateNetlifyRedirects();
  fs.writeFileSync(
    path.join(outputDir, '_redirects'),
    netlifyRedirects
  );
  
  // Apache redirects
  const apacheRedirects = generateApacheRedirects();
  fs.writeFileSync(
    path.join(outputDir, '.htaccess'),
    apacheRedirects
  );
  
  // Nginx redirects
  const nginxRedirects = generateNginxRedirects();
  fs.writeFileSync(
    path.join(outputDir, 'nginx-redirects.conf'),
    nginxRedirects
  );
  
  console.log('✅ Redirect files generated:');
  console.log(`   📁 ${path.join(outputDir, 'nextjs-redirects.json')}`);
  console.log(`   📁 ${path.join(outputDir, '_redirects')}`);
  console.log(`   📁 ${path.join(outputDir, '.htaccess')}`);
  console.log(`   📁 ${path.join(outputDir, 'nginx-redirects.conf')}`);
}

// Generate redirect report
function generateReport() {
  console.log('\n📋 REDIRECT GENERATION REPORT');
  console.log('==============================');
  console.log(`🕐 Generated: ${new Date().toISOString()}`);
  console.log(`📊 Total Redirect Rules: ${REDIRECT_PATTERNS.length}`);
  console.log('');
  
  const byType = REDIRECT_PATTERNS.reduce((acc, pattern) => {
    const type = pattern.from.split('/')[1] || 'root';
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  
  console.log('📈 REDIRECT BREAKDOWN:');
  Object.entries(byType).forEach(([type, count]) => {
    console.log(`   ${type}: ${count} redirects`);
  });
  console.log('');
  
  console.log('🎯 COMMON PATTERNS COVERED:');
  console.log('   • Service name variations and typos');
  console.log('   • City name variations (with/without state)');
  console.log('   • Page name variations (about-us → about)');
  console.log('   • Trailing slash issues');
  console.log('   • Common industry and location patterns');
  console.log('');
  
  console.log('🚀 NEXT STEPS:');
  console.log('   1. Review generated redirect files');
  console.log('   2. Implement appropriate redirects for your hosting platform');
  console.log('   3. Test redirects to ensure they work correctly');
  console.log('   4. Monitor 404 errors in Google Search Console');
  console.log('   5. Add new redirects as needed based on 404 reports');
  console.log('');
}

// Main execution
function main() {
  console.log('🚀 Web Vello Redirect Generator');
  console.log('===============================\n');
  
  saveRedirects();
  generateReport();
  
  console.log('✅ Redirect generation completed!');
}

// Run the generator
if (require.main === module) {
  main();
}

module.exports = {
  generateNextJsRedirects,
  generateNetlifyRedirects,
  generateApacheRedirects,
  generateNginxRedirects,
  REDIRECT_PATTERNS
};
