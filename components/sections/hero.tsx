"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowLeft, ArrowRight, CheckCircle, Award, TrendingUp, Users } from "lucide-react"
import Image from 'next/image'

export function Hero() {
  const [step, setStep] = useState<'url' | 'details' | 'success'>('url')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    website: '',
    name: '',
    email: '',
    phone: '',
    goals: ''
  })

  // Entrance animation
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWebsiteSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.website.trim()) return
    
    // Normalize the website input to ensure it has a proper URL format
    let normalizedWebsite = formData.website.trim()
    if (!normalizedWebsite.startsWith('http://') && !normalizedWebsite.startsWith('https://')) {
      normalizedWebsite = 'https://' + normalizedWebsite
    }
    
    setFormData(prev => ({ ...prev, website: normalizedWebsite }))
    setStep('details')
  }

  const handleDetailsSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.name || !formData.email) return

    try {
      setIsSubmitting(true)
      
      // Send to contact API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.website, // Using website as company
          message: formData.goals,
          service: 'Website Proposal Request',
          urgency: 'Standard',
        }),
      })

      if (response.ok) {
        setStep('success')
      } else {
        console.error('Failed to submit form')
        // Still show success to user even if email fails
        setStep('success')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Still show success to user even if email fails
      setStep('success')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetFlow = () => {
    setFormData({ website: '', name: '', email: '', phone: '', goals: '' })
    setStep('url')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Elements - BOLDER COLORS using design system */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Clean white background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* BOLDER professional overlays - increased opacity for visibility */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-500/20 via-primary-600/15 to-accent-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary-500/25 to-primary-600/20 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-accent-500/25 to-accent-600/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        
        {/* BOLDER geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-accent-500/20 to-accent-600/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-primary-600/20 to-accent-500/20 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>

      <div className="hero-content">
        <div className="mx-auto max-w-4xl px-4 -mt-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Badge - BOLDER with gradient */}
            <p className="inline-block rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-200/50 backdrop-blur-sm px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-slate-800 shadow-md animate-fade-in">
              High-Impact Web & SEO Growth Programs
            </p>
            
            {/* Enhanced Headline - LARGER, BOLDER */}
            <h1 className={`mt-8 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight animate-slide-up`} style={{ animationDelay: '0.2s' }}>
              Transform your website into a lead generation machine with{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x bg-[length:200%_auto]">
                Web Vello
              </span>
            </h1>
            
            {/* Description */}
            <p className={`mt-8 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-slide-up`} style={{ animationDelay: '0.4s' }}>
              Your partner for custom website design, development, SEO, GEO, and AI-driven optimization campaigns that win demanding markets.
            </p>

            {/* Trust Indicators - NEW */}
            <div className={`mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-700 animate-fade-in`} style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-primary-100">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="font-bold text-slate-900">500+ Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-accent-100">
                <TrendingUp className="w-5 h-5 text-accent-500" />
                <span className="font-bold text-slate-900">300%+ Growth</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-success-100">
                <Award className="w-5 h-5 text-success-500" />
                <span className="font-bold text-slate-900">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className={`mt-12 max-w-2xl mx-auto w-full animate-slide-up`} style={{ animationDelay: '0.8s' }}>
            {step === 'url' && (
              <div className="space-y-6">
                <form onSubmit={handleWebsiteSubmit} className="flex flex-col sm:flex-row gap-3 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border-2 border-primary-100 hover:border-primary-200 transition-all duration-300">
                  <Input
                    type="text"
                    required
                    placeholder="Enter your website URL"
                    value={formData.website}
                    onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
                    className="h-14 flex-1 border-none bg-white text-slate-900 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-primary-500/20 text-base focus:bg-slate-50 transition-all duration-200"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="sm:w-auto h-14 px-10 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Get My Proposal
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
                <p className="text-center text-sm text-slate-600">
                  Don&apos;t have a site?{' '}
                  <Link href="/contact" className="font-bold text-primary-600 hover:text-accent-600 underline transition-colors duration-200">
                    Click here
                  </Link>
                </p>
              </div>
            )}

            {step === 'details' && (
              <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-primary-100 p-6 sm:p-8 animate-zoom-in">
                <div className="flex items-center justify-between mb-6">
                  <p className="font-bold text-lg text-slate-900">Almost there—tell us how to reach you.</p>
                  <button
                    type="button"
                    onClick={() => setStep('url')}
                    className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back
                  </button>
                </div>
                <form className="space-y-5" onSubmit={handleDetailsSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                      className="h-14 bg-white text-slate-900 placeholder:text-slate-500 border-2 border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    />
                    <Input
                      type="email"
                      required
                      placeholder="Business email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      className="h-14 bg-white text-slate-900 placeholder:text-slate-500 border-2 border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number (optional)"
                      value={formData.phone}
                      onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                      className="h-14 bg-white text-slate-900 placeholder:text-slate-500 border-2 border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    />
                    <Input
                      type="url"
                      readOnly
                      value={formData.website}
                      className="h-14 bg-primary-50 border-2 border-primary-200 text-slate-700 font-medium"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="What are you looking for? (goals, challenges, timeline)"
                      value={formData.goals}
                      onChange={(event) => setFormData((prev) => ({ ...prev, goals: event.target.value }))}
                      rows={4}
                      className="w-full rounded-2xl border-2 border-slate-300 px-4 py-3 text-base bg-white text-slate-900 placeholder:text-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting…
                      </span>
                    ) : (
                      <>
                        Send my proposal
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}

            {step === 'success' && (
              <div className="rounded-3xl bg-gradient-to-br from-success-50 to-success-100 border-2 border-success-200 p-8 text-success-900 shadow-2xl animate-bounce-in">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-success-600 animate-zoom-in" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Thank you! We&apos;ll be in touch shortly.</h3>
                    <p className="text-base leading-relaxed text-success-800">
                      One of our specialists will reach out with a tailored proposal. Need to talk sooner?{' '}
                      <Link href="/contact" className="underline font-bold text-success-700 hover:text-success-800 transition-colors">
                        Schedule a strategy call
                      </Link>
                      {' '}or email us at{' '}
                      <a href="mailto:hello@webvello.com" className="underline font-semibold hover:text-success-800 transition-colors">hello@webvello.com</a>.
                    </p>
                    <div className="mt-6">
                      <Button 
                        variant="outline" 
                        onClick={resetFlow} 
                        className="text-success-700 border-2 border-success-300 hover:bg-success-50 font-semibold transition-all duration-200 hover:scale-105"
                      >
                        Start another request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats section removed per request */}
      </div>
    </section>
  )
}
