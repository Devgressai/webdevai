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
      {/* Background tech grid + glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%233b82f6' stroke-opacity='0.12' stroke-width='1'%3E%3Cpath d='M0 20.5 H140M0 60.5 H140M0 100.5 H140'/%3E%3Cpath d='M20.5 0 V140M60.5 0 V140M100.5 0 V140'/%3E%3C/g%3E%3Ccircle cx='70' cy='70' r='2' fill='%233b82f6' fill-opacity='0.35'/%3E%3C/svg%3E\")",
            backgroundSize: '140px 140px',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/25 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 via-sky-400/15 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="relative mx-auto max-w-3xl lg:max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white ring-2 ring-inset ring-white/20 mb-6 sm:mb-8 shadow-2xl">
            <Star className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-white" />
            <span className="hidden sm:inline">Trusted by 500+ businesses nationwide</span>
            <span className="sm:hidden">500+ businesses trust us</span>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-white">
              <span className="text-white">Design</span>
              <span className="text-white/70 mx-2">•</span>
              <span className="text-white">Develop</span>
              <span className="text-white/70 mx-2">•</span>
              <span className="text-white">Dominate</span>
            </h2>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Turn your website into a predictable growth engine.
          </h1>

          <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto">
            Share your website and we&apos;ll outline a clear path to stronger visibility, higher conversions, and more qualified revenue opportunities.
          </p>

          {/* Growth Plan URL Entry Bar */}
          <form onSubmit={handleUrlSubmit} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="flex-1">
                <label htmlFor="website-url" className="sr-only">
                  Enter your website
                </label>
                <Input
                  id="website-url"
                  type="text"
                  inputMode="url"
                  placeholder="Enter your website (example: yourdomain.com)"
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
                    w-full px-4 sm:px-6 py-4 text-base sm:text-lg
                    bg-white/10 backdrop-blur-sm border-2
                    ${urlError 
                      ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/50' 
                      : 'border-white/20 focus-visible:border-blue-400 focus-visible:ring-blue-400/50'
                    }
                    text-white placeholder-white/60
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200
                  `}
                />
                {urlError ? (
                  <p 
                    id="url-error" 
                    className="mt-2 text-sm text-red-300 text-left"
                    role="alert"
                  >
                    {urlError}
                  </p>
                ) : (
                  <p id="url-hint" className="mt-2 text-xs text-white/60 text-left">
                    Example: yourdomain.com or https://www.yourdomain.com
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="xl"
                disabled={isSubmitting}
                className="
                  w-full sm:w-auto
                  bg-gradient-to-r from-blue-500 to-indigo-500 
                  hover:from-blue-600 hover:to-indigo-600 
                  text-white px-6 sm:px-8 py-4 
                  text-base sm:text-lg font-bold 
                  shadow-2xl hover:shadow-blue-400/25 
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400
                "
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="mr-2">Loading...</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    Get My Free Growth Plan →
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm text-white/80 text-center">
                See growth opportunities tailored to your site. No obligation.
              </p>
              <div className="flex items-center justify-center gap-1.5 text-xs text-white/60">
                <Lock className="w-3 h-3" />
                <span>We never share your info.</span>
              </div>
            </div>
          </form>

          {/* Secondary CTA - Free Strategy Session */}
          <div className="mt-8 flex justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="
                border-2 border-white/30 text-white 
                hover:bg-white/10 hover:text-white 
                px-6 py-3 text-sm sm:text-base font-semibold 
                backdrop-blur-sm
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50
              " 
              onClick={handleStrategySessionClick}
              asChild
            >
              <Link href="/contact">
                Book a Strategy Call
              </Link>
            </Button>
          </div>
          
          {/* Urgency & Scarcity */}
          <div className="mt-6 text-center">
            <p className="text-xs sm:text-sm text-white/90">
              <span className="hidden sm:inline">Limited weekly availability to keep quality high • 500+ businesses trust us</span>
              <span className="sm:hidden">Limited weekly availability</span>
            </p>
          </div>


        </div>
      </div>
    </section>
  )
}
