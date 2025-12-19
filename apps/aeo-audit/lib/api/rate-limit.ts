/**
 * Rate limiting utilities using Redis
 */

import Redis from 'ioredis'
import { config } from '@/src/config'

/**
 * Get Redis connection for rate limiting
 */
let rateLimitRedis: Redis | null = null

function getRateLimitRedis(): Redis {
  if (!rateLimitRedis) {
    const redisUrl = config.redis.url()
    rateLimitRedis = new Redis(redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    })
  }
  return rateLimitRedis
}

/**
 * Rate limit configuration
 */
export interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Maximum requests per window
  keyPrefix: string // Redis key prefix
}

/**
 * Default rate limit: 10 requests per minute
 */
const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 10,
  keyPrefix: 'rate_limit:',
}

/**
 * Check rate limit for an IP address
 */
export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt: number // Unix timestamp in milliseconds
  error?: string
}

export async function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = DEFAULT_RATE_LIMIT
): Promise<RateLimitResult> {
  const redis = getRateLimitRedis()
  const key = `${config.keyPrefix}${identifier}`
  const now = Date.now()
  const windowStart = now - config.windowMs

  try {
    // Use Redis sorted set to track requests
    // Score is timestamp, member is request ID
    const pipeline = redis.pipeline()

    // Remove old entries outside the window
    pipeline.zremrangebyscore(key, 0, windowStart)

    // Count current requests in window
    pipeline.zcard(key)

    // Add current request
    pipeline.zadd(key, now, `${now}-${Math.random()}`)

    // Set expiration
    pipeline.expire(key, Math.ceil(config.windowMs / 1000))

    const results = await pipeline.exec()

    if (!results) {
      return {
        allowed: false,
        remaining: 0,
        resetAt: now + config.windowMs,
        error: 'Rate limit check failed',
      }
    }

    const currentCount = (results[1]?.[1] as number) || 0
    const remaining = Math.max(0, config.maxRequests - currentCount - 1)
    const allowed = currentCount < config.maxRequests
    const resetAt = now + config.windowMs

    return {
      allowed,
      remaining,
      resetAt,
    }
  } catch (error) {
    console.error('Rate limit check error:', error)
    // On error, allow the request (fail open for availability)
    return {
      allowed: true,
      remaining: config.maxRequests,
      resetAt: now + config.windowMs,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Get client IP from request
 */
export function getClientIP(request: Request): string {
  // Try various headers (in order of preference)
  const headers = request.headers

  // Check X-Forwarded-For (first IP if multiple)
  const xForwardedFor = headers.get('x-forwarded-for')
  if (xForwardedFor) {
    const ips = xForwardedFor.split(',').map((ip) => ip.trim())
    if (ips.length > 0) {
      return ips[0]
    }
  }

  // Check X-Real-IP
  const xRealIP = headers.get('x-real-ip')
  if (xRealIP) {
    return xRealIP.trim()
  }

  // Check CF-Connecting-IP (Cloudflare)
  const cfConnectingIP = headers.get('cf-connecting-ip')
  if (cfConnectingIP) {
    return cfConnectingIP.trim()
  }

  // Fallback to 'unknown' (shouldn't happen in production)
  return 'unknown'
}

