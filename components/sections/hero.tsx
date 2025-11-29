"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, Shield, TrendingUp } from "lucide-react"
import Image from 'next/image'

export function Hero() {
  const [step, setStep] = useState<'url' | 'details' | 'success'>('url')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    website: '',
    name: '',
    email: '',
    goals: ''
  })

  // Entrance animation trigger
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
          phone: '', // Removed phone field for simplicity
          company: formData.website,
          message: formData.goals,
          service: 'Website Proposal Request',
          urgency: 'Standard',
        }),
      })

      if (response.ok) {
        setStep('success')
      } else {
        console.error('Failed to submit form')
        setStep('success')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStep('success')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetFlow = () => {
    setFormData({ website: '', name: '', email: '', goals: '' })
    setStep('url')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image with optimized overlay for conversions */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-analytics.webp"
          alt="Professional digital marketing analytics and data visualization dashboard"
          fill
          priority
          className="object-cover"
          quality={85}
          sizes="100vw"
        />
        {/* Gradient overlay using Tailwind primary colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-900/70"></div>
        {/* Additional depth layer */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="hero-content relative z-10 w-full">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Animated content wrapper */}
          <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Updated badge - more benefit-focused */}
            <div 
              className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-primary-700 shadow-lg border border-white/50"
              style={{ animationDelay: '0.1s' }}
            >
              <Sparkles className="h-4 w-4 text-accent-500" />
              <span>Trusted by 500+ Growing Businesses</span>
            </div>
            
            {/* Updated headline - more specific and benefit-focused */}
            <h1 
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ animationDelay: '0.2s' }}
            >
              Get <span className="text-accent-400">300%+ More Leads</span> with AI-Powered SEO & Web Design
            </h1>
            
            {/* Updated subheadline - clearer value proposition */}
            <p 
              className="mt-6 text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              style={{ animationDelay: '0.3s' }}
            >
              We build high-converting websites and implement data-driven SEO strategies that turn your website into a revenue-generating machine.
            </p>
            
            {/* Trust signals - enhanced design */}
            <div 
              className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="h-5 w-5 text-success-400" />
                <span className="text-sm font-medium text-white">340% Avg ROI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-success-400" />
                <span className="text-sm font-medium text-white">500+ Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="h-5 w-5 text-success-400" />
                <span className="text-sm font-medium text-white">Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Form section with staggered animation */}
          <div 
            className={`mt-10 max-w-2xl mx-auto w-full transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {step === 'url' && (
              <div className="space-y-5 animate-fade-in">
                <form onSubmit={handleWebsiteSubmit} className="flex flex-col sm:flex-row gap-3 bg-white/98 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/30">
                  <Input
                    type="text"
                    required
                    placeholder="Enter your website URL"
                    value={formData.website}
                    onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
                    className="h-14 flex-1 border-none bg-white text-secondary-900 placeholder:text-secondary-500 focus-visible:ring-0 text-base focus:bg-secondary-50 rounded-xl"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="sm:w-auto h-14 px-8 bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg hover:shadow-primary-600/30 transition-all duration-300 hover:scale-[1.02] rounded-xl group"
                  >
                    Get Free Proposal
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                <div className="text-center space-y-2">
                  <p className="text-xs text-white/80 flex items-center justify-center gap-2">
                    <Shield className="h-3.5 w-3.5" />
                    100% confidential • No spam, ever
                  </p>
                  <p className="text-sm text-white/90">
                    Don&apos;t have a site yet?{' '}
                    <Link href="/contact" className="font-semibold text-accent-300 hover:text-accent-200 underline underline-offset-2">
                      Start from scratch
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {step === 'details' && (
              <div className="relative bg-white rounded-2xl shadow-2xl border border-secondary-100 p-6 sm:p-8 animate-fade-in">
                {/* Progress indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-100 rounded-t-2xl overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between mb-6 pt-2">
                  <div>
                    <p className="font-semibold text-secondary-900">Almost there!</p>
                    <p className="text-sm text-secondary-500">Tell us how to reach you</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep('url')}
                    className="inline-flex items-center text-sm text-secondary-500 hover:text-secondary-700 transition-colors"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back
                  </button>
                </div>
                
                <form className="space-y-4" onSubmit={handleDetailsSubmit}>
                  {/* Simplified form - removed phone, combined layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                      className="h-12 bg-white text-secondary-900 placeholder:text-secondary-400 border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-xl"
                    />
                    <Input
                      type="email"
                      required
                      placeholder="Business email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      className="h-12 bg-white text-secondary-900 placeholder:text-secondary-400 border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-xl"
                    />
                  </div>
                  
                  {/* Website display - styled as info */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-secondary-50 rounded-xl border border-secondary-200">
                    <span className="text-sm text-secondary-500">Website:</span>
                    <span className="text-sm font-medium text-secondary-700 truncate">{formData.website}</span>
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="What are your main goals? (e.g., more leads, better rankings, new website)"
                      value={formData.goals}
                      onChange={(event) => setFormData((prev) => ({ ...prev, goals: event.target.value }))}
                      rows={3}
                      className="w-full rounded-xl border border-secondary-200 px-4 py-3 text-sm bg-white text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none"
                    />
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg hover:shadow-primary-600/30 transition-all duration-300 hover:scale-[1.01] rounded-xl group relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Get My Free Proposal
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                    <p className="text-xs text-center text-secondary-500 flex items-center justify-center gap-1.5">
                      <Shield className="h-3.5 w-3.5" />
                      Your information is secure and confidential
                    </p>
                  </div>
                </form>
              </div>
            )}

            {step === 'success' && (
              <div className="rounded-2xl bg-gradient-to-br from-success-50 to-success-100 border border-success-200 p-6 sm:p-8 shadow-lg animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-success-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-success-900">You&apos;re all set!</h3>
                    <p className="mt-2 text-success-800 leading-relaxed">
                      One of our specialists will reach out within 24 hours with your personalized proposal.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center justify-center px-4 py-2 bg-success-600 text-white font-medium rounded-lg hover:bg-success-700 transition-colors"
                      >
                        Schedule a Call Now
                      </Link>
                      <button 
                        onClick={resetFlow} 
                        className="inline-flex items-center justify-center px-4 py-2 border border-success-300 text-success-700 font-medium rounded-lg hover:bg-success-50 transition-colors"
                      >
                        Submit Another Request
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-success-700">
                      Questions? Email us at{' '}
                      <a href="mailto:hello@webvello.com" className="font-semibold underline">hello@webvello.com</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
