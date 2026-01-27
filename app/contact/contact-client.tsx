'use client'

import { useState, useRef } from "react"
import { Button } from '../../components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Zap, CheckCircle, AlertCircle, Star, TrendingUp, Award, Shield, Globe, Calendar, ArrowRight, Check } from 'lucide-react'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'
import Link from 'next/link'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(530) 553-8883",
    description: "Call us for immediate assistance",
    href: "tel:+15305538883"
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@webvello.com",
    description: "Send us an email anytime",
    href: "mailto:hello@webvello.com"
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Roseville, CA",
    description: "2281 Lava Ridge Ct, Roseville, CA 95661",
    href: "https://maps.google.com/?q=2281+Lava+Ridge+Ct,+Roseville,+CA+95661"
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Fri: 9AM-6PM PST",
    description: "We're here to help during business hours",
    href: null
  }
]

const services = [
  {
    name: "AI SEO Services",
    href: "/services/ai-seo",
    description: "Revolutionary AI-powered search optimization"
  },
  {
    name: "Local SEO",
    href: "/services/local-seo", 
    description: "Dominate local search results"
  },
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "Custom websites that convert"
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "User-centered design solutions"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content: "Web Vello transformed our online presence. Our organic traffic increased by 300% in just 6 months!",
    rating: 5,
    avatar: "/testimonials/sarah-johnson.jpg"
  },
  {
    name: "Michael Chen",
    company: "LocalBiz Solutions",
    role: "Founder",
    content: "Their local SEO strategies helped us dominate our market. We’re now the #1 result for all our target keywords.",
    rating: 5,
    avatar: "/testimonials/michael-chen.jpg"
  },
  {
    name: "Emily Rodriguez",
    company: "E-commerce Plus",
    role: "Marketing Director",
    content: "The custom website they built for us increased our conversion rate by 150%. Amazing results!",
    rating: 5,
    avatar: "/testimonials/emily-rodriguez.jpg"
  }
]

