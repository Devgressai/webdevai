/**
 * Enhanced robots.txt parser with User-agent rule matching
 * Respects Disallow/Allow patterns with proper precedence
 */

import { config } from '@/src/config'

export interface RobotsRule {
  userAgent: string
  disallow: string[]
  allow: string[]
  crawlDelay?: number
}

export interface ParsedRobots {
  rules: RobotsRule[]
  sitemaps: string[]
  userAgent: string
}

/**
 * Parse robots.txt content
 */
export function parseRobots(robotsText: string, userAgent?: string): ParsedRobots {
  const configuredUserAgent = userAgent || config.crawler.userAgent()
  const lines = robotsText.split('\n')
  const rules: RobotsRule[] = []
  const sitemaps: string[] = []
  
  let currentRule: RobotsRule | null = null
  let inUserAgentBlock = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Skip comments and empty lines
    if (!line || line.startsWith('#')) {
      continue
    }

    const lowerLine = line.toLowerCase()

    // User-agent directive
    if (lowerLine.startsWith('user-agent:')) {
      // Save previous rule if exists
      if (currentRule && inUserAgentBlock) {
        rules.push(currentRule)
      }

      const ua = line.substring(11).trim()
      inUserAgentBlock = true
      currentRule = {
        userAgent: ua,
        disallow: [],
        allow: [],
      }
    }
    // Disallow directive
    else if (lowerLine.startsWith('disallow:')) {
      if (currentRule && inUserAgentBlock) {
        const path = line.substring(9).trim()
        if (path) {
          currentRule.disallow.push(path)
        } else {
          // Empty Disallow means allow all
          currentRule.allow.push('*')
        }
      }
    }
    // Allow directive
    else if (lowerLine.startsWith('allow:')) {
      if (currentRule && inUserAgentBlock) {
        const path = line.substring(6).trim()
        if (path) {
          currentRule.allow.push(path)
        }
      }
    }
    // Crawl-delay directive
    else if (lowerLine.startsWith('crawl-delay:')) {
      if (currentRule && inUserAgentBlock) {
        const delay = parseFloat(line.substring(12).trim())
        if (!isNaN(delay) && delay > 0) {
          currentRule.crawlDelay = delay
        }
      }
    }
    // Sitemap directive
    else if (lowerLine.startsWith('sitemap:')) {
      const sitemapUrl = line.substring(8).trim()
      if (sitemapUrl) {
        sitemaps.push(sitemapUrl)
      }
    }
    // End of user-agent block (new user-agent or other directive)
    else {
      if (currentRule && inUserAgentBlock) {
        rules.push(currentRule)
        currentRule = null
        inUserAgentBlock = false
      }
    }
  }

  // Save last rule
  if (currentRule && inUserAgentBlock) {
    rules.push(currentRule)
  }

  return {
    rules,
    sitemaps,
    userAgent: configuredUserAgent,
  }
}

/**
 * Find matching rule for user agent
 * Priority: exact match > partial match > wildcard (*)
 */
export function findMatchingRule(
  parsedRobots: ParsedRobots,
  userAgent?: string
): RobotsRule | null {
  const ua = userAgent || parsedRobots.userAgent
  const uaLower = ua.toLowerCase()

  // Try exact match first
  let exactMatch = parsedRobots.rules.find(
    (rule) => rule.userAgent.toLowerCase() === uaLower
  )
  if (exactMatch) {
    return exactMatch
  }

  // Try partial match (user agent contains rule)
  let partialMatch = parsedRobots.rules.find((rule) => {
    const ruleUA = rule.userAgent.toLowerCase()
    if (ruleUA === '*') return false
    return uaLower.includes(ruleUA) || ruleUA.includes(uaLower)
  })
  if (partialMatch) {
    return partialMatch
  }

  // Fallback to wildcard
  const wildcardMatch = parsedRobots.rules.find(
    (rule) => rule.userAgent === '*'
  )
  if (wildcardMatch) {
    return wildcardMatch
  }

  return null
}

/**
 * Check if URL path is allowed by robots rule
 * Respects Allow/Disallow precedence (most specific rule wins)
 */
export function isPathAllowed(urlPath: string, rule: RobotsRule): {
  allowed: boolean
  matchedRule?: string
} {
  // Normalize path
  const normalizedPath = urlPath.endsWith('/') ? urlPath : `${urlPath}/`

  // Check Allow rules first (most specific wins)
  let allowedByAllow = false
  let matchedAllow: string | undefined

  for (const allowPattern of rule.allow) {
    if (matchesPattern(normalizedPath, allowPattern)) {
      allowedByAllow = true
      matchedAllow = allowPattern
      break
    }
  }

  // Check Disallow rules
  let disallowedByDisallow = false
  let matchedDisallow: string | undefined

  for (const disallowPattern of rule.disallow) {
    if (matchesPattern(normalizedPath, disallowPattern)) {
      disallowedByDisallow = true
      matchedDisallow = disallowPattern
      break
    }
  }

  // Precedence: Allow overrides Disallow if both match
  // If no Allow matches, Disallow applies
  if (allowedByAllow) {
    return {
      allowed: true,
      matchedRule: `Allow: ${matchedAllow}`,
    }
  }

  if (disallowedByDisallow) {
    return {
      allowed: false,
      matchedRule: `Disallow: ${matchedDisallow}`,
    }
  }

  // Default: allowed (if no rules match)
  return {
    allowed: true,
  }
}

/**
 * Match path against robots.txt pattern
 * Supports wildcards (*) and path prefixes
 */
function matchesPattern(path: string, pattern: string): boolean {
  // Empty pattern means match all
  if (!pattern || pattern === '') {
    return true
  }

  // Normalize pattern
  const normalizedPattern = pattern.endsWith('/') ? pattern : `${pattern}/`

  // Exact match
  if (path === normalizedPattern) {
    return true
  }

  // Prefix match (most common)
  if (path.startsWith(normalizedPattern)) {
    return true
  }

  // Wildcard matching
  if (normalizedPattern.includes('*')) {
    const regexPattern = normalizedPattern
      .replace(/\*/g, '.*')
      .replace(/\//g, '\\/')
    const regex = new RegExp(`^${regexPattern}`)
    return regex.test(path)
  }

  return false
}

/**
 * Check if URL is allowed by robots.txt
 */
export function checkRobotsAllowance(
  url: string,
  parsedRobots: ParsedRobots,
  userAgent?: string
): {
  allowed: boolean
  matchedRule?: string
  crawlDelay?: number
} {
  try {
    const urlObj = new URL(url)
    const path = urlObj.pathname

    const rule = findMatchingRule(parsedRobots, userAgent)
    
    if (!rule) {
      // No matching rule, default to allowed
      return { allowed: true }
    }

    const pathCheck = isPathAllowed(path, rule)

    return {
      allowed: pathCheck.allowed,
      matchedRule: pathCheck.matchedRule,
      crawlDelay: rule.crawlDelay,
    }
  } catch (error) {
    // On error, default to allowed (fail open)
    return {
      allowed: true,
      matchedRule: 'Error parsing URL',
    }
  }
}

