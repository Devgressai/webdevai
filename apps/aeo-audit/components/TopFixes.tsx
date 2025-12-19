/**
 * Top Systemic Fixes Component
 * Shows highest priority issues that affect multiple pages
 */

interface TopFix {
  id: string
  title: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  affectedCount: number
  priorityScore: number
  scope: 'site' | 'cluster' | 'page'
}

interface TopFixesProps {
  fixes: TopFix[]
  onFixClick: (fixId: string) => void
}

export function TopFixes({ fixes, onFixClick }: TopFixesProps) {
  // Sort by priority score, then affected count
  const sortedFixes = [...fixes].sort((a, b) => {
    if (b.priorityScore !== a.priorityScore) {
      return b.priorityScore - a.priorityScore
    }
    return b.affectedCount - a.affectedCount
  })

  const topFixes = sortedFixes.slice(0, 5)

  if (topFixes.length === 0) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <h3 className="text-sm font-medium text-slate-200 mb-2">Top Systemic Fixes</h3>
        <p className="text-sm text-slate-400">No systemic issues found.</p>
      </div>
    )
  }

  const severityColors = {
    critical: 'text-red-400',
    high: 'text-orange-400',
    medium: 'text-yellow-400',
    low: 'text-blue-400',
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
      <h3 className="text-sm font-medium text-slate-200 mb-4">Top Systemic Fixes</h3>
      <div className="space-y-3">
        {topFixes.map((fix) => (
          <button
            key={fix.id}
            onClick={() => onFixClick(fix.id)}
            className="w-full rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-left transition-colors hover:bg-slate-900"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-medium ${severityColors[fix.severity]}`}>
                    {fix.severity}
                  </span>
                  <span className="text-xs text-slate-500 capitalize">{fix.scope}</span>
                </div>
                <div className="font-medium text-slate-200">{fix.title}</div>
              </div>
              <div className="ml-4 text-right">
                <div className="text-sm font-medium text-slate-300">
                  {fix.affectedCount}
                </div>
                <div className="text-xs text-slate-500">affected</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Priority: {fix.priorityScore.toFixed(2)}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

