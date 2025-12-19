/**
 * Robots.txt parsing utilities
 * Enhanced with proper User-agent rule matching
 */

import { config } from '@/src/config'
import {
  parseRobots,
  findMatchingRule,
  checkRobotsAllowance,
  ParsedRobots,
} from '@/lib/crawl-politeness/robots-parser'

export interface RobotsResult {
  success: boolean
  statusCode?: number
  sitemaps: string[]
  userAgent?: string
  disallowedPaths?: string[]
  parsedRobots?: ParsedRobots
  error?: string
}

/**
 * Fetch and parse robots.txt
 */
export async function fetchRobots(baseUrl: string): Promise<RobotsResult> {
  const robotsUrl = `${baseUrl}/robots.txt`

  try {
    const response = await fetch(robotsUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'AEO-Audit-Bot/1.0',
      },
      signal: AbortSignal.timeout(10000), // 10 second timeout
    })

    const statusCode = response.status

    if (!response.ok) {
      return {
        success: false,
        statusCode,
        sitemaps: [],
        error: `HTTP ${statusCode}`,
      }
    }

    const text = await response.text()
    
    // Parse robots.txt with enhanced parser
    const userAgent = config.crawler.userAgent()
    const parsedRobots = parseRobots(text, userAgent)
    
    // Extract sitemaps
    const sitemaps = parsedRobots.sitemaps
    
    // Extract disallowed paths from matching rule
    const matchingRule = findMatchingRule(parsedRobots, userAgent)
    const disallowedPaths = matchingRule?.disallow || []

    return {
      success: true,
      statusCode,
      sitemaps,
      disallowedPaths,
      userAgent,
      parsedRobots,
    }
  } catch (error) {
    return {
      success: false,
      sitemaps: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Check if URL is allowed by robots.txt (for URL discovery)
 */
export function isUrlAllowedByRobots(
  url: string,
  parsedRobots: ParsedRobots | undefined,
  userAgent?: string
): boolean {
  if (!parsedRobots) {
    return true // No robots.txt, assume allowed
  }

  const result = checkRobotsAllowance(url, parsedRobots, userAgent)
  return result.allowed
}

