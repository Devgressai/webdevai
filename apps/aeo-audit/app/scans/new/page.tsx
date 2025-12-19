import Link from "next/link";
import { NewScanClient } from "./client";

export default function NewScanPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-50">
            Create New Scan
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Define a page or property to evaluate for Search &amp; AI readiness.
          </p>
        </div>
        <Link
          href="/dashboard"
          className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-sky-500 hover:text-sky-300"
        >
          Back to Dashboard
        </Link>
      </header>

      <NewScanClient />
    </div>
  );
}


