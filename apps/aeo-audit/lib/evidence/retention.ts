/**
 * Evidence retention and purging
 * Purges old evidence payloads while keeping hashes/metadata
 */

import { PrismaClient } from '@prisma/client'
import { config } from '@/src/config'

const prisma = new PrismaClient()

/**
 * Retention configuration
 */
export interface RetentionConfig {
  retentionDays: number // Days to keep evidence (default: 30)
  dryRun: boolean // If true, don't actually delete (default: false)
}

const DEFAULT_CONFIG: RetentionConfig = {
  retentionDays: 30,
  dryRun: false,
}

/**
 * Purge old evidence payloads
 * Keeps hashes and metadata for history
 */
export async function purgeOldEvidence(
  config: RetentionConfig = DEFAULT_CONFIG
): Promise<{
  purged: number
  kept: number
  errors: number
}> {
  const retentionDate = new Date()
  retentionDate.setDate(retentionDate.getDate() - config.retentionDays)

  let purged = 0
  let kept = 0
  let errors = 0

  try {
    // Find evidence older than retention date
    const oldEvidence = await prisma.evidence.findMany({
      where: {
        createdAt: {
          lt: retentionDate,
        },
      },
      select: {
        id: true,
        type: true,
        content: true,
        metadata: true,
        createdAt: true,
      },
    })

    for (const evidence of oldEvidence) {
      try {
        const metadata = (evidence.metadata as Record<string, unknown>) || {}
        const contentHash = metadata.contentHash as string
        const evidenceMode = metadata.evidenceMode as string

        // If extract-only mode, content is already minimal (just hash)
        // If full mode, we need to purge content but keep hash
        if (evidenceMode === 'full' || metadata.hasContent === true) {
          if (config.dryRun) {
            // Dry run: just count
            purged++
          } else {
            // Purge content, keep hash and metadata
            await prisma.evidence.update({
              where: { id: evidence.id },
              data: {
                content: JSON.stringify({
                  hash: contentHash,
                  selector: null,
                  length: 0,
                  redactionCounts: metadata.redactionCounts || {},
                  purged: true,
                  purgedAt: new Date().toISOString(),
                }),
                metadata: {
                  ...metadata,
                  hasContent: false,
                  purged: true,
                  purgedAt: new Date().toISOString(),
                  originalLength: metadata.originalLength || 0,
                },
              },
            })
            purged++
          }
        } else {
          // Already in extract-only mode, keep as is
          kept++
        }
      } catch (error) {
        console.error(`Error purging evidence ${evidence.id}:`, error)
        errors++
      }
    }

    return {
      purged,
      kept,
      errors,
    }
  } catch (error) {
    console.error('Error in purgeOldEvidence:', error)
    throw error
  }
}

/**
 * Get retention statistics
 */
export async function getRetentionStats(): Promise<{
  total: number
  olderThan30Days: number
  olderThan60Days: number
  olderThan90Days: number
  fullMode: number
  extractOnlyMode: number
}> {
  const now = new Date()
  const date30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const date60 = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)
  const date90 = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)

  const [total, older30, older60, older90, allEvidence] = await Promise.all([
    prisma.evidence.count(),
    prisma.evidence.count({
      where: { createdAt: { lt: date30 } },
    }),
    prisma.evidence.count({
      where: { createdAt: { lt: date60 } },
    }),
    prisma.evidence.count({
      where: { createdAt: { lt: date90 } },
    }),
    prisma.evidence.findMany({
      select: { metadata: true },
    }),
  ])

  let fullMode = 0
  let extractOnlyMode = 0

  for (const evidence of allEvidence) {
    const metadata = (evidence.metadata as Record<string, unknown>) || {}
    const mode = metadata.evidenceMode as string
    const hasContent = metadata.hasContent as boolean

    if (mode === 'full' || hasContent === true) {
      fullMode++
    } else {
      extractOnlyMode++
    }
  }

  return {
    total,
    olderThan30Days: older30,
    olderThan60Days: older60,
    olderThan90Days: older90,
    fullMode,
    extractOnlyMode,
  }
}

/**
 * Retention job payload
 */
export interface RetentionJobPayload {
  retentionDays?: number
  dryRun?: boolean
}

/**
 * Run retention job
 */
export async function runRetentionJob(
  payload: RetentionJobPayload = {}
): Promise<{
  success: boolean
  purged: number
  kept: number
  errors: number
  stats: Awaited<ReturnType<typeof getRetentionStats>>
  error?: string
}> {
  try {
    const retentionConfig: RetentionConfig = {
      retentionDays: payload.retentionDays || parseInt(process.env.EVIDENCE_RETENTION_DAYS || '30', 10),
      dryRun: payload.dryRun || false,
    }

    const purgeResult = await purgeOldEvidence(retentionConfig)
    const stats = await getRetentionStats()

    return {
      success: true,
      ...purgeResult,
      stats,
    }
  } catch (error) {
    return {
      success: false,
      purged: 0,
      kept: 0,
      errors: 0,
      stats: await getRetentionStats(),
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

