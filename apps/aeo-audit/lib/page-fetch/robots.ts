/**
 * Robots.txt checking utilities
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface RobotsCheckResult {
  allowed: boolean
  confidence: 'high' | 'medium' | 'low'
  reason?: string
  disallowedPaths?: string[]
}

/**
 * Check if URL is allowed by robots.txt
 * Uses cached robots.txt data from Evidence table
 */
export async function checkRobots(
  scanId: string,
  url: string
): Promise<RobotsCheckResult> {
  try {
    // Get robots.txt evidence from the scan
    const robotsEvidence = await prisma.evidence.findFirst({
      where: {
        type: 'robots_txt',
        page: {
          scanId,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    if (!robotsEvidence) {
      // No robots.txt found, assume allowed with medium confidence
      return {
        allowed: true,
        confidence: 'medium',
        reason: 'No robots.txt found',
      }
    }

    const robotsData = JSON.parse(robotsEvidence.content) as {
      success: boolean
      disallowedPaths?: string[]
    }

    if (!robotsData.success || !robotsData.disallowedPaths) {
      return {
        allowed: true,
        confidence: 'high',
        reason: 'robots.txt found but no disallowed paths',
      }
    }

    // Check if URL path matches any disallowed pattern
    const urlObj = new URL(url)
    const path = urlObj.pathname

    for (const disallowedPath of robotsData.disallowedPaths || []) {
      // Simple pattern matching (can be enhanced with proper robots.txt parsing)
      if (path.startsWith(disallowedPath) || path === disallowedPath) {
        return {
          allowed: false,
          confidence: 'low',
          reason: `Path disallowed by robots.txt: ${disallowedPath}`,
          disallowedPaths: robotsData.disallowedPaths,
        }
      }
    }

    return {
      allowed: true,
      confidence: 'high',
      reason: 'Path allowed by robots.txt',
    }
  } catch (error) {
    // On error, assume allowed with low confidence
    return {
      allowed: true,
      confidence: 'low',
      reason: `Error checking robots.txt: ${error instanceof Error ? error.message : 'Unknown error'}`,
    }
  }
}

/**
 * Check if URL should be skipped based on common patterns
 */
export function shouldSkipUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    const path = urlObj.pathname.toLowerCase()

    // Common skip patterns
    const skipPatterns = [
      /^\/admin/i,
      /^\/api\//i,
      /^\/cart/i,
      /^\/checkout/i,
      /^\/account/i,
      /^\/login/i,
      /^\/logout/i,
      /^\/register/i,
      /^\/signin/i,
      /^\/signup/i,
      /^\/_next\//i,
      /^\/static\//i,
      /\.(pdf|zip|doc|docx|xls|xlsx|jpg|jpeg|png|gif|svg|css|js|json|xml)$/i,
    ]

    for (const pattern of skipPatterns) {
      if (pattern.test(path)) {
        return true
      }
    }

    return false
  } catch {
    return true
  }
}

