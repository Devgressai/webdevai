'use client'

import { useState, useEffect, FormEvent } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle, ChevronDown, Star, Users, TrendingUp, Zap, Globe, Target } from 'lucide-react'
import { normalizeUrl, validateUrl } from '@/lib/url-utils'
import Link from 'next/link'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

const benefits = [
  {
    icon: Target,
    title: 'SEO Visibility Opportunities',
    description: 'Identify high-value keywords and ranking opportunities specific to your industry and location.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Improvements',
    description: 'Actionable recommendations to increase conversion rates and maximize your website\'s revenue potential.',
  },
  {
    icon: Globe,
    title: 'AI Search Readiness (AEO/GEO)',
    description: 'Optimize for ChatGPT, Perplexity, and Google AI Overviews to capture the next generation of search traffic.',
  },
  {
    icon: Zap,
    title: 'Quick Wins + 30-Day Plan',
    description: 'Immediate actionable steps plus a strategic 30-day roadmap to accelerate your growth.',
  },
]

const goals = [
  'More leads',
  'More sales',
  'Rank locally',
  'Improve conversions',
  'Rebrand/Redesign',
]

const budgets = [
  '< $2k/mo',
  '$2k–$5k',
  '$5k–$10k',
  '$10k+',
]

const faqs = [
  {
    question: 'Is this really free?',
    answer: 'Yes, absolutely! Your personalized growth plan is completely free with no obligation. We provide this as a value-add to help businesses understand their growth potential. There\'s no credit card required and no hidden fees.',
  },
  {
    question: 'How fast will I get it?',
    answer: 'You\'ll receive your personalized growth plan within 24-48 hours via email. We analyze your website, industry, and goals to create a comprehensive plan tailored specifically to your business needs.',
  },
  {
    question: 'Do you need access to my site?',
    answer: 'No, we don\'t need any access to your website. We analyze publicly available information including your current SEO performance, website structure, and competitive landscape to create your growth plan.',
  },
  {
    question: 'Do you work with my industry?',
    answer: 'Yes! We work with businesses across 50+ industries including healthcare, legal, finance, e-commerce, B2B services, and more. Our strategies are tailored to your specific industry and market.',
  },
  {
    question: 'What if I already have an agency?',
    answer: 'No problem! Our growth plan can complement your existing agency relationship. Many businesses use our insights to enhance their current marketing efforts or evaluate new opportunities.',
  },
]

