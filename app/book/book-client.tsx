'use client'

import { useEffect, useState } from 'react'
import { getCalendlyEmbedUrl } from '@/lib/calendly'
import { CheckCircle, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function BookPageClient() {
  const [calendlyUrl, setCalendlyUrl] = useState<string>('')
  const [calendlyDirectUrl, setCalendlyDirectUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [embedError, setEmbedError] = useState<string | null>(null)

  useEffect(() => {
    // Get the Calendly embed URL with UTM params on client side
    const embedUrl = getCalendlyEmbedUrl()
    console.log('Calendly Embed URL:', embedUrl)
    setCalendlyUrl(embedUrl)
    
    // Get direct URL (without /embed) for fallback links
    const directUrl = embedUrl.replace('/embed', '').split('?')[0]
    const urlParams = new URL(embedUrl).searchParams.toString()
    const fullDirectUrl = urlParams ? `${directUrl}?${urlParams}` : directUrl
    setCalendlyDirectUrl(fullDirectUrl)
    
    // Check if URL is valid
    if (!embedUrl || embedUrl.includes('YOUR-USERNAME') || !embedUrl.includes('calendly.com')) {
      setIsLoading(false)
      setEmbedError('Invalid Calendly URL')
      return
    }

    // Set loading to false after iframe loads
    // The onLoad handler will handle this, but set a timeout as fallback
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  const isValidUrl = calendlyUrl && !calendlyUrl.includes('YOUR-USERNAME') && calendlyUrl.includes('calendly.com')

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
            We will evaluate your current digital presence and outline clear next steps.
          </p>
          
          {/* Bullet Points */}
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg text-slate-700">
                Review your current website or digital presence
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg text-slate-700">
                Identify SEO, AI, and conversion opportunities
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
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
          {!isValidUrl ? (
            <div className="flex flex-col items-center justify-center h-[800px] p-8">
              <Calendar className="h-16 w-16 text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Calendar Not Configured</h3>
              <p className="text-slate-600 mb-6 text-center max-w-md">
                Please set your Calendly username in environment variables, or book directly on Calendly.
              </p>
              <Link
                href="https://calendly.com/webvello"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
              >
                <span>Book on Calendly</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="w-full relative" style={{ minHeight: '800px' }}>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-slate-600">Loading calendar...</p>
                  </div>
                </div>
              )}
              {embedError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-8">
                  <Calendar className="h-16 w-16 text-slate-400 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Calendar Loading Error</h3>
                  <p className="text-slate-600 mb-6 text-center max-w-md">{embedError}</p>
                  <Link
                    href={calendlyDirectUrl || 'https://calendly.com/webvello'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    <span>Book on Calendly</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              )}
              {/* Direct iframe embed - most reliable method */}
              {!embedError && (
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  title="Book a Discovery Call"
                  className="w-full border-0"
                  style={{ minHeight: '800px' }}
                  allow="camera; microphone; geolocation"
                  loading="lazy"
                  onLoad={() => {
                    console.log('Calendly iframe loaded successfully')
                    setIsLoading(false)
                    setEmbedError(null)
                  }}
                  onError={() => {
                    console.error('Calendly iframe failed to load')
                    setIsLoading(false)
                    setEmbedError('Failed to load calendar. Please try the direct link.')
                  }}
                />
              )}
              {/* Direct link option */}
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href={calendlyDirectUrl || 'https://calendly.com/webvello'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-primary-600 flex items-center gap-1 bg-white/90 px-2 py-1 rounded shadow-sm transition-colors"
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
