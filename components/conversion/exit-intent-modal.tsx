'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import { trackEvent } from '@/lib/analytics-track-event'

interface ExitIntentModalProps {
  /** localStorage key for frequency capping */
  storageKey?: string
  /** Days to keep dismissed (default: 7) */
  dismissDays?: number
  /** z-index for modal (default: 40, below cookie banners) */
  zIndex?: number
}

export function ExitIntentModal({
  storageKey = 'geo-exit-intent-shown',
  dismissDays = 7,
  zIndex = 40,
}: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [hasTriggered, setHasTriggered] = useState(false)
  const [isDesktopDevice, setIsDesktopDevice] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Check if device is desktop (not mobile/touch) - only on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Check for touch capability
    try {
      const desktop = !('ontouchstart' in window || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0))
      setIsDesktopDevice(desktop)
    } catch (error) {
      // If detection fails, default to non-desktop to be safe
      setIsDesktopDevice(false)
    }
  }, [])

  // Check if modal was shown recently (frequency cap)
  useEffect(() => {
    if (typeof window === 'undefined' || !isDesktopDevice) return

    const shownData = localStorage.getItem(storageKey)
    if (shownData) {
      const { timestamp } = JSON.parse(shownData)
      const daysSinceShown = (Date.now() - timestamp) / (1000 * 60 * 60 * 24)
      
      if (daysSinceShown < dismissDays) {
        // Still within frequency cap period
        return
      } else {
        // Expired, remove from storage
        localStorage.removeItem(storageKey)
      }
    }
  }, [storageKey, dismissDays, isDesktopDevice])

  // Track when thresholds are met (stored in state for exit intent check)
  const [thresholdsMet, setThresholdsMet] = useState(false)

  // Track scroll depth and time on page
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    if (!isDesktopDevice || hasTriggered || thresholdsMet) return

    let startTime = Date.now()

    const checkThresholds = () => {
      try {
        // Check scroll depth
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const scrollPercentage = (scrollTop + clientHeight) / scrollHeight

        // Check time on page
        const timeOnPage = (Date.now() - startTime) / 1000

        // Set threshold as met if either condition is satisfied
        if (scrollPercentage >= 0.45 || timeOnPage >= 20) {
          setThresholdsMet(true)
        }
      } catch (error) {
        // Silently fail if DOM access fails
      }
    }

    // Check scroll depth
    const handleScroll = () => {
      checkThresholds()
    }

    // Check time on page periodically
    const timeInterval = setInterval(() => {
      checkThresholds()
    }, 1000)

    // Initial check
    checkThresholds()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timeInterval)
    }
  }, [hasTriggered, thresholdsMet, isDesktopDevice])

  // Exit intent detection: mouse leaving viewport near top
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    if (!isDesktopDevice || hasTriggered || !thresholdsMet) return

    const handleMouseLeave = (e: MouseEvent) => {
      try {
        // Only trigger if mouse is leaving near the top of the viewport
        if (e.clientY <= 0) {
          // Check frequency cap
          const shownData = localStorage.getItem(storageKey)
          if (shownData) {
            const { timestamp } = JSON.parse(shownData)
            const daysSinceShown = (Date.now() - timestamp) / (1000 * 60 * 60 * 24)
            if (daysSinceShown < dismissDays) {
              return // Still within frequency cap
            }
          }

          setIsOpen(true)
          setHasTriggered(true)
          
          // Track modal shown
          trackEvent('geo_exit_intent_shown', {
            page: 'geo-service',
            cta_location: 'exit_intent',
            cta_label: 'Get Free GEO Audit',
          })

          // Store in localStorage for frequency cap
          localStorage.setItem(storageKey, JSON.stringify({
            timestamp: Date.now(),
          }))
        }
      } catch (error) {
        // Silently fail if there's an error
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasTriggered, thresholdsMet, storageKey, dismissDays, isDesktopDevice])


  // Focus trap: minimal implementation
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (!isOpen) return

    const modal = modalRef.current
    if (!modal) return

    // Focus input field on open (more user-friendly than close button)
    const input = inputRef.current
    if (input) {
      // Small delay to ensure modal is fully rendered
      setTimeout(() => {
        try {
          input.focus()
        } catch (error) {
          // Silently fail if focus fails
        }
      }, 100)
    }

    // Handle ESC key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss()
      }
    }

    // Handle Tab key for focus trap
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      try {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      } catch (error) {
        // Silently fail if focus trap fails
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleTab)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleTab)
    }
  }, [isOpen, handleDismiss])

  // Validate URL: must contain a dot OR start with http
  const validateUrl = (urlValue: string): boolean => {
    if (!urlValue.trim()) return false
    // Must contain a dot (domain) OR start with http
    return urlValue.includes('.') || urlValue.toLowerCase().startsWith('http')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateUrl(url)) {
      setError('Please enter a valid website URL')
      return
    }

    // Track submit event
    trackEvent('geo_exit_intent_submit', {
      page: 'geo-service',
      cta_location: 'exit_intent',
      cta_label: 'Get Free GEO Audit',
    })

    // Navigate to contact page with URL param
    const encodedUrl = encodeURIComponent(url.trim())
    router.push(`/contact?service=geo&url=${encodedUrl}`)
  }

  const handleDismiss = useCallback(() => {
    setIsOpen(false)
    setUrl('')
    setError('')

    // Track dismiss event
    trackEvent('geo_exit_intent_dismissed', {
      page: 'geo-service',
      cta_location: 'exit_intent',
      cta_label: 'No thanks',
    })
  }, [])

  // Don't render on mobile/touch devices
  if (!isDesktopDevice) {
    return null
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        style={{ zIndex: zIndex - 1 }}
        onClick={handleDismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-heading"
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex }}
      >
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 sm:p-10 border border-gray-200">
          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md"
            aria-label="Close modal"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="text-center mb-6">
            <h2
              id="exit-intent-heading"
              className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3"
            >
              Before you go—want a free GEO readiness snapshot?
            </h2>
            <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
              We'll review AI visibility, extraction readiness, and schema foundation, then send a prioritized roadmap.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                ref={inputRef}
                type="url"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value)
                  setError('')
                }}
                placeholder="https://yourdomain.com"
                className="w-full"
                aria-label="Website URL"
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'url-error' : undefined}
              />
              {error && (
                <p id="url-error" className="mt-2 text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Get Free GEO Audit
              </Button>
              <p className="text-xs sm:text-sm text-secondary-500 text-center">
                Free • No obligation • Delivered in 3–5 business days
              </p>
            </div>
          </form>

          {/* Secondary dismiss link */}
          <div className="mt-6 text-center">
            <button
              onClick={handleDismiss}
              className="text-sm text-secondary-600 hover:text-secondary-900 underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
              type="button"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

