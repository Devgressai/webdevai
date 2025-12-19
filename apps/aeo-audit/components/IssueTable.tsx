/**
 * Issues Table Component
 * Displays issues with filters
 */

'use client'

import { useState } from 'react'

interface Issue {
  id: string
  issueCode: string
  title: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  scope: 'site' | 'cluster' | 'page'
  affectedCount: number
  priorityScore: number
  clusterId?: string
  clusterName?: string
  pillar?: string
}

interface IssueTableProps {
  issues: Issue[]
  onIssueClick: (issueId: string) => void
}

export function IssueTable({ issues, onIssueClick }: IssueTableProps) {
  const [filters, setFilters] = useState({
    pillar: '',
    severity: '',
    scope: '',
    cluster: '',
  })

  const pillars = Array.from(new Set(issues.map((i) => i.pillar).filter(Boolean)))
  const clusters = Array.from(
    new Set(issues.map((i) => i.clusterName).filter(Boolean))
  )

  const filteredIssues = issues.filter((issue) => {
    if (filters.pillar && issue.pillar !== filters.pillar) return false
    if (filters.severity && issue.severity !== filters.severity) return false
    if (filters.scope && issue.scope !== filters.scope) return false
    if (filters.cluster && issue.clusterName !== filters.cluster) return false
    return true
  })

  const severityColors = {
    critical: 'text-red-400 bg-red-400/10 border-red-400/20',
    high: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    low: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  }

  const scopeColors = {
    site: 'text-purple-400 bg-purple-400/10',
    cluster: 'text-cyan-400 bg-cyan-400/10',
    page: 'text-slate-400 bg-slate-400/10',
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <select
          value={filters.pillar}
          onChange={(e) => setFilters({ ...filters, pillar: e.target.value })}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
        >
          <option value="">All Pillars</option>
          {pillars.map((pillar) => (
            <option key={pillar} value={pillar}>
              {pillar}
            </option>
          ))}
        </select>

        <select
          value={filters.severity}
          onChange={(e) => setFilters({ ...filters, severity: e.target.value })}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
        >
          <option value="">All Severities</option>
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select
          value={filters.scope}
          onChange={(e) => setFilters({ ...filters, scope: e.target.value })}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
        >
          <option value="">All Scopes</option>
          <option value="site">Site</option>
          <option value="cluster">Template</option>
          <option value="page">Page</option>
        </select>

        <select
          value={filters.cluster}
          onChange={(e) => setFilters({ ...filters, cluster: e.target.value })}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
        >
          <option value="">All Templates</option>
          {clusters.map((cluster) => (
            <option key={cluster} value={cluster}>
              {cluster}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-slate-800">
        <table className="w-full">
          <thead className="bg-slate-900/50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-400">
                Issue
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-400">
                Severity
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-400">
                Scope
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-400">
                Affected
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-400">
                Priority
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {filteredIssues.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-sm text-slate-400">
                  No issues found
                </td>
              </tr>
            ) : (
              filteredIssues.map((issue) => (
                <tr
                  key={issue.id}
                  onClick={() => onIssueClick(issue.id)}
                  className="cursor-pointer transition-colors hover:bg-slate-900/50"
                >
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-200">{issue.title}</div>
                    <div className="text-xs text-slate-500">{issue.issueCode}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium ${severityColors[issue.severity]}`}
                    >
                      {issue.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${scopeColors[issue.scope]}`}
                    >
                      {issue.scope}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-300">
                    {issue.affectedCount} {issue.scope === 'page' ? 'pages' : issue.scope === 'cluster' ? 'templates' : 'site-wide'}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-300">
                    {issue.priorityScore.toFixed(2)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

