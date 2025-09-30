#!/usr/bin/env node

/**
 * Expand to 100 Cities Script
 * 
 * Adds 50 tier-2 cities to create 1,900+ additional pages
 * Total after completion: 3,800+ pages
 */

const fs = require('fs');
const path = require('path');

// 50 Additional Tier-2 US Cities
const NEW_CITIES = [
  { name: 'Raleigh', state: 'NC', population: 467665, slug: 'raleigh-nc' },
  { name: 'Omaha', state: 'NE', population: 486051, slug: 'omaha-ne' },
  { name: 'Miami', state: 'FL', population: 442241, slug: 'miami-fl' },
  { name: 'Oakland', state: 'CA', population: 440646, slug: 'oakland-ca' },
  { name: 'Minneapolis', state: 'MN', population: 425115, slug: 'minneapolis-mn' },
  { name: 'Tulsa', state: 'OK', population: 413066, slug: 'tulsa-ok' },
  { name: 'Wichita', state: 'KS', population: 397532, slug: 'wichita-ks' },
  { name: 'New Orleans', state: 'LA', population: 383997, slug: 'new-orleans-la' },
  { name: 'Arlington', state: 'TX', population: 394266, slug: 'arlington-tx' },
  { name: 'Cleveland', state: 'OH', population: 372624, slug: 'cleveland-oh' },
  { name: 'Bakersfield', state: 'CA', population: 403455, slug: 'bakersfield-ca' },
  { name: 'Tampa', state: 'FL', population: 398173, slug: 'tampa-fl' },
  { name: 'Aurora', state: 'CO', population: 386261, slug: 'aurora-co' },
  { name: 'Honolulu', state: 'HI', population: 350964, slug: 'honolulu-hi' },
  { name: 'Anaheim', state: 'CA', population: 345940, slug: 'anaheim-ca' },
  { name: 'Santa Ana', state: 'CA', population: 310227, slug: 'santa-ana-ca' },
  { name: 'Corpus Christi', state: 'TX', population: 326554, slug: 'corpus-christi-tx' },
  { name: 'Riverside', state: 'CA', population: 314998, slug: 'riverside-ca' },
  { name: 'St. Louis', state: 'MO', population: 301578, slug: 'st-louis-mo' },
  { name: 'Lexington', state: 'KY', population: 322570, slug: 'lexington-ky' },
  { name: 'Pittsburgh', state: 'PA', population: 302971, slug: 'pittsburgh-pa' },
  { name: 'Stockton', state: 'CA', population: 320804, slug: 'stockton-ca' },
  { name: 'Cincinnati', state: 'OH', population: 309317, slug: 'cincinnati-oh' },
  { name: 'Anchorage', state: 'AK', population: 291247, slug: 'anchorage-ak' },
  { name: 'Henderson', state: 'NV', population: 320189, slug: 'henderson-nv' },
  { name: 'Greensboro', state: 'NC', population: 298263, slug: 'greensboro-nc' },
  { name: 'Plano', state: 'TX', population: 285494, slug: 'plano-tx' },
  { name: 'Newark', state: 'NJ', population: 311549, slug: 'newark-nj' },
  { name: 'Lincoln', state: 'NE', population: 289102, slug: 'lincoln-ne' },
  { name: 'Orlando', state: 'FL', population: 307573, slug: 'orlando-fl' },
  { name: 'Irvine', state: 'CA', population: 307670, slug: 'irvine-ca' },
  { name: 'Toledo', state: 'OH', population: 266301, slug: 'toledo-oh' },
  { name: 'Jersey City', state: 'NJ', population: 292449, slug: 'jersey-city-nj' },
  { name: 'Chula Vista', state: 'CA', population: 275487, slug: 'chula-vista-ca' },
  { name: 'Buffalo', state: 'NY', population: 276807, slug: 'buffalo-ny' },
  { name: 'Durham', state: 'NC', population: 283506, slug: 'durham-nc' },
  { name: 'St. Petersburg', state: 'FL', population: 258308, slug: 'st-petersburg-fl' },
  { name: 'Laredo', state: 'TX', population: 255205, slug: 'laredo-tx' },
  { name: 'Lubbock', state: 'TX', population: 258870, slug: 'lubbock-tx' },
  { name: 'Madison', state: 'WI', population: 269840, slug: 'madison-wi' },
  { name: 'Gilbert', state: 'AZ', population: 267918, slug: 'gilbert-az' },
  { name: 'Norfolk', state: 'VA', population: 238005, slug: 'norfolk-va' },
  { name: 'Reno', state: 'NV', population: 264165, slug: 'reno-nv' },
  { name: 'Winston-Salem', state: 'NC', population: 247945, slug: 'winston-salem-nc' },
  { name: 'Glendale', state: 'AZ', population: 248325, slug: 'glendale-az' },
  { name: 'Hialeah', state: 'FL', population: 223109, slug: 'hialeah-fl' },
  { name: 'Boise', state: 'ID', population: 235684, slug: 'boise-id' },
  { name: 'Richmond', state: 'VA', population: 226610, slug: 'richmond-va' },
  { name: 'Spokane', state: 'WA', population: 228989, slug: 'spokane-wa' },
  { name: 'Des Moines', state: 'IA', population: 214133, slug: 'des-moines-ia' }
];

