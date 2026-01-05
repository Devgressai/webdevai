'use client'

import { useEffect, useState } from 'react'
import { getCalendlyEmbedUrl } from '@/lib/calendly'
import { CheckCircle, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function BookPageClient() {
  const [calendlyUrl, setCalendlyUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Get the Calendly URL with UTM params on client side
    const url = getCalendlyEmbedUrl()
    console.log('Calendly URL:', url) // Debug log
    setCalendlyUrl(url)
    setIsLoading(false)
    
    // Check if URL is valid (not the placeholder)
    if (url.includes('YOUR-USERNAME') || !url.includes('calendly.com')) {
      setHasError(true)
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
          ) : hasError || !calendlyUrl || calendlyUrl.includes('YOUR-USERNAME') ? (
            <div className="flex flex-col items-center justify-center h-[800px] p-8">
              <Calendar className="h-16 w-16 text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Calendar Not Configured</h3>
              <p className="text-slate-600 mb-6 text-center max-w-md">
                Please set your Calendly username in environment variables, or book directly on Calendly.
              </p>
              <Link
                href="https://calendly.com/webvello/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                <span>Book on Calendly</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              {process.env.NODE_ENV === 'development' && (
                <p className="text-xs text-slate-400 mt-4">
                  Debug: {calendlyUrl || 'No URL generated'}
                </p>
              )}
            </div>
          ) : (
            <div className="w-full" style={{ minHeight: '800px', position: 'relative' }}>
              <iframe
                src={calendlyUrl}
                width="100%"
                height="800"
                frameBorder="0"
                title="Book a Discovery Call"
                className="w-full border-0"
                style={{ minHeight: '800px' }}
                allow="camera; microphone; geolocation"
                onError={() => setHasError(true)}
                onLoad={() => setHasError(false)}
              />
              {/* Fallback link if iframe fails */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-blue-600 flex items-center gap-1"
                >
                  Open in new tab
                  <ExternalLink className="h-3 w-3" />
                </a>
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

