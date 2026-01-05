'use client'

import { useEffect, useState } from 'react'
import { getCalendlyEmbedUrl } from '@/lib/calendly'
import { CheckCircle } from 'lucide-react'

export function BookPageClient() {
  const [calendlyUrl, setCalendlyUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get the Calendly URL with UTM params on client side
    const url = getCalendlyEmbedUrl()
    setCalendlyUrl(url)
    setIsLoading(false)
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

      {/* Calendly Embed Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center h-[800px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-600">Loading calendar...</p>
              </div>
            </div>
          ) : calendlyUrl ? (
            <div className="w-full" style={{ minHeight: '800px' }}>
              <iframe
                src={calendlyUrl}
                width="100%"
                height="800"
                frameBorder="0"
                title="Book a Discovery Call"
                className="w-full border-0"
                style={{ minHeight: '800px' }}
                allow="camera; microphone; geolocation"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-[800px]">
              <div className="text-center">
                <p className="text-slate-600 mb-4">Unable to load calendar.</p>
                <p className="text-sm text-slate-500">
                  Please check your Calendly configuration or{' '}
                  <a href="https://calendly.com/webvello/discovery-call" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    book directly on Calendly
                  </a>
                </p>
              </div>
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

