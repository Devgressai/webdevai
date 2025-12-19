/**
 * Per-host concurrency limiting
 * Ensures we don't overwhelm a single host with too many simultaneous requests
 */

import Redis from 'ioredis'
import { config } from '@/src/config'

/**
 * Get Redis connection for concurrency tracking
 */
let concurrencyRedis: Redis | null = null

function getConcurrencyRedis(): Redis {
  if (!concurrencyRedis) {
    const redisUrl = config.redis.url()
    concurrencyRedis = new Redis(redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    })
  }
  return concurrencyRedis
}

/**
 * Concurrency limit configuration
 */
export interface ConcurrencyConfig {
  maxConcurrent: number // Max concurrent requests per host
  keyPrefix: string
  ttlSeconds: number // TTL for tracking keys
}

/**
 * Default: 2 concurrent requests per host
 */
const DEFAULT_CONFIG: ConcurrencyConfig = {
  maxConcurrent: 2,
  keyPrefix: 'host_concurrency:',
  ttlSeconds: 300, // 5 minutes
}

/**
 * Extract host from URL
 */
export function extractHost(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname.toLowerCase()
  } catch {
    return 'unknown'
  }
}

/**
 * Check if we can make a request to this host
 */
export async function checkHostConcurrency(
  host: string,
  config: ConcurrencyConfig = DEFAULT_CONFIG
): Promise<{ allowed: boolean; currentCount: number }> {
  const redis = getConcurrencyRedis()
  const key = `${config.keyPrefix}${host}`

  try {
    const currentCount = await redis.get(key)
    const count = currentCount ? parseInt(currentCount, 10) : 0

    return {
      allowed: count < config.maxConcurrent,
      currentCount: count,
    }
  } catch (error) {
    console.error('Concurrency check error:', error)
    // Fail open - allow request
    return {
      allowed: true,
      currentCount: 0,
    }
  }
}

/**
 * Increment host concurrency counter
 */
export async function incrementHostConcurrency(
  host: string,
  config: ConcurrencyConfig = DEFAULT_CONFIG
): Promise<void> {
  const redis = getConcurrencyRedis()
  const key = `${config.keyPrefix}${host}`

  try {
    await redis.incr(key)
    await redis.expire(key, config.ttlSeconds)
  } catch (error) {
    console.error('Error incrementing concurrency:', error)
  }
}

/**
 * Decrement host concurrency counter
 */
export async function decrementHostConcurrency(
  host: string,
  config: ConcurrencyConfig = DEFAULT_CONFIG
): Promise<void> {
  const redis = getConcurrencyRedis()
  const key = `${config.keyPrefix}${host}`

  try {
    const count = await redis.decr(key)
    if (count <= 0) {
      await redis.del(key)
    }
  } catch (error) {
    console.error('Error decrementing concurrency:', error)
  }
}

/**
 * Wait for host concurrency slot (with timeout)
 */
export async function waitForHostSlot(
  host: string,
  timeoutMs: number = 10000,
  config: ConcurrencyConfig = DEFAULT_CONFIG
): Promise<boolean> {
  const startTime = Date.now()

  while (Date.now() - startTime < timeoutMs) {
    const check = await checkHostConcurrency(host, config)
    
    if (check.allowed) {
      return true
    }

    // Wait a bit before checking again
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  return false
}

