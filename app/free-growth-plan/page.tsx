import { Metadata } from 'next'
import { Suspense } from 'react'
import { GrowthPlanPageClient } from './growth-plan-client'

export const metadata: Metadata = {
  title: 'Free Growth Plan | WebVello',
  description: 'Get your free personalized growth plan with SEO opportunities, conversion improvements, and AI search readiness. Tailored for your business.',
  alternates: {
    canonical: 'https://www.webvello.com/free-growth-plan',
  },
  openGraph: {
    title: 'Free Growth Plan | WebVello',
    description: 'Get your free personalized growth plan with SEO opportunities, conversion improvements, and AI search readiness.',
    url: 'https://www.webvello.com/free-growth-plan',
  },
}

export default function FreeGrowthPlanPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50" />}>
      <GrowthPlanPageClient />
    </Suspense>
  )
}

