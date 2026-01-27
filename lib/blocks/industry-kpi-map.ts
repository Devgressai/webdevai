/**
 * INDUSTRY_KPI_MAP block: Uniqueness injection for programmatic pages
 * Provides industry-specific KPIs, constraints, compliance, and buyer journey data
 */

import { ValidationResult, ValidationError, CacheConfig } from './types'
import { BlockCache, createCacheKey } from './cache'

// Block data type
export interface IndustryKpiMap {
  industry: string
  service: string
  kpis: Array<{
    metric: string
    benchmark?: number
    context?: string
    [key: string]: any
  }>
  constraints: Array<{
    type: string
    description: string
    impact?: string
    [key: string]: any
  }>
  compliance?: Array<{
    regulation: string
    requirement: string
    link?: string
    [key: string]: any
  }>
  buyer_journey: {
    awareness?: string[]
    consideration?: string[]
    decision?: string[]
    [key: string]: any
  }
  last_updated: string // ISO 8601
}

// Provider input
export interface IndustryKpiInput {
  industry: string
  service: string
}

// Provider interface
export interface IndustryKpiProvider {
  get(input: IndustryKpiInput): Promise<IndustryKpiMap>
  validate(data: IndustryKpiMap): ValidationResult
  getLastUpdated(data: IndustryKpiMap): Date
  getSources(data: IndustryKpiMap): string[]
}

