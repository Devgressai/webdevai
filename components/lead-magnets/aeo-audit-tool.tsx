'use client'

import { useState } from 'react'
import Link from 'next/link'

interface AEOAuditResult {
  scanId?: string
  success: boolean
  message?: string
}

export function AEOAuditTool() {
  const [domain, setDomain] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AEOAuditResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const runAudit = async () => {
    if (!domain) {
      setError('Please enter a domain or URL')
      return
    }

    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      // Extract domain from URL if full URL provided
      let domainToSubmit = domain.trim()
      try {
        const url = new URL(domainToSubmit.startsWith('http') ? domainToSubmit : `https://${domainToSubmit}`)
        domainToSubmit = url.hostname.replace(/^www\./, '')
      } catch {
        // If URL parsing fails, use as-is (will be validated by API)
        domainToSubmit = domainToSubmit.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
      }

      // Submit to internal audit tool API via proxy route
      const response = await fetch('/api/aeo-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain: domainToSubmit }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to start audit')
      }

      setResult({
        scanId: data.scan?.id,
        success: true,
        message: 'Audit started successfully! Your comprehensive AEO analysis is being processed.',
      })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to start audit. Please try again.'
      setError(errorMessage)
      setResult({
        success: false,
        message: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSubmit = async () => {
    if (!email || !result?.scanId) return

    // Here you would typically send email to your CRM/email service
    // For now, we'll just show a success message
    alert(`Thank you! We'll send your detailed AEO audit report to ${email} once it's complete.`)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Free AEO & AI Readiness Audit
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get a comprehensive analysis of your website's answer engine optimization and AI readiness
        </p>
      </div>

      {!result || !result.success ? (
        <div className="space-y-6">
          <div>
            <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
              Website Domain or URL
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.com or https://example.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && runAudit()}
              />
              <button
                onClick={runAudit}
                disabled={!domain || isLoading}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
              >
                {isLoading ? 'Starting Audit...' : 'Start Free Audit'}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">
              What Our AEO Audit Checks:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-indigo-800">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Featured snippet readiness
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                FAQ schema implementation
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Answer box optimization
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Structured data coverage
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Entity clarity & definitions
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                AI citability factors
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Content structure for answers
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Voice search optimization
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Success Message */}
          <div className="text-center bg-green-50 rounded-lg p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Audit Started Successfully!
            </h3>
            <p className="text-gray-600 mb-4">
              {result.message}
            </p>
            <p className="text-sm text-gray-500">
              Your comprehensive AEO & AI readiness analysis is being processed. This typically takes 5-10 minutes.
            </p>
          </div>

          {/* Email Form for Lead Capture */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Get Your Detailed AEO Report
            </h3>
            <p className="text-gray-600 mb-4">
              Enter your email to receive a comprehensive AEO audit report with actionable insights, priority fixes, and optimization recommendations.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                onClick={handleEmailSubmit}
                disabled={!email}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Get Report
              </button>
            </div>
          </div>

          {/* View Results Link */}
          {result.scanId && (
            <div className="text-center">
              <Link
                href={`/apps/aeo-audit/scans/${result.scanId}`}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition-colors"
              >
                View Audit Results
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => {
                setResult(null)
                setDomain('')
                setEmail('')
                setError(null)
              }}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Analyze Another Website
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

