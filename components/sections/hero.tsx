'use client'

import { useState, FormEvent, KeyboardEvent, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowRight, Play, Star, Users, TrendingUp, Zap, Target, Award, Lock } from "lucide-react"
import { normalizeUrl, validateUrl } from "@/lib/url-utils"
import { getVariant, trackVariantView } from "@/lib/variant-utils"
// import { useConversionTracking } from "../../hooks/useConversionTracking"
// import ScrollTracker from "../analytics/scroll-tracker"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

const stats = [
  { id: 1, name: "Projects Completed", value: "500+", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
  { id: 2, name: "Happy Clients", value: "500+", icon: Users, color: "from-slate-600 to-slate-700" },
  { id: 3, name: "ROI Average", value: "1,200%", icon: Zap, color: "from-indigo-500 to-indigo-600" },
]

const reviews = [
  { id: 1, rating: 5, text: "Outstanding results and professional service", author: "Sarah M." },
  { id: 2, rating: 5, text: "Transformed our online presence completely", author: "Mike R." },
  { id: 3, rating: 5, text: "Best investment we've made this year", author: "Jennifer L." },
]

export function Hero() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [urlInput, setUrlInput] = useState('')
  const [urlError, setUrlError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ctaVariant = getVariant('hero_cta_button')
  const microcopyVariant = getVariant('hero_microcopy')

  useEffect(() => {
    trackVariantView('hero_cta_button', ctaVariant.variant, ctaVariant.source)
    trackVariantView('hero_microcopy', microcopyVariant.variant, microcopyVariant.source)
  }, [ctaVariant.variant, ctaVariant.source, microcopyVariant.variant, microcopyVariant.source])

  // Temporarily disabled conversion tracking to fix build error
  // const { trackCTAClick, trackStrategySession } = useConversionTracking()

  const handleCTAClick = (buttonText: string, location: string) => {
    // trackCTAClick(buttonText, location)
    // Analytics tracking handled elsewhere
  }

  const handleStrategySessionClick = () => {
    // trackStrategySession('hero_section')
    // Analytics tracking handled elsewhere
  }

  const trackGrowthPlanStart = (site: string, valid: boolean) => {
    if (typeof window !== 'undefined') {
      try {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'growth_plan_start',
            site,
            valid,
          })
        }

        if (window.gtag) {
          window.gtag('event', 'growth_plan_start', {
            event_category: 'lead_generation',
            event_label: 'hero_growth_plan_start',
            site,
            valid,
          })
        }
      } catch (err) {
        // Analytics not available - fail silently
      }
    }
  }

  const handleUrlSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUrlError('')
    
    const trimmedUrl = urlInput.trim()
    
    if (!trimmedUrl) {
      setUrlError('Please enter your website URL')
      return
    }

    // Validate URL
    const isValid = validateUrl(trimmedUrl)

    if (!isValid) {
      setUrlError('Please enter a valid website URL (e.g., yourdomain.com)')
      trackGrowthPlanStart(trimmedUrl, false)
      return
    }

    const normalizedUrl = normalizeUrl(trimmedUrl)
    
    trackGrowthPlanStart(normalizedUrl, true)

    // Store in localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('webvello_site', normalizedUrl)
      } catch (err) {
        // localStorage not available or quota exceeded - fail silently
      }
    }

    // Navigate to growth plan page
    setIsSubmitting(true)
    const encodedUrl = encodeURIComponent(normalizedUrl)
    router.push(`/free-growth-plan?site=${encodedUrl}`)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isSubmitting) {
      e.preventDefault()
      const form = e.currentTarget.closest('form')
      if (form) {
        form.requestSubmit()
      }
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Background image from Unsplash (WebP format for fast loading) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-background.webp')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/75 to-blue-900/80" />
        {/* Additional gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/50 to-blue-900/60" />
      </div>
      
      {/* Background tech grid + glow (subtle overlay) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%233b82f6' stroke-opacity='0.12' stroke-width='1'%3E%3Cpath d='M0 20.5 H140M0 60.5 H140M0 100.5 H140'/%3E%3Cpath d='M20.5 0 V140M60.5 0 V140M100.5 0 V140'/%3E%3C/g%3E%3Ccircle cx='70' cy='70' r='2' fill='%233b82f6' fill-opacity='0.35'/%3E%3C/svg%3E\")",
            backgroundSize: '140px 140px',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="relative mx-auto max-w-3xl lg:max-w-4xl text-center">
          {/* Badge - Compact on mobile */}
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-sm font-bold text-white ring-2 ring-inset ring-white/20 mb-4 sm:mb-6 shadow-2xl">
            <Star className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5 fill-white" />
            <span className="hidden sm:inline">Trusted by 500+ businesses nationwide</span>
            <span className="sm:hidden">500+ Businesses</span>
          </div>

          {/* Mobile-First Outcome-Driven Headlines */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4 sm:mb-6">
            Get More Customers From Your Website
          </h1>

          <p className="text-base sm:text-xl leading-relaxed sm:leading-8 text-white/95 max-w-2xl mx-auto mb-6 sm:mb-8">
            Free growth plan shows you exactly how to increase traffic and conversions.
          </p>

          {/* Primary CTA - High Contrast, Above the Fold */}
          <div className="mb-6 sm:mb-8">
            <Button 
              size="lg"
              onClick={handleStrategySessionClick}
              className="
                w-full sm:w-auto
                min-h-[56px] sm:min-h-[60px]
                bg-white text-blue-600 
                hover:bg-blue-50 hover:text-blue-700
                px-8 sm:px-10 py-4 sm:py-5
                text-lg sm:text-xl font-bold 
                shadow-2xl hover:shadow-white/50
                transition-all duration-300
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600
                active:scale-[0.98]
              " 
              asChild
            >
              <Link href="/contact">
                <span className="flex items-center justify-center whitespace-nowrap">
                  Get Free Growth Plan
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile Trust Strip - Compact Metrics */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-4 sm:gap-8 text-white/90">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                <span className="text-sm sm:text-base font-semibold">500+ Sites</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <span className="text-sm sm:text-base font-semibold">300%+ Growth</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-sm sm:text-base font-semibold">1,200% ROI</span>
              </div>
            </div>
          </div>

          {/* Secondary Option - URL Form (Below Primary CTA on Mobile) */}
          <details className="group mb-6 sm:mb-8">
            <summary className="cursor-pointer list-none text-sm sm:text-base text-white/80 hover:text-white transition-colors font-medium flex items-center justify-center gap-2">
              <span>Or analyze your website now</span>
              <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            
            <form onSubmit={handleUrlSubmit} className="mt-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
                <div className="flex-1">
                  <label htmlFor="website-url" className="sr-only">
                    Enter your website
                  </label>
                  <Input
                    id="website-url"
                    type="url"
                    inputMode="url"
                    placeholder="yourdomain.com"
                    value={urlInput}
                    onChange={(e) => {
                      setUrlInput(e.target.value)
                      setUrlError('')
                    }}
                    onKeyDown={handleKeyDown}
                    disabled={isSubmitting}
                    aria-invalid={urlError ? 'true' : 'false'}
                    aria-describedby={urlError ? 'url-error' : 'url-hint'}
                    className={`
                      w-full px-4 sm:px-6 py-4 text-base sm:text-lg min-h-[56px]
                      bg-white/10 backdrop-blur-sm border-2
                      ${urlError 
                        ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/50' 
                        : 'border-white/30 focus-visible:border-white focus-visible:ring-white/50'
                      }
                      text-white placeholder-white/60
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transition-all duration-200
                    `}
                  />
                  {urlError && (
                    <p 
                      id="url-error" 
                      className="mt-2 text-sm sm:text-base text-red-300 text-left font-medium"
                      role="alert"
                    >
                      {urlError}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="
                    w-full sm:w-auto min-h-[56px]
                    bg-white/20 backdrop-blur-md
                    border-2 border-white/40
                    hover:bg-white/30 hover:border-white/60
                    text-white px-6 sm:px-8 py-4 
                    text-base sm:text-lg font-bold 
                    shadow-xl
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50
                    active:scale-[0.98]
                  "
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span>Analyzing...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center whitespace-nowrap">
                      <span className="sm:hidden">Analyze</span>
                      <span className="hidden sm:inline">Analyze Site</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </details>
          
          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/70">
            <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>No cost. No obligation. Results in 24 hours.</span>
          </div>

        </div>
      </div>
    </section>
  )
}
