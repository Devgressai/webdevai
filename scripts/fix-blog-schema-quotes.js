#!/usr/bin/env node

/**
 * Fix unterminated strings in blog schema
 */

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../app/blog');

const problematicBlogs = [
  'detroit-conversion-rate-optimization-services',
  'el-paso-conversion-rate-optimization-services',
  'government-companies-el-paso-guide',
  'louisville-conversion-rate-optimization-services',
  'oklahoma-city-conversion-rate-optimization-company',
  'oklahoma-city-conversion-rate-optimization-services'
];

problematicBlogs.forEach(blogSlug => {
  const pagePath = path.join(blogDir, blogSlug, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️ Skipped: ${blogSlug} (not found)`);
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Find and fix unterminated strings in description
  const schemaMatch = content.match(/const articleSchema = generateBlogPostSchema\(\{[\s\S]*?\}\);/);
  if (schemaMatch) {
    let schemaBlock = schemaMatch[0];
    
    // Fix unterminated description strings - find lines that end with backslash-quote without closing quote
    schemaBlock = schemaBlock.replace(/description: "([^"]*)\\",$/, (match, desc) => {
      // This is an incomplete string, try to complete it
      return `description: "${desc}",`;
    });
    
    // Also fix any descriptions that are cut off
    schemaBlock = schemaBlock.replace(/description: "([^"]*)",$/, (match, desc) => {
      if (!desc.endsWith('.')) {
        return `description: "${desc}.",`;
      }
      return match;
    });
    
    content = content.replace(schemaMatch[0], schemaBlock);
  }
  
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`✅ Fixed: ${blogSlug}`);
});

console.log('\n✨ Fixed quote issues in blog schemas!');

