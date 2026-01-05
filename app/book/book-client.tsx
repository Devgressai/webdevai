'use client'

import { useEffect, useState, useRef } from 'react'
import { getCalendlyEmbedUrl } from '@/lib/calendly'
import { CheckCircle } from 'lucide-react'

export function BookPageClient() {
  const [calendlyUrl, setCalendlyUrl] = useState<string>('')
  const calendlyInlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Get the Calendly URL with UTM params on client side
    const url = getCalendlyEmbedUrl()
    setCalendlyUrl(url)

    // Initialize Calendly inline widget
    const initCalendly = () => {
      if (typeof (window as any).Calendly !== 'undefined' && calendlyInlineRef.current) {
        try {
          ;(window as any).Calendly.initInlineWidget({
            url: url,
            parentElement: calendlyInlineRef.current,
            prefill: {},
            utm: {}
          })
        } catch (error) {
          console.error('Error initializing Calendly widget:', error)
        }
      }
    }

    // Check if Calendly is already loaded (from layout.tsx)
    if (typeof (window as any).Calendly !== 'undefined') {
      // Script already loaded, initialize immediately
      initCalendly()
    } else {
      // Script not loaded yet, wait for it
      const checkCalendly = setInterval(() => {
        if (typeof (window as any).Calendly !== 'undefined') {
          clearInterval(checkCalendly)
          initCalendly()
        }
      }, 100)

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkCalendly)
        if (typeof (window as any).Calendly === 'undefined') {
          console.warn('Calendly script not loaded after 5 seconds')
        }
      }, 5000)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Book a Discovery Call
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Schedule a dedicated time to discuss your project, goals, and challenges.
            We'll evaluate your current digital presence and outline clear next steps.
          </p>
          
          {/* Bullet Points */}
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg text-slate-700">
                Review your current website or digital presence
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg text-slate-700">
                Identify SEO, AI, and conversion opportunities
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg text-slate-700">
                Align on a clear path forward
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Inline Embed Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Calendly inline widget container */}
          <div 
            ref={calendlyInlineRef}
            className="calendly-inline-widget w-full"
            style={{ minHeight: '800px', height: '800px' }}
          />
          
          {/* Fallback iframe if inline widget doesn't load */}
          {calendlyUrl && (
            <div className="hidden" style={{ display: 'none' }}>
              <iframe
                src={calendlyUrl}
                width="100%"
                height="800"
                frameBorder="0"
                title="Book a Discovery Call"
                className="w-full"
                style={{ minHeight: '800px' }}
              />
            </div>
          )}
        </div>
        
        {/* Microcopy */}
        <p className="text-center text-slate-500 text-sm sm:text-base mt-6">
          No obligation. No pressure. Just clarity.
        </p>
      </div>
    </div>
  )
}

