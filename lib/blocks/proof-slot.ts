/**
 * PROOF_SLOT block: Uniqueness injection for programmatic pages
 * Provides case study references, aggregate metrics, or team proof
 */

import { ValidationResult, ValidationError, CacheConfig } from './types'
import { BlockCache, createCacheKey } from './cache'

// Block data type
export type ProofSlotType = 'case_study' | 'aggregate' | 'team'

export interface ProofSlot {
  type: ProofSlotType
  case_study_ref?: {
    case_study_id?: string
    case_study_url?: string
    case_study_verified?: boolean
    testimonial?: {
      client_name?: string
      client_verified?: boolean
      quote?: string
      [key: string]: any
    }
    metrics?: Array<{
      metric: string
      value: number | string
      [key: string]: any
    }>
    [key: string]: any
  }
  aggregate_metrics?: Array<{
    metric: string
    value: number | string
    context?: string
    [key: string]: any
  }>
  team_proof?: Array<{
    member: string
    credential: string
    attribution: string
    [key: string]: any
  }>
  last_updated: string // ISO 8601
}

// Provider input
export interface ProofInput {
  city?: string
  service?: string
  industry?: string
  type?: ProofSlotType
}

// Provider interface
export interface ProofProvider {
  get(input: ProofInput): Promise<ProofSlot>
  validate(data: ProofSlot): ValidationResult
  getLastUpdated(data: ProofSlot): Date
  getSources(data: ProofSlot): string[]
}

