#!/usr/bin/env node

/**
 * City Content Audit Script
 * 
 * This script audits city-specific pages to ensure content matches the correct city
 * and identifies missing city-industry-service combinations.
 */

const fs = require('fs');
const path = require('path');

// Read the static content registry
const cisStaticPath = path.join(__dirname, '../lib/cis-static.ts');
const cisStaticContent = fs.readFileSync(cisStaticPath, 'utf8');

// Extract all city-industry-service combinations
const registryMatches = cisStaticContent.match(/'([^']+)':\s*{/g) || [];
const combinations = registryMatches.map(match => {
  const key = match.replace(/'/g, '').replace(': {', '');
  return key;
});

console.log('🔍 City Content Audit Report');
console.log('============================\n');

// Group by city
const cityGroups = {};
combinations.forEach(combo => {
  const [city, industry, service] = combo.split('__');
  if (!cityGroups[city]) {
    cityGroups[city] = { industries: new Set(), services: new Set() };
  }
  cityGroups[city].industries.add(industry);
  cityGroups[city].services.add(service);
});

// Check for content mismatches
console.log('📊 Content Analysis:');
console.log('-------------------');

Object.keys(cityGroups).forEach(city => {
  console.log(`\n🏙️  ${city.replace(/-/g, ' ').toUpperCase()}`);
  console.log(`   Industries: ${Array.from(cityGroups[city].industries).join(', ')}`);
  console.log(`   Services: ${Array.from(cityGroups[city].services).join(', ')}`);
});

// Check for missing combinations
console.log('\n\n❌ Missing Combinations:');
console.log('------------------------');

const allCities = Object.keys(cityGroups);
const allIndustries = new Set();
const allServices = new Set();

combinations.forEach(combo => {
  const [city, industry, service] = combo.split('__');
  allIndustries.add(industry);
  allServices.add(service);
});

// Check for missing fashion industry combinations
const fashionCities = [];
allCities.forEach(city => {
  if (!cityGroups[city].industries.has('fashion')) {
    fashionCities.push(city);
  }
});

if (fashionCities.length > 0) {
  console.log('\n🚨 Missing Fashion Industry Content:');
  fashionCities.forEach(city => {
    console.log(`   - ${city} (fashion industry)`);
  });
}

// Check for missing major service combinations
const majorServices = ['website-design', 'web-development', 'seo'];
const missingServices = [];

allCities.forEach(city => {
  majorServices.forEach(service => {
    if (!cityGroups[city].services.has(service)) {
      missingServices.push(`${city} - ${service}`);
    }
  });
});

if (missingServices.length > 0) {
  console.log('\n🚨 Missing Major Service Content:');
  missingServices.forEach(missing => {
    console.log(`   - ${missing}`);
  });
}

// Content quality check
console.log('\n\n✅ Content Quality Check:');
console.log('-------------------------');

let qualityIssues = 0;

combinations.forEach(combo => {
  const [city, industry, service] = combo.split('__');
  
  // Extract the content for this combination
  const pattern = new RegExp(`'${combo}':\\s*{[\\s\\S]*?},`, 'g');
  const match = cisStaticContent.match(pattern);
  
  if (match) {
    const content = match[0];
    
    // Check if content mentions the wrong city (exclude the correct city)
    const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const cityNameLower = cityName.toLowerCase();
    
    // Create a more specific pattern that excludes the correct city
    const cityVariations = [
      cityName,
      cityName.toLowerCase(),
      cityName.replace(/\s+/g, ''),
      cityName.replace(/\s+/g, '').toLowerCase()
    ];
    
    // Check for other major cities that shouldn't be mentioned
    const otherCities = [
      'Denver', 'Los Angeles', 'New York', 'Chicago', 'Houston', 'Phoenix', 
      'Boston', 'Miami', 'Seattle', 'Portland', 'Austin', 'Dallas', 
      'San Antonio', 'San Diego', 'San Francisco', 'Oakland', 'San Jose', 
      'Fresno', 'Long Beach', 'Sacramento', 'Kansas City', 'Mesa', 
      'Atlanta', 'Charlotte', 'Raleigh', 'Nashville', 'Oklahoma City', 
      'El Paso', 'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 
      'Albuquerque', 'Tucson', 'Detroit'
    ];
    
    const wrongCities = otherCities.filter(otherCity => {
      const otherCityLower = otherCity.toLowerCase();
      return !cityVariations.some(variation => 
        variation.toLowerCase().includes(otherCityLower) || 
        otherCityLower.includes(variation.toLowerCase())
      );
    });
    
    if (wrongCities.length > 0) {
      const wrongCityPattern = new RegExp(`\\b(${wrongCities.join('|')})\\b`, 'gi');
      const wrongCityMatches = content.match(wrongCityPattern);
      
      if (wrongCityMatches && wrongCityMatches.length > 0) {
        console.log(`   ❌ ${combo}: Content mentions wrong city (${wrongCityMatches.join(', ')})`);
        qualityIssues++;
      }
    }
    
    // Check for generic content
    if (content.includes('Lorem ipsum') || content.includes('placeholder')) {
      console.log(`   ⚠️  ${combo}: Contains placeholder content`);
      qualityIssues++;
    }
  }
});

if (qualityIssues === 0) {
  console.log('   ✅ No content quality issues found');
} else {
  console.log(`   📊 Total quality issues: ${qualityIssues}`);
}

console.log('\n\n🎯 Recommendations:');
console.log('-------------------');
console.log('1. Add missing fashion industry content for all cities');
console.log('2. Ensure all major services are covered for each city');
console.log('3. Verify city-specific content mentions the correct city');
console.log('4. Replace any placeholder content with city-specific information');
console.log('5. Add local market insights and industry-specific details');

console.log('\n✨ Audit complete!');