const faqs = [
  {
    question: "Why do you limit active partnerships?",
    answer: "We intentionally cap our roster at 12-15 simultaneous projects to ensure every client receives consistent senior attention. This structure allows us to maintain quality, avoid delegation to junior staff, and deliver thoughtful, strategic work rather than rushed execution."
  },
  {
    question: "What is your typical engagement investment?",
    answer: "Most partnerships begin at $10K/month for ongoing strategic services, or $50K+ for comprehensive development initiatives. We work with businesses that approach digital marketing as a core growth driver, not a discretionary expense."
  },
  {
    question: "How do you evaluate partnership fit?",
    answer: "We assess alignment based on business maturity, budget availability, growth goals, and strategic readiness. We work best with established companies or well-capitalized startups that have clear objectives and the resources to execute properly."
  },
  {
    question: "Do you offer project-based or ongoing support?",
    answer: "We offer both. Our deepest impact comes from long-term retainer relationships where we integrate as strategic partners. We also accept select high-value project engagements when scope, budget, and timing align with our capacity."
  },
  {
    question: "How is Web Vello structured differently?",
    answer: "We operate as a senior-led consultancy, not a traditional agency. There are no account coordinators or junior team members executing your work. You work directly with experienced strategists, developers, and marketers who have built and scaled businesses at scale."
  }
]

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setFieldErrors({})

    // Client-side validation
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) {
      errors.name = 'Full name is required'
    }
    if (!formData.email.trim()) {
      errors.email = 'Business email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    }
    if (!formData.service) {
      errors.service = 'Please select a service'
    }
    if (!formData.message.trim()) {
      errors.message = 'Please tell us about your business'
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setIsSubmitting(false)
      // Focus error summary after state update
      setTimeout(() => {
        errorSummaryRef.current?.focus()
      }, 0)
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      
      // Track successful form submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'Contact Form',
          event_label: 'Contact Page',
          value: formData.service
        })
      }
    } catch (error) {
      setSubmitStatus('error')
      // Focus error summary after state update
      setTimeout(() => {
        errorSummaryRef.current?.focus()
      }, 0)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb items={generateBreadcrumbs('/contact', { title: 'Contact' })} />
        </div>
      </div>

      {/* Hero Form Section - Above the Fold */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Value Proposition */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-sm font-medium mb-4 shadow-sm">
                  <Award className="h-4 w-4 mr-1" />
                  Strategic Partnerships
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                  Partner With a Senior-Led Team
                </h1>
                <p className="text-xl text-secondary-600 mb-6">
                  We maintain a focused roster of long-term partnerships to ensure every client receives dedicated senior attention. If you're building for sustainable growth, we'd like to learn about your business.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mt-1 shadow-sm">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary-900">Focused Client Capacity</h3>
                    <p className="text-secondary-600">We limit active projects to 12-15 partnerships for quality and senior involvement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mt-1 shadow-sm">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary-900">Senior-Level Execution</h3>
                    <p className="text-secondary-600">Your work is handled by experienced strategists, developers, and marketers—not junior staff</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mt-1 shadow-sm">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary-900">Proven, Sustainable Results</h3>
                    <p className="text-secondary-600">Our clients see 300%+ average growth through long-term, strategic execution</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 rounded-xl p-6 shadow-lg text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm font-semibold">4.9/5</span>
                  </div>
                  <span className="text-sm text-white/90">Verified Clients</span>
                </div>
                <p className="text-white/95 italic mb-3">
                  "Web Vello doesn't just deliver results—they set a new standard. Our organic traffic tripled, but more importantly, our revenue quadrupled."
                </p>
                <p className="text-sm text-white/80">— Sarah Johnson, CEO at TechStart Inc.</p>
              </div>

              {/* Qualification Statement */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
                <h3 className="font-semibold text-secondary-900 mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
                  Ideal Partnership Fit
                </h3>
                <p className="text-sm text-secondary-700">
                  We work best with established businesses and well-funded startups that have clear revenue goals, 
                  sufficient budget for strategic execution, and commitment to a long-term growth roadmap. 
                  Our engagements are designed for sustainable results, not quick-fix campaigns.
                </p>
              </div>

              {/* Contact Info Cards - Compact */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+15305538883"
                  className="flex items-center p-4 bg-white rounded-lg border-2 border-primary-200 hover:border-primary-600 hover:shadow-md transition-all group"
                >
                  <Phone className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-secondary-500">Direct line</p>
                    <p className="font-semibold text-secondary-900 text-sm">(530) 553-8883</p>
                  </div>
                </a>
                <a 
                  href="mailto:hello@webvello.com"
                  className="flex items-center p-4 bg-white rounded-lg border-2 border-primary-200 hover:border-primary-600 hover:shadow-md transition-all group"
                >
                  <Mail className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-secondary-500">Email us</p>
                    <p className="font-semibold text-secondary-900 text-sm">hello@webvello.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div id="contact-form" className="bg-white rounded-2xl shadow-xl border border-primary-100 p-6 sm:p-8 lg:sticky lg:top-8 order-1 lg:order-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">Start a Conversation</h2>
                <p className="text-sm sm:text-base text-secondary-600">Share your business goals with us. We'll respond within 48 hours to explore how we can help.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Error Summary */}
                {(submitStatus === 'error' || Object.keys(fieldErrors).length > 0) && (
                  <div
                    ref={errorSummaryRef}
                    role="alert"
                    aria-live="assertive"
                    tabIndex={-1}
                    className="p-4 bg-red-50 border-2 border-red-500 rounded-lg"
                  >
                    <h3 className="font-semibold text-red-900 text-base mb-2">
                      {submitStatus === 'error' 
                        ? 'Submission failed. Please fix the following:' 
                        : 'Please fix the following errors:'}
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      {submitStatus === 'error' && (
                        <li>
                          <a
                            href="#contact-form-error"
                            className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                            onClick={(e) => {
                              e.preventDefault()
                              document.getElementById('contact-form-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }}
                          >
                            Unable to submit form. Please email us directly at hello@webvello.com
                          </a>
                        </li>
                      )}
                      {Object.entries(fieldErrors).map(([field, error]) => (
                        <li key={field}>
                          <a
                            href={`#${field}`}
                            className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                            onClick={(e) => {
                              e.preventDefault()
                              document.getElementById(field)?.focus()
                            }}
                          >
                            {error}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-invalid={fieldErrors.name ? 'true' : 'false'}
                    aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    className={`w-full min-h-[56px] px-4 py-3 sm:py-3.5 text-base border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${
                      fieldErrors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="John Smith"
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-600">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-invalid={fieldErrors.email ? 'true' : 'false'}
                    aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    className={`w-full min-h-[56px] px-4 py-3 sm:py-3.5 text-base border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${
                      fieldErrors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="john@company.com"
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-600">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-secondary-900 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    aria-invalid={fieldErrors.phone ? 'true' : 'false'}
                    aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                    className={`w-full min-h-[56px] px-4 py-3 sm:py-3.5 text-base border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${
                      fieldErrors.phone ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {fieldErrors.phone && (
                    <p id="phone-error" className="mt-1.5 text-sm text-red-600">
                      {fieldErrors.phone}
                    </p>
                  )}
                  <p className="mt-1.5 text-xs text-secondary-500">We'll schedule a discovery call if there's a potential fit</p>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-secondary-900 mb-1.5">
                    What Are You Looking For? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    aria-invalid={fieldErrors.service ? 'true' : 'false'}
                    aria-describedby={fieldErrors.service ? 'service-error' : undefined}
                    className={`w-full min-h-[56px] px-4 py-3 sm:py-3.5 text-base border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%227%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[position:right_1rem_center] bg-no-repeat pr-10 ${
                      fieldErrors.service ? 'border-red-500' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Select your need</option>
                    <option value="ai-seo">Enterprise SEO Strategy</option>
                    <option value="local-seo">Local Market Domination</option>
                    <option value="web-development">Custom Development (100K+)</option>
                    <option value="ui-ux-design">Premium UI/UX Design</option>
                    <option value="digital-marketing">Full-Service Digital Marketing</option>
                    <option value="consulting">Strategic Consulting</option>
                  </select>
                  {fieldErrors.service && (
                    <p id="service-error" className="mt-1.5 text-sm text-red-600">
                      {fieldErrors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-1.5">
                    Tell Us About Your Business <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    aria-invalid={fieldErrors.message ? 'true' : 'false'}
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                    className={`w-full min-h-[160px] px-4 py-3 sm:py-3.5 text-base border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-y ${
                      fieldErrors.message ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Your website URL, current challenges, growth goals, and estimated budget. The more detail you share, the better we can assess fit and provide helpful insights."
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="mt-1.5 text-sm text-red-600">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div 
                    id="contact-form-success"
                    role="status"
                    aria-live="polite"
                    className="flex items-start p-4 bg-green-50 border-2 border-green-500 rounded-lg"
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-900 font-semibold text-base mb-1">Message Received</p>
                      <p className="text-green-700 text-sm leading-relaxed">Thank you for reaching out. We'll review your information and respond within 48 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div 
                    id="contact-form-error"
                    role="alert"
                    aria-live="assertive"
                    className="flex items-start p-4 bg-red-50 border-2 border-red-500 rounded-lg"
                  >
                    <AlertCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-900 font-semibold text-base mb-1">Submission Failed</p>
                      <p className="text-red-700 text-sm leading-relaxed">Please email us directly at <a href="mailto:hello@webvello.com" className="underline font-medium">hello@webvello.com</a></p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full min-h-[56px] bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                  disabled={isSubmitting}
                >
                  <span className="flex items-center justify-center whitespace-nowrap">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="mr-2 h-5 w-5 flex-shrink-0" />
                        <span className="whitespace-nowrap">Request a Consultation</span>
                      </>
                    )}
                  </span>
                </Button>
                
                <p className="text-xs text-secondary-500 text-center leading-relaxed">
                  Your information is confidential. We'll use it only to assess partnership fit and respond to your inquiry. No spam, no unwanted follow-ups.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">How We Work Differently</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Our approach prioritizes long-term partnership quality over volume—resulting in better outcomes for every client we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Senior Team Standards</h3>
              <p className="text-secondary-600">Every project is led and executed by senior strategists, developers, and marketers with 10+ years of experience in their discipline.</p>
            </div>
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Limited Active Projects</h3>
              <p className="text-secondary-600">We cap our roster at 12-15 simultaneous partnerships to ensure dedicated attention, thoughtful strategy, and consistent senior involvement.</p>
            </div>
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mx-auto mb-4 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Long-Term Mindset</h3>
              <p className="text-secondary-600">We build for sustainable, compounding growth. Our average client partnership spans 18+ months with 300%+ average performance improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Enterprise Services</h2>
            <p className="text-secondary-600">Premium solutions for businesses serious about digital dominance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm text-secondary-600">{service.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Client Results</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We let our work speak for itself. Here's what our select clients have achieved.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-secondary-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Common Questions</h2>
            <p className="text-secondary-600">
              What to expect when considering a partnership with Web Vello.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{faq.question}</h3>
                <p className="text-secondary-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore a Partnership?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            If you're committed to sustainable growth and seeking a strategic partner, we'd like to hear about your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                const formElement = document.getElementById('contact-form')
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              }}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="tel:+15305538883">
                <Phone className="mr-2 h-5 w-5" />
                (530) 553-8883
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-secondary-900 mb-1">Headquarters</h3>
              <p className="text-secondary-600 text-sm">2281 Lava Ridge Ct</p>
              <p className="text-secondary-600 text-sm">Roseville, CA 95661</p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-secondary-900 mb-1">Business Hours</h3>
              <p className="text-secondary-600 text-sm">Monday - Friday</p>
              <p className="text-secondary-600 text-sm">9:00 AM - 6:00 PM PST</p>
            </div>
            <div>
              <Globe className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-secondary-900 mb-1">Nationwide Service</h3>
              <p className="text-secondary-600 text-sm">Elite partnerships</p>
              <p className="text-secondary-600 text-sm">Coast to coast</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
