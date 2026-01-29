const fs = require('fs');
const path = require('path');

const source = '/Users/george/Downloads/ChatGPT Image Jan 28, 2026, 09_35_30 AM.png';
const dest = path.join(__dirname, 'public', 'webvello-logo.png');

try {
  fs.copyFileSync(source, dest);
  console.log('✅ Logo copied successfully to public/webvello-logo.png');
} catch (error) {
  console.error('❌ Error copying file:', error.message);
  console.log('\nPlease manually copy the file:');
  console.log(`From: ${source}`);
  console.log(`To: ${dest}`);
}
