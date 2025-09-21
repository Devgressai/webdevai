'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Smartphone, 
  Monitor,
  Globe,
  Loader2,
  TrendingUp,
  Target,
  Gauge,
  Activity
} from 'lucide-react'

interface SpeedTestResult {
  url: string
  overallScore: number
  mobileScore: number
  desktopScore: number
  metrics: {
    firstContentfulPaint: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
    largestContentfulPaint: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
    cumulativeLayoutShift: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
    firstInputDelay: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
    totalBlockingTime: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
    speedIndex: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
  }
  opportunities: {
    name: string
    impact: 'high' | 'medium' | 'low'
    description: string
    savings: string
  }[]
  diagnostics: {
    name: string
    description: string
    status: 'pass' | 'warning' | 'fail'
  }[]
  generatedAt: string
}

export function WebsiteSpeedTest() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<SpeedTestResult | null>(null)
  const [error, setError] = useState('')
  const [testType, setTestType] = useState<'mobile' | 'desktop' | 'both'>('both')

  const validateUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`)
      return ['http:', 'https:'].includes(urlObj.protocol)
    } catch {
      return false
    }
  }

  const performSpeedTest = async (websiteUrl: string) => {
    setIsLoading(true)
    setError('')
    setResult(null)

    try {
      // Call our API endpoint
      const response = await fetch('/api/speed-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: websiteUrl }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to test website speed')
      }

      const result = await response.json()
      setResult(result)
    } catch (err) {
      console.error('Speed test error:', err)
      setError(err instanceof Error ? err.message : 'Failed to test website speed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!url.trim()) {
      setError('Please enter a website URL')
      return
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid website URL (e.g., example.com or https://example.com)')
      return
    }

    const cleanUrl = url.startsWith('http') ? url : `https://${url}`
    performSpeedTest(cleanUrl)
  }

  const getStatusIcon = (status: 'good' | 'needs-improvement' | 'poor' | 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'good':
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'needs-improvement':
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'poor':
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-500" />
    }
  }

  const getStatusColor = (status: 'good' | 'needs-improvement' | 'poor' | 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'good':
      case 'pass':
        return 'bg-green-100 text-green-800'
      case 'needs-improvement':
      case 'warning':
        return 'bg-yellow-100 text-yellow-800'
      case 'poor':
      case 'fail':
        return 'bg-red-100 text-red-800'
    }
  }

  const getImpactColor = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-blue-100 text-blue-800'
    }
  }

  const formatMetricValue = (metric: string, value: number) => {
    switch (metric) {
      case 'firstContentfulPaint':
      case 'largestContentfulPaint':
      case 'speedIndex':
        return `${value}ms`
      case 'cumulativeLayoutShift':
        return value.toFixed(3)
      case 'firstInputDelay':
      case 'totalBlockingTime':
        return `${value}ms`
      default:
        return value.toString()
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Input Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Check Your Website Speed</CardTitle>
          <CardDescription className="text-center">
            Enter your website URL to analyze Core Web Vitals and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter your website URL (e.g., example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="h-12 text-lg"
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="h-12 px-8 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Testing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Check Speed
                  </>
                )}
              </Button>
            </div>
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Loading State */}
      {isLoading && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary-500" />
              <h3 className="text-xl font-semibold mb-2">Checking Website Speed</h3>
              <p className="text-secondary-600">
                We’re analyzing your website’s performance, Core Web Vitals, and loading speed...
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-center text-sm text-secondary-500">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Analyzing page structure
                </div>
                <div className="flex items-center justify-center text-sm text-secondary-500">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Measuring Core Web Vitals
                </div>
                <div className="flex items-center justify-center text-sm text-secondary-500">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin text-primary-500" />
                  Checking mobile and desktop performance
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Overall Scores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="w-6 h-6 text-primary-500" />
                Speed Check Results for {result.url}
              </CardTitle>
              <CardDescription>
                Analysis completed on {new Date(result.generatedAt).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{result.overallScore}</div>
                  <div className="text-sm text-secondary-600">Overall Score</div>
                  <Progress value={result.overallScore} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{result.mobileScore}</div>
                  <div className="text-sm text-secondary-600 flex items-center justify-center gap-1">
                    <Smartphone className="w-4 h-4" />
                    Mobile Score
                  </div>
                  <Progress value={result.mobileScore} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{result.desktopScore}</div>
                  <div className="text-sm text-secondary-600 flex items-center justify-center gap-1">
                    <Monitor className="w-4 h-4" />
                    Desktop Score
                  </div>
                  <Progress value={result.desktopScore} className="mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Web Vitals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-6 h-6 text-primary-500" />
                Core Web Vitals
              </CardTitle>
              <CardDescription>
                Google’s key metrics for measuring user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* First Contentful Paint */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.metrics.firstContentfulPaint.status)}
                      <span className="font-semibold">First Contentful Paint</span>
                    </div>
                    <Badge className={getStatusColor(result.metrics.firstContentfulPaint.status)}>
                      {result.metrics.firstContentfulPaint.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">
                    {formatMetricValue('firstContentfulPaint', result.metrics.firstContentfulPaint.value)}
                  </div>
                  <p className="text-sm text-secondary-600">
                    Time until the first content is painted
                  </p>
                </div>

                {/* Largest Contentful Paint */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.metrics.largestContentfulPaint.status)}
                      <span className="font-semibold">Largest Contentful Paint</span>
                    </div>
                    <Badge className={getStatusColor(result.metrics.largestContentfulPaint.status)}>
                      {result.metrics.largestContentfulPaint.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">
                    {formatMetricValue('largestContentfulPaint', result.metrics.largestContentfulPaint.value)}
                  </div>
                  <p className="text-sm text-secondary-600">
                    Time until the largest content is painted
                  </p>
                </div>

                {/* Cumulative Layout Shift */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.metrics.cumulativeLayoutShift.status)}
                      <span className="font-semibold">Cumulative Layout Shift</span>
                    </div>
                    <Badge className={getStatusColor(result.metrics.cumulativeLayoutShift.status)}>
                      {result.metrics.cumulativeLayoutShift.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">
                    {formatMetricValue('cumulativeLayoutShift', result.metrics.cumulativeLayoutShift.value)}
                  </div>
                  <p className="text-sm text-secondary-600">
                    Visual stability during page load
                  </p>
                </div>

                {/* First Input Delay */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.metrics.firstInputDelay.status)}
                      <span className="font-semibold">First Input Delay</span>
                    </div>
                    <Badge className={getStatusColor(result.metrics.firstInputDelay.status)}>
                      {result.metrics.firstInputDelay.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">
                    {formatMetricValue('firstInputDelay', result.metrics.firstInputDelay.value)}
                  </div>
                  <p className="text-sm text-secondary-600">
                    Time until page becomes interactive
                  </p>
                </div>

                {/* Total Blocking Time */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.metrics.totalBlockingTime.status)}
                      <span className="font-semibold">Total Blocking Time</span>
                    </div>
                    <Badge className={getStatusColor(result.metrics.totalBlockingTime.status)}>
                      {result.metrics.totalBlockingTime.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">
                    {formatMetricValue('totalBlockingTime', result.metrics.totalBlockingTime.value)}
                  </div>
                  <p className="text-sm text-secondary-600">
                    Total time tasks block the main thread
                  </p>
                </div>

                {/* Speed Index */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.metrics.speedIndex.status)}
                      <span className="font-semibold">Speed Index</span>
                    </div>
                    <Badge className={getStatusColor(result.metrics.speedIndex.status)}>
                      {result.metrics.speedIndex.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">
                    {formatMetricValue('speedIndex', result.metrics.speedIndex.value)}
                  </div>
                  <p className="text-sm text-secondary-600">
                    How quickly content is visually displayed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optimization Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary-500" />
                Optimization Opportunities
              </CardTitle>
              <CardDescription>
                Potential improvements to increase your website speed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.opportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <Badge className={getImpactColor(opportunity.impact)}>
                        {opportunity.impact} impact
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {opportunity.name}
                      </h4>
                      <p className="text-sm text-secondary-600 mb-2">
                        {opportunity.description}
                      </p>
                      <div className="text-sm text-primary-600 font-medium">
                        Potential savings: {opportunity.savings}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Diagnostics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary-500" />
                Performance Diagnostics
              </CardTitle>
              <CardDescription>
                Additional checks for website performance and best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.diagnostics.map((diagnostic, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className="flex-shrink-0 mt-0.5">
                      {getStatusIcon(diagnostic.status)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {diagnostic.name}
                      </h4>
                      <p className="text-sm text-secondary-600">
                        {diagnostic.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA for Speed Optimization */}
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Need Help Optimizing Your Website Speed?
                </h3>
                <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                  Our performance experts can help you implement speed optimizations, improve 
                  Core Web Vitals, and create a comprehensive strategy to boost your website’s performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                    Get Speed Optimization Service
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
