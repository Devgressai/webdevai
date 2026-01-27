/**
 * LOCAL_DATA_CARD block: Uniqueness injection for programmatic pages
 * Provides local SERP, market, review, and competitor data
 */

import { ValidationResult, ValidationError, CacheConfig } from './types'
import { BlockCache, createCacheKey } from './cache'

// Block data type
export interface LocalDataCard {
  city: string
  state: string
  service: string
  serp_data: {
    avg_competitor_count: number
    local_pack_present: boolean
    featured_snippet_present: boolean
    [key: string]: any
  }
  market_data: {
    market_size: number
    growth_rate?: number
    [key: string]: any
  }
  review_data: {
    avg_rating_range: string
    avg_review_count_range: string
    [key: string]: any
  }
  competitor_data: {
    competitor_categories: string[]
    top_competitors?: string[]
    [key: string]: any
  }
  ranking_environment: {
    local_seo_importance: 'high' | 'medium' | 'low'
    competition_level: 'high' | 'medium' | 'low'
    [key: string]: any
  }
  data_sources: Array<{
    name: string
    url?: string
    type: 'internal' | 'external' | 'third_party' | 'proprietary'
    access_date: string
  }>
  last_updated: string // ISO 8601
}

// Provider input
export interface LocalDataInput {
  city: string
  state: string
  service: string
}

// Provider interface
export interface LocalDataProvider {
  get(input: LocalDataInput): Promise<LocalDataCard>
  validate(data: LocalDataCard): ValidationResult
  getLastUpdated(data: LocalDataCard): Date
  getSources(data: LocalDataCard): string[]
}

