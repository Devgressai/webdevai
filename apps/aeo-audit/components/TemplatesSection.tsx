/**
 * Templates Section Component
 * Displays clusters (templates) found in the scan
 */

interface Cluster {
  id: string
  name: string
  pageCount: number
  representativeUrls?: {
    best?: string
    typical?: string
    worst?: string
  }
}

interface TemplatesSectionProps {
  clusters: Cluster[]
}

export function TemplatesSection({ clusters }: TemplatesSectionProps) {
  if (clusters.length === 0) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <h3 className="text-sm font-medium text-slate-200 mb-2">Templates</h3>
        <p className="text-sm text-slate-400">No templates identified in this scan.</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
      <h3 className="text-sm font-medium text-slate-200 mb-4">Templates ({clusters.length})</h3>
      <div className="space-y-3">
        {clusters.map((cluster) => (
          <div
            key={cluster.id}
            className="rounded-lg border border-slate-800 bg-slate-900/50 p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-slate-200">{cluster.name}</span>
              <span className="text-xs text-slate-400">{cluster.pageCount} pages</span>
            </div>
            {cluster.representativeUrls?.best && (
              <div className="mt-2 text-xs">
                <span className="text-slate-400">Representative: </span>
                <a
                  href={cluster.representativeUrls.best}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline break-all"
                >
                  {cluster.representativeUrls.best}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

