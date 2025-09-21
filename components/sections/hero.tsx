"use client"

import { useState } from 'react'
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowLeft, ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap } from "lucide-react"
import Image from 'next/image'
// import { useConversionTracking } from "../../hooks/useConversionTracking"
// import ScrollTracker from "../analytics/scroll-tracker"

const stats = [
  { id: 1, name: "Projects Completed", value: "500+", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
  { id: 2, name: "Happy Clients", value: "500+", icon: Users, color: "from-slate-600 to-slate-700" },
  { id: 3, name: "ROI Average", value: "1,200%", icon: Zap, color: "from-indigo-500 to-indigo-600" },
]

export function Hero() {
  const [step, setStep] = useState<'url' | 'details' | 'success'>('url')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    website: '',
    name: '',
    email: '',
    phone: '',
    goals: ''
  })

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
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-bg">
        <Image 
          src="/images/hero-night-orbit.webp" 
          alt="" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        {/* Dark overlay for text readability */}
        <div className="hero-overlay"></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-blue-800">
        {/* Subtle professional overlays */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-700/20 via-blue-800/20 to-blue-900/20 opacity-60"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/15 to-blue-700/15 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-blue-700/15 to-blue-800/15 blur-3xl"></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-700/10 to-blue-800/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-full blur-2xl"></div>
      </div>

      <div className="hero-content">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <p className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/80">
              High-Impact Web & SEO Growth Programs
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Transform your website into a lead generation machine with <span className="text-blue-400">Web Vello</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto">
              Your partner for custom website design, development, SEO, GEO, and AI-driven optimization campaigns that win demanding markets.
            </p>
          </div>

          <div className="mt-10 max-w-2xl mx-auto w-full">
            {step === 'url' && (
              <div className="space-y-6">
                <form onSubmit={handleWebsiteSubmit} className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20">
                  <Input
                    type="text"
                    required
                    placeholder="Enter your website URL"
                    value={formData.website}
                    onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
                    className="h-12 flex-1 border-none bg-white/20 text-white placeholder:text-white/60 focus-visible:ring-0 text-base focus:bg-white/30"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="sm:w-auto h-12 px-8 bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-lg"
                  >
                    Get My Proposal
                  </Button>
                </form>
                <p className="text-center text-sm text-white/80">
                  Don’t have a site?{' '}
                  <Link href="/contact" className="font-semibold text-white hover:text-blue-200 underline">
                    Click here
                  </Link>
                </p>
              </div>
            )}

            {step === 'details' && (
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-slate-900">Almost there—tell us how to reach you.</p>
                  <button
                    type="button"
                    onClick={() => setStep('url')}
                    className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back
                  </button>
                </div>
                <form className="space-y-4" onSubmit={handleDetailsSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                      className="h-12 bg-white text-slate-900 placeholder:text-slate-500 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                    <Input
                      type="email"
                      required
                      placeholder="Business email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      className="h-12 bg-white text-slate-900 placeholder:text-slate-500 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number (optional)"
                      value={formData.phone}
                      onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                      className="h-12 bg-white text-slate-900 placeholder:text-slate-500 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                    <Input
                      type="url"
                      readOnly
                      value={formData.website}
                      className="h-12 bg-slate-50 border-slate-200 text-slate-700"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="What are you looking for? (goals, challenges, timeline)"
                      value={formData.goals}
                      onChange={(event) => setFormData((prev) => ({ ...prev, goals: event.target.value }))}
                      rows={4}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm bg-white text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting…' : 'Send my proposal'}
                  </Button>
                </form>
              </div>
            )}

            {step === 'success' && (
              <div className="rounded-3xl bg-emerald-100 border border-emerald-200 p-6 text-emerald-900 shadow-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-1 text-emerald-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Thank you! We’ll be in touch shortly.</h3>
                    <p className="mt-2 text-sm leading-relaxed">
                      One of our specialists will reach out with a tailored proposal. Need to talk sooner?{' '}
                      <Link href="/contact" className="underline font-semibold text-emerald-700">
                        Schedule a strategy call
                      </Link>
                      {' '}or email us at{' '}
                      <a href="mailto:hello@webvello.com" className="underline">hello@webvello.com</a>.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" onClick={resetFlow} className="text-emerald-700 border-emerald-300">
                        Start another request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-4">
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

        
      </div>
    </section>
  )
}
