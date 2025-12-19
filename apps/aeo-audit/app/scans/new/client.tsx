'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function NewScanClient() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const targetUrl = formData.get('targetUrl') as string

    if (!targetUrl) {
      setError('Target URL is required')
      setLoading(false)
      return
    }

    // Extract domain from URL
    let domain = targetUrl
    try {
      const url = new URL(targetUrl)
      domain = url.hostname.replace(/^www\./, '')
    } catch {
      // If URL parsing fails, try to extract domain manually
      domain = targetUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
    }

    try {
      const response = await fetch('/api/scans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.message || data.error || 'Failed to create scan')
        setLoading(false)
        return
      }

      const data = await response.json()
      router.push(`/scans/${data.scan.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create scan')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="targetUrl"
            className="block text-xs font-medium uppercase tracking-wide text-slate-300"
          >
            Target URL or Domain
          </label>
          <input
            id="targetUrl"
            name="targetUrl"
            type="text"
            placeholder="example.com or https://example.com"
            required
            className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <p className="text-xs text-slate-500">
            Enter a domain (e.g., example.com) or full URL to scan
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="persona"
            className="block text-xs font-medium uppercase tracking-wide text-slate-300"
          >
            Primary Search Persona (optional)
          </label>
          <input
            id="persona"
            name="persona"
            type="text"
            placeholder="e.g., VP of Marketing at B2B SaaS company"
            className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <p className="text-xs text-slate-500">
            Helps you later interpret readiness scores by audience and intent.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="focusQueries"
            className="block text-xs font-medium uppercase tracking-wide text-slate-300"
          >
            Focus Queries (optional)
          </label>
          <textarea
            id="focusQueries"
            name="focusQueries"
            rows={4}
            placeholder="List 3–10 real queries you want to win in answer engines..."
            className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <p className="text-xs text-slate-500">
            You can paste exports from Search Console, internal search, or
            manual research here. The engine will score how well this page is
            positioned to answer them.
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="notes"
            className="block text-xs font-medium uppercase tracking-wide text-slate-300"
          >
            Analyst Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Context, hypotheses, or constraints for this scan..."
            className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <p className="text-xs text-slate-500">
            This stays internal to your team. Use it to capture observations
            as you iterate on the page.
          </p>
        </div>
      </div>

      {error && (
        <div className="rounded-md border border-red-800 bg-red-950/30 p-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-2">
        <Link
          href="/scans"
          className="rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 hover:border-sky-500 hover:text-sky-300"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 disabled:opacity-60"
        >
          {loading ? 'Creating Scan...' : 'Create Scan'}
        </button>
      </div>
    </form>
  )
}

