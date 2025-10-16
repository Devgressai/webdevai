#!/usr/bin/env node
/**
 * Bulk Meta Tags Optimization Script
 * Fixes title tags and meta descriptions across all pages
 */

const fs = require('fs');
const path = require('path');

const fixes = [
  {
    file: 'app/services/local-seo/page.tsx',
    oldTitle: 'Local SEO Services | Rank #1 in Your Market | Web Vello',
    newTitle: 'Local SEO Services | Rank #1 in Your Market',
    oldDesc: /description: '.*?'/,
    newDesc: "description: 'Dominate local search & get more customers with expert local SEO. Google My Business optimization, citations, reviews & geo-targeted strategies.'"
  },
  {
    file: 'app/services/ai-seo/page.tsx',
    oldTitle: 'AI SEO Agency | Predictive Search Growth Strategies | Web Vello',
    newTitle: 'AI SEO Agency | Predictive Growth Strategies',
    oldDesc: /description: '.*?'/,
    newDesc: "description: 'Leverage AI-powered SEO for 300%+ traffic growth. Predictive keyword research, content optimization & automated performance tracking.'"
  },
  {
    file: 'app/about/page.tsx',
    oldTitle: 'Web Vello - Digital Marketing Agency | AI SEO, Local SEO, Web Development',
    newTitle: 'About Web Vello | Digital Marketing Agency',
    oldDesc: /description: '.*?'/,
    newDesc: "description: 'Leading digital marketing agency specializing in AI-powered SEO, web development & conversion optimization. Trusted by 500+ businesses.'"
  },
  {
    file: 'app/contact/page.tsx',
    oldTitle: 'Contact Web Vello | Get Your Free Digital Marketing Strategy',
    newTitle: 'Contact Web Vello | Free Marketing Strategy',
    oldDesc: /description: '.*?'/,
    newDesc: "description: 'Get a free digital marketing strategy consultation. Expert SEO, web development & marketing services. Response within 24 hours guaranteed.'"
  },
  {
    file: 'app/pricing/page.tsx',
    oldTitle: 'Pricing | Transparent SEO & Web Development Packages | Web Vello',
    newTitle: 'Pricing | SEO & Web Development Packages',
    oldDesc: /description: '.*?'/,
    newDesc: "description: 'Transparent pricing for SEO, web development & digital marketing services. Custom packages tailored to your business goals & budget.'"
  }
];

console.log('Starting Meta Tags Optimization...');
console.log('');

fixes.forEach(({ file, oldTitle, newTitle, oldDesc, newDesc }) => {
  const filePath = path.join('/Users/george/webdevai', file);
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log('File not found: ' + file);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix title
    if (oldTitle && content.includes(oldTitle)) {
      content = content.replace(oldTitle, newTitle);
      changed = true;
    }
    
    // Fix description
    if (oldDesc && newDesc) {
      if (oldDesc instanceof RegExp) {
        content = content.replace(oldDesc, newDesc);
      } else {
        content = content.replace(oldDesc, newDesc);
      }
      changed = true;
    }
    
    // Add og:image if missing and has openGraph
    if (content.includes('openGraph: {') && !content.includes('images: [')) {
      content = content.replace(
        /(type: ['"']website['"'],?\s*)/,
        '$1\n    images: [\n      {\n        url: \'https://webvello.com/og-image.jpg\',\n        width: 1200,\n        height: 630,\n        alt: \'Web Vello Services\',\n      },\n    ],'
      );
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed: ' + file);
    } else {
      console.log('No changes needed: ' + file);
    }
  } catch (error) {
    console.log('Error processing ' + file + ': ' + error.message);
  }
});

console.log('');
console.log('Meta tags optimization complete!');
console.log('');
