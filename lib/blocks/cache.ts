/**
 * Caching utilities for block providers
 */

import { ProviderCacheEntry, CacheConfig } from './types'

export class BlockCache<T> {
  private memoryCache: Map<string, ProviderCacheEntry<T>> = new Map()
  private config: CacheConfig

  constructor(config: CacheConfig) {
    this.config = config
  }

  /**
   * Get cached data if available and not stale
   */
  get(key: string): T | null {
    const entry = this.memoryCache.get(key)
    if (!entry) return null

    const age = Date.now() - entry.timestamp
    if (age > this.config.ttl) {
      // Stale - remove from cache
      this.memoryCache.delete(key)
      return null
    }

    return entry.data
  }

  /**
   * Set cache entry
   */
  set(key: string, data: T): void {
    // Enforce max size if configured
    if (this.config.maxSize && this.memoryCache.size >= this.config.maxSize) {
      // Remove oldest entry (simple FIFO)
      const firstKey = this.memoryCache.keys().next().value
      if (firstKey) {
        this.memoryCache.delete(firstKey)
      }
    }

    this.memoryCache.set(key, {
      data,
      timestamp: Date.now(),
      key
    })
  }

  /**
   * Check if data is stale (>90 days warning, >180 days error)
   */
  checkStaleness(key: string): { stale: boolean; age: number; warning: boolean; error: boolean } {
    const entry = this.memoryCache.get(key)
    if (!entry) {
      return { stale: true, age: Infinity, warning: true, error: true }
    }

    const age = Date.now() - entry.timestamp
    const ninetyDays = 90 * 24 * 60 * 60 * 1000
    const oneEightyDays = 180 * 24 * 60 * 60 * 1000

    return {
      stale: age > this.config.ttl,
      age,
      warning: age > ninetyDays,
      error: age > oneEightyDays
    }
  }

  /**
   * Clear cache
   */
  clear(): void {
    this.memoryCache.clear()
  }

  /**
   * Get cache stats
   */
  getStats(): { size: number; maxSize?: number; entries: string[] } {
    return {
      size: this.memoryCache.size,
      maxSize: this.config.maxSize,
      entries: Array.from(this.memoryCache.keys())
    }
  }
}

/**
 * Create cache key from input parameters
 */
export function createCacheKey(prefix: string, params: Record<string, string | number | undefined>): string {
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}:${params[key] ?? 'undefined'}`)
    .join('|')
  return `${prefix}:${sortedParams}`
}
