#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const problematicServices = [
  'ai-agent-development',
  'ai-consulting',
  'ai-digital-marketing',
  'ai-gpt-integration',
  'answer-engine-optimization',
  'app-design-development',
  'chatgpt-optimization',
  'content-marketing',
  'core-web-vitals-optimization',
  'cro-ecommerce',
  'cro-lead-generation',
  'digital-marketing',
  'ecommerce-design',
  'email-marketing-design',
  'enterprise-geo-services',
  'generative-engine-optimization',
  'programmatic-seo',
  'rapid-web-design',
  'schema-markup-services',
  'seo',
  'shopify-development',
  'social-media-design',
  'software-design-development',
  'software-development',
  'ui-ux-design',
  'voice-search-optimization',
  'web-application-development-chicago',
  'web-application-development-company',
  'web-development',
  'website-design',
  'website-redesign',
  'wordpress-development',
  'zero-click-search-optimization'
];

problematicServices.forEach(slug => {
  const filePath = path.join(__dirname, `../app/services/${slug}/page.tsx`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  Skip: ${slug}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the return statement - remove duplicate div
  const badPattern = /return \(\s*<>\s*\{\(\(\) => \{[\s\S]*?\}\)\(\)\}\s*<div className="min-h-screen/;
  const match = content.match(badPattern);
  
  if (match) {
    // Replace with correct structure
    const fixed = match[0].replace(
      /<div className="min-h-screen/,
      '<div className="min-h-screen'
    );
    content = content.replace(match[0], fixed);
    
    // Also fix the closing - remove extra </div> before </>
    content = content.replace(/(<\/div>\s*<\/div>\s*<\/>\s*\))/g, '</div>\n    </>\n  )');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${slug}`);
  } else {
    console.log(`✓ OK: ${slug}`);
  }
});

console.log('\n✨ Fixed service page syntax errors!');

