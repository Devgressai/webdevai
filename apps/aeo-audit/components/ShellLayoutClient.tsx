'use client'

import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type ShellLayoutClientProps = {
  children: ReactNode;
  environment: string;
  rubricVersion: string;
};

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/scans/new", label: "New Scan" },
  { href: "/scans", label: "Scans" },
  { href: "/methodology", label: "Methodology" },
  { href: "/limitations", label: "Limitations" }
];

export function ShellLayoutClient({
  children,
  environment,
  rubricVersion
}: ShellLayoutClientProps) {
  const router = useRouter()

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/auth')
      router.refresh()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex">
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            Search &amp; AI Readiness
          </div>
          <div className="mt-1 text-sm text-slate-300">AEO Audit Console</div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-sky-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full text-left rounded-md px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-900 hover:text-slate-200"
          >
            Sign Out
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-950/80 backdrop-blur">
          <div className="text-sm font-medium text-slate-200">
            Search &amp; AI Readiness Audit
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="uppercase tracking-wide">
                {environment || "unknown"}
              </span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <span>Rubric {rubricVersion}</span>
            </span>
          </div>
        </header>
        <main className="flex-1 p-6 bg-slate-950">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}

