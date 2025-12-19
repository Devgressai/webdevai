/**
 * Configuration for page fetching
 */

export interface PageFetchConfig {
  maxRedirects: number
  timeout: number
  retryAttempts: number
  retryBackoffBase: number // Base delay in ms for exponential backoff
  userAgent: string
  respectRobots: boolean
}

export const DEFAULT_CONFIG: PageFetchConfig = {
  maxRedirects: 10,
  timeout: 30000, // 30 seconds
  retryAttempts: 3,
  retryBackoffBase: 2000, // 2 seconds base
  userAgent: 'AEO-Audit-Bot/1.0',
  respectRobots: true,
}

/**
 * Get config from environment or use defaults
 */
export function getConfig(): PageFetchConfig {
  return {
    maxRedirects: parseInt(process.env.PAGE_FETCH_MAX_REDIRECTS || '10', 10),
    timeout: parseInt(process.env.PAGE_FETCH_TIMEOUT || '30000', 10),
    retryAttempts: parseInt(process.env.PAGE_FETCH_RETRY_ATTEMPTS || '3', 10),
    retryBackoffBase: parseInt(process.env.PAGE_FETCH_RETRY_BACKOFF || '2000', 10),
    userAgent: process.env.PAGE_FETCH_USER_AGENT || DEFAULT_CONFIG.userAgent,
    respectRobots: process.env.PAGE_FETCH_RESPECT_ROBOTS !== 'false',
  }
}

/**
 * Check if status code should trigger retry
 */
export function shouldRetry(statusCode: number): boolean {
  // Retry on 429 (rate limit) and 5xx (server errors)
  return statusCode === 429 || (statusCode >= 500 && statusCode < 600)
}

/**
 * Calculate exponential backoff delay
 */
export function calculateBackoff(attempt: number, baseDelay: number): number {
  return baseDelay * Math.pow(2, attempt - 1)
}

