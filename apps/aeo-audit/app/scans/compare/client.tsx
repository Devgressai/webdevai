'use client'

import { useEffect, useState } from 'react'
import { getPillars } from '@/lib/rubric/loader'

interface CompareScansClientProps {
  fromScanId: string
  toScanId: string
}

interface ScanCompareResult {
  fromScanId: string
  toScanId: string
  fromScan: {
    id: string
    targetUrl: string
    createdAt: string
    completedAt: string | null
  }
  toScan: {
    id: string
    targetUrl: string
    createdAt: string
    completedAt: string | null
  }
  overallScoreDelta: number
  overallScoreDeltaPercent: number
  fromOverallScore: number
  toOverallScore: number
  pillarScoreDeltas: Array<{
    pillarId: string
    previousScore: number
    currentScore: number
    delta: number
    deltaPercent: number
  }>
  newIssues: Array<{
    issueCode: string
    issueId: string
    status: 'new' | 'resolved' | 'unchanged'
    severity: string
    title: string
  }>
  resolvedIssues: Array<{
    issueCode: string
    issueId: string
    status: 'new' | 'resolved' | 'unchanged'
    severity: string
    title: string
  }>
  regressedClusters: Array<{
    clusterId: string
    clusterName: string
    status: string
    pageCountDelta: number
  }>
  improvedClusters: Array<{
    clusterId: string
    clusterName: string
    status: string
    pageCountDelta: number
  }>
  newClusters: Array<{
    clusterId: string
    clusterName: string
    status: string
    pageCountDelta: number
  }>
  removedClusters: Array<{
    clusterId: string
    clusterName: string
    status: string
    pageCountDelta: number
  }>
  pageCountDelta: number
  fromPageCount: number
  toPageCount: number
}

