/**
 * Scan Results Page
 * Displays overall score, pillar bars, top fixes, templates, and issues table
 */

import { PrismaClient } from '@prisma/client'
import { getPillars } from '@/lib/rubric/loader'
import { PillarBar } from '../../../components/PillarBar'
import { TopFixes } from '../../../components/TopFixes'
import { TemplatesSection } from '../../../components/TemplatesSection'
import { IssueTable } from '../../../components/IssueTable'
import { IssueDetailDrawer } from '../../../components/IssueDetailDrawer'
import { BudgetIndicator } from '../../../components/BudgetIndicator'
import { ScanResultsClient } from './client'
import type { Metadata } from 'next'

const prisma = new PrismaClient()

interface ScanResultPageProps {
  params: {
    scanId: string
  }
}

export async function generateMetadata({
  params,
}: ScanResultPageProps): Promise<Metadata> {
  return {
    title: `Scan Results - ${params.scanId.substring(0, 8)}...`,
    description: 'Internal scan results - not for public indexing',
    robots: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  }
}

async function getScanData(scanId: string) {
  // Get latest report
  const report = await prisma.report.findFirst({
    where: { scanId },
    orderBy: { createdAt: 'desc' },
  })

  if (!report) {
    return null
  }

  // Get scan with budget data
  const scan = await prisma.scan.findUnique({
    where: { id: scanId },
    select: {
      id: true,
      targetUrl: true,
      status: true,
      createdAt: true,
      completedAt: true,
      pagesFetched: true,
      pagesRendered: true,
      llmCalls: true,
      estTokens: true,
      budgetLimits: true,
    },
  })

  if (!scan) {
    return null
  }

  // Get issues
  const issues = await prisma.issue.findMany({
    where: { scanId },
    include: {
      issueClusters: {
        include: {
          cluster: true,
        },
      },
    },
    orderBy: [
      { severity: 'desc' },
      { createdAt: 'desc' },
    ],
  })

  // Get clusters
  const clusters = await prisma.cluster.findMany({
    where: { scanId },
    include: {
      clusterPages: {
        include: {
          page: true,
        },
        take: 1,
        where: {
          representativeType: 'best',
        },
      },
    },
  })

  // Get pillars for display
  const pillars = getPillars()

  return {
    scan,
    report,
    issues,
    clusters,
    pillars,
  }
}

export default async function ScanResultPage({ params }: ScanResultPageProps) {
  const { scanId } = params
  const data = await getScanData(scanId)

  if (!data) {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-slate-50">Scan Not Found</h1>
          <p className="mt-2 text-sm text-slate-400">
            Scan <span className="font-mono text-sky-400">{scanId}</span> not found or
            has no report yet.
          </p>
        </header>
      </div>
    )
  }

  const { scan, report, issues, clusters, pillars } = data

  // Calculate public score (0-10, cap 9.5)
  const publicScore = Math.min((report.overallScore / 100) * 10, 9.5)

  // Extract pillar scores from report
  const reportScores = report.scores as {
    pillars?: Array<{
      pillarId: string
      score: number
    }>
  }

  const pillarScores =
    reportScores.pillars?.map((ps) => ({
      pillarId: ps.pillarId,
      score: ps.score,
    })) || []

  // Format issues for table
  const formattedIssues = issues.map((issue) => {
    const metadata = (issue.metadata as Record<string, unknown>) || {}
    const cluster = issue.issueClusters[0]?.cluster

    return {
      id: issue.id,
      issueCode: issue.issueCode,
      title: issue.title,
      severity: issue.severity as 'low' | 'medium' | 'high' | 'critical',
      scope: (metadata.scope as 'site' | 'cluster' | 'page') || 'site',
      affectedCount: (metadata.affectedCount as number) || 0,
      priorityScore: (metadata.priorityScore as number) || 0,
      clusterId: cluster?.id,
      clusterName: cluster?.name,
      pillar: issue.issueCode.split('_')[0]?.toLowerCase() || undefined,
    }
  })

  // Format clusters for templates section
  const formattedClusters = clusters.map((cluster) => ({
    id: cluster.id,
    name: cluster.name,
    pageCount: cluster.clusterPages.length,
    representativeUrls: {
      best: cluster.clusterPages[0]?.page.url,
    },
  }))

  // Format top fixes (systemic issues)
  const topFixes = formattedIssues
    .filter((issue) => issue.scope === 'site' || issue.scope === 'cluster')
    .map((issue) => ({
      id: issue.id,
      title: issue.title,
      severity: issue.severity,
      affectedCount: issue.affectedCount,
      priorityScore: issue.priorityScore,
      scope: issue.scope,
    }))

  const budgetLimits = getBudgetLimits()

  return (
    <div className="space-y-6">
      <BudgetIndicator scan={scan} limits={budgetLimits} />
      <ScanResultsClient
        scanId={scanId}
        scan={scan}
        publicScore={publicScore}
        pillarScores={pillarScores}
        pillars={pillars}
        topFixes={topFixes}
        clusters={formattedClusters}
        issues={formattedIssues}
      />
    </div>
  )
}
