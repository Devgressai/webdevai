import { NextResponse } from 'next/server'
import { METRICS } from '@/lib/site-metrics'

export async function GET() {
  const payload = {
    env: process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown',
    commitSha: process.env.VERCEL_GIT_COMMIT_SHA || null,
    commitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE || null,
    branch: process.env.VERCEL_GIT_COMMIT_REF || null,
    metricRevenue: METRICS.revenue,
    metricLabel: METRICS.revenueLabel,
    now: new Date().toISOString(),
  }

  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}



