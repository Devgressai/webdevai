/**
 * Store robots.txt decisions as Evidence
 * Uses redaction and EVIDENCE_MODE compliance
 */

import { PrismaClient } from '@prisma/client'
import { storeRedactedEvidence } from '../evidence/storage'

const prisma = new PrismaClient()

/**
 * Store robots decision evidence
 */
export async function storeRobotsEvidence(
  scanId: string,
  url: string,
  allowed: boolean,
  matchedRule?: string,
  crawlDelay?: number
): Promise<void> {
  try {
    // Find or create page for this URL
    let page = await prisma.page.findFirst({
      where: {
        scanId,
        url,
      },
    })

    if (!page) {
      // Create page record if it doesn't exist
      page = await prisma.page.create({
        data: {
          scanId,
          url,
          statusCode: null,
          metadata: {},
        })
      }
    }

      // Store evidence with redaction
      const evidenceType = allowed ? 'robots_allowed' : 'blocked_by_robots'
      const evidenceContent = JSON.stringify({
        allowed,
        matchedRule: matchedRule || 'No matching rule',
        crawlDelay: crawlDelay || null,
        timestamp: new Date().toISOString(),
      })

      await storeRedactedEvidence(
        page.id,
        evidenceType,
        evidenceContent,
        matchedRule || null,
        {
          url,
          allowed,
          matchedRule,
          crawlDelay,
        }
      )
  } catch (error) {
    console.error('Error storing robots evidence:', error)
    // Don't throw - evidence storage is best effort
  }
}

