'use client'

import { useState, FormEvent, KeyboardEvent, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowRight, TrendingUp, Zap, Award } from "lucide-react"
import { normalizeUrl, validateUrl } from "@/lib/url-utils"
import { getVariant, trackVariantView } from "@/lib/variant-utils"
import { openCalendlyPopup } from "@/lib/calendly"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

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

  const handleStrategySessionClick = () => {
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
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero-background.webp"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      {/* Dark scrim overlay for text readability - WCAG AA compliant */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />

      {/* Content Container - Left-aligned for better readability */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6 sm:mb-8 ring-1 ring-white/20">
            <Award className="h-4 w-4" />
            <span className="hidden sm:inline">Trusted by 500+ businesses nationwide</span>
            <span className="sm:hidden">500+ Businesses</span>
          </div>

          {/* Headline Options - Using Option 1 (AI-powered positioning) */}
          {/* Option 1: AI-powered SEO/GEO/AEO positioning */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            AI-Powered SEO That{' '}
            <span className="text-primary-400">3–5x</span> Your Organic Growth
          </h1>
          
          {/* Option 2: Alternative headline (commented out)
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Transform Your Website Into a{' '}
            <span className="text-primary-400">Revenue-Generating</span> Machine
          </h1>
          */}

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            We combine AI-driven SEO, GEO targeting, and conversion optimization to deliver measurable results. Get a free growth plan that shows exactly how to increase traffic and conversions.
          </p>

          {/* Primary CTAs - Simplified to 2 buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12">
            {/* Primary CTA */}
            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault()
                openCalendlyPopup()
              }}
              className="
                w-full sm:w-auto
                min-h-[56px] sm:min-h-[60px]
                bg-primary-600 text-white
                hover:bg-primary-700
                px-8 sm:px-10 py-4 sm:py-5
                text-base sm:text-lg font-semibold
                rounded-xl
                shadow-xl hover:shadow-2xl hover:shadow-primary-600/25
                transition-all duration-300
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                active:scale-[0.98]
              "
              data-cta="hero-book-discovery-call"
              aria-label="Book a Discovery Call"
            >
              <span className="flex items-center justify-center gap-2">
                Book a Discovery Call
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="outline"
              size="lg"
              onClick={handleStrategySessionClick}
              className="
                w-full sm:w-auto
                min-h-[56px] sm:min-h-[60px]
                border-2 border-white/40 text-white
                bg-white/10 backdrop-blur-sm
                hover:bg-white/20 hover:border-white/60
                px-8 sm:px-10 py-4 sm:py-5
                text-base sm:text-lg font-semibold
                rounded-xl
                transition-all duration-300
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2
                active:scale-[0.98]
              "
              data-cta="hero-get-growth-plan"
              aria-label="Get a Free Growth Plan"
              asChild
            >
              <Link href="/contact">
                Get a Free Growth Plan
              </Link>
            </Button>
          </div>

          {/* Trust Indicators - Compact proof points */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-white/90 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 backdrop-blur-sm flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary-400" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold">500+</div>
                <div className="text-xs sm:text-sm text-white/70">Businesses</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 backdrop-blur-sm flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-400" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold">3–5x</div>
                <div className="text-xs sm:text-sm text-white/70">Organic Growth</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="h-5 w-5 text-primary-400" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold">1,200%</div>
                <div className="text-xs sm:text-sm text-white/70">Average ROI</div>
              </div>
            </div>
          </div>

          {/* Secondary Option - URL Form (Collapsible) */}
          <details className="group">
            <summary className="cursor-pointer list-none text-sm sm:text-base text-white/80 hover:text-white transition-colors font-medium flex items-center gap-2 mb-4">
              <span>Or analyze your website now</span>
              <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            
            <form onSubmit={handleUrlSubmit} className="mt-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl">
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
                      rounded-xl
                    `}
                  />
                  {urlError && (
                    <p 
                      id="url-error" 
                      className="mt-2 text-sm sm:text-base text-red-300 font-medium"
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
                    text-base sm:text-lg font-semibold 
                    shadow-xl
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50
                    active:scale-[0.98]
                    rounded-xl
                  "
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span>Analyzing...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center whitespace-nowrap gap-2">
                      <span className="sm:hidden">Analyze</span>
                      <span className="hidden sm:inline">Analyze Site</span>
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </details>
        </div>
      </div>
    </section>
  )
}
