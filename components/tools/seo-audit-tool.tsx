'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  ExternalLink, 
  Clock, 
  Smartphone, 
  Globe,
  Zap,
  Target,
  TrendingUp,
  Loader2
} from 'lucide-react'

interface SEOAuditResult {
  url: string
  overallScore: number
  issues: {
    critical: number
    warning: number
    passed: number
  }
  checks: {
    title: { status: 'pass' | 'warning' | 'fail'; message: string; value?: string; length?: number }
    description: { status: 'pass' | 'warning' | 'fail'; message: string; value?: string; length?: number }
    headings: { status: 'pass' | 'warning' | 'fail'; message: string; count?: number; structure?: any[] }
    images: { status: 'pass' | 'warning' | 'fail'; message: string; altCount?: number; totalCount?: number; missingAlt?: string[] }
    mobile: { status: 'pass' | 'warning' | 'fail'; message: string; viewport?: string }
    speed: { status: 'pass' | 'warning' | 'fail'; message: string; score?: number; loadTime?: number }
    ssl: { status: 'pass' | 'warning' | 'fail'; message: string; valid?: boolean }
    internalLinks: { status: 'pass' | 'warning' | 'fail'; message: string; count?: number; broken?: number }
    externalLinks: { status: 'pass' | 'warning' | 'fail'; message: string; count?: number; nofollow?: number }
    schema: { status: 'pass' | 'warning' | 'fail'; message: string; types?: string[] }
    robots: { status: 'pass' | 'warning' | 'fail'; message: string; hasRobots?: boolean }
    sitemap: { status: 'pass' | 'warning' | 'fail'; message: string; hasSitemap?: boolean }
  }
  recommendations: string[]
  generatedAt: string
  lighthouse?: any
}

