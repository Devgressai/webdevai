/**
 * Issue Detail Drawer Component
 * Shows detailed information about an issue
 */

'use client'

import { useEffect } from 'react'

interface Evidence {
  id: string
  type: string
  content: string
  pageUrl?: string
}

interface FixTemplate {
  fix_template_id: string
  title: string
  description: string
  steps: Array<{
    step_number: number
    title: string
    description: string
  }>
  code_example?: {
    language: string
    code: string
  }
}

interface IssueDetail {
  id: string
  issueCode: string
  title: string
  description: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  scope: 'site' | 'cluster' | 'page'
  affectedCount: number
  priorityScore: number
  clusterId?: string
  clusterName?: string
  evidence: Evidence[]
  fixTemplates: FixTemplate[]
  affectedUrls?: string[]
}

interface IssueDetailDrawerProps {
  issue: IssueDetail | null
  scanId: string
  onClose: () => void
}

export function IssueDetailDrawer({
  issue,
  scanId,
  onClose,
}: IssueDetailDrawerProps) {
  useEffect(() => {
    if (issue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [issue])

  if (!issue) return null

  const severityColors = {
    critical: 'text-red-400 bg-red-400/10 border-red-400/20',
    high: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    low: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  }

  const handleExportCSV = () => {
    if (issue.affectedUrls && issue.affectedUrls.length > 0) {
      const csv = [
        'URL',
        ...issue.affectedUrls.map((url) => `"${url}"`),
      ].join('\n')

      const blob = new Blob([csv], { type: 'text/csv' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `issue-${issue.issueCode}-urls.csv`
      a.click()
      URL.revokeObjectURL(url)
    } else {
      // Fallback to API route
      window.open(`/api/scans/${scanId}/issues/${issue.id}/export.csv`, '_blank')
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto bg-slate-950 border-l border-slate-800 shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
          <h2 className="text-xl font-semibold text-slate-50">Issue Details</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-slate-50">{issue.title}</h3>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${severityColors[issue.severity]}`}
              >
                {issue.severity}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{issue.description}</p>
            <div className="mt-3 text-xs text-slate-500">
              <code className="rounded bg-slate-900 px-2 py-1">{issue.issueCode}</code>
            </div>
          </div>

          {/* Impact */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <h4 className="text-sm font-medium text-slate-200 mb-3">Impact</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-slate-400">Affected</div>
                <div className="mt-1 text-slate-200">
                  {issue.affectedCount} {issue.scope === 'page' ? 'pages' : issue.scope === 'cluster' ? 'templates' : 'site-wide'}
                </div>
              </div>
              <div>
                <div className="text-slate-400">Priority Score</div>
                <div className="mt-1 text-slate-200">{issue.priorityScore.toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Scope */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <h4 className="text-sm font-medium text-slate-200 mb-3">Scope</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-slate-400">Type: </span>
                <span className="text-slate-200 capitalize">{issue.scope}</span>
              </div>
              {issue.clusterName && (
                <div>
                  <span className="text-slate-400">Template: </span>
                  <span className="text-slate-200">{issue.clusterName}</span>
                </div>
              )}
            </div>
          </div>

          {/* Evidence */}
          {issue.evidence.length > 0 && (
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <h4 className="text-sm font-medium text-slate-200 mb-3">Evidence</h4>
              <div className="space-y-3">
                {issue.evidence.map((ev, idx) => (
                  <div key={ev.id || idx} className="rounded bg-slate-950 p-3">
                    <div className="text-xs text-slate-400 mb-1">{ev.type}</div>
                    <div className="text-sm text-slate-300 font-mono whitespace-pre-wrap break-words">
                      {ev.content.length > 500
                        ? ev.content.substring(0, 500) + '...'
                        : ev.content}
                    </div>
                    {ev.pageUrl && (
                      <a
                        href={ev.pageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs text-sky-400 hover:underline"
                      >
                        View source: {ev.pageUrl}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fix Guidance */}
          {issue.fixTemplates.length > 0 && (
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <h4 className="text-sm font-medium text-slate-200 mb-3">Fix Guidance</h4>
              <div className="space-y-4">
                {issue.fixTemplates.map((fix) => (
                  <div key={fix.fix_template_id} className="rounded bg-slate-950 p-4">
                    <h5 className="font-medium text-slate-200 mb-2">{fix.title}</h5>
                    <p className="text-sm text-slate-400 mb-4">{fix.description}</p>
                    <ol className="space-y-2">
                      {fix.steps.map((step) => (
                        <li key={step.step_number} className="text-sm text-slate-300">
                          <span className="font-medium text-slate-400">
                            {step.step_number}.
                          </span>{' '}
                          <span className="font-medium">{step.title}:</span>{' '}
                          {step.description}
                        </li>
                      ))}
                    </ol>
                    {fix.code_example && (
                      <div className="mt-4 rounded bg-slate-900 p-3">
                        <div className="mb-2 text-xs text-slate-400">
                          {fix.code_example.language}
                        </div>
                        <pre className="overflow-x-auto text-xs text-slate-300">
                          <code>{fix.code_example.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Acceptance Tests */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <h4 className="text-sm font-medium text-slate-200 mb-3">Acceptance Tests</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-slate-500">✓</span>
                <span>Issue no longer appears in scan results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500">✓</span>
                <span>Check score improves to 4.0+ (0-5 scale)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500">✓</span>
                <span>Evidence shows fix implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500">✓</span>
                <span>No regression in related checks</span>
              </li>
            </ul>
          </div>

          {/* Export Button */}
          <div className="flex justify-end">
            <button
              onClick={handleExportCSV}
              className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 transition-colors"
            >
              Export Affected URLs CSV
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

