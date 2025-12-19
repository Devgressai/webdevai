/**
 * Compare Scans Page
 * Shows diff between two scans: score deltas, new/resolved issues, regressed clusters
 */

import { Suspense } from 'react'
import { CompareScansClient } from './client'

interface CompareScansPageProps {
  searchParams: {
    from?: string
    to?: string
  }
}

export default function CompareScansPage({ searchParams }: CompareScansPageProps) {
  const fromScanId = searchParams.from
  const toScanId = searchParams.to

  if (!fromScanId || !toScanId) {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-bold text-slate-50">Compare Scans</h1>
          <p className="mt-2 text-slate-400">
            Compare two scans to see what changed
          </p>
        </header>
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <p className="text-slate-300">
            Please provide both scan IDs in the URL: /scans/compare?from=SCAN_ID&to=SCAN_ID
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-50">Compare Scans</h1>
        <p className="mt-2 text-slate-400">
          Comparing scan {fromScanId.substring(0, 8)}... to {toScanId.substring(0, 8)}...
        </p>
      </header>
      <Suspense fallback={<div className="text-slate-400">Loading comparison...</div>}>
        <CompareScansClient fromScanId={fromScanId} toScanId={toScanId} />
      </Suspense>
    </div>
  )
}

