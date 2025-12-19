interface BudgetIndicatorProps {
  scan: {
    pagesFetched: number
    pagesRendered: number
    llmCalls: number
    estTokens: number
    budgetLimits: Record<string, boolean> | null
    status: string
  }
  limits: {
    maxPages: number
    maxRenders: number
    maxLlmCalls: number
    maxTokensPerCall: number
  }
}

export function BudgetIndicator({ scan, limits }: BudgetIndicatorProps) {
  const limitsHit = scan.budgetLimits || {}
  const isLimited = scan.status === 'completed_with_limits'

  const pagesPercent = (scan.pagesFetched / limits.maxPages) * 100
  const rendersPercent = (scan.pagesRendered / limits.maxRenders) * 100
  const llmCallsPercent = (scan.llmCalls / limits.maxLlmCalls) * 100

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
      <h2 className="text-xl font-semibold text-slate-50 mb-4">
        Budget Usage
        {isLimited && (
          <span className="ml-2 text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-200">
            Limits Reached
          </span>
        )}
      </h2>

      <div className="space-y-4">
        {/* Pages Fetched */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-slate-300">Pages Fetched</span>
            <span className="text-sm font-medium text-slate-200">
              {scan.pagesFetched} / {limits.maxPages}
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                pagesPercent >= 100
                  ? 'bg-red-500'
                  : pagesPercent >= 80
                  ? 'bg-amber-500'
                  : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(pagesPercent, 100)}%` }}
            />
          </div>
          {limitsHit.pages && (
            <p className="text-xs text-red-400 mt-1">
              Page limit reached. Upgrade to scan more pages.
            </p>
          )}
        </div>

        {/* Pages Rendered */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-slate-300">Pages Rendered</span>
            <span className="text-sm font-medium text-slate-200">
              {scan.pagesRendered} / {limits.maxRenders}
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                rendersPercent >= 100
                  ? 'bg-red-500'
                  : rendersPercent >= 80
                  ? 'bg-amber-500'
                  : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(rendersPercent, 100)}%` }}
            />
          </div>
          {limitsHit.renders && (
            <p className="text-xs text-red-400 mt-1">
              Render limit reached. Upgrade to render more pages.
            </p>
          )}
        </div>

        {/* LLM Calls */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-slate-300">LLM Calls</span>
            <span className="text-sm font-medium text-slate-200">
              {scan.llmCalls} / {limits.maxLlmCalls}
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                llmCallsPercent >= 100
                  ? 'bg-red-500'
                  : llmCallsPercent >= 80
                  ? 'bg-amber-500'
                  : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(llmCallsPercent, 100)}%` }}
            />
          </div>
          {limitsHit.llmCalls && (
            <p className="text-xs text-red-400 mt-1">
              LLM call limit reached. Upgrade for more AI evaluations.
            </p>
          )}
        </div>

        {/* Estimated Tokens */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-slate-300">Estimated Tokens</span>
            <span className="text-sm font-medium text-slate-200">
              {scan.estTokens.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Max {limits.maxTokensPerCall.toLocaleString()} tokens per call
          </p>
          {limitsHit.tokens && (
            <p className="text-xs text-red-400 mt-1">
              Token limit reached. Inputs were truncated.
            </p>
          )}
        </div>

        {/* Upgrade Message */}
        {isLimited && (
          <div className="mt-4 p-3 rounded-lg bg-amber-950/30 border border-amber-800/50">
            <p className="text-sm text-amber-200 font-medium mb-2">
              Scan completed with limits
            </p>
            <p className="text-xs text-amber-300">
              Some operations were skipped due to budget limits. To scan more pages,
              render more content, or make more LLM calls, upgrade your plan or adjust
              the MAX_PAGES, MAX_RENDERS, and MAX_LLM_CALLS environment variables.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

