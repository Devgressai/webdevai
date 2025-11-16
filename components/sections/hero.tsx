"use client"

import { useState } from 'react'
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Image from 'next/image'

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
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Elements - Google-inspired color scheme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Clean white background like Google */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle professional overlays with Google colors */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#4285f4]/5 via-[#34a853]/5 to-[#ea4335]/5 opacity-60"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#4285f4]/10 to-[#34a853]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-[#ea4335]/10 to-[#fbbc05]/10 blur-3xl"></div>
        
        {/* Subtle geometric shapes with Google colors */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#4285f4]/10 to-[#34a853]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#ea4335]/10 to-[#fbbc05]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#34a853]/10 to-[#4285f4]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="hero-content">
        <div className="mx-auto max-w-4xl px-4 -mt-16">
          <div className="text-center">
            <p className="inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
              High-Impact Web & SEO Growth Programs
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Transform your website into a lead generation machine with <span className="text-primary-600">Web Vello</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Your partner for custom website design, development, SEO, GEO, and AI-driven optimization campaigns that win demanding markets.
            </p>
          </div>

          <div className="mt-10 max-w-2xl mx-auto w-full">
            {step === 'url' && (
              <div className="space-y-6">
                <form onSubmit={handleWebsiteSubmit} className="flex flex-col sm:flex-row gap-3 bg-slate-50 rounded-2xl p-2 shadow-xl border border-slate-200">
                  <Input
                    type="text"
                    required
                    placeholder="Enter your website URL"
                    value={formData.website}
                    onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
                    className="h-12 flex-1 border-none bg-white text-slate-900 placeholder:text-slate-500 focus-visible:ring-0 text-base focus:bg-slate-50"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="sm:w-auto h-12 px-8 bg-[#4285f4] hover:bg-[#3367d6] text-white font-semibold shadow-lg hover:shadow-[#4285f4]/25 transition-all duration-300"
                  >
                    Get My Proposal
                  </Button>
                </form>
                <p className="text-center text-sm text-slate-600">
                  Don&apos;t have a site?{' '}
                  <Link href="/contact" className="font-semibold text-[#4285f4] hover:text-[#ea4335] underline">
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
                      className="h-12 bg-white text-slate-900 placeholder:text-slate-500 border-slate-300 focus:border-[#4285f4] focus:ring-2 focus:ring-[#4285f4]/20"
                    />
                    <Input
                      type="email"
                      required
                      placeholder="Business email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      className="h-12 bg-white text-slate-900 placeholder:text-slate-500 border-slate-300 focus:border-[#4285f4] focus:ring-2 focus:ring-[#4285f4]/20"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number (optional)"
                      value={formData.phone}
                      onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                      className="h-12 bg-white text-slate-900 placeholder:text-slate-500 border-slate-300 focus:border-[#4285f4] focus:ring-2 focus:ring-[#4285f4]/20"
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
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm bg-white text-slate-900 placeholder:text-slate-500 focus:border-[#4285f4] focus:outline-none focus:ring-2 focus:ring-[#4285f4]/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-[#4285f4] hover:bg-[#3367d6] text-white font-semibold shadow-lg hover:shadow-[#4285f4]/25 transition-all duration-300"
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
                    <h3 className="text-lg font-semibold">Thank you! We&apos;ll be in touch shortly.</h3>
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

        {/* Stats section removed per request */}
      </div>
    </section>
  )
}
