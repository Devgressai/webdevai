'use client'

import { useState } from "react"
import { Button } from '../../components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Zap, CheckCircle, AlertCircle, Star, TrendingUp, Award, Shield, Globe, Calendar, ArrowRight, Check } from 'lucide-react'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'
import Link from 'next/link'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "737-888-5723",
    description: "Call us for immediate assistance",
    href: "tel:+17378885723"
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
    question: "Why do you limit your client roster?",
    answer: "Quality over quantity. We maintain a roster of 12-15 active partnerships to ensure each client receives dedicated attention from our senior team. This approach has proven to deliver superior results compared to agencies juggling dozens of clients."
  },
  {
    question: "What's your typical project investment range?",
    answer: "Our partnerships typically start at $10K/month for ongoing services or $50K+ for comprehensive development projects. We work with businesses that view digital marketing as a strategic investment, not an expense."
  },
  {
    question: "How selective is your application process?",
    answer: "Very. We review each application carefully and only partner with businesses that align with our standards and have realistic growth goals. We look for established businesses or well-funded startups with clear vision and adequate resources."
  },
  {
    question: "Do you offer ongoing support or one-time projects?",
    answer: "Both. Our most successful partnerships are ongoing retainer relationships where we become an extension of your team. We also take on select high-value development projects for the right clients."
  },
  {
    question: "What makes Web Vello different from other agencies?",
    answer: "We're not an agency—we're a boutique consultancy. No account managers or junior staff handling your work. You get direct access to senior strategists, developers, and marketers who have built and scaled multiple successful businesses."
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

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
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb items={generateBreadcrumbs('page', { title: 'Contact' })} />
        </div>
      </div>

      {/* Hero Form Section - Above the Fold */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Value Proposition */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-sm font-medium mb-4 shadow-sm">
                  <Award className="h-4 w-4 mr-1" />
                  Selective Client Partnerships
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                  We Don't Work With Everyone
                </h1>
                <p className="text-xl text-secondary-600 mb-6">
                  Our elite development and marketing team carefully selects partnerships with businesses ready for exponential growth. If you're serious about dominating your market, let's talk.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mt-1 shadow-sm">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary-900">Selective Partnerships</h3>
                    <p className="text-secondary-600">We only work with 12-15 clients at a time to ensure excellence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mt-1 shadow-sm">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary-900">Elite Expertise</h3>
                    <p className="text-secondary-600">Senior-level strategists, developers, and marketers only</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mt-1 shadow-sm">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary-900">Proven Performance</h3>
                    <p className="text-secondary-600">300%+ average growth - our clients outperform their competitors</p>
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
                  Who We Work With
                </h3>
                <p className="text-sm text-secondary-700">
                  We partner with established businesses and ambitious startups that have clear growth goals, 
                  adequate marketing budgets, and are ready to implement aggressive strategies. If you're looking 
                  for quick fixes or budget solutions, we're likely not the right fit.
                </p>
              </div>

              {/* Contact Info Cards - Compact */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+17378885723"
                  className="flex items-center p-4 bg-white rounded-lg border-2 border-primary-200 hover:border-primary-600 hover:shadow-md transition-all group"
                >
                  <Phone className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-secondary-500">Direct line</p>
                    <p className="font-semibold text-secondary-900 text-sm">737-888-5723</p>
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
            <div id="contact-form" className="bg-white rounded-2xl shadow-xl border border-primary-100 p-8 lg:sticky lg:top-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">Apply for Partnership</h2>
                <p className="text-secondary-600">Tell us about your business. We'll review and respond within 48 hours if we're a good fit.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="John Smith"
                  />
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="john@company.com"
                  />
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="(555) 123-4567"
                  />
                  <p className="mt-1.5 text-xs text-secondary-500">For qualified leads, we'll schedule a strategy call</p>
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  >
                    <option value="">Select your need</option>
                    <option value="ai-seo">Enterprise SEO Strategy</option>
                    <option value="local-seo">Local Market Domination</option>
                    <option value="web-development">Custom Development (100K+)</option>
                    <option value="ui-ux-design">Premium UI/UX Design</option>
                    <option value="digital-marketing">Full-Service Digital Marketing</option>
                    <option value="consulting">Strategic Consulting</option>
                  </select>
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
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="Your website URL, current challenges, goals, and approximate budget range. Be specific—this helps us determine if we're a good fit."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-green-900 text-sm font-semibold">Application Received</p>
                      <p className="text-green-700 text-xs mt-1">We'll review your information and respond within 48 hours if we're a good match.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                    <p className="text-red-800 text-sm">Submission failed. Please email us directly at hello@webvello.com</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree that we may contact you regarding potential partnership opportunities.
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
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">What Sets Us Apart</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We're not for everyone. We're for businesses that demand excellence and are ready to invest in their success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Elite Standards</h3>
              <p className="text-secondary-600">We maintain strict quality standards. Only senior-level team members work on client projects—no junior developers or interns.</p>
            </div>
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Limited Partnerships</h3>
              <p className="text-secondary-600">We cap our client roster at 12-15 active partnerships. This ensures each client receives our full attention and resources.</p>
            </div>
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mx-auto mb-4 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Results-Driven</h3>
              <p className="text-secondary-600">Our clients average 300%+ growth because we don't take on projects we can't deliver exceptional results for.</p>
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
              Understanding our selective approach and what it means for potential partners.
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
            Ready to Dominate Your Market?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            If you're serious about growth and have the resources to invest in excellence, let's discuss your vision.
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
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="tel:+17378885723">
                <Phone className="mr-2 h-5 w-5" />
                737-888-5723
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
  )
}
