/**
 * Client component for monitoring page
 */

'use client'

import { ScoreDelta, IssueDelta, ClusterDelta } from '@/lib/monitoring/diff'

interface MonitoringClientProps {
  domain: any
  latestSnapshot: any
  previousSnapshot: any
  diff: any
}

export function MonitoringClient({
  domain,
  latestSnapshot,
  previousSnapshot,
  diff,
}: MonitoringClientProps) {
  if (!latestSnapshot) {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-slate-50">
            Monitoring: {domain.displayName || domain.domain}
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            No scans completed yet. Run a scan to start monitoring.
          </p>
        </header>
      </div>
    )
  }

  const scoreDelta = diff?.overallScoreDelta || 0
  const scoreDeltaPercent = diff?.overallScoreDeltaPercent || 0

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-50">
          Monitoring: {domain.displayName || domain.domain}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Track changes and trends over time
        </p>
      </header>

      {/* Overall Score Trend */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-sm font-medium text-slate-200 mb-4">Overall Score Trend</h2>
        <div className="flex items-baseline gap-4">
          <div>
            <div className="text-xs text-slate-400 mb-1">Current Score</div>
            <div className="text-4xl font-bold text-slate-50">
              {latestSnapshot.overallScore.toFixed(1)}
            </div>
          </div>
          {previousSnapshot && (
            <div>
              <div className="text-xs text-slate-400 mb-1">Previous Score</div>
              <div className="text-2xl text-slate-400">
                {previousSnapshot.overallScore.toFixed(1)}
              </div>
            </div>
          )}
          {diff && (
            <div className="ml-auto">
              <div className="text-xs text-slate-400 mb-1">Change</div>
              <div
                className={`text-2xl font-semibold ${
                  scoreDelta >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {scoreDelta >= 0 ? '+' : ''}
                {scoreDelta.toFixed(1)} ({scoreDeltaPercent >= 0 ? '+' : ''}
                {scoreDeltaPercent.toFixed(1)}%)
              </div>
            </div>
          )}
        </div>
      </div>

      {/* What Changed */}
      {diff && (
        <div className="space-y-6">
          {/* Score Deltas */}
          {diff.scoreDeltas && diff.scoreDeltas.length > 0 && (
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
              <h2 className="text-sm font-medium text-slate-200 mb-4">Pillar Score Changes</h2>
              <div className="space-y-3">
                {diff.scoreDeltas.map((delta: ScoreDelta) => (
                  <div
                    key={delta.pillarId}
                    className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-4"
                  >
                    <div>
                      <div className="font-medium text-slate-200">{delta.pillarId}</div>
                      <div className="text-xs text-slate-400">
                        {delta.previousScore.toFixed(1)} → {delta.currentScore.toFixed(1)}
                      </div>
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        delta.delta >= 0 ? 'text-green-400' : 'text-red-400'
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
          )}

          {/* New Issues */}
          {diff.newIssues && diff.newIssues.length > 0 && (
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
              <h2 className="text-sm font-medium text-slate-200 mb-4">
                New Issues ({diff.newIssues.length})
              </h2>
              <div className="space-y-2">
                {diff.newIssues.map((issue: IssueDelta) => (
                  <div
                    key={issue.issueId}
                    className="rounded-lg border border-slate-800 bg-slate-900/50 p-3"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          issue.severity === 'critical'
                            ? 'bg-red-400/10 text-red-400'
                            : issue.severity === 'high'
                              ? 'bg-orange-400/10 text-orange-400'
                              : 'bg-yellow-400/10 text-yellow-400'
                        }`}
                      >
                        {issue.severity}
                      </span>
                      <span className="font-medium text-slate-200">{issue.title}</span>
                    </div>
                    <div className="mt-1 text-xs text-slate-400">{issue.issueCode}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resolved Issues */}
          {diff.resolvedIssues && diff.resolvedIssues.length > 0 && (
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
              <h2 className="text-sm font-medium text-slate-200 mb-4">
                Resolved Issues ({diff.resolvedIssues.length})
              </h2>
              <div className="space-y-2">
                {diff.resolvedIssues.map((issue: IssueDelta, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-green-800/50 bg-green-900/10 p-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="font-medium text-slate-200">{issue.issueCode}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cluster Changes */}
          {diff.clusterDeltas && diff.clusterDeltas.length > 0 && (
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
              <h2 className="text-sm font-medium text-slate-200 mb-4">Template Changes</h2>
              <div className="space-y-2">
                {diff.clusterDeltas.map((cluster: ClusterDelta) => (
                  <div
                    key={cluster.clusterId}
                    className="rounded-lg border border-slate-800 bg-slate-900/50 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-slate-200">{cluster.clusterName}</div>
                        <div className="text-xs text-slate-400">
                          {cluster.status === 'new' && 'New template'}
                          {cluster.status === 'removed' && 'Removed template'}
                          {cluster.status === 'regressed' && 'Regressed'}
                          {cluster.status === 'improved' && 'Improved'}
                        </div>
                      </div>
                      {cluster.pageCountDelta !== 0 && (
                        <div
                          className={`text-sm font-semibold ${
                            cluster.pageCountDelta >= 0 ? 'text-green-400' : 'text-red-400'
                          }`}
                        >
                          {cluster.pageCountDelta >= 0 ? '+' : ''}
                          {cluster.pageCountDelta} pages
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Active Alerts */}
      {domain.alerts && domain.alerts.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-sm font-medium text-slate-200 mb-4">
            Active Alerts ({domain.alerts.length})
          </h2>
          <div className="space-y-2">
            {domain.alerts.map((alert: any) => (
              <div
                key={alert.id}
                className="rounded-lg border border-slate-800 bg-slate-900/50 p-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      alert.severity === 'critical'
                        ? 'bg-red-400/10 text-red-400'
                        : alert.severity === 'high'
                          ? 'bg-orange-400/10 text-orange-400'
                          : 'bg-yellow-400/10 text-yellow-400'
                    }`}
                  >
                    {alert.severity}
                  </span>
                  <span className="font-medium text-slate-200">{alert.message}</span>
                </div>
                <div className="text-xs text-slate-400">
                  {new Date(alert.triggeredAt).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

