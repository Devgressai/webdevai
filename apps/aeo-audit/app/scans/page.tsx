import Link from "next/link";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function ScansIndexPage() {
  const scans = await prisma.scan.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: {
      id: true,
      targetUrl: true,
      status: true,
      createdAt: true,
      completedAt: true,
    },
  })

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-50">Scans</h1>
          <p className="mt-2 text-sm text-slate-400">
            Browse and inspect Search &amp; AI readiness scans.
          </p>
        </div>
        <Link
          href="/scans/new"
          className="rounded-md bg-sky-500 px-3 py-1.5 text-xs font-medium text-slate-950 hover:bg-sky-400"
        >
          New Scan
        </Link>
      </header>

      <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h2 className="text-sm font-medium text-slate-100">
            Recent Scans
          </h2>
          <span className="text-xs text-slate-500">
            {scans.length} scan{scans.length !== 1 ? 's' : ''}
          </span>
        </div>

        {scans.length === 0 ? (
          <div className="mt-4 text-center py-8 text-sm text-slate-400">
            No scans yet. <Link href="/scans/new" className="text-sky-400 hover:text-sky-300">Create your first scan</Link>.
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            {scans.map((scan) => (
              <Link
                key={scan.id}
                href={`/scans/${encodeURIComponent(scan.id)}`}
                className="block rounded-md border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 hover:border-sky-500 hover:text-sky-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-medium">Scan: {scan.id.substring(0, 8)}...</div>
                    <div className="mt-1 text-xs text-slate-500">
                      {scan.targetUrl}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-medium ${
                      scan.status === 'completed' ? 'text-emerald-400' :
                      scan.status === 'failed' ? 'text-red-400' :
                      scan.status === 'running' ? 'text-sky-400' :
                      'text-slate-400'
                    }`}>
                      {scan.status}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {new Date(scan.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}


