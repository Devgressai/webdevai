'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/analytics-track-event'

interface InlineCtaProps {
  /** Primary CTA button text */
  primaryCtaText?: string
  /** Primary CTA URL */
  primaryCtaUrl?: string
  /** Secondary CTA button text */
  secondaryCtaText?: string
  /** Secondary CTA anchor (e.g., #pricing) */
  secondaryCtaAnchor?: string
  /** Title heading */
  title?: string
  /** Subtext description */
  subtext?: string
  /** Array of bullet points */
  bullets?: string[]
  /** Microcopy under primary button */
  microcopy?: string
  /** Optional callback when primary CTA is clicked */
  onCtaClick?: () => void
  /** Optional event name to track when CTA is clicked */
  eventName?: string
}

export function InlineCta({
  primaryCtaText = 'Get Free GEO Audit',
  primaryCtaUrl = '/contact?service=geo',
  secondaryCtaText = 'View Pricing',
  secondaryCtaAnchor = '#pricing',
  title = 'See What Phase You're In',
  subtext = 'We'll audit your current AI visibility, extraction readiness, and schema foundation—then deliver a prioritized roadmap.',
  bullets = [
    'AI visibility snapshot',
    'Top fixes ranked by impact',
    'Implementation plan',
  ],
  microcopy = 'Free • No obligation • Delivered in 3–5 business days',
  onCtaClick,
  eventName,
}: InlineCtaProps) {
  const handleCtaClick = () => {
    if (eventName) {
      // Determine CTA location from event name for metadata
      const ctaLocation = eventName.includes('process')
        ? 'process'
        : eventName.includes('results')
        ? 'results'
        : 'inline'
      
      // Track event with metadata for qualified intent measurement
      trackEvent(eventName, {
        page: 'geo-service',
        cta_location: ctaLocation,
        cta_label: primaryCtaText,
      })
    }
    onCtaClick?.()
  }
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border border-indigo-100">
          <div className="max-w-4xl mx-auto">
            {/* Title and Subtext */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-secondary-700 max-w-2xl mx-auto leading-relaxed">
                {subtext}
              </p>
            </div>

            {/* Bullets */}
            <div className="mb-8 sm:mb-10">
              <ul className="space-y-3 sm:space-y-4">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle 
                      className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 flex-shrink-0 mt-0.5" 
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base text-secondary-700">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="w-full sm:w-auto flex flex-col items-center gap-2">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 sm:px-10"
                  asChild
                >
                  <Link href={primaryCtaUrl} onClick={handleCtaClick}>
                    {primaryCtaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-xs sm:text-sm text-secondary-600 text-center">
                  {microcopy}
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-8 sm:px-10"
                asChild
              >
                <Link href={secondaryCtaAnchor}>
                  {secondaryCtaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

