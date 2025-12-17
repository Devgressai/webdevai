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

// CTA Button Text Variants
const CTA_VARIANTS = {
  a: 'Get Free Growth Plan',
  b: 'Get Free Website Growth Audit',
  c: 'Get My Free Proposal',
}

// Microcopy Variants
const MICROCOPY_VARIANTS = {
  a: 'Instant SEO + conversion opportunity scan. No obligation.',
  b: 'See quick wins we'd prioritize for your site.',
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
  
  // Get A/B test variants
  const ctaVariant = getVariant('hero_cta_button')
  const microcopyVariant = getVariant('hero_microcopy')
  
  // Track variant views
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

  const trackGrowthPlanSubmit = (site: string, valid: boolean) => {
    // Track via dataLayer (Google Tag Manager)
    if (typeof window !== 'undefined') {
      try {
        // Push to dataLayer if available
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'hero_growth_plan_submit',
            site,
            valid,
          })
        }

        // Also track via gtag if available
        if (window.gtag) {
          window.gtag('event', 'hero_growth_plan_submit', {
            event_category: 'lead_generation',
            event_label: 'hero_growth_plan',
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
      trackGrowthPlanSubmit(trimmedUrl, false)
      return
    }

    // Normalize URL
    const normalizedUrl = normalizeUrl(trimmedUrl)
    
    // Track valid submission
    trackGrowthPlanSubmit(normalizedUrl, true)

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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900">
      {/* <ScrollTracker /> */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2070&h=1200&fit=crop&crop=center')"
          }}
        ></div>
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/30"></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle professional overlays */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-slate-500/5 to-indigo-500/5 opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/8 to-indigo-600/8 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-slate-600/8 to-gray-600/8 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-600/8 to-blue-600/8 blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-slate-600/10 to-gray-600/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white ring-2 ring-inset ring-white/20 mb-6 sm:mb-8 shadow-2xl">
            <Star className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-white" />
            <span className="hidden sm:inline">Trusted by 500+ businesses nationwide</span>
            <span className="sm:hidden">500+ businesses trust us</span>
          </div>

          {/* Slogan */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-white">
              <span className="text-white">Design</span>
              <span className="text-white/70 mx-2">•</span>
              <span className="text-white">Develop</span>
              <span className="text-white/70 mx-2">•</span>
              <span className="text-white">Dominate</span>
            </h2>
          </div>

          {/* Main H1 Heading for SEO */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Professional Digital Marketing Services
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto">
            Webvello provides AI-powered SEO, conversion-focused web development, and digital marketing strategies that increase organic traffic by 300%+ and deliver measurable business results.
          </p>

          {/* Growth Plan URL Entry Bar */}
          <form onSubmit={handleUrlSubmit} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="flex-1">
                <label htmlFor="website-url" className="sr-only">
                  Enter your website URL
                </label>
                <Input
                  id="website-url"
                  type="text"
                  inputMode="url"
                  placeholder="Enter your website (e.g., https://yourdomain.com)"
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
                    {CTA_VARIANTS[ctaVariant.variant]}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm text-white/80 text-center">
                {MICROCOPY_VARIANTS[microcopyVariant.variant]}
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
                Book a Call
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

        {/* Stats Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-3 group">
                <div className={`mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <dt className="text-sm sm:text-base leading-7 text-white/80">{stat.name}</dt>
                <dd className="order-first text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Social Proof */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-6 lg:p-8 shadow-2xl ring-1 ring-white/20 border border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-1 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">4.9/5 from 200+ reviews</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review) => (
                <div key={review.id} className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mb-1">"{review.text}"</p>
                  <p className="text-xs font-medium text-white/90">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
