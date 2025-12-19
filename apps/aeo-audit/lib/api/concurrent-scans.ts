/**
 * Concurrent scan limiting utilities
 * Prevents users from running too many scans simultaneously
 */

import { PrismaClient } from '@prisma/client'
import Redis from 'ioredis'
import { config } from '@/src/config'

const prisma = new PrismaClient()

/**
 * Get Redis connection for concurrent scan tracking
 */
let concurrentRedis: Redis | null = null

function getConcurrentRedis(): Redis {
  if (!concurrentRedis) {
    const redisUrl = config.redis.url()
    concurrentRedis = new Redis(redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    })
  }
  return concurrentRedis
}

/**
 * Concurrent scan limit configuration
 */
export interface ConcurrentScanConfig {
  maxConcurrent: number // Maximum concurrent scans per identifier
  keyPrefix: string // Redis key prefix
  ttlSeconds: number // TTL for scan tracking (should be longer than typical scan duration)
}

/**
 * Default: 3 concurrent scans per user/session
 */
const DEFAULT_CONFIG: ConcurrentScanConfig = {
  maxConcurrent: 3,
  keyPrefix: 'concurrent_scans:',
  ttlSeconds: 3600, // 1 hour (scans should complete faster, but allow buffer)
}

/**
 * Check if user can start a new scan
 */
export interface ConcurrentScanResult {
  allowed: boolean
  currentCount: number
  maxAllowed: number
  error?: string
}

export async function checkConcurrentScans(
  identifier: string,
  config: ConcurrentScanConfig = DEFAULT_CONFIG
): Promise<ConcurrentScanResult> {
  const redis = getConcurrentRedis()
  const key = `${config.keyPrefix}${identifier}`

  try {
    // Get current count from Redis set
    const currentCount = await redis.scard(key)

    const allowed = currentCount < config.maxConcurrent

    return {
      allowed,
      currentCount,
      maxAllowed: config.maxConcurrent,
    }
  } catch (error) {
    console.error('Concurrent scan check error:', error)
    // On error, allow the request (fail open)
    return {
      allowed: true,
      currentCount: 0,
      maxAllowed: config.maxConcurrent,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Register a scan as started
 */
export async function registerScan(
  identifier: string,
  scanId: string,
  config: ConcurrentScanConfig = DEFAULT_CONFIG
): Promise<void> {
  const redis = getConcurrentRedis()
  const key = `${config.keyPrefix}${identifier}`

  try {
    // Add scan ID to set
    await redis.sadd(key, scanId)
    // Set expiration
    await redis.expire(key, config.ttlSeconds)
  } catch (error) {
    console.error('Error registering scan:', error)
    // Don't throw - this is best effort
  }
}

/**
 * Unregister a scan when it completes
 */
export async function unregisterScan(
  identifier: string,
  scanId: string,
  config: ConcurrentScanConfig = DEFAULT_CONFIG
): Promise<void> {
  const redis = getConcurrentRedis()
  const key = `${config.keyPrefix}${identifier}`

  try {
    // Remove scan ID from set
    await redis.srem(key, scanId)
  } catch (error) {
    console.error('Error unregistering scan:', error)
    // Don't throw - this is best effort
  }
}

/**
 * Get identifier for rate limiting (IP or session)
 * For MVP, we use IP address
 */
export function getScanIdentifier(request: Request): string {
  // Try to get IP from headers
  const headers = request.headers

  // Check X-Forwarded-For
  const xForwardedFor = headers.get('x-forwarded-for')
  if (xForwardedFor) {
    const ips = xForwardedFor.split(',').map((ip) => ip.trim())
    if (ips.length > 0) {
      return `ip:${ips[0]}`
    }
  }

  // Check X-Real-IP
  const xRealIP = headers.get('x-real-ip')
  if (xRealIP) {
    return `ip:${xRealIP.trim()}`
  }

  // Check CF-Connecting-IP
  const cfConnectingIP = headers.get('cf-connecting-ip')
  if (cfConnectingIP) {
    return `ip:${cfConnectingIP.trim()}`
  }

  // Fallback (shouldn't happen in production)
  return 'ip:unknown'
}

/**
 * Clean up old scan registrations (called periodically)
 */
export async function cleanupOldScans(
  config: ConcurrentScanConfig = DEFAULT_CONFIG
): Promise<void> {
  const redis = getConcurrentRedis()

  try {
    // Get all keys matching pattern
    const keys = await redis.keys(`${config.keyPrefix}*`)

    for (const key of keys) {
      // Check if key has expired scans
      // This is a best-effort cleanup
      const ttl = await redis.ttl(key)
      if (ttl === -1) {
        // Key exists but has no expiration, set one
        await redis.expire(key, config.ttlSeconds)
      }
    }
  } catch (error) {
    console.error('Error cleaning up old scans:', error)
    // Don't throw - this is best effort
  }
}