// Validation function
export function validateProofSlot(data: ProofSlot | null | undefined): ValidationResult {
  const errors: ValidationError[] = []

  if (!data) {
    return {
      valid: false,
      errors: [{ code: 'MISSING_DATA', message: 'ProofSlot data is missing' }]
    }
  }

  // Type validation
  if (!data.type || !['case_study', 'aggregate', 'team'].includes(data.type)) {
    errors.push({ code: 'INVALID_TYPE', message: 'Type must be case_study, aggregate, or team', field: 'type' })
  }

  // Type-specific validation
  if (data.type === 'case_study') {
    if (!data.case_study_ref) {
      errors.push({ code: 'MISSING_CASE_STUDY_REF', message: 'Case study reference is required for case_study type', field: 'case_study_ref' })
    } else {
      if (!data.case_study_ref.case_study_id && !data.case_study_ref.case_study_url) {
        errors.push({ code: 'MISSING_CASE_STUDY_ID', message: 'Case study ID or URL is required', field: 'case_study_ref.case_study_id' })
      }
    }
  } else if (data.type === 'aggregate') {
    if (!data.aggregate_metrics || !Array.isArray(data.aggregate_metrics) || data.aggregate_metrics.length === 0) {
      errors.push({ code: 'MISSING_AGGREGATE_METRICS', message: 'Aggregate metrics are required for aggregate type', field: 'aggregate_metrics' })
    } else {
      data.aggregate_metrics.forEach((metric, index) => {
        if (!metric.metric) {
          errors.push({ code: 'MISSING_METRIC_NAME', message: `Metric ${index} missing name`, field: `aggregate_metrics[${index}].metric` })
        }
        if (metric.value === undefined || metric.value === null) {
          errors.push({ code: 'MISSING_METRIC_VALUE', message: `Metric ${index} missing value`, field: `aggregate_metrics[${index}].value` })
        }
      })
    }
  } else if (data.type === 'team') {
    if (!data.team_proof || !Array.isArray(data.team_proof) || data.team_proof.length === 0) {
      errors.push({ code: 'MISSING_TEAM_PROOF', message: 'Team proof is required for team type', field: 'team_proof' })
    } else {
      data.team_proof.forEach((proof, index) => {
        if (!proof.member) {
          errors.push({ code: 'MISSING_MEMBER', message: `Team proof ${index} missing member`, field: `team_proof[${index}].member` })
        }
        if (!proof.credential) {
          errors.push({ code: 'MISSING_CREDENTIAL', message: `Team proof ${index} missing credential`, field: `team_proof[${index}].credential` })
        }
        if (!proof.attribution) {
          errors.push({ code: 'MISSING_ATTRIBUTION', message: `Team proof ${index} missing attribution`, field: `team_proof[${index}].attribution` })
        }
      })
    }
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
export class LocalJsonProofProvider implements ProofProvider {
  private data: Map<string, ProofSlot> = new Map()

  constructor(seedData?: ProofSlot[]) {
    if (seedData) {
      seedData.forEach(item => {
        // Create key from input context
        const key = item.type // Simple key for now
        this.data.set(key, item)
      })
    }
  }

  async get(input: ProofInput): Promise<ProofSlot> {
    // Try to find matching proof by context
    const key = input.type || 'case_study'
    const data = this.data.get(key)
    
    if (!data) {
      throw new Error(`ProofSlot not found for ${key}. Add seed data or use CMS provider.`)
    }

    return data
  }

  validate(data: ProofSlot): ValidationResult {
    return validateProofSlot(data)
  }

  getLastUpdated(data: ProofSlot): Date {
    return new Date(data.last_updated)
  }

  getSources(data: ProofSlot): string[] {
    if (data.type === 'case_study') {
      return ['Case Studies Database']
    } else if (data.type === 'aggregate') {
      return ['Analytics Database']
    } else {
      return ['Team Database']
    }
  }
}

/**
 * CMS provider adapter (reads from CMS fields)
 */
export class CmsProofProvider implements ProofProvider {
  private cmsAdapter?: (input: ProofInput) => Promise<any>

  constructor(cmsAdapter?: (input: ProofInput) => Promise<any>) {
    this.cmsAdapter = cmsAdapter
  }

  async get(input: ProofInput): Promise<ProofSlot> {
    if (!this.cmsAdapter) {
      throw new Error('CMS adapter not configured. Provide a CMS adapter function or use a different provider.')
    }

    const cmsData = await this.cmsAdapter(input)
    
    // Transform CMS data to ProofSlot format
    return {
      type: cmsData.type || input.type || 'case_study',
      case_study_ref: cmsData.case_study_ref,
      aggregate_metrics: cmsData.aggregate_metrics,
      team_proof: cmsData.team_proof,
      last_updated: cmsData.last_updated || new Date().toISOString()
    }
  }

  validate(data: ProofSlot): ValidationResult {
    return validateProofSlot(data)
  }

  getLastUpdated(data: ProofSlot): Date {
    return new Date(data.last_updated)
  }

  getSources(data: ProofSlot): string[] {
    if (data.type === 'case_study') {
      return ['Case Studies Database']
    } else if (data.type === 'aggregate') {
      return ['Analytics Database']
    } else {
      return ['Team Database']
    }
  }
}

/**
 * Stub provider for future integrations
 */
export class StubProofProvider implements ProofProvider {
  async get(input: ProofInput): Promise<ProofSlot> {
    throw new Error(
      'ProofProvider not implemented. ' +
      'To use ProofSlot blocks, implement one of: ' +
      '1) LocalJsonProofProvider with seed data, ' +
      '2) CmsProofProvider with CMS adapter, ' +
      '3) Custom provider implementing ProofProvider interface.'
    )
  }

  validate(data: ProofSlot): ValidationResult {
    return validateProofSlot(data)
  }

  getLastUpdated(data: ProofSlot): Date {
    return new Date(data.last_updated)
  }

  getSources(data: ProofSlot): string[] {
    return []
  }
}

// Cache configuration
const CACHE_CONFIG: CacheConfig = {
  ttl: 6 * 60 * 60 * 1000, // 6 hours
  maxSize: 500
}

// Global cache instance
const cache = new BlockCache<ProofSlot>(CACHE_CONFIG)

/**
 * Get ProofSlot data using provider + cache
 */
export async function getProofSlot(
  input: ProofInput,
  provider: ProofProvider
): Promise<{ data: ProofSlot | null; validation: ValidationResult; fromCache: boolean }> {
  const cacheKey = createCacheKey('proof-slot', {
    city: input.city || '',
    service: input.service || '',
    industry: input.industry || '',
    type: input.type || 'case_study'
  })

  // Check cache
  const cached = cache.get(cacheKey)
  if (cached) {
    const validation = validateProofSlot(cached)
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
    const validation = validateProofSlot(data)
    
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
