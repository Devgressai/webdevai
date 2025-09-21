"use client"

import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Link from 'next/link'
import { CheckCircle, AlertTriangle, TrendingUp, Target, Users, DollarSign, BarChart3, Zap, Search, XCircle, Globe, Smartphone, Loader2 } from 'lucide-react'

interface AssessmentQuestion {
  id: string
  question: string
  options: {
    value: string
    label: string
    score: number
    description: string
  }[]
}

const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'traffic',
    question: 'How much website traffic do you currently receive?',
    options: [
      { value: 'none', label: 'Less than 100 visitors/month', score: 1, description: 'Very low visibility' },
      { value: 'low', label: '100-1,000 visitors/month', score: 2, description: 'Limited reach' },
      { value: 'medium', label: '1,000-10,000 visitors/month', score: 3, description: 'Moderate traffic' },
      { value: 'high', label: '10,000+ visitors/month', score: 4, description: 'Good traffic volume' }
    ]
  },
  {
    id: 'conversion',
    question: 'What is your current website conversion rate?',
    options: [
      { value: 'very-low', label: 'Less than 1%', score: 1, description: 'Critical issue' },
      { value: 'low', label: '1-2%', score: 2, description: 'Below average' },
      { value: 'medium', label: '2-5%', score: 3, description: 'Industry average' },
      { value: 'high', label: '5%+', score: 4, description: 'Excellent performance' }
    ]
  },
  {
    id: 'mobile',
    question: 'How mobile-friendly is your website?',
    options: [
      { value: 'not-mobile', label: 'Not mobile optimized', score: 1, description: 'Major problem' },
      { value: 'basic-mobile', label: 'Basic mobile support', score: 2, description: 'Needs improvement' },
      { value: 'responsive', label: 'Fully responsive', score: 3, description: 'Good mobile experience' },
      { value: 'mobile-first', label: 'Mobile-first design', score: 4, description: 'Excellent mobile UX' }
    ]
  },
  {
    id: 'seo',
    question: 'How would you rate your current SEO performance?',
    options: [
      { value: 'none', label: 'No SEO strategy', score: 1, description: 'Missing opportunities' },
      { value: 'basic', label: 'Basic SEO implemented', score: 2, description: 'Limited optimization' },
      { value: 'moderate', label: 'Moderate SEO efforts', score: 3, description: 'Some optimization' },
      { value: 'advanced', label: 'Advanced SEO strategy', score: 4, description: 'Well optimized' }
    ]
  },
  {
    id: 'content',
    question: 'How often do you update your website content?',
    options: [
      { value: 'never', label: 'Never or rarely', score: 1, description: 'Stagnant content' },
      { value: 'monthly', label: 'Monthly updates', score: 2, description: 'Infrequent updates' },
      { value: 'weekly', label: 'Weekly updates', score: 3, description: 'Regular updates' },
      { value: 'daily', label: 'Daily or multiple times per week', score: 4, description: 'Fresh content' }
    ]
  },
  {
    id: 'goals',
    question: 'What is your primary business goal?',
    options: [
      { value: 'awareness', label: 'Increase brand awareness', score: 3, description: 'Visibility focus' },
      { value: 'leads', label: 'Generate more leads', score: 4, description: 'Lead generation' },
      { value: 'sales', label: 'Increase online sales', score: 4, description: 'Revenue focus' },
      { value: 'engagement', label: 'Improve user engagement', score: 3, description: 'Interaction focus' }
    ]
  }
]

interface AssessmentResult {
  score: number
  grade: string
  recommendations: string[]
  services: string[]
  estimatedROI: string
}

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

const getAssessmentResult = (totalScore: number): AssessmentResult => {
  if (totalScore >= 20) {
    return {
      score: totalScore,
      grade: 'A',
      recommendations: [
        'Your website is performing well!',
        'Focus on advanced optimization techniques',
        'Consider A/B testing for further improvements',
        'Explore AI-powered personalization'
      ],
      services: ['Advanced CRO', 'AI Optimization', 'Performance Tuning'],
      estimatedROI: '200-300%'
    }
  } else if (totalScore >= 15) {
    return {
      score: totalScore,
      grade: 'B',
      recommendations: [
        'Good foundation with room for improvement',
        'Focus on conversion rate optimization',
        'Improve content strategy and SEO',
        'Enhance mobile user experience'
      ],
      services: ['CRO Services', 'SEO Optimization', 'Content Strategy'],
      estimatedROI: '150-250%'
    }
  } else if (totalScore >= 10) {
    return {
      score: totalScore,
      grade: 'C',
      recommendations: [
        'Significant improvements needed',
        'Prioritize mobile optimization',
        'Implement basic SEO strategy',
        'Focus on user experience improvements'
      ],
      services: ['Website Redesign', 'SEO Services', 'UX Design'],
      estimatedROI: '200-400%'
    }
  } else {
    return {
      score: totalScore,
      grade: 'D',
      recommendations: [
        'Major website overhaul required',
        'Start with complete redesign',
        'Implement comprehensive SEO strategy',
        'Focus on conversion optimization'
      ],
      services: ['Complete Website Redesign', 'Full SEO Package', 'CRO Services'],
      estimatedROI: '300-500%'
    }
  }
}

function WebsiteAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const [assessmentType, setAssessmentType] = useState<'questionnaire' | 'seo-audit' | null>(null)
  
  // SEO Audit states
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [seoResult, setSeoResult] = useState<SEOAuditResult | null>(null)
  const [error, setError] = useState('')

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let totalScore = 0
    assessmentQuestions.forEach(question => {
      const answer = answers[question.id]
      const option = question.options.find(opt => opt.value === answer)
      if (option) {
        totalScore += option.score
      }
    })
    return totalScore
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setIsStarted(false)
    setAssessmentType(null)
    setSeoResult(null)
    setUrl('')
    setError('')
  }

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
    setSeoResult(null)

    try {
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
      setSeoResult(auditResult)
    } catch (err) {
      console.error('SEO Audit Error:', err)
      setError(err instanceof Error ? err.message : 'Failed to analyze website. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSEOSubmit = (e: React.FormEvent) => {
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

  const totalQuestions = assessmentQuestions.length
  const answeredQuestions = Object.keys(answers).length
  const progress = (answeredQuestions / totalQuestions) * 100

  if (!isStarted && !assessmentType) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-50/80 to-blue-50/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Free Website Assessment
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Get a comprehensive analysis of your website&apos;s performance and discover opportunities to increase traffic, conversions, and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Questionnaire Assessment */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Quick Assessment
                </h3>
                <p className="text-secondary-600 text-sm">
                  Answer a few questions about your website and business goals
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-secondary-700">Performance Score</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-secondary-700">ROI Estimates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span className="text-sm text-secondary-700">Custom Recommendations</span>
                </div>
              </div>

              <Button 
                onClick={() => {
                  setAssessmentType('questionnaire')
                  setIsStarted(true)
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                Start Quick Assessment
              </Button>
              <p className="text-xs text-secondary-500 mt-2 text-center">
                2-3 minutes • No URL required
              </p>
            </div>

            {/* SEO Audit Assessment */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Technical SEO Audit
                </h3>
                <p className="text-secondary-600 text-sm">
                  Get a detailed technical analysis of your website&apos;s SEO performance
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-secondary-700">12 Technical Checks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-sm text-secondary-700">Page Speed Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-secondary-700">Mobile Optimization</span>
                </div>
              </div>

              <Button 
                onClick={() => setAssessmentType('seo-audit')}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Start SEO Audit
              </Button>
              <p className="text-xs text-secondary-500 mt-2 text-center">
                Real-time analysis • URL required
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-secondary-500">
              Choose the assessment that best fits your needs, or try both for a complete analysis
            </p>
          </div>
        </div>
      </section>
    )
  }

  // SEO Audit Interface
  if (assessmentType === 'seo-audit') {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-50/80 to-blue-50/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Technical SEO Audit
            </h2>
            <p className="text-lg text-secondary-600">
              Enter your website URL to get a comprehensive technical analysis
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
            <form onSubmit={handleSEOSubmit} className="space-y-4">
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
                  className="h-12 px-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
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

            <div className="mt-6 text-center">
              <Button 
                onClick={resetAssessment}
                variant="outline"
                className="px-6 py-2"
              >
                ← Back to Assessment Options
              </Button>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100 mt-8">
              <div className="text-center">
                <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Analyzing Your Website</h3>
                <p className="text-secondary-600">
                  We&apos;re checking your website&apos;s SEO performance, page speed, mobile optimization, and more...
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
                    <Loader2 className="w-4 h-4 mr-2 animate-spin text-green-500" />
                    Testing page speed
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO Results */}
          {seoResult && (
            <div className="space-y-6 mt-8">
              {/* Overall Score */}
              <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                    SEO Audit Results for {seoResult.url}
                  </h3>
                  <p className="text-secondary-600">
                    Analysis completed on {new Date(seoResult.generatedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{seoResult.overallScore}</div>
                    <div className="text-sm text-secondary-600">Overall Score</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${seoResult.overallScore}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">{seoResult.issues.critical}</div>
                    <div className="text-sm text-secondary-600">Critical Issues</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">{seoResult.issues.warning}</div>
                    <div className="text-sm text-secondary-600">Warnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{seoResult.issues.passed}</div>
                    <div className="text-sm text-secondary-600">Passed Checks</div>
                  </div>
                </div>
              </div>

              {/* Detailed Checks */}
              <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
                <h4 className="text-xl font-semibold text-secondary-900 mb-6">Detailed SEO Analysis</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Title Tag */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(seoResult.checks.title.status)}
                        <span className="font-semibold">Title Tag</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(seoResult.checks.title.status)}`}>
                        {seoResult.checks.title.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-600">{seoResult.checks.title.message}</p>
                    {seoResult.checks.title.value && (
                      <div className="text-sm bg-gray-50 p-2 rounded">
                        &quot;{seoResult.checks.title.value}&quot;
                      </div>
                    )}
                    {seoResult.checks.title.length !== undefined && (
                      <div className="text-sm text-secondary-500">
                        Length: {seoResult.checks.title.length} characters
                      </div>
                    )}
                  </div>

                  {/* Meta Description */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(seoResult.checks.description.status)}
                        <span className="font-semibold">Meta Description</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(seoResult.checks.description.status)}`}>
                        {seoResult.checks.description.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-600">{seoResult.checks.description.message}</p>
                    {seoResult.checks.description.value && (
                      <div className="text-sm bg-gray-50 p-2 rounded">
                        &quot;{seoResult.checks.description.value}&quot;
                      </div>
                    )}
                    {seoResult.checks.description.length !== undefined && (
                      <div className="text-sm text-secondary-500">
                        Length: {seoResult.checks.description.length} characters
                      </div>
                    )}
                  </div>

                  {/* Mobile Optimization */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(seoResult.checks.mobile.status)}
                        <Smartphone className="w-5 h-5" />
                        <span className="font-semibold">Mobile Optimization</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(seoResult.checks.mobile.status)}`}>
                        {seoResult.checks.mobile.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-600">{seoResult.checks.mobile.message}</p>
                  </div>

                  {/* Page Speed */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(seoResult.checks.speed.status)}
                        <Zap className="w-5 h-5" />
                        <span className="font-semibold">Page Speed</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(seoResult.checks.speed.status)}`}>
                        {seoResult.checks.speed.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-600">{seoResult.checks.speed.message}</p>
                    {seoResult.checks.speed.score && (
                      <div className="text-sm text-secondary-500">
                        Speed Score: {seoResult.checks.speed.score}/100
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
                <h4 className="text-xl font-semibold text-secondary-900 mb-6">SEO Recommendations</h4>
                <div className="space-y-4">
                  {seoResult.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-secondary-700">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    Ready to Improve Your SEO?
                  </h3>
                  <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                    Get a comprehensive SEO strategy and implementation plan tailored to your business goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                      <Link href="/contact">Get Free SEO Strategy</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/contact">Schedule Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }

  if (showResults) {
    const totalScore = calculateScore()
    const result = getAssessmentResult(totalScore)

    return (
      <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-50/80 to-blue-50/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Your Website Assessment Results
            </h2>
            <p className="text-lg text-secondary-600">
              Here’s what we discovered about your website’s performance
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
            {/* Score Display */}
            <div className="text-center mb-8">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold text-white ${
                result.grade === 'A' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                result.grade === 'B' ? 'bg-gradient-to-r from-blue-500 to-cyan-600' :
                result.grade === 'C' ? 'bg-gradient-to-r from-yellow-500 to-orange-600' :
                'bg-gradient-to-r from-red-500 to-pink-600'
              }`}>
                {result.grade}
              </div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                Grade: {result.grade} ({result.score}/24 points)
              </h3>
              <p className="text-secondary-600">
                {result.grade === 'A' ? 'Excellent performance!' :
                 result.grade === 'B' ? 'Good with room for improvement' :
                 result.grade === 'C' ? 'Needs significant improvement' :
                 'Major improvements required'}
              </p>
            </div>

            {/* Recommendations */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Key Recommendations</h4>
              <div className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Services */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Recommended Services</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {result.services.map((service, index) => (
                  <div key={index} className="bg-secondary-50 rounded-lg p-4 text-center">
                    <BarChart3 className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="font-medium text-secondary-900">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Estimate */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <DollarSign className="h-8 w-8 text-primary-600" />
                <h4 className="text-xl font-semibold text-secondary-900">Estimated ROI</h4>
              </div>
              <p className="text-center text-2xl font-bold text-primary-600 mb-2">
                {result.estimatedROI}
              </p>
              <p className="text-center text-secondary-600">
                Potential return on investment from implementing our recommendations
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={resetAssessment}
                variant="outline"
                className="px-8 py-3"
              >
                Retake Assessment
              </Button>
              <Button 
                asChild
                className="bg-gradient-primary hover:shadow-glow px-8 py-3"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const currentQ = assessmentQuestions[currentQuestion]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-50/80 to-blue-50/20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Website Assessment
          </h2>
          <p className="text-lg text-secondary-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-secondary-500 mt-2 text-center">
            {answeredQuestions} of {totalQuestions} questions answered
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-6">
              {currentQ.question}
            </h3>
            
            <div className="space-y-4">
              {currentQ.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                  className="w-full text-left p-4 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-secondary-300 group-hover:border-primary-500 mt-0.5"></div>
                    <div className="flex-1">
                      <p className="font-medium text-secondary-900 mb-1">
                        {option.label}
                      </p>
                      <p className="text-sm text-secondary-600">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={resetAssessment}
              variant="outline"
              className="px-6 py-2"
            >
              Start Over
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebsiteAssessment
export { WebsiteAssessment }
