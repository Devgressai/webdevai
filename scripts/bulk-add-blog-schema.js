#!/usr/bin/env node

/**
 * Bulk Add Article Schema to Blog Posts
 * Adds comprehensive Article schema for rich snippets in search results
 */

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../app/blog');

function addArticleSchema(blogSlug, blogPath) {
  const pagePath = path.join(blogPath, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    return false;
  }

  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Skip if already has article schema
  if (content.includes('generateBlogPostSchema') || content.includes('articleSchema')) {
    console.log(`✓ Skipped: ${blogSlug} (already has schema)`);
    return false;
  }

  // Add imports if needed
  if (!content.includes('from \'../../../lib/advanced-schema-generator\'')) {
    const importLine = content.indexOf('\nimport type { Metadata }');
    if (importLine !== -1) {
      content = content.slice(0, importLine) +
        `\nimport { SchemaMarkup } from '../../../components/seo/schema-markup'\nimport { generateBlogPostSchema } from '../../../lib/advanced-schema-generator'` +
        content.slice(importLine);
    }
  }

  // Extract title and description from metadata
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
  
  const title = titleMatch ? titleMatch[1] : blogSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const description = descMatch ? descMatch[1] : `Comprehensive guide about ${title}`;

  // Add schema generation before export default
  const schemaCode = `
// Article Schema for rich snippets
const articleSchema = generateBlogPostSchema({
  title: "${title.replace(/"/g, '\\"')}",
  description: "${description.replace(/"/g, '\\"')}",
  url: "https://webvello.com/blog/${blogSlug}",
  image: "https://webvello.com/blog/${blogSlug}-og.jpg",
  datePublished: "2024-01-15T08:00:00Z",
  dateModified: new Date().toISOString(),
  author: "Web Vello Team",
  keywords: []
});

`;

  const exportMatch = content.match(/\nexport default function/);
  if (exportMatch) {
    const insertPos = content.indexOf(exportMatch[0]);
    content = content.slice(0, insertPos) + schemaCode + content.slice(insertPos);
  }

  // Add schema markup in return statement
  const returnMatch = content.match(/return \(\s*<(div|article|main)/);
  if (returnMatch) {
    const openTag = returnMatch[1];
    const schemaMarkup = `return (
    <>
      {articleSchema.map((schema, index) => (
        <SchemaMarkup key={index} schema={schema} />
      ))}
      <${openTag}`;
    
    content = content.replace(returnMatch[0], schemaMarkup);
    
    // Fix closing tags - find the last closing before )
    const lastReturn = content.lastIndexOf('\n  )');
    if (lastReturn !== -1) {
      const beforeReturn = content.substring(0, lastReturn);
      const lastClosingTag = beforeReturn.lastIndexOf(`</${openTag}>`);
      if (lastClosingTag !== -1) {
        content = content.substring(0, lastClosingTag + `</${openTag}>`.length) + '\n    </>' + content.substring(lastClosingTag + `</${openTag}>`.length);
      }
    }
  }

  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`✅ Enhanced: ${blogSlug}`);
  return true;
}

// Get all blog directories
console.log('🚀 Bulk adding Article schema to blog posts...\n');

const blogDirs = fs.readdirSync(blogDir).filter(item => {
  const itemPath = path.join(blogDir, item);
  const stat = fs.statSync(itemPath);
  return stat.isDirectory() && item !== 'page.tsx';
});

let count = 0;
blogDirs.forEach(blogSlug => {
  const blogPath = path.join(blogDir, blogSlug);
  if (addArticleSchema(blogSlug, blogPath)) {
    count++;
  }
});

console.log(`\n✨ Complete! Enhanced ${count} blog posts with Article schema.`);
console.log(`📊 These posts are now eligible for Article rich snippets in Google search!`);