export function CompareScansClient({
  fromScanId,
  toScanId,
}: CompareScansClientProps) {
  const [data, setData] = useState<ScanCompareResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/scans/compare?from=${fromScanId}&to=${toScanId}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch comparison data')
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fromScanId, toScanId])

  const handleExportUrls = async (issueCode: string) => {
    const url = `/api/scans/compare/urls/export.csv?from=${fromScanId}&to=${toScanId}&issueCode=${issueCode}`
    window.open(url, '_blank')
  }

  if (loading) {
    return <div className="text-slate-400">Loading comparison...</div>
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-800 bg-red-950/60 p-6 text-red-300">
        Error: {error}
      </div>
    )
  }

  if (!data) {
    return <div className="text-slate-400">No comparison data available</div>
  }

  const pillars = getPillars()
  const pillarMap = new Map(pillars.map((p) => [p.id, p.name]))

  return (
    <div className="space-y-6">
      {/* Overall Score Delta */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-xl font-semibold text-slate-50 mb-4">
          Overall Score Change
        </h2>
        <div className="flex items-center gap-6">
          <div>
            <div className="text-sm text-slate-400">From Scan</div>
            <div className="text-2xl font-bold text-slate-50">
              {data.fromOverallScore.toFixed(1)}/10
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {new Date(data.fromScan.createdAt).toLocaleDateString()}
            </div>
          </div>
          <div className="text-3xl text-slate-600">→</div>
          <div>
            <div className="text-sm text-slate-400">To Scan</div>
            <div className="text-2xl font-bold text-slate-50">
              {data.toOverallScore.toFixed(1)}/10
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {new Date(data.toScan.createdAt).toLocaleDateString()}
            </div>
          </div>
          <div className="ml-auto">
            <div className="text-sm text-slate-400">Change</div>
            <div
              className={`text-2xl font-bold ${
                data.overallScoreDelta >= 0
                  ? 'text-emerald-400'
                  : 'text-red-400'
              }`}
            >
              {data.overallScoreDelta >= 0 ? '+' : ''}
              {data.overallScoreDelta.toFixed(1)}
            </div>
            <div className="text-xs text-slate-500">
              ({data.overallScoreDeltaPercent >= 0 ? '+' : ''}
              {data.overallScoreDeltaPercent.toFixed(1)}%)
            </div>
          </div>
        </div>
      </div>

      {/* Pillar Score Deltas */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-xl font-semibold text-slate-50 mb-4">
          Pillar Score Changes
        </h2>
        <div className="space-y-3">
          {data.pillarScoreDeltas.map((delta) => (
            <div
              key={delta.pillarId}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50"
            >
              <div className="flex-1">
                <div className="font-medium text-slate-200">
                  {pillarMap.get(delta.pillarId) || delta.pillarId}
                </div>
                <div className="text-sm text-slate-400">
                  {delta.previousScore.toFixed(1)} → {delta.currentScore.toFixed(1)}
                </div>
              </div>
              <div
                className={`text-lg font-semibold ${
                  delta.delta >= 0 ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {delta.delta >= 0 ? '+' : ''}
                {delta.delta.toFixed(1)} ({delta.deltaPercent >= 0 ? '+' : ''}
                {delta.deltaPercent.toFixed(1)}%)
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Issues */}
      {data.newIssues.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            New Issues ({data.newIssues.length})
          </h2>
          <div className="space-y-2">
            {data.newIssues.map((issue) => (
              <div
                key={issue.issueId}
                className="flex items-center justify-between p-3 rounded-lg bg-red-950/20 border border-red-800/50"
              >
                <div className="flex-1">
                  <div className="font-medium text-slate-200">{issue.title}</div>
                  <div className="text-sm text-slate-400">{issue.issueCode}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-red-900/50 text-red-200">
                    {issue.severity}
                  </span>
                  <button
                    onClick={() => handleExportUrls(issue.issueCode)}
                    className="text-xs px-3 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                  >
                    Export URLs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resolved Issues */}
      {data.resolvedIssues.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Resolved Issues ({data.resolvedIssues.length})
          </h2>
          <div className="space-y-2">
            {data.resolvedIssues.map((issue) => (
              <div
                key={issue.issueCode}
                className="flex items-center justify-between p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/50"
              >
                <div className="flex-1">
                  <div className="font-medium text-slate-200">{issue.issueCode}</div>
                  <div className="text-sm text-slate-400">Issue resolved</div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-emerald-900/50 text-emerald-200">
                  Resolved
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regressed Clusters */}
      {data.regressedClusters.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Regressed Clusters ({data.regressedClusters.length})
          </h2>
          <div className="space-y-2">
            {data.regressedClusters
              .sort((a, b) => a.pageCountDelta - b.pageCountDelta)
              .slice(0, 10)
              .map((cluster) => (
                <div
                  key={cluster.clusterId}
                  className="flex items-center justify-between p-3 rounded-lg bg-red-950/20 border border-red-800/50"
                >
                  <div className="flex-1">
                    <div className="font-medium text-slate-200">
                      {cluster.clusterName}
                    </div>
                    <div className="text-sm text-slate-400">
                      {cluster.clusterId.substring(0, 8)}...
                    </div>
                  </div>
                  <div className="text-red-400 font-semibold">
                    {cluster.pageCountDelta} pages
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Improved Clusters */}
      {data.improvedClusters.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Improved Clusters ({data.improvedClusters.length})
          </h2>
          <div className="space-y-2">
            {data.improvedClusters
              .sort((a, b) => b.pageCountDelta - a.pageCountDelta)
              .slice(0, 10)
              .map((cluster) => (
                <div
                  key={cluster.clusterId}
                  className="flex items-center justify-between p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/50"
                >
                  <div className="flex-1">
                    <div className="font-medium text-slate-200">
                      {cluster.clusterName}
                    </div>
                    <div className="text-sm text-slate-400">
                      {cluster.clusterId.substring(0, 8)}...
                    </div>
                  </div>
                  <div className="text-emerald-400 font-semibold">
                    +{cluster.pageCountDelta} pages
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Page Count Delta */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-xl font-semibold text-slate-50 mb-4">
          Page Count Change
        </h2>
        <div className="flex items-center gap-6">
          <div>
            <div className="text-sm text-slate-400">From Scan</div>
            <div className="text-2xl font-bold text-slate-50">
              {data.fromPageCount}
            </div>
          </div>
          <div className="text-3xl text-slate-600">→</div>
          <div>
            <div className="text-sm text-slate-400">To Scan</div>
            <div className="text-2xl font-bold text-slate-50">
              {data.toPageCount}
            </div>
          </div>
          <div className="ml-auto">
            <div className="text-sm text-slate-400">Change</div>
            <div
              className={`text-2xl font-bold ${
                data.pageCountDelta >= 0 ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {data.pageCountDelta >= 0 ? '+' : ''}
              {data.pageCountDelta}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