// Validation function
export function validateIndustryKpiMap(data: IndustryKpiMap | null | undefined): ValidationResult {
  const errors: ValidationError[] = []

  if (!data) {
    return {
      valid: false,
      errors: [{ code: 'MISSING_DATA', message: 'IndustryKpiMap data is missing' }]
    }
  }

  // Required fields
  if (!data.industry) errors.push({ code: 'MISSING_INDUSTRY', message: 'Industry is required', field: 'industry' })
  if (!data.service) errors.push({ code: 'MISSING_SERVICE', message: 'Service is required', field: 'service' })

  // KPIs (5-10 required)
  if (!data.kpis || !Array.isArray(data.kpis)) {
    errors.push({ code: 'MISSING_KPIS', message: 'KPIs array is required', field: 'kpis' })
  } else {
    if (data.kpis.length < 5) {
      errors.push({ code: 'INSUFFICIENT_KPIS', message: 'Must have at least 5 KPIs', field: 'kpis' })
    }
    if (data.kpis.length > 10) {
      errors.push({ code: 'TOO_MANY_KPIS', message: 'Must have at most 10 KPIs', field: 'kpis' })
    }
    data.kpis.forEach((kpi, index) => {
      if (!kpi.metric) {
        errors.push({ code: 'MISSING_KPI_METRIC', message: `KPI ${index} missing metric`, field: `kpis[${index}].metric` })
      }
    })
  }

  // Constraints (at least 1 required)
  if (!data.constraints || !Array.isArray(data.constraints) || data.constraints.length === 0) {
    errors.push({ code: 'MISSING_CONSTRAINTS', message: 'At least one constraint is required', field: 'constraints' })
  } else {
    data.constraints.forEach((constraint, index) => {
      if (!constraint.type) {
        errors.push({ code: 'MISSING_CONSTRAINT_TYPE', message: `Constraint ${index} missing type`, field: `constraints[${index}].type` })
      }
      if (!constraint.description) {
        errors.push({ code: 'MISSING_CONSTRAINT_DESC', message: `Constraint ${index} missing description`, field: `constraints[${index}].description` })
      }
    })
  }

  // Buyer journey (required)
  if (!data.buyer_journey) {
    errors.push({ code: 'MISSING_BUYER_JOURNEY', message: 'Buyer journey is required', field: 'buyer_journey' })
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
export class LocalJsonIndustryKpiProvider implements IndustryKpiProvider {
  private data: Map<string, IndustryKpiMap> = new Map()

  constructor(seedData?: IndustryKpiMap[]) {
    if (seedData) {
      seedData.forEach(item => {
        const key = `${item.industry}|${item.service}`
        this.data.set(key, item)
      })
    }
  }

  async get(input: IndustryKpiInput): Promise<IndustryKpiMap> {
    const key = `${input.industry}|${input.service}`
    const data = this.data.get(key)
    
    if (!data) {
      throw new Error(`IndustryKpiMap not found for ${key}. Add seed data or use CMS provider.`)
    }

    return data
  }

  validate(data: IndustryKpiMap): ValidationResult {
    return validateIndustryKpiMap(data)
  }

  getLastUpdated(data: IndustryKpiMap): Date {
    return new Date(data.last_updated)
  }

  getSources(data: IndustryKpiMap): string[] {
    return ['Industry Research Database', 'Compliance Database'] // Default sources
  }
}

/**
 * CMS provider adapter (reads from CMS fields)
 */
export class CmsIndustryKpiProvider implements IndustryKpiProvider {
  private cmsAdapter?: (input: IndustryKpiInput) => Promise<any>

  constructor(cmsAdapter?: (input: IndustryKpiInput) => Promise<any>) {
    this.cmsAdapter = cmsAdapter
  }

  async get(input: IndustryKpiInput): Promise<IndustryKpiMap> {
    if (!this.cmsAdapter) {
      throw new Error('CMS adapter not configured. Provide a CMS adapter function or use a different provider.')
    }

    const cmsData = await this.cmsAdapter(input)
    
    // Transform CMS data to IndustryKpiMap format
    return {
      industry: cmsData.industry || input.industry,
      service: cmsData.service || input.service,
      kpis: cmsData.kpis || [],
      constraints: cmsData.constraints || [],
      compliance: cmsData.compliance,
      buyer_journey: cmsData.buyer_journey || {
        awareness: [],
        consideration: [],
        decision: []
      },
      last_updated: cmsData.last_updated || new Date().toISOString()
    }
  }

  validate(data: IndustryKpiMap): ValidationResult {
    return validateIndustryKpiMap(data)
  }

  getLastUpdated(data: IndustryKpiMap): Date {
    return new Date(data.last_updated)
  }

  getSources(data: IndustryKpiMap): string[] {
    return ['Industry Research Database', 'Compliance Database']
  }
}

/**
 * Stub provider for future integrations
 */
export class StubIndustryKpiProvider implements IndustryKpiProvider {
  async get(input: IndustryKpiInput): Promise<IndustryKpiMap> {
    throw new Error(
      'IndustryKpiProvider not implemented. ' +
      'To use IndustryKpiMap blocks, implement one of: ' +
      '1) LocalJsonIndustryKpiProvider with seed data, ' +
      '2) CmsIndustryKpiProvider with CMS adapter, ' +
      '3) Custom provider implementing IndustryKpiProvider interface.'
    )
  }

  validate(data: IndustryKpiMap): ValidationResult {
    return validateIndustryKpiMap(data)
  }

  getLastUpdated(data: IndustryKpiMap): Date {
    return new Date(data.last_updated)
  }

  getSources(data: IndustryKpiMap): string[] {
    return []
  }
}

// Cache configuration
const CACHE_CONFIG: CacheConfig = {
  ttl: 12 * 60 * 60 * 1000, // 12 hours
  maxSize: 500
}

// Global cache instance
const cache = new BlockCache<IndustryKpiMap>(CACHE_CONFIG)

/**
 * Get IndustryKpiMap data using provider + cache
 */
export async function getIndustryKpiMap(
  input: IndustryKpiInput,
  provider: IndustryKpiProvider
): Promise<{ data: IndustryKpiMap | null; validation: ValidationResult; fromCache: boolean }> {
  const cacheKey = createCacheKey('industry-kpi-map', input)

  // Check cache
  const cached = cache.get(cacheKey)
  if (cached) {
    const validation = validateIndustryKpiMap(cached)
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
    const validation = validateIndustryKpiMap(data)
    
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
