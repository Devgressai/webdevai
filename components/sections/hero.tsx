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
      {/* Background Image with subtle tint */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-happy-bright.webp"
          alt=""
          fill
          priority
          className="object-cover"
          quality={85}
          sizes="100vw"
        />
        {/* Subtle tint overlay to reduce busyness */}
        <div className="absolute inset-0 bg-slate-900/20"></div>
      </div>

      <div className="hero-content relative z-10">
        <div className="mx-auto max-w-4xl px-4 -mt-16">
          <div className="text-center">
            <p className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-700 shadow-lg">
              High-Impact Web & SEO Growth Programs
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Transform your website into a lead generation machine with <span className="text-blue-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Web Vello</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Your partner for custom website design, development, SEO, GEO, and AI-driven optimization campaigns that win demanding markets.
            </p>
          </div>

          <div className="mt-10 max-w-2xl mx-auto w-full">
            {step === 'url' && (
              <div className="space-y-6">
                <form onSubmit={handleWebsiteSubmit} className="flex flex-col sm:flex-row gap-3 bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border border-white/20">
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
                <p className="text-center text-sm text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  Don&apos;t have a site?{' '}
                  <Link href="/contact" className="font-semibold text-blue-300 hover:text-blue-200 underline drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
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
