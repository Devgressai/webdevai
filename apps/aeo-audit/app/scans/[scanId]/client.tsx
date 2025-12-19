/**
 * Client component for scan results page
 * Handles interactive elements (drawer, filters)
 */

'use client'

import { useState, useEffect } from 'react'
import { PillarBar } from '../../../components/PillarBar'
import { TopFixes } from '../../../components/TopFixes'
import { TemplatesSection } from '../../../components/TemplatesSection'
import { IssueTable } from '../../../components/IssueTable'
import { IssueDetailDrawer } from '../../../components/IssueDetailDrawer'
import { getIssue, getFixTemplatesForIssue } from '@/lib/rubric/loader'

interface ScanResultsClientProps {
  scanId: string
  scan: any
  publicScore: number
  pillarScores: Array<{ pillarId: string; score: number }>
  pillars: any[]
  topFixes: any[]
  clusters: any[]
  issues: any[]
}

export function ScanResultsClient({
  scanId,
  scan,
  publicScore,
  pillarScores,
  pillars,
  topFixes,
  clusters,
  issues,
}: ScanResultsClientProps) {
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null)
  const [issueDetail, setIssueDetail] = useState<any>(null)

  // Load issue detail when selected
  useEffect(() => {
    if (selectedIssueId) {
      loadIssueDetail(selectedIssueId)
    }
  }, [selectedIssueId])

  async function loadIssueDetail(issueId: string) {
    try {
      const response = await fetch(`/api/scans/${scanId}/issues/${issueId}`)
      if (response.ok) {
        const data = await response.json()
        setIssueDetail(data)
      }
    } catch (error) {
      console.error('Failed to load issue detail:', error)
    }
  }

  const handleIssueClick = (issueId: string) => {
    setSelectedIssueId(issueId)
  }

  const handleCloseDrawer = () => {
    setSelectedIssueId(null)
    setIssueDetail(null)
  }

  // Get pillar names
  const pillarMap = new Map(pillars.map((p) => [p.id, p.name]))

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-50">Scan Results</h1>
        <p className="mt-2 text-sm text-slate-400">
          Readiness assessment for{' '}
          <span className="font-mono text-sky-400">{scan.targetUrl}</span>
        </p>
      </header>

      {/* Overall Score */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <div className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
          Overall Public Score
        </div>
        <div className="flex items-baseline gap-3">
          <div className="text-5xl font-bold text-slate-50">
            {publicScore.toFixed(1)}
          </div>
          <div className="text-2xl text-slate-400">/ 10</div>
        </div>
        <p className="mt-2 text-sm text-slate-500">
          Based on rubric assessment (capped at 9.5 for public display)
        </p>
      </div>

      {/* Pillar Bars */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-sm font-medium text-slate-200 mb-4">Pillar Scores</h2>
        <div className="space-y-4">
          {pillarScores.map((ps) => {
            const pillar = pillars.find((p) => p.id === ps.pillarId)
            if (!pillar) return null
            return (
              <PillarBar
                key={ps.pillarId}
                pillarId={ps.pillarId}
                pillarName={pillar.name}
                score={ps.score}
              />
            )
          })}
        </div>
      </div>

      {/* Top Fixes and Templates */}
      <div className="grid gap-6 md:grid-cols-2">
        <TopFixes fixes={topFixes} onFixClick={handleIssueClick} />
        <TemplatesSection clusters={clusters} />
      </div>

      {/* Issues Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-sm font-medium text-slate-200 mb-4">Issues</h2>
        <IssueTable issues={issues} onIssueClick={handleIssueClick} />
      </div>

      {/* Issue Detail Drawer */}
      <IssueDetailDrawer
        issue={issueDetail}
        scanId={scanId}
        onClose={handleCloseDrawer}
      />
    </div>
  )
}

