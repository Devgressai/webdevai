const fs = require('fs');
const path = require('path');

// Load the image mapping
const mappingPath = path.join(__dirname, '../blog-image-mapping.json');
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

// Function to update a single blog file
function updateBlogFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Replace all Unsplash URLs with local paths
  Object.keys(mapping).forEach(oldUrl => {
    const newPath = mapping[oldUrl];
    
    // Replace various URL formats
    const patterns = [
      new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      new RegExp(oldUrl.split('?')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^"\'\\s]*', 'g')
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, newPath);
        updated = true;
      }
    });
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

// Scan and update all blog pages
function updateAllBlogPages() {
  const blogDir = path.join(__dirname, '../app/blog');
  let updatedCount = 0;
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx')) {
        if (updateBlogFile(filePath)) {
          console.log(`✓ Updated: ${path.relative(blogDir, filePath)}`);
          updatedCount++;
        }
      }
    }
  }
  
  scanDirectory(blogDir);
  return updatedCount;
}

// Main execution
console.log('🔄 Updating blog pages with local image paths...\n');
const updated = updateAllBlogPages();
console.log(`\n✅ Updated ${updated} blog pages!`);

