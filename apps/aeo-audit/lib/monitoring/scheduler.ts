/**
 * Scheduled scan job setup
 * Creates repeatable jobs for domain monitoring
 */

import { Queue } from 'bullmq'
import { getQueue } from '../queues/factory'
import { QUEUE_NAMES } from '../queues/types'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Setup repeatable scheduled scan job
 */
export async function setupScheduledScans(): Promise<void> {
  const queue = getQueue(QUEUE_NAMES.SCHEDULED_SCAN)

  // Get all domains with monitoring enabled
  const domains = await prisma.domain.findMany({
    select: {
      id: true,
      domain: true,
    },
  })

  for (const domain of domains) {
    // Add repeatable job (daily at midnight UTC)
    await queue.add(
      `scheduled_scan_${domain.id}`,
      {
        domainId: domain.id,
        domain: domain.domain,
      },
      {
        repeat: {
          pattern: '0 0 * * *', // Daily at midnight UTC (cron)
          tz: 'UTC',
        },
        jobId: `scheduled_scan_${domain.id}`, // Unique job ID
      }
    )
  }
}

/**
 * Add scheduled scan for a domain
 */
export async function addScheduledScan(domainId: string): Promise<void> {
  const domain = await prisma.domain.findUnique({
    where: { id: domainId },
    select: { id: true, domain: true },
  })

  if (!domain) {
    throw new Error(`Domain ${domainId} not found`)
  }

  const queue = getQueue(QUEUE_NAMES.SCHEDULED_SCAN)

  await queue.add(
    `scheduled_scan_${domain.id}`,
    {
      domainId: domain.id,
      domain: domain.domain,
    },
    {
      repeat: {
        pattern: '0 0 * * *', // Daily at midnight UTC
        tz: 'UTC',
      },
      jobId: `scheduled_scan_${domain.id}`,
    }
  )
}

/**
 * Remove scheduled scan for a domain
 */
export async function removeScheduledScan(domainId: string): Promise<void> {
  const queue = getQueue(QUEUE_NAMES.SCHEDULED_SCAN)
  
  // Remove repeatable job
  await queue.removeRepeatable(`scheduled_scan_${domainId}`, {
    pattern: '0 0 * * *',
    tz: 'UTC',
  })
}

