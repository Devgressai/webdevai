export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-50">
          Search &amp; AI Readiness Dashboard
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          High-level view of recent AEO-focused scans and rubric performance.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">
            Recent Scans (stub)
          </div>
          <div className="mt-3 text-2xl font-semibold text-slate-50">0</div>
          <p className="mt-1 text-xs text-slate-500">
            This environment is not yet wired to a data store. Add persistence
            when you are ready.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">
            Average Readiness Score (stub)
          </div>
          <div className="mt-3 text-2xl font-semibold text-slate-50">—</div>
          <p className="mt-1 text-xs text-slate-500">
            Placeholder metric – connect to your scoring engine later.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">
            Rubric Alignment (stub)
          </div>
          <div className="mt-3 text-2xl font-semibold text-slate-50">
            Configuration only
          </div>
          <p className="mt-1 text-xs text-slate-500">
            This console focuses on AEO / AI-readiness checks. Add dimensions
            and scoring phases later.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
        <h2 className="text-sm font-medium text-slate-100">
          Getting Started
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Use the &quot;New Scan&quot; flow to define a page, query set, or
          experience you want to evaluate for answer engine optimization,
          structured data quality, and AI-readiness signals. This dashboard will
          evolve as you wire in storage and scoring.
        </p>
      </section>
    </div>
  );
}


