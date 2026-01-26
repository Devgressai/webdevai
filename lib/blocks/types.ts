/**
 * Shared types for uniqueness injection blocks
 */

export interface ValidationResult {
  valid: boolean
  errors: ValidationError[]
}

export interface ValidationError {
  code: string
  message: string
  field?: string
}

export interface ProviderCacheEntry<T> {
  data: T
  timestamp: number
  key: string
}

export interface CacheConfig {
  ttl: number // Time to live in milliseconds
  maxSize?: number // Maximum cache entries
  persistent?: boolean // Whether to use persistent storage
}
