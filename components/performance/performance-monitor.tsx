'use client'

import { useEffect, useState } from 'react'

interface WebVitals {
  lcp?: number
  inp?: number
  cls?: number
  fcp?: number
  ttfb?: number
}

interface PerformanceScore {
  score: number
  grade: 'A' | 'B' | 'C' | 'D' | 'F'
  color: string
}

export function PerformanceMonitor() {
  const [vitals, setVitals] = useState<WebVitals>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true)
      
      // Measure Core Web Vitals
      if (typeof window !== 'undefined') {
        import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
          onCLS((metric) => setVitals(prev => ({ ...prev, cls: metric.value })))
          onINP((metric) => setVitals(prev => ({ ...prev, inp: metric.value })))
          onFCP((metric) => setVitals(prev => ({ ...prev, fcp: metric.value })))
          onLCP((metric) => setVitals(prev => ({ ...prev, lcp: metric.value })))
          onTTFB((metric) => setVitals(prev => ({ ...prev, ttfb: metric.value })))
        })
      }
    }
  }, [])

  const calculateScore = (): PerformanceScore => {
    let score = 100
    let issues = 0

    // LCP scoring (0-40 points)
    if (vitals.lcp) {
      if (vitals.lcp <= 1.3) score += 0
      else if (vitals.lcp <= 2.5) score -= 10
      else if (vitals.lcp <= 4.0) score -= 20
      else score -= 30
      issues++
    }

    // INP scoring (0-30 points)
    if (vitals.inp) {
      if (vitals.inp <= 200) score += 0
      else if (vitals.inp <= 500) score -= 10
      else score -= 20
      issues++
    }

    // CLS scoring (0-30 points)
    if (vitals.cls) {
      if (vitals.cls <= 0.1) score += 0
      else if (vitals.cls <= 0.25) score -= 10
      else score -= 20
      issues++
    }

    // Determine grade and color
    let grade: 'A' | 'B' | 'C' | 'D' | 'F'
    let color: string

    if (score >= 90) {
      grade = 'A'
      color = 'text-green-600 bg-green-100'
    } else if (score >= 80) {
      grade = 'B'
      color = 'text-blue-600 bg-blue-100'
    } else if (score >= 70) {
      grade = 'C'
      color = 'text-yellow-600 bg-yellow-100'
    } else if (score >= 60) {
      grade = 'D'
      color = 'text-orange-600 bg-orange-100'
    } else {
      grade = 'F'
      color = 'text-red-600 bg-red-100'
    }

    return { score: Math.max(0, score), grade, color }
  }

  const getVitalStatus = (value: number, threshold: number, type: 'lower' | 'higher' = 'lower') => {
    const isGood = type === 'lower' ? value <= threshold : value >= threshold
    return {
      status: isGood ? 'good' : 'needs-improvement',
      color: isGood ? 'text-green-600' : 'text-red-600',
      icon: isGood ? '✓' : '⚠'
    }
  }

  if (!isVisible) return null

  const performanceScore = calculateScore()

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Performance Monitor</h3>
        <div className={`px-2 py-1 rounded text-xs font-bold ${performanceScore.color}`}>
          {performanceScore.grade} ({performanceScore.score})
        </div>
      </div>

      <div className="space-y-2 text-xs">
        {vitals.lcp && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">LCP:</span>
            <span className={`font-mono ${getVitalStatus(vitals.lcp, 2.5).color}`}>
              {getVitalStatus(vitals.lcp, 2.5).icon} {vitals.lcp.toFixed(2)}s
            </span>
          </div>
        )}

        {vitals.inp && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">INP:</span>
            <span className={`font-mono ${getVitalStatus(vitals.inp, 200).color}`}>
              {getVitalStatus(vitals.inp, 200).icon} {vitals.inp.toFixed(0)}ms
            </span>
          </div>
        )}

        {vitals.cls && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">CLS:</span>
            <span className={`font-mono ${getVitalStatus(vitals.cls, 0.1).color}`}>
              {getVitalStatus(vitals.cls, 0.1).icon} {vitals.cls.toFixed(3)}
            </span>
          </div>
        )}

        {vitals.fcp && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">FCP:</span>
            <span className={`font-mono ${getVitalStatus(vitals.fcp, 1.8).color}`}>
              {getVitalStatus(vitals.fcp, 1.8).icon} {vitals.fcp.toFixed(2)}s
            </span>
          </div>
        )}

        {vitals.ttfb && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">TTFB:</span>
            <span className={`font-mono ${getVitalStatus(vitals.ttfb, 600).color}`}>
              {getVitalStatus(vitals.ttfb, 600).icon} {vitals.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>

      {Object.keys(vitals).length === 0 && (
        <div className="text-xs text-gray-500 text-center py-2">
          Measuring performance...
        </div>
      )}

      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <div>LCP: &lt; 2.5s (Good)</div>
          <div>FID: &lt; 100ms (Good)</div>
          <div>CLS: &lt; 0.1 (Good)</div>
        </div>
      </div>
    </div>
  )
}

// Performance optimization suggestions component
export function PerformanceSuggestions() {
  const suggestions = [
    {
      title: 'Optimize Images',
      description: 'Convert to WebP format and implement lazy loading',
      impact: 'High',
      effort: 'Medium'
    },
    {
      title: 'Minify CSS/JS',
      description: 'Remove unused code and compress files',
      impact: 'High',
      effort: 'Low'
    },
    {
      title: 'Enable Compression',
      description: 'Use gzip/brotli compression for faster loading',
      impact: 'High',
      effort: 'Low'
    },
    {
      title: 'Critical CSS',
      description: 'Inline critical CSS and defer non-critical styles',
      impact: 'Medium',
      effort: 'Medium'
    },
    {
      title: 'Code Splitting',
      description: 'Split JavaScript bundles for faster initial load',
      impact: 'Medium',
      effort: 'High'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Optimization Suggestions</h3>
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  suggestion.impact === 'High' ? 'bg-red-100 text-red-800' :
                  suggestion.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {suggestion.impact} Impact
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  suggestion.effort === 'Low' ? 'bg-green-100 text-green-800' :
                  suggestion.effort === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {suggestion.effort} Effort
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{suggestion.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
