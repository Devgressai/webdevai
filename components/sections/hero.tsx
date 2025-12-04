"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowLeft, ArrowRight, CheckCircle, Star } from "lucide-react"
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

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWebsiteSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.website.trim()) return
    
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
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: '',
          company: formData.website,
          message: formData.goals,
          service: 'Website Proposal Request',
          urgency: 'Standard',
        }),
      })

      if (response.ok) {
        setStep('success')
      } else {
        setStep('success')
      }
    } catch {
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with modern gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-team-collaboration.webp"
          alt="Team collaboration"
          fill
          priority
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
        {/* Modern gradient - slate with subtle warm tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/85"></div>
        {/* Subtle color accent glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-rose-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-16 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left content */}
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Rating badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">Rated 5.0 by 500+ clients</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                We help you
                <br />
                <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  grow online
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-lg">
                SEO and web development that actually works. 
                We&apos;ve helped 500+ businesses increase traffic, 
                leads, and revenue.
              </p>
              
              {/* Key stats */}
              <div className="flex gap-8 mb-10">
                <div>
                  <p className="text-3xl font-bold text-white">340%</p>
                  <p className="text-white/50 text-sm">Avg. ROI</p>
                </div>
                <div className="w-px bg-white/20"></div>
                <div>
                  <p className="text-3xl font-bold text-white">$2.4M+</p>
                  <p className="text-white/50 text-sm">Revenue generated</p>
                </div>
                <div className="w-px bg-white/20"></div>
                <div>
                  <p className="text-3xl font-bold text-white">90 days</p>
                  <p className="text-white/50 text-sm">To first results</p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-base rounded-xl shadow-lg shadow-rose-500/25 transition-all hover:shadow-rose-500/40"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-14 px-8 border-white/20 text-white hover:bg-white/10 font-semibold text-base rounded-xl"
                  asChild
                >
                  <Link href="/case-studies">
                    See Our Work
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Form card */}
            <div className={`transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {step === 'url' && (
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Get a free growth plan</h2>
                  <p className="text-slate-600 mb-6">See exactly how we can help your business grow.</p>
                  
                  <form onSubmit={handleWebsiteSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your website</label>
                      <Input
                        type="text"
                        required
                        placeholder="yourwebsite.com"
                        value={formData.website}
                        onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
                        className="h-12 bg-slate-50 border-slate-200 text-slate-900 rounded-xl focus:border-rose-500 focus:ring-rose-500/20"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all"
                    >
                      Get My Free Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  
                  <p className="text-center text-sm text-slate-500 mt-4">
                    Free · No credit card · Results in 24 hours
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-sm text-slate-500 mb-3">Trusted by companies like</p>
                    <div className="flex gap-6 opacity-50">
                      <div className="h-6 w-20 bg-slate-200 rounded"></div>
                      <div className="h-6 w-16 bg-slate-200 rounded"></div>
                      <div className="h-6 w-24 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              )}

              {step === 'details' && (
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Almost there</h2>
                      <p className="text-slate-600 text-sm">Tell us how to reach you</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep('url')}
                      className="text-sm text-slate-400 hover:text-slate-600 transition-colors flex items-center"
                    >
                      <ArrowLeft className="mr-1 h-4 w-4" /> Back
                    </button>
                  </div>
                  
                  {/* Progress */}
                  <div className="h-1.5 bg-slate-100 rounded-full mb-6">
                    <div className="h-full w-2/3 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"></div>
                  </div>
                  
                  <form className="space-y-4" onSubmit={handleDetailsSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                        <Input
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                          className="h-12 bg-slate-50 border-slate-200 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <Input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                          className="h-12 bg-slate-50 border-slate-200 rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="p-3 bg-slate-50 rounded-xl text-sm text-slate-600">
                      Analyzing: <span className="font-medium text-slate-900">{formData.website}</span>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Goals <span className="text-slate-400">(optional)</span></label>
                      <textarea
                        placeholder="What do you want to achieve?"
                        value={formData.goals}
                        onChange={(event) => setFormData((prev) => ({ ...prev, goals: event.target.value }))}
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-rose-500"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Creating your plan...' : 'Get My Growth Plan'}
                    </Button>
                  </form>
                </div>
              )}

              {step === 'success' && (
                <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">You&apos;re all set!</h2>
                  <p className="text-slate-600 mb-6">
                    We&apos;re analyzing your website now. Expect your personalized growth plan within 24 hours.
                  </p>
                  <div className="flex gap-3">
                    <Link 
                      href="/contact" 
                      className="flex-1 h-12 inline-flex items-center justify-center bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl"
                    >
                      Book a Call
                    </Link>
                    <button 
                      onClick={resetFlow} 
                      className="flex-1 h-12 inline-flex items-center justify-center border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
