'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, X } from 'lucide-react'
import { trackEvent } from '@/lib/analytics-track-event'

interface StickyCtaProps {
  /** Scroll threshold in pixels before showing the CTA */
  scrollThreshold?: number
  /** CTA link URL */
  ctaUrl?: string
  /** CTA button text */
  ctaText?: string
  /** localStorage key for dismissal tracking */
  storageKey?: string
  /** Days to keep dismissed (default: 7) */
  dismissDays?: number
  /** Optional callback when CTA is clicked */
  onCtaClick?: () => void
  /** Optional event name to track when CTA is clicked */
  eventName?: string
}

export function StickyCta({
  scrollThreshold = 400,
  ctaUrl = '/contact?service=geo',
  ctaText = 'Get Free GEO Audit',
  storageKey = 'geo-sticky-cta-dismissed',
  dismissDays = 7,
  onCtaClick,
  eventName,
}: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // Check if dismissed in localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return

    const dismissedData = localStorage.getItem(storageKey)
    if (dismissedData) {
      const { timestamp } = JSON.parse(dismissedData)
      const daysSinceDismiss = (Date.now() - timestamp) / (1000 * 60 * 60 * 24)
      
      if (daysSinceDismiss < dismissDays) {
        setIsDismissed(true)
        return
      } else {
        // Expired, remove from storage
        localStorage.removeItem(storageKey)
      }
    }
  }, [storageKey, dismissDays])

  // Handle scroll detection with throttling
  useEffect(() => {
    if (isDismissed) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
          setIsVisible(scrollY > scrollThreshold)
          ticking = false
        })
        ticking = true
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollThreshold, isDismissed])

  const handleDismiss = useCallback(() => {
    setIsDismissed(true)
    setIsVisible(false)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify({
        timestamp: Date.now(),
      }))
    }
  }, [storageKey])

  const handleCtaClick = useCallback(() => {
    if (eventName) {
      // Track event with metadata for qualified intent measurement
      trackEvent(eventName, {
        page: 'geo-service',
        cta_location: 'sticky',
        cta_label: ctaText,
      })
    }
    onCtaClick?.()
  }, [eventName, ctaText, onCtaClick])

  // Don't render if dismissed
  if (isDismissed) {
    return null
  }

  return (
    <>
      {/* Desktop: Fixed bottom bar */}
      <div className={`hidden md:block fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0">
                <Button size="lg" asChild className="whitespace-nowrap">
                  <Link href={ctaUrl} onClick={handleCtaClick}>
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-secondary-600 whitespace-nowrap">
                Free audit • 3–5 days • No obligation
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-2 text-secondary-400 hover:text-secondary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md"
              aria-label="Dismiss this message"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Compact bottom bar */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <Button
                size="lg"
                variant="secondary"
                className="w-full bg-white text-indigo-600 hover:bg-gray-100 font-semibold"
                asChild
              >
                <Link href={ctaUrl} onClick={handleCtaClick}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-white/90 mt-1.5 text-center">
                Free audit • 3–5 days • No obligation
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1.5 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 rounded-md"
              aria-label="Dismiss this message"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap (mobile only, when visible) */}
      {isVisible && (
        <div className="md:hidden h-20" aria-hidden="true" />
      )}
    </>
  )
}

