'use client'

import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useConversionTracking } from '@/hooks/useConversionTracking'

interface CTAWithTrackingProps {
  className?: string
}

export function CTAWithTracking({ className = "" }: CTAWithTrackingProps) {
  const { trackCTAClick, trackStrategySession, trackProposalRequest } = useConversionTracking()

  const handleCTAClick = (buttonText: string, location: string, service?: string) => {
    trackCTAClick(buttonText, location, service)
  }

  const handleStrategySessionClick = (source: string, service?: string) => {
    trackStrategySession(source, service)
  }

  const handleProposalClick = (website: string, source: string) => {
    trackProposalRequest(website, source)
  }

  return (
    <section className={`py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 relative overflow-hidden ${className}`}>
      {/* Background image - decorative */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <Image
          src="/images/hero-business-meeting.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-pink-500/25 to-blue-500/25"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Text and CTA - Golden Ratio Layout */}
          <div className="text-white">
            {/* Badge - Golden ratio spacing */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white/90 mb-8 border border-white/20">
              <span className="hidden sm:inline">DIGITAL MARKETING THAT DELIVERS RESULTS</span>
              <span className="sm:hidden">RESULTS-DRIVEN MARKETING</span>
            </div>
            
            {/* Main Headline - Golden ratio typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-10 leading-tight">
              Transform Your Website into a Lead Generation Machine with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Web Vello
              </span>
            </h2>
            
            {/* Description - Golden ratio line height and spacing */}
            <p className="text-lg sm:text-xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto">
              Professional services firms must effectively differentiate themselves to attract and retain clients. 
              Over 500+ professional services clients trust us to create tailored marketing strategies that enhance 
              credibility, foster client relationships, and drive lead generation. Let us help you establish your 
              firm as a trusted authority in your industry while achieving your unique business goals.
            </p>
            
            {/* CTA Input & Button - Golden ratio proportions */}
            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto mb-12">
              <input
                type="text"
                placeholder="Enter your website URL"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base"
              />
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                asChild
                onClick={() => handleProposalClick('homepage_input', 'homepage_cta')}
              >
                <Link href="/contact" aria-label="Get a free SEO audit">🎯 Get Free SEO Audit</Link>
              </Button>
            </div>
            
            {/* Additional CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-xl font-semibold"
                asChild
                onClick={() => handleStrategySessionClick('homepage_secondary', 'general')}
              >
                <Link href="/contact">📞 Free Strategy Session</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-xl font-semibold"
                asChild
                onClick={() => handleCTAClick('View Pricing', 'homepage_secondary', 'pricing')}
              >
                <Link href="/pricing">💰 View Pricing</Link>
              </Button>
            </div>
            
            {/* Urgency & Value Props - Golden ratio spacing */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-white">
                ⚡ <span className="font-semibold">Instant Response:</span> Get your custom proposal in 24 hours
              </p>
              <p className="text-xs sm:text-sm text-white/90">
                <span className="hidden sm:inline">No obligation • Free consultation included • 500+ successful projects</span>
                <span className="sm:hidden">No obligation • Free consultation</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
