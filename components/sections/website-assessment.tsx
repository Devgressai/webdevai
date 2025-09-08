"use client"

import { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { CheckCircle, AlertTriangle, TrendingUp, Target, Users, DollarSign, BarChart3, Zap } from 'lucide-react'

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

export function WebsiteAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

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
  }

  const totalQuestions = assessmentQuestions.length
  const answeredQuestions = Object.keys(answers).length
  const progress = (answeredQuestions / totalQuestions) * 100

  if (!isStarted) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-50/80 to-blue-50/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Free Website Assessment
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Get a comprehensive analysis of your website's performance and discover opportunities to increase traffic, conversions, and revenue.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                What You'll Discover
              </h3>
              <p className="text-secondary-600">
                Get insights into your website's strengths and areas for improvement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900">Performance Score</h4>
                  <p className="text-sm text-secondary-600">Get a letter grade and detailed analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900">ROI Estimates</h4>
                  <p className="text-sm text-secondary-600">See potential returns on improvements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900">Custom Recommendations</h4>
                  <p className="text-sm text-secondary-600">Actionable steps for improvement</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900">Service Matches</h4>
                  <p className="text-sm text-secondary-600">Find the right solutions for your needs</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => setIsStarted(true)}
                className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3"
              >
                Start Free Assessment
              </Button>
              <p className="text-sm text-secondary-500 mt-3">
                Takes only 2-3 minutes • No registration required
              </p>
            </div>
          </div>
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
              Here's what we discovered about your website's performance
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