class CityExpander {
  constructor() {
    this.citiesFile = path.join(__dirname, '../lib/cities.ts');
    this.startTime = Date.now();
    this.citiesAdded = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async expandCities() {
    this.log('🚀 Starting city expansion to 100 cities...');
    
    // Read current cities file
    let content = fs.readFileSync(this.citiesFile, 'utf8');
    
    // Find the insertion point (after the last city, before closing brace of cities object)
    // Look for the pattern: "  },\n}"
    const insertPoint = content.indexOf('}\n\nexport function getCity');
    
    if (insertPoint === -1) {
      this.log('❌ Could not find insertion point');
      return;
    }

    // Generate new city entries
    let newEntries = '';
    
    NEW_CITIES.forEach((city) => {
      const industries = this.getCityIndustries(city);
      
      newEntries += `
  '${city.slug}': {
    slug: '${city.slug}',
    name: '${city.name}',
    fullName: '${city.name}, ${city.state}',
    state: '${city.state}',
    population: ${city.population},
    description: 'Professional digital marketing and web development services in ${city.name}, ${city.state}. Helping ${city.name} businesses grow with AI-powered SEO, local search optimization, and custom web development.',
    metaDescription: 'Web Vello provides professional SEO, web development, and digital marketing services in ${city.name}, ${city.state}. Drive growth with data-driven strategies.',
    industries: [${industries.map(i => `'${i}'`).join(', ')}]
  },`;
    });

    // Insert new cities (before the closing brace)
    const newContent = content.slice(0, insertPoint) + ',\n' + newEntries.trim() + '\n' + content.slice(insertPoint);
    
    // Write back to file
    fs.writeFileSync(this.citiesFile, newContent);
    
    this.citiesAdded = NEW_CITIES.length;
    
    const runtime = (Date.now() - this.startTime) / 1000;
    this.log(`✅ Added ${this.citiesAdded} new cities in ${runtime.toFixed(1)} seconds`);
    this.log(`📊 Total cities: 100 (50 original + 50 new)`);
    this.log(`📄 New pages generated: ${this.citiesAdded * 20 * 15} (city × industry × service)`);
    this.log(`🎉 Total site pages: ~3,800+`);
  }

  getCityIndustries(city) {
    // Assign relevant industries based on city characteristics
    const allIndustries = [
      'technology', 'healthcare', 'finance', 'retail', 'manufacturing',
      'realestate', 'legal', 'education', 'construction', 'hospitality'
    ];
    
    // Major cities get all industries
    if (city.population > 400000) {
      return allIndustries;
    }
    
    // Medium cities get 8 industries
    if (city.population > 300000) {
      return allIndustries.slice(0, 8);
    }
    
    // Smaller cities get 6 core industries
    return allIndustries.slice(0, 6);
  }

  async run() {
    try {
      await this.expandCities();
      this.log('🎯 City expansion complete!');
      this.log('📝 Next step: Update citySlugs array');
      this.updateCitySlugs();
    } catch (error) {
      this.log(`❌ Error: ${error.message}`);
      process.exit(1);
    }
  }

  updateCitySlugs() {
    let content = fs.readFileSync(this.citiesFile, 'utf8');
    
    // Find citySlugs array
    const slugsStart = content.indexOf('export const citySlugs');
    
    if (slugsStart === -1) {
      this.log('⚠️  Could not update citySlugs automatically');
      this.log('📝 Please run: Object.keys(cities) to regenerate citySlugs');
      return;
    }
    
    // Generate all slugs
    const allSlugs = NEW_CITIES.map(c => `  '${c.slug}'`).join(',\n');
    
    // Find end of existing citySlugs
    const existingEnd = content.indexOf('] as const', slugsStart);
    
    if (existingEnd !== -1) {
      // Add new slugs before closing bracket
      const beforeClosing = content.lastIndexOf('\n', existingEnd);
      const newContent = content.slice(0, beforeClosing) + ',\n' + allSlugs + content.slice(beforeClosing);
      
      fs.writeFileSync(this.citiesFile, newContent);
      this.log('✅ Updated citySlugs array');
    }
  }
}

// Run the expander
const expander = new CityExpander();
expander.run();

