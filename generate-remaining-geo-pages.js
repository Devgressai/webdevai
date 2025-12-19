#!/usr/bin/env node

/**
 * Batch GEO Page Generator
 * Generates all remaining GEO pages with the complete new structure
 */

const fs = require('fs');
const path = require('path');

const cityPages = {
  'dallas': {
    city: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    gradient: 'from-purple-500 to-pink-500',
    accentColor: 'purple',
    population: '1.3M',
    metro: '7.6M',
    stat3: '$512B',
    stat3Label: 'Metro GDP',
    stat4: '#4',
    stat4Label: 'US metro area',
    tagline: 'Get your Dallas business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for DFW metroplex.',
    industries: [
      { name: "Technology", description: "Growing tech hub with major corporate relocations" },
      { name: "Finance & Banking", description: "Major banking and financial services center" },
      { name: "Healthcare", description: "Medical practices and healthcare systems" },
      { name: "Real Estate", description: "One of the fastest-growing real estate markets" },
      { name: "Professional Services", description: "Consulting, legal, and accounting firms" },
      { name: "Telecommunications", description: "AT&T headquarters and telecom industry" },
      { name: "Retail & E-commerce", description: "Major retail headquarters and D2C brands" },
      { name: "Transportation & Logistics", description: "Major logistics hub for the Southwest" }
    ],
    areas: ["Downtown Dallas", "Uptown", "Deep Ellum", "Highland Park", "University Park", "Plano", "Frisco", "Irving", "Fort Worth", "Arlington", "Richardson", "Addison", "Las Colinas", "McKinney", "Allen", "Garland"],
    whyText: "Dallas-Fort Worth is the fourth-largest metro in the US with 7.6 million people. As one of America's fastest-growing business hubs with major corporate relocations from California and the Northeast, DFW attracts tech-savvy professionals who rely heavily on AI search.",
    whyText2: "When someone asks AI \"best financial advisor in Dallas\" or \"find a commercial contractor in Plano,\" the businesses cited win the customers. Traditional SEO puts you in lists—GEO gets you into the AI answer itself.",
    whyText3: "Voice search, ChatGPT, Perplexity, and Google's AI Overviews are now how DFW residents find services. Early GEO adoption gives you a massive competitive advantage in this booming market."
  },
  'los-angeles': {
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    gradient: 'from-rose-500 to-orange-500',
    accentColor: 'rose',
    population: '4M',
    metro: '13.2M',
    stat3: '#2',
    stat3Label: 'US metro area',
    stat4: '$1.1T',
    stat4Label: 'Metro GDP',
    tagline: 'Get your LA business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for greater Los Angeles.',
    industries: [
      { name: "Entertainment & Media", description: "Production companies, agencies, studios" },
      { name: "Tech & Startups", description: "Silicon Beach companies and tech firms" },
      { name: "Real Estate", description: "Agents and brokerages in competitive LA market" },
      { name: "Legal Services", description: "Law firms in Beverly Hills, Downtown LA, Century City" },
      { name: "Healthcare", description: "Medical practices, specialists, and clinics across LA County" },
      { name: "Home Services", description: "Contractors, HVAC, plumbers serving LA neighborhoods" },
      { name: "Restaurants & Hospitality", description: "Restaurants, hotels, and venues" },
      { name: "Automotive", description: "Dealerships and auto services" }
    ],
    areas: ["Downtown LA", "Beverly Hills", "Santa Monica", "Hollywood", "West Hollywood", "Pasadena", "Glendale", "Burbank", "Long Beach", "Venice", "Malibu", "Culver City", "Century City", "Brentwood", "Westwood", "Sherman Oaks"],
    whyText: "Los Angeles is the second-largest metro in the US with 13.2 million people and a $1.1 trillion economy. As the entertainment and tech capital, LA attracts early adopters who use AI search heavily for both business and personal needs.",
    whyText2: "When someone asks AI \"best production company in LA\" or \"find a dentist in Beverly Hills,\" the businesses that appear in AI answers win. Traditional SEO gets you into lists—GEO gets you into the AI answer itself.",
    whyText3: "Voice search, ChatGPT, Perplexity, and Google's AI Overviews dominate how LA's tech-savvy, entertainment-industry population finds services. If you're not optimized for AI, you're invisible to modern search."
  },
  'new-york': {
    city: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    gradient: 'from-blue-600 to-indigo-600',
    accentColor: 'blue',
    population: '8.3M',
    metro: '20M',
    stat3: '#1',
    stat3Label: 'US metro area',
    stat4: '$1.9T',
    stat4Label: 'Metro GDP',
    tagline: 'Get your NYC business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for all five boroughs.',
    industries: [
      { name: "Financial Services", description: "Banks, investment firms, fintech companies" },
      { name: "Legal Services", description: "Law firms from boutique to BigLaw" },
      { name: "Real Estate", description: "Agents, brokerages, property managers" },
      { name: "Healthcare", description: "Medical practices, specialists, clinics" },
      { name: "Professional Services", description: "Consulting, accounting, business services" },
      { name: "Restaurants & Hospitality", description: "Restaurants, hotels, and venues" },
      { name: "Tech & Startups", description: "Silicon Alley companies and tech firms" },
      { name: "Retail & E-commerce", description: "Stores and D2C brands based in NYC" }
    ],
    areas: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island", "Midtown", "SoHo", "Tribeca", "Chelsea", "Upper East Side", "Upper West Side", "Financial District", "Williamsburg", "DUMBO", "Long Island City", "Harlem"],
    whyText: "New York City is the largest metro in the US with 20 million people and a $1.9 trillion economy. As the world's business capital, NYC residents and businesses adopt AI tools first and expect to find quality services through AI search.",
    whyText2: "When someone asks AI \"best Italian restaurant in SoHo\" or \"find a CPA in Manhattan,\" the businesses cited win. Traditional SEO puts you in lists—GEO gets you into the AI answer itself, the single recommendation that matters.",
    whyText3: "Voice search, ChatGPT, Perplexity, and Google's AI Overviews are now how NYC's sophisticated consumers find businesses. In the most competitive market in America, early GEO adoption is critical."
  },
  'san-francisco': {
    city: 'San Francisco',
    state: 'California',
    stateAbbr: 'CA',
    gradient: 'from-emerald-500 to-teal-500',
    accentColor: 'emerald',
    population: '870K',
    metro: '4.7M',
    stat3: '#1',
    stat3Label: 'Tech hub globally',
    stat4: '$550B',
    stat4Label: 'Metro GDP',
    tagline: 'Get your SF business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Bay Area tech capital.',
    industries: [
      { name: "Technology & SaaS", description: "Software companies, startups, and tech giants" },
      { name: "Fintech & Crypto", description: "Financial technology and blockchain companies" },
      { name: "Professional Services", description: "Consulting, legal, and accounting for tech" },
      { name: "Real Estate", description: "Commercial and residential real estate" },
      { name: "Healthcare & Biotech", description: "Medical practices and biotech companies" },
      { name: "Restaurants & Hospitality", description: "High-end dining and hotels" },
      { name: "Marketing & Creative", description: "Agencies serving tech industry" },
      { name: "Legal Services", description: "Tech law, IP, and corporate law firms" }
    ],
    areas: ["Downtown SF", "SOMA", "Financial District", "Mission District", "North Beach", "Pacific Heights", "Marina District", "Hayes Valley", "Nob Hill", "Presidio", "Richmond District", "Castro", "Potrero Hill", "Dogpatch", "Embarcadero", "Fisherman's Wharf"],
    whyText: "San Francisco is the global tech capital with the highest concentration of tech workers, investors, and early adopters in the world. With 870K city residents and 4.7M in the Bay Area, SF leads in AI tool adoption.",
    whyText2: "When someone asks AI \"best SaaS consultant in SF\" or \"find a tech lawyer in SOMA,\" the businesses that appear win. Traditional SEO gets you into lists—GEO gets you into the AI answer itself.",
    whyText3: "Voice search, ChatGPT, Perplexity, and Google's AI Overviews are standard in SF. The city that builds AI tools is also the city that uses them most. If you serve tech companies, GEO is not optional."
  },
  'seattle': {
    city: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    gradient: 'from-slate-500 to-cyan-600',
    accentColor: 'cyan',
    population: '750K',
    metro: '4M',
    stat3: '#1',
    stat3Label: 'Cloud computing hub',
    stat4: '$450B',
    stat4Label: 'Metro GDP',
    tagline: 'Get your Seattle business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Pacific Northwest tech hub.',
    industries: [
      { name: "Technology & Cloud", description: "Software, cloud computing, and tech companies" },
      { name: "E-commerce & Retail", description: "E-commerce companies and retail tech" },
      { name: "Healthcare & Biotech", description: "Medical practices and biotech research" },
      { name: "Aerospace", description: "Aerospace manufacturing and engineering" },
      { name: "Professional Services", description: "Consulting, legal, and business services" },
      { name: "Maritime & Trade", description: "Port operations and logistics" },
      { name: "Real Estate", description: "Commercial and residential real estate" },
      { name: "Restaurants & Hospitality", description: "Coffee shops, restaurants, and hotels" }
    ],
    areas: ["Downtown Seattle", "Capitol Hill", "Belltown", "Queen Anne", "Fremont", "Ballard", "Wallingford", "University District", "Green Lake", "Magnolia", "West Seattle", "SoDo", "Pioneer Square", "Georgetown", "Eastlake", "South Lake Union"],
    whyText: "Seattle is a major tech hub with Amazon, Microsoft, and hundreds of startups. With 750K city residents and 4M in the metro, Seattle has one of the highest concentrations of tech workers and AI early adopters in America.",
    whyText2: "When someone asks AI \"best cloud consultant in Seattle\" or \"find a coffee roaster in Capitol Hill,\" the businesses cited win. Traditional SEO puts you in lists—GEO gets you into the AI answer itself.",
    whyText3: "Voice search, ChatGPT, Perplexity, and Google's AI Overviews are widely used in tech-savvy Seattle. Early GEO adoption gives you a competitive edge in this innovative market."
  },
  'denver': {
    city: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    gradient: 'from-sky-500 to-purple-500',
    accentColor: 'sky',
    population: '715K',
    metro: '3M',
    stat3: '#1',
    stat3Label: 'Startup growth (2024)',
    stat4: '$215B',
    stat4Label: 'Metro GDP',
    tagline: 'Get your Denver business cited by ChatGPT, Perplexity & Google AI. Remote GEO services for Mile High City.',
    industries: [
      { name: "Technology & Startups", description: "Growing tech scene with major relocations" },
      { name: "Energy & Renewables", description: "Oil, gas, and renewable energy companies" },
      { name: "Aerospace & Defense", description: "Aerospace contractors and defense companies" },
      { name: "Healthcare", description: "Medical practices and healthcare systems" },
      { name: "Real Estate", description: "Booming real estate and property development" },
      { name: "Professional Services", description: "Consulting, legal, and accounting firms" },
      { name: "Tourism & Hospitality", description: "Hotels, restaurants, and tourism businesses" },
      { name: "Cannabis Industry", description: "Cannabis businesses and ancillary services" }
    ],
    areas: ["Downtown Denver", "LoDo", "RiNo", "Capitol Hill", "Cherry Creek", "Highlands", "Park Hill", "Washington Park", "Five Points", "Baker", "Platt Park", "Congress Park", "City Park", "Stapleton", "Sunnyside", "LoHi"],
    whyText: "Denver is one of America's fastest-growing cities with a booming tech scene, major corporate relocations, and a highly educated population. With 715K city residents and 3M in the metro, Denver attracts tech-savvy transplants who rely on AI search.",
    whyText2: "When someone asks AI \"best startup consultant in Denver\" or \"find a real estate agent in Cherry Creek,\" the businesses that appear win. Traditional SEO gets you into lists—GEO gets you into the AI answer itself.",
    whyText3: "Voice search, ChatGPT, Perplexity, and Google's AI Overviews are standard among Denver's young, tech-forward population. Early GEO adoption gives you a major advantage in this competitive market."
  }
};

// Continue with more cities in the format above...

console.log('GEO Page Generator - Ready to create', Object.keys(cityPages).length, 'city pages');
console.log('City pages to generate:', Object.keys(cityPages).join(', '));

// This script provides the data structure for batch generation
// The actual generation would be done file-by-file to ensure quality

module.exports = { cityPages };


