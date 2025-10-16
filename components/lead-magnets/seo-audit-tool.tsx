'use client'

import { useState } from 'react'

interface SEOAuditResult {
  score: number
  issues: Array<{
    category: string
    severity: 'high' | 'medium' | 'low'
    title: string
    description: string
    fix: string
  }>
  recommendations: string[]
}

export function SEOAuditTool() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<SEOAuditResult | null>(null)
  const [email, setEmail] = useState('')
  const [showEmailForm, setShowEmailForm] = useState(false)

  const runAudit = async () => {
    if (!url) return
    
    setIsLoading(true)
    
    // Simulate audit process
    setTimeout(() => {
      const mockResult: SEOAuditResult = {
        score: Math.floor(Math.random() * 40) + 60, // 60-100
        issues: [
          {
            category: 'Technical SEO',
            severity: 'high',
            title: 'Missing Meta Description',
            description: 'Your homepage is missing a meta description tag.',
            fix: 'Add a compelling meta description between 150-160 characters.'
          },
          {
            category: 'Performance',
            severity: 'medium',
            title: 'Large Image Files',
            description: 'Some images are not optimized and are slowing down your site.',
            fix: 'Compress images and convert to WebP format.'
          },
          {
            category: 'Content',
            severity: 'low',
            title: 'Missing Alt Text',
            description: 'Some images are missing alt text attributes.',
            fix: 'Add descriptive alt text to all images for better accessibility.'
          }
        ],
        recommendations: [
          'Implement structured data markup',
          'Optimize page loading speed',
          'Improve mobile responsiveness',
          'Add internal linking strategy',
          'Create more high-quality content'
        ]
      }
      
      setResult(mockResult)
      setIsLoading(false)
      setShowEmailForm(true)
    }, 2000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100'
    if (score >= 70) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Free SEO Audit Tool
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get a comprehensive SEO analysis of your website in seconds
        </p>
      </div>

      {!result ? (
        <div className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              Website URL
            </label>
            <div className="flex gap-4">
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yourwebsite.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={runAudit}
                disabled={!url || isLoading}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isLoading ? 'Analyzing...' : 'Run Free Audit'}
              </button>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              What Our SEO Audit Checks:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Technical SEO issues
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Page speed performance
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Mobile optimization
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Content optimization
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Schema markup
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Core Web Vitals
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Score Display */}
          <div className="text-center">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-2xl font-bold ${getScoreColor(result.score)}`}>
              SEO Score: {result.score}/100
            </div>
          </div>

          {/* Issues */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Issues Found ({result.issues.length})
            </h3>
            <div className="space-y-4">
              {result.issues.map((issue, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{issue.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(issue.severity)}`}>
                      {issue.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{issue.description}</p>
                  <p className="text-blue-600 text-sm font-medium">{issue.fix}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Recommendations
            </h3>
            <ul className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          {/* Email Form */}
          {showEmailForm && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Get Your Detailed SEO Report
              </h3>
              <p className="text-gray-600 mb-4">
                Enter your email to receive a comprehensive SEO report with actionable insights and priority fixes.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => {
                    // Handle email submission
                    alert('Thank you! Your detailed SEO report will be sent to your email.')
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Get Report
                </button>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => {
                setResult(null)
                setUrl('')
                setEmail('')
                setShowEmailForm(false)
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Analyze Another Website
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
