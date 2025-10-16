'use client'

import { useState } from 'react'

interface SpeedTestResult {
  url: string
  score: number
  metrics: {
    fcp: number // First Contentful Paint
    lcp: number // Largest Contentful Paint
    fid: number // First Input Delay
    cls: number // Cumulative Layout Shift
    ttfb: number // Time to First Byte
  }
  recommendations: Array<{
    category: string
    title: string
    impact: 'high' | 'medium' | 'low'
    description: string
    fix: string
  }>
}

export function WebsiteSpeedTest() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<SpeedTestResult | null>(null)
  const [email, setEmail] = useState('')
  const [showEmailForm, setShowEmailForm] = useState(false)

  const runSpeedTest = async () => {
    if (!url) return
    
    setIsLoading(true)
    
    // Simulate speed test
    setTimeout(() => {
      const mockResult: SpeedTestResult = {
        url,
        score: Math.floor(Math.random() * 30) + 70, // 70-100
        metrics: {
          fcp: Math.random() * 2 + 1, // 1-3 seconds
          lcp: Math.random() * 3 + 1.5, // 1.5-4.5 seconds
          fid: Math.random() * 200 + 50, // 50-250ms
          cls: Math.random() * 0.3, // 0-0.3
          ttfb: Math.random() * 1000 + 200 // 200-1200ms
        },
        recommendations: [
          {
            category: 'Images',
            title: 'Optimize Images',
            impact: 'high',
            description: 'Large image files are slowing down your website.',
            fix: 'Compress images and convert to WebP format to reduce file size by 60-80%.'
          },
          {
            category: 'JavaScript',
            title: 'Minify JavaScript',
            impact: 'medium',
            description: 'JavaScript files are not minified, increasing load time.',
            fix: 'Minify and compress JavaScript files to reduce their size.'
          },
          {
            category: 'Caching',
            title: 'Enable Browser Caching',
            impact: 'medium',
            description: 'Browser caching is not properly configured.',
            fix: 'Set up proper cache headers to store static files in browser cache.'
          },
          {
            category: 'CSS',
            title: 'Optimize CSS Delivery',
            impact: 'low',
            description: 'CSS files are blocking page rendering.',
            fix: 'Inline critical CSS and defer non-critical stylesheets.'
          }
        ]
      }
      
      setResult(mockResult)
      setIsLoading(false)
      setShowEmailForm(true)
    }, 3000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100'
    if (score >= 70) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getMetricColor = (value: number, threshold: number, type: 'lower' | 'higher' = 'lower') => {
    const isGood = type === 'lower' ? value <= threshold : value >= threshold
    return isGood ? 'text-green-600' : 'text-red-600'
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
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
          Website Speed Test
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Test your website's loading speed and get optimization recommendations
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
                onClick={runSpeedTest}
                disabled={!url || isLoading}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isLoading ? 'Testing...' : 'Test Speed'}
              </button>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              What We Test:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Page loading speed
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Core Web Vitals
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Mobile performance
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Image optimization
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Caching configuration
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Resource optimization
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Score Display */}
          <div className="text-center">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-2xl font-bold ${getScoreColor(result.score)}`}>
              Speed Score: {result.score}/100
            </div>
            <p className="text-gray-600 mt-2">Tested: {result.url}</p>
          </div>

          {/* Core Web Vitals */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Core Web Vitals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">FCP</div>
                <div className={`text-lg font-semibold ${getMetricColor(result.metrics.fcp, 1.8)}`}>
                  {result.metrics.fcp.toFixed(2)}s
                </div>
                <div className="text-xs text-gray-500">First Contentful Paint</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">LCP</div>
                <div className={`text-lg font-semibold ${getMetricColor(result.metrics.lcp, 2.5)}`}>
                  {result.metrics.lcp.toFixed(2)}s
                </div>
                <div className="text-xs text-gray-500">Largest Contentful Paint</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">FID</div>
                <div className={`text-lg font-semibold ${getMetricColor(result.metrics.fid, 100)}`}>
                  {result.metrics.fid.toFixed(0)}ms
                </div>
                <div className="text-xs text-gray-500">First Input Delay</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">CLS</div>
                <div className={`text-lg font-semibold ${getMetricColor(result.metrics.cls, 0.1)}`}>
                  {result.metrics.cls.toFixed(3)}
                </div>
                <div className="text-xs text-gray-500">Cumulative Layout Shift</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">TTFB</div>
                <div className={`text-lg font-semibold ${getMetricColor(result.metrics.ttfb, 600)}`}>
                  {result.metrics.ttfb.toFixed(0)}ms
                </div>
                <div className="text-xs text-gray-500">Time to First Byte</div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Optimization Recommendations
            </h3>
            <div className="space-y-4">
              {result.recommendations.map((rec, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{rec.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getImpactColor(rec.impact)}`}>
                      {rec.impact.toUpperCase()} IMPACT
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{rec.description}</p>
                  <p className="text-blue-600 text-sm font-medium">{rec.fix}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Email Form */}
          {showEmailForm && (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Get Your Detailed Speed Report
              </h3>
              <p className="text-gray-600 mb-4">
                Receive a comprehensive speed optimization report with step-by-step fixes and priority recommendations.
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
                    alert('Thank you! Your detailed speed report will be sent to your email.')
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
              Test Another Website
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