// Validation function
export function validateLocalDataCard(data: LocalDataCard | null | undefined): ValidationResult {
  const errors: ValidationError[] = []

  if (!data) {
    return {
      valid: false,
      errors: [{ code: 'MISSING_DATA', message: 'LocalDataCard data is missing' }]
    }
  }

  // Required fields
  if (!data.city) errors.push({ code: 'MISSING_CITY', message: 'City is required', field: 'city' })
  if (!data.state) errors.push({ code: 'MISSING_STATE', message: 'State is required', field: 'state' })
  if (!data.service) errors.push({ code: 'MISSING_SERVICE', message: 'Service is required', field: 'service' })

  // SERP data
  if (!data.serp_data) {
    errors.push({ code: 'MISSING_SERP_DATA', message: 'SERP data is required', field: 'serp_data' })
  } else {
    if (data.serp_data.avg_competitor_count === undefined || data.serp_data.avg_competitor_count === null) {
      errors.push({ code: 'MISSING_COMPETITOR_COUNT', message: 'Average competitor count is required', field: 'serp_data.avg_competitor_count' })
    }
  }

  // Market data
  if (!data.market_data) {
    errors.push({ code: 'MISSING_MARKET_DATA', message: 'Market data is required', field: 'market_data' })
  } else {
    if (data.market_data.market_size === undefined || data.market_data.market_size === null) {
      errors.push({ code: 'MISSING_MARKET_SIZE', message: 'Market size is required', field: 'market_data.market_size' })
    }
  }

  // Review data
  if (!data.review_data) {
    errors.push({ code: 'MISSING_REVIEW_DATA', message: 'Review data is required', field: 'review_data' })
  } else {
    if (!data.review_data.avg_rating_range) {
      errors.push({ code: 'MISSING_RATING_RANGE', message: 'Average rating range is required', field: 'review_data.avg_rating_range' })
    }
  }

  // Competitor data
  if (!data.competitor_data) {
    errors.push({ code: 'MISSING_COMPETITOR_DATA', message: 'Competitor data is required', field: 'competitor_data' })
  } else {
    if (!data.competitor_data.competitor_categories || data.competitor_data.competitor_categories.length === 0) {
      errors.push({ code: 'MISSING_COMPETITOR_CATEGORIES', message: 'Competitor categories are required', field: 'competitor_data.competitor_categories' })
    }
  }

  // Ranking environment
  if (!data.ranking_environment) {
    errors.push({ code: 'MISSING_RANKING_ENV', message: 'Ranking environment is required', field: 'ranking_environment' })
  } else {
    if (!data.ranking_environment.local_seo_importance) {
      errors.push({ code: 'MISSING_LOCAL_SEO_IMPORTANCE', message: 'Local SEO importance is required', field: 'ranking_environment.local_seo_importance' })
    }
  }

  // Data sources
  if (!data.data_sources || data.data_sources.length === 0) {
    errors.push({ code: 'MISSING_DATA_SOURCES', message: 'At least one data source is required', field: 'data_sources' })
  }

  // Last updated
  if (!data.last_updated) {
    errors.push({ code: 'MISSING_LAST_UPDATED', message: 'Last updated timestamp is required', field: 'last_updated' })
  } else {
    const lastUpdated = new Date(data.last_updated)
    if (isNaN(lastUpdated.getTime())) {
      errors.push({ code: 'INVALID_LAST_UPDATED', message: 'Last updated must be a valid ISO 8601 date', field: 'last_updated' })
    } else {
      const maxAge = 90 * 24 * 60 * 60 * 1000 // 90 days
      if (Date.now() - lastUpdated.getTime() > maxAge) {
        errors.push({ code: 'STALE_DATA', message: 'Data is stale (>90 days)', field: 'last_updated' })
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

// Provider implementations

/**
 * Local JSON provider (dev/seed data)
 */
export class LocalJsonLocalDataProvider implements LocalDataProvider {
  private data: Map<string, LocalDataCard> = new Map()

  constructor(seedData?: LocalDataCard[]) {
    if (seedData) {
      seedData.forEach(item => {
        const key = `${item.city}|${item.state}|${item.service}`
        this.data.set(key, item)
      })
    }
  }

  async get(input: LocalDataInput): Promise<LocalDataCard> {
    const key = `${input.city}|${input.state}|${input.service}`
    const data = this.data.get(key)
    
    if (!data) {
      throw new Error(`LocalDataCard not found for ${key}. Add seed data or use CMS provider.`)
    }

    return data
  }

  validate(data: LocalDataCard): ValidationResult {
    return validateLocalDataCard(data)
  }

  getLastUpdated(data: LocalDataCard): Date {
    return new Date(data.last_updated)
  }

  getSources(data: LocalDataCard): string[] {
    return data.data_sources.map(s => s.name)
  }
}

/**
 * CMS provider adapter (reads from CMS fields)
 */
export class CmsLocalDataProvider implements LocalDataProvider {
  // In production, this would read from your CMS (Sanity, Contentful, etc.)
  // For now, this is a stub that expects CMS data to be passed in
  private cmsAdapter?: (input: LocalDataInput) => Promise<any>

  constructor(cmsAdapter?: (input: LocalDataInput) => Promise<any>) {
    this.cmsAdapter = cmsAdapter
  }

  async get(input: LocalDataInput): Promise<LocalDataCard> {
    if (!this.cmsAdapter) {
      throw new Error('CMS adapter not configured. Provide a CMS adapter function or use a different provider.')
    }

    const cmsData = await this.cmsAdapter(input)
    
    // Transform CMS data to LocalDataCard format
    // Adjust this mapping based on your CMS schema
    return {
      city: cmsData.city || input.city,
      state: cmsData.state || input.state,
      service: cmsData.service || input.service,
      serp_data: cmsData.serp_data || {
        avg_competitor_count: 0,
        local_pack_present: false,
        featured_snippet_present: false
      },
      market_data: cmsData.market_data || {
        market_size: 0
      },
      review_data: cmsData.review_data || {
        avg_rating_range: '0-0',
        avg_review_count_range: '0-0'
      },
      competitor_data: cmsData.competitor_data || {
        competitor_categories: []
      },
      ranking_environment: cmsData.ranking_environment || {
        local_seo_importance: 'medium',
        competition_level: 'medium'
      },
      data_sources: cmsData.data_sources || [],
      last_updated: cmsData.last_updated || new Date().toISOString()
    }
  }

  validate(data: LocalDataCard): ValidationResult {
    return validateLocalDataCard(data)
  }

  getLastUpdated(data: LocalDataCard): Date {
    return new Date(data.last_updated)
  }

  getSources(data: LocalDataCard): string[] {
    return data.data_sources.map(s => s.name)
  }
}

/**
 * Stub provider for future integrations
 */
export class StubLocalDataProvider implements LocalDataProvider {
  async get(input: LocalDataInput): Promise<LocalDataCard> {
    throw new Error(
      'LocalDataProvider not implemented. ' +
      'To use LocalDataCard blocks, implement one of: ' +
      '1) LocalJsonLocalDataProvider with seed data, ' +
      '2) CmsLocalDataProvider with CMS adapter, ' +
      '3) Custom provider implementing LocalDataProvider interface.'
    )
  }

  validate(data: LocalDataCard): ValidationResult {
    return validateLocalDataCard(data)
  }

  getLastUpdated(data: LocalDataCard): Date {
    return new Date(data.last_updated)
  }

  getSources(data: LocalDataCard): string[] {
    return data.data_sources?.map(s => s.name) || []
  }
}

// Cache configuration
const CACHE_CONFIG: CacheConfig = {
  ttl: 24 * 60 * 60 * 1000, // 24 hours
  maxSize: 1000
}

// Global cache instance
const cache = new BlockCache<LocalDataCard>(CACHE_CONFIG)

/**
 * Get LocalDataCard data using provider + cache
 */
export async function getLocalDataCard(
  input: LocalDataInput,
  provider: LocalDataProvider
): Promise<{ data: LocalDataCard | null; validation: ValidationResult; fromCache: boolean }> {
  const cacheKey = createCacheKey('local-data-card', input)

  // Check cache
  const cached = cache.get(cacheKey)
  if (cached) {
    const validation = validateLocalDataCard(cached)
    return {
      data: cached,
      validation,
      fromCache: true
    }
  }

  try {
    // Fetch from provider
    const data = await provider.get(input)
    
    // Validate
    const validation = validateLocalDataCard(data)
    
    // Cache if valid
    if (validation.valid) {
      cache.set(cacheKey, data)
    }

    return {
      data: validation.valid ? data : null,
      validation,
      fromCache: false
    }
  } catch (error) {
    return {
      data: null,
      validation: {
        valid: false,
        errors: [{
          code: 'PROVIDER_ERROR',
          message: error instanceof Error ? error.message : 'Unknown provider error'
        }]
      },
      fromCache: false
    }
  }
}