export function GrowthPlanPageClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [website, setWebsite] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [goal, setGoal] = useState('')
  const [budget, setBudget] = useState('')
  const [consent, setConsent] = useState(false)
  const [company, setCompany] = useState('') // Honeypot field
  
  // UTM parameters
  const [utmParams, setUtmParams] = useState<{
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_term?: string
    utm_content?: string
  }>({})
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Prefill website from query params or localStorage
  useEffect(() => {
    const siteParam = searchParams.get('site')
    let siteUrl = ''

    if (siteParam) {
      try {
        siteUrl = decodeURIComponent(siteParam)
      } catch {
        siteUrl = siteParam
      }
    } else if (typeof window !== 'undefined') {
      try {
        siteUrl = localStorage.getItem('webvello_site') || ''
      } catch {
        // localStorage not available
      }
    }

    if (siteUrl && validateUrl(siteUrl)) {
      setWebsite(normalizeUrl(siteUrl))
      
      // Smooth scroll to form if site param exists
      setTimeout(() => {
        const formElement = document.getElementById('growth-plan-form')
        if (formElement) {
          formElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 300) // Small delay to ensure page is rendered
    }

    // Capture UTM parameters from URL
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const utm: typeof utmParams = {}
      
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmCampaign = urlParams.get('utm_campaign')
      const utmTerm = urlParams.get('utm_term')
      const utmContent = urlParams.get('utm_content')
      
      if (utmSource) utm.utm_source = utmSource
      if (utmMedium) utm.utm_medium = utmMedium
      if (utmCampaign) utm.utm_campaign = utmCampaign
      if (utmTerm) utm.utm_term = utmTerm
      if (utmContent) utm.utm_content = utmContent
      
      if (Object.keys(utm).length > 0) {
        setUtmParams(utm)
      }
    }
  }, [searchParams])

  // Track page view (only once on mount)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const eventData: any = {
          event: 'growth_plan_view',
          website: website || 'not_provided',
          ...utmParams,
        }

        if (window.dataLayer) {
          window.dataLayer.push(eventData)
        }

        if (window.gtag) {
          window.gtag('event', 'growth_plan_view', {
            event_category: 'lead_generation',
            event_label: 'growth_plan_page',
            website: website || 'not_provided',
            ...utmParams,
          })
        }
      } catch (err) {
        // Analytics not available - fail silently
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only track once on mount

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!website.trim()) {
      newErrors.website = 'Website URL is required'
    } else if (!validateUrl(website)) {
      newErrors.website = 'Please enter a valid website URL'
    }

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/.+@.+\..+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!goal) {
      newErrors.goal = 'Please select a goal'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const normalizedWebsite = normalizeUrl(website)

    try {
      const response = await fetch('/api/growth-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          website: normalizedWebsite,
          phone: phone.trim() || undefined,
          goal,
          budget: budget || undefined,
          consent,
          company: company.trim(), // Honeypot field
          source: 'growth-plan',
          utmSource: utmParams.utm_source,
          utmMedium: utmParams.utm_medium,
          utmCampaign: utmParams.utm_campaign,
          utmTerm: utmParams.utm_term,
          utmContent: utmParams.utm_content,
        }),
      })

      const data = await response.json()

      if (data.ok) {
        // Store email in localStorage
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem('webvello_lead_email', email.trim())
          } catch (err) {
            // localStorage not available or quota exceeded - fail silently
          }
        }

        // Track success with UTM params
        if (typeof window !== 'undefined') {
          try {
            const eventData: any = {
              event: 'growth_plan_submit_success',
              website: normalizedWebsite,
              goal,
              has_budget: !!budget,
              has_phone: !!phone,
              ...utmParams,
            }

            if (window.dataLayer) {
              window.dataLayer.push(eventData)
            }

            if (window.gtag) {
              window.gtag('event', 'growth_plan_submit_success', {
                event_category: 'lead_generation',
                event_label: 'growth_plan_form',
                website: normalizedWebsite,
                goal,
                has_budget: !!budget,
                has_phone: !!phone,
                ...utmParams,
              })
            }
          } catch (err) {
            // Analytics not available - fail silently
          }
        }

        setIsSuccess(true)
      } else {
        setErrors({ submit: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Your growth plan request has been received.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
              <h2 className="font-semibold text-secondary-900 mb-3">What happens next?</h2>
              <ul className="space-y-2 text-secondary-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>We'll analyze your website and business goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You'll receive your personalized growth plan within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Our team will follow up to discuss implementation</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                asChild
              >
                <Link href="/contact">Book a Call</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Extract domain for display
  const displayDomain = website ? (() => {
    try {
      const url = new URL(website.startsWith('http') ? website : `https://${website}`)
      return url.hostname.replace('www.', '')
    } catch {
      return website.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
    }
  })() : ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header / Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Your Free Growth Plan
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Tell us a bit about your business and we'll send a tailored plan for{' '}
            {displayDomain ? (
              <span className="font-semibold text-blue-300">{displayDomain}</span>
            ) : (
              <span className="font-semibold text-blue-300">your website</span>
            )}
            .
          </p>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 text-center mb-12">
            What You'll Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Card */}
      <section id="growth-plan-form" className="py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                <label htmlFor="company">Company (leave blank)</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Website URL */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-secondary-700 mb-2">
                  Website URL <span className="text-red-500">*</span>
                </label>
                <Input
                  id="website"
                  type="text"
                  inputMode="url"
                  value={website}
                  onChange={(e) => {
                    setWebsite(e.target.value)
                    setErrors({ ...errors, website: '' })
                  }}
                  className={errors.website ? 'border-red-500' : ''}
                  aria-invalid={errors.website ? 'true' : 'false'}
                  aria-describedby={errors.website ? 'website-error' : 'website-hint'}
                />
                {errors.website ? (
                  <p id="website-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.website}
                  </p>
                ) : (
                  <p id="website-hint" className="mt-1 text-xs text-secondary-500">
                    Example: yourdomain.com or https://www.yourdomain.com
                  </p>
                )}
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    setErrors({ ...errors, name: '' })
                  }}
                  className={errors.name ? 'border-red-500' : ''}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setErrors({ ...errors, email: '' })
                  }}
                  className={errors.email ? 'border-red-500' : ''}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone <span className="text-secondary-500 text-xs">(optional)</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Goal */}
              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-secondary-700 mb-2">
                  Primary Goal <span className="text-red-500">*</span>
                </label>
                <select
                  id="goal"
                  value={goal}
                  onChange={(e) => {
                    setGoal(e.target.value)
                    setErrors({ ...errors, goal: '' })
                  }}
                  className={`
                    flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
                    ring-offset-background focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-ring focus-visible:ring-offset-2
                    ${errors.goal ? 'border-red-500' : ''}
                  `}
                  aria-invalid={errors.goal ? 'true' : 'false'}
                  aria-describedby={errors.goal ? 'goal-error' : undefined}
                >
                  <option value="">Select a goal...</option>
                  {goals.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                {errors.goal && (
                  <p id="goal-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.goal}
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                  Monthly Budget <span className="text-secondary-500 text-xs">(optional)</span>
                </label>
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select budget range...</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Consent */}
              <div className="flex items-start">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="consent" className="ml-3 text-sm text-secondary-600">
                  I agree to receive communications from WebVello.
                </label>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-2 text-xs text-secondary-500 pt-2">
                <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                <span>We never share your info.</span>
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-600" role="alert">
                    {errors.submit}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-lg font-semibold py-6"
              >
                {isSubmitting ? 'Sending...' : 'Send My Growth Plan'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust / Proof Strip */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-primary-600" />
              <span className="text-lg font-semibold text-secondary-900">500+ businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-lg font-semibold text-secondary-900">4.9/5 rating</span>
            </div>
            <div className="text-secondary-600 italic">
              "Best investment we've made this year" — Jennifer L.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-secondary-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-secondary-700 leading-relaxed text-base lg:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

