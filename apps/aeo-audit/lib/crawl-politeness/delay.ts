/**
 * Per-host delay management
 * Implements crawl delays to be polite to servers
 */

import Redis from 'ioredis'
import { config } from '@/src/config'

/**
 * Get Redis connection for delay tracking
 */
let delayRedis: Redis | null = null

function getDelayRedis(): Redis {
  if (!delayRedis) {
    const redisUrl = config.redis.url()
    delayRedis = new Redis(redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    })
  }
  return delayRedis
}

/**
 * Delay configuration
 */
export interface DelayConfig {
  minDelayMs: number // Minimum delay between requests
  maxDelayMs: number // Maximum delay between requests
  keyPrefix: string
}

/**
 * Default: 200-500ms delay
 */
const DEFAULT_CONFIG: DelayConfig = {
  minDelayMs: 200,
  maxDelayMs: 500,
  keyPrefix: 'host_delay:',
}

/**
 * Get last request time for host
 */
export async function getLastRequestTime(host: string): Promise<number | null> {
  const redis = getDelayRedis()
  const key = `${DEFAULT_CONFIG.keyPrefix}${host}`

  try {
    const timestamp = await redis.get(key)
    return timestamp ? parseInt(timestamp, 10) : null
  } catch (error) {
    console.error('Error getting last request time:', error)
    return null
  }
}

/**
 * Calculate delay needed before next request
 */
export async function calculateDelay(
  host: string,
  crawlDelaySeconds?: number,
  config: DelayConfig = DEFAULT_CONFIG
): Promise<number> {
  const lastRequestTime = await getLastRequestTime(host)
  const now = Date.now()

  if (!lastRequestTime) {
    // First request to this host, no delay needed
    return 0
  }

  // Use crawl-delay from robots.txt if provided, otherwise use config
  const delayMs = crawlDelaySeconds
    ? crawlDelaySeconds * 1000
    : config.minDelayMs + Math.random() * (config.maxDelayMs - config.minDelayMs)

  const timeSinceLastRequest = now - lastRequestTime
  const delayNeeded = Math.max(0, delayMs - timeSinceLastRequest)

  return Math.round(delayNeeded)
}

/**
 * Wait for delay before making request
 */
export async function waitForDelay(
  host: string,
  crawlDelaySeconds?: number,
  config: DelayConfig = DEFAULT_CONFIG
): Promise<void> {
  const delay = await calculateDelay(host, crawlDelaySeconds, config)

  if (delay > 0) {
    await new Promise((resolve) => setTimeout(resolve, delay))
  }

  // Update last request time
  await updateLastRequestTime(host)
}

/**
 * Update last request time for host
 */
async function updateLastRequestTime(host: string): Promise<void> {
  const redis = getDelayRedis()
  const key = `${DEFAULT_CONFIG.keyPrefix}${host}`

  try {
    await redis.set(key, Date.now().toString(), 'EX', 3600) // 1 hour TTL
  } catch (error) {
    console.error('Error updating last request time:', error)
  }
}

