/**
 * City Data for City-Service Pages
 * 
 * This file exports city data specifically for the /[city]/[service] route.
 * It re-exports from lib/cities.ts to maintain a single source of truth.
 */

import { cities, type City } from '../cities'

// Export city data as a Record for easy lookup
export const cityData: Record<string, City> = cities

// Export city slugs as an array for iteration
export const cityDataSlugs: string[] = Object.keys(cities)