export function SEOAuditTool() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<SEOAuditResult | null>(null)
  const [error, setError] = useState('')

  const validateUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`)
      return ['http:', 'https:'].includes(urlObj.protocol)
    } catch {
      return false
    }
  }

  const performSEOAudit = async (websiteUrl: string) => {
    setIsLoading(true)
    setError('')
    setResult(null)

    try {
      // Call the real SEO audit API
      const response = await fetch('/api/seo-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: websiteUrl }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to analyze website')
      }

      const auditResult = await response.json()
      setResult(auditResult)
    } catch (err) {
      console.error('SEO Audit Error:', err)
      setError(err instanceof Error ? err.message : 'Failed to analyze website. Please try again.')
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
    performSEOAudit(cleanUrl)
  }

  const getStatusIcon = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-500" />
    }
  }

  const getStatusColor = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass':
        return 'bg-green-100 text-green-800'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800'
      case 'fail':
        return 'bg-red-100 text-red-800'
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Input Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Analyze Your Website</CardTitle>
          <CardDescription className="text-center">
            Enter your website URL to get a comprehensive SEO audit
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
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Analyze Website
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
              <h3 className="text-xl font-semibold mb-2">Analyzing Your Website</h3>
              <p className="text-secondary-600">
                We’re checking your website’s SEO performance, page speed, mobile optimization, and more...
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-center text-sm text-secondary-500">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Checking meta tags and titles
                </div>
                <div className="flex items-center justify-center text-sm text-secondary-500">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Analyzing page structure
                </div>
                <div className="flex items-center justify-center text-sm text-secondary-500">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin text-primary-500" />
                  Testing page speed
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Overall Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary-500" />
                SEO Audit Results for {result.url}
              </CardTitle>
              <CardDescription>
                Analysis completed on {new Date(result.generatedAt).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{result.overallScore}</div>
                  <div className="text-sm text-secondary-600">Overall Score</div>
                  <Progress value={result.overallScore} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{result.issues.critical}</div>
                  <div className="text-sm text-secondary-600">Critical Issues</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{result.issues.warning}</div>
                  <div className="text-sm text-secondary-600">Warnings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{result.issues.passed}</div>
                  <div className="text-sm text-secondary-600">Passed Checks</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Checks */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed SEO Analysis</CardTitle>
              <CardDescription>
                Comprehensive breakdown of your website’s SEO performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title Tag */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.title.status)}
                      <span className="font-semibold">Title Tag</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.title.status)}>
                      {result.checks.title.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.title.message}</p>
                  {result.checks.title.value && (
                    <div className="text-sm bg-gray-50 p-2 rounded">
                      “{result.checks.title.value}”
                    </div>
                  )}
                  {result.checks.title.length !== undefined && (
                    <div className="text-sm text-secondary-500">
                      Length: {result.checks.title.length} characters
                    </div>
                  )}
                </div>

                {/* Meta Description */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.description.status)}
                      <span className="font-semibold">Meta Description</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.description.status)}>
                      {result.checks.description.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.description.message}</p>
                  {result.checks.description.value && (
                    <div className="text-sm bg-gray-50 p-2 rounded">
                      “{result.checks.description.value}”
                    </div>
                  )}
                  {result.checks.description.length !== undefined && (
                    <div className="text-sm text-secondary-500">
                      Length: {result.checks.description.length} characters
                    </div>
                  )}
                </div>

                {/* Headings */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.headings.status)}
                      <span className="font-semibold">Heading Structure</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.headings.status)}>
                      {result.checks.headings.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.headings.message}</p>
                  {result.checks.headings.count && (
                    <div className="text-sm text-secondary-500">
                      {result.checks.headings.count} headings found
                    </div>
                  )}
                </div>

                {/* Images */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.images.status)}
                      <span className="font-semibold">Image Alt Text</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.images.status)}>
                      {result.checks.images.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.images.message}</p>
                  {result.checks.images.altCount && result.checks.images.totalCount && (
                    <div className="text-sm text-secondary-500">
                      {result.checks.images.altCount} of {result.checks.images.totalCount} images have alt text
                    </div>
                  )}
                </div>

                {/* Mobile Optimization */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.mobile.status)}
                      <Smartphone className="w-5 h-5" />
                      <span className="font-semibold">Mobile Optimization</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.mobile.status)}>
                      {result.checks.mobile.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.mobile.message}</p>
                </div>

                {/* Page Speed */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.speed.status)}
                      <Zap className="w-5 h-5" />
                      <span className="font-semibold">Page Speed</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.speed.status)}>
                      {result.checks.speed.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.speed.message}</p>
                  {result.checks.speed.score && (
                    <div className="text-sm text-secondary-500">
                      Speed Score: {result.checks.speed.score}/100
                    </div>
                  )}
                  {result.checks.speed.loadTime && (
                    <div className="text-sm text-secondary-500">
                      Load Time: {result.checks.speed.loadTime}ms
                    </div>
                  )}
                </div>

                {/* SSL Certificate */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.ssl.status)}
                      <Globe className="w-5 h-5" />
                      <span className="font-semibold">SSL Certificate</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.ssl.status)}>
                      {result.checks.ssl.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.ssl.message}</p>
                </div>

                {/* Schema Markup */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.schema.status)}
                      <span className="font-semibold">Schema Markup</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.schema.status)}>
                      {result.checks.schema.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.schema.message}</p>
                  {result.checks.schema.types && result.checks.schema.types.length > 0 && (
                    <div className="text-sm text-secondary-500">
                      Types: {result.checks.schema.types.join(', ')}
                    </div>
                  )}
                </div>

                {/* Robots.txt */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.robots.status)}
                      <span className="font-semibold">Robots.txt</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.robots.status)}>
                      {result.checks.robots.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.robots.message}</p>
                </div>

                {/* Sitemap.xml */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.checks.sitemap.status)}
                      <span className="font-semibold">Sitemap.xml</span>
                    </div>
                    <Badge className={getStatusColor(result.checks.sitemap.status)}>
                      {result.checks.sitemap.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600">{result.checks.sitemap.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary-500" />
                SEO Recommendations
              </CardTitle>
              <CardDescription>
                Actionable steps to improve your website’s SEO performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-secondary-700">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA for Detailed Report */}
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Want a Detailed SEO Report?
                </h3>
                <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                  Get a comprehensive 50+ page SEO audit report with detailed recommendations, 
                  competitor analysis, and a custom SEO strategy tailored to your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                    <Link href="/contact">Get Detailed Report</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Schedule Free Consultation</Link>
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
