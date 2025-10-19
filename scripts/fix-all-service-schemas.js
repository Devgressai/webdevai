#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all problematic files
const problematicFiles = execSync('grep -l "(() => {" app/services/*/page.tsx', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(f => f);

console.log(`Found ${problematicFiles.length} files to fix\n`);

problematicFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const serviceName = path.basename(path.dirname(filePath));
  
  // Remove the IIFE wrapper and move schema generation before the component
  // Find the export default function line
  const funcMatch = content.match(/export default function (\w+)\(\)/);
  if (!funcMatch) {
    console.log(`⏭️  Skip: ${serviceName} (no function found)`);
    return;
  }

  const functionName = funcMatch[1];
  
  // Extract the schema generation from inside the IIFE
  const iiffeMatch = content.match(/\{\(\(\) => \{[\s\S]*?const schema = generateServicePageSchema\(([\s\S]*?)\);[\s\S]*?return schema\.map[\s\S]*?\}\)\(\)\}/);
  
  if (!iiffeMatch) {
    console.log(`⏭️  Skip: ${serviceName} (no IIFE found)`);
    return;
  }

  // Extract just the parameters
  const schemaParams = iiffeMatch[1];
  
  // Create the schema generation code to add before the function
  const schemaCode = `// Generate schema for this service page\nconst serviceSchema = generateServicePageSchema(${schemaParams});\n\n`;
  
  // Remove the IIFE block and replace with simple schema mapping
  content = content.replace(
    /\{\(\(\) => \{[\s\S]*?const schema = generateServicePageSchema\([\s\S]*?\);[\s\S]*?return schema\.map\([\s\S]*?\)\(\)\}/,
    '{serviceSchema.map((schema, index) => (\n        <SchemaMarkup key={index} schema={schema} />\n      ))}'
  );
  
  // Add the schema generation before the export default
  content = content.replace(
    /export default function/,
    schemaCode + 'export default function'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fixed: ${serviceName}`);
});

console.log(`\n✨ Complete! Fixed ${problematicFiles.length} service pages.`);

