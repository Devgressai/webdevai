/**
 * Domain Monitoring Page
 * Shows trends and "what changed" for a domain
 */

import { PrismaClient } from '@prisma/client'
import { MonitoringClient } from './client'
import { getLatestSnapshot, getPreviousSnapshot } from '@/lib/monitoring/snapshot'
import { diffScans } from '@/lib/monitoring/diff'

const prisma = new PrismaClient()

interface MonitoringPageProps {
  params: {
    domainId: string
  }
}

async function getMonitoringData(domainId: string) {
  // Get domain
  const domain = await prisma.domain.findUnique({
    where: { id: domainId },
    include: {
      scans: {
        where: { status: 'completed' },
        orderBy: { completedAt: 'desc' },
        take: 10,
        include: {
          reports: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
          snapshots: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
      },
      alerts: {
        where: { status: 'pending' },
        orderBy: { triggeredAt: 'desc' },
        take: 10,
      },
      alertRules: {
        where: { enabled: true },
      },
    },
  })

  if (!domain) {
    return null
  }

  // Get latest and previous snapshots
  const latestSnapshot = await getLatestSnapshot(domainId)
  const previousSnapshot = latestSnapshot
    ? await getPreviousSnapshot(domainId, domain.scans[0]?.id || '')
    : null

  // Get diff if we have both snapshots
  let diff = null
  if (latestSnapshot && previousSnapshot && domain.scans.length >= 2) {
    const currentScan = domain.scans[0]
    const previousScan = domain.scans[1]
    
    diff = await diffScans(
      previousScan.id,
      currentScan.id,
      previousSnapshot,
      latestSnapshot,
      prisma
    )
  }

  return {
    domain,
    latestSnapshot,
    previousSnapshot,
    diff,
  }
}

export default async function MonitoringPage({ params }: MonitoringPageProps) {
  const { domainId } = params
  const data = await getMonitoringData(domainId)

  if (!data) {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-slate-50">Domain Not Found</h1>
          <p className="mt-2 text-sm text-slate-400">
            Domain <span className="font-mono text-sky-400">{domainId}</span> not found.
          </p>
        </header>
      </div>
    )
  }

  const { domain, latestSnapshot, previousSnapshot, diff } = data

  return (
    <MonitoringClient
      domain={domain}
      latestSnapshot={latestSnapshot}
      previousSnapshot={previousSnapshot}
      diff={diff}
    />
  )
}

