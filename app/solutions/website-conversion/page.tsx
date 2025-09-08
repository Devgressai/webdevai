"use client"

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Target, CheckCircle, AlertTriangle, Clock, Zap, Globe, Smartphone, Mail, Phone, Calendar, Star, Award, Building2, Eye, Search, Filter, PieChart, Activity, TrendingUp, Lightbulb, Shield, Info, HelpCircle, BookOpen, FileText, ChevronDown, ChevronUp, MapPin, Globe2, Monitor, TrendingDown, BarChart3, DollarSign, MessageSquare, UserPlus, Filter as Funnel, MousePointer, Settings, Database, BarChart3 as ChartBar, Users, ShoppingCart, CreditCard, MousePointer2, ArrowUpRight, ArrowDownRight, Percent, Timer, Target as TargetIcon, TrendingUp as TrendingUpIcon, TrendingDown as TrendingDownIcon, BarChart, PieChart as PieChartIcon, Activity as ActivityIcon, Zap as Lightning, Heart, Crown, Gem, Calculator, Eye as EyeIcon, Search as SearchIcon, Filter as FilterIcon, PieChart as PieChartIcon2, Activity as ActivityIcon2, TrendingUp as TrendingUpIcon2, TrendingDown as TrendingDownIcon2, Lightbulb as LightbulbIcon, Shield as ShieldIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, BookOpen as BookOpenIcon, FileText as FileTextIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, MapPin as MapPinIcon, Globe2 as Globe2Icon, Monitor as MonitorIcon, UserPlus as UserPlusIcon, Filter as FunnelIcon, MousePointer as MousePointerIcon, Settings as SettingsIcon, Database as DatabaseIcon, BarChart3 as ChartBarIcon, Users as UsersIcon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, MousePointer2 as MousePointer2Icon, ArrowUpRight as ArrowUpRightIcon, ArrowDownRight as ArrowDownRightIcon, Percent as PercentIcon, Timer as TimerIcon, Target as TargetIcon2, TrendingUp as TrendingUpIcon3, TrendingDown as TrendingDownIcon3, BarChart as BarChartIcon, PieChart as PieChartIcon3, Activity as ActivityIcon3 } from 'lucide-react'

// Data structures for the page
const conversionChallenges = [
  {
    title: "Low Conversion Rates",
    description: "Website visitors not taking desired actions like purchases or form submissions",
    impact: "Critical",
    symptoms: ["High bounce rates", "Low form submissions", "Poor sales conversion"],
    solutions: ["Conversion rate optimization", "User experience improvement", "A/B testing"]
  },
  {
    title: "Poor User Experience",
    description: "Confusing navigation, slow loading, and frustrating user interactions",
    impact: "Critical",
    symptoms: ["High exit rates", "Low time on site", "Negative user feedback"],
    solutions: ["UX redesign", "Performance optimization", "User journey mapping"]
  },
  {
    title: "Weak Call-to-Actions",
    description: "Unclear or ineffective buttons and links that don't drive action",
    impact: "High",
    symptoms: ["Low click-through rates", "Confused users", "Poor conversion funnel"],
    solutions: ["CTA optimization", "Button design improvement", "Copy refinement"]
  },
  {
    title: "Trust & Credibility Issues",
    description: "Lack of social proof, security indicators, and professional appearance",
    impact: "High",
    symptoms: ["High cart abandonment", "Low form completion", "Poor brand perception"],
    solutions: ["Social proof addition", "Security badges", "Professional design"]
  },
  {
    title: "Mobile Conversion Problems",
    description: "Poor mobile experience leading to lost conversions on mobile devices",
    impact: "High",
    symptoms: ["Low mobile conversion rates", "Mobile usability issues", "Poor mobile UX"],
    solutions: ["Mobile-first design", "Touch optimization", "Mobile conversion optimization"]
  }
]

const conversionMetrics = [
  {
    metric: "Conversion Rate",
    target: "3-5%+",
    calculation: "Conversions / Total visitors × 100",
    importance: "Primary measure of website effectiveness and user engagement"
  },
  {
    metric: "Bounce Rate",
    target: "40% or less",
    calculation: "Single-page sessions / Total sessions × 100",
    importance: "Indicates user engagement and page relevance"
  },
  {
    metric: "Average Session Duration",
    target: "2+ minutes",
    calculation: "Total session duration / Total sessions",
    importance: "Shows user engagement and content quality"
  },
  {
    metric: "Pages per Session",
    target: "3+ pages",
    calculation: "Total pageviews / Total sessions",
    importance: "Measures user engagement and site navigation"
  },
  {
    metric: "Goal Completion Rate",
    target: "15%+",
    calculation: "Goal completions / Total sessions × 100",
    importance: "Tracks specific business objectives and conversions"
  }
]

const optimizationStrategies = [
  {
    category: "User Experience Optimization",
    strategies: [
      {
        name: "User Journey Mapping",
        description: "Analyze and optimize the complete user experience from entry to conversion",
        implementation: "2-3 months",
        expectedImpact: "25-40% conversion improvement"
      },
      {
        name: "Page Speed Optimization",
        description: "Improve loading times and performance metrics",
        implementation: "1-2 months",
        expectedImpact: "20-30% conversion increase"
      },
      {
        name: "Mobile-First Design",
        description: "Optimize for mobile users who represent the majority of traffic",
        implementation: "2-4 months",
        expectedImpact: "35-50% mobile conversion boost"
      }
    ]
  },
  {
    category: "Conversion Rate Optimization",
    strategies: [
      {
        name: "A/B Testing Program",
        description: "Systematically test and optimize conversion elements",
        implementation: "3-4 months",
        expectedImpact: "15-25% conversion improvement"
      },
      {
        name: "Call-to-Action Optimization",
        description: "Improve button design, placement, and copy",
        implementation: "1-2 months",
        expectedImpact: "20-35% click-through improvement"
      },
      {
        name: "Form Optimization",
        description: "Reduce friction and improve form completion rates",
        implementation: "2-3 months",
        expectedImpact: "30-45% form completion increase"
      }
    ]
  },
  {
    category: "Trust & Credibility Building",
    strategies: [
      {
        name: "Social Proof Integration",
        description: "Add testimonials, reviews, and case studies",
        implementation: "1-2 months",
        expectedImpact: "20-30% trust improvement"
      },
      {
        name: "Security & Trust Badges",
        description: "Display security certificates and trust indicators",
        implementation: "1 month",
        expectedImpact: "15-25% conversion boost"
      },
      {
        name: "Professional Design Enhancement",
        description: "Improve visual appeal and professional appearance",
        implementation: "2-3 months",
        expectedImpact: "25-40% credibility improvement"
      }
    ]
  }
]

const caseStudies = [
  {
    company: "E-commerce Store",
    challenge: "Low conversion rates and high cart abandonment",
    solution: "Complete UX redesign and conversion optimization program",
    results: "45% conversion rate increase, 60% cart abandonment reduction, 80% revenue boost",
    timeline: "6 months"
  },
  {
    company: "Lead Generation Website",
    challenge: "Poor form completion rates and low lead quality",
    solution: "Form optimization and user experience improvement",
    results: "75% form completion increase, 40% lead quality improvement, 120% conversion boost",
    timeline: "4 months"
  },
  {
    company: "Service Business",
    challenge: "Low contact form submissions and poor user engagement",
    solution: "Trust building and CTA optimization",
    results: "90% form submission increase, 50% engagement improvement, 200% lead generation boost",
    timeline: "5 months"
  }
]

const faqs = [
  {
    question: "How long does it take to see conversion rate improvements?",
    answer: "Initial improvements can be seen within 2-4 weeks of implementing changes, but significant and sustainable conversion rate improvements typically take 3-6 months. The timeline depends on your current conversion rate, traffic volume, and the scope of optimization efforts."
  },
  {
    question: "What's the most important factor for improving website conversion?",
    answer: "User experience is the most critical factor. A website that's easy to navigate, loads quickly, and provides a clear path to conversion will significantly outperform one with poor UX. Focus on reducing friction, improving clarity, and creating compelling user journeys."
  },
  {
    question: "How important is mobile optimization for conversion rates?",
    answer: "Mobile optimization is absolutely critical. With over 60% of web traffic coming from mobile devices, poor mobile experience directly hurts conversion rates. Mobile users expect fast, intuitive, and touch-friendly experiences. Neglecting mobile optimization can cost you significant conversions."
  },
  {
    question: "What's the best way to test conversion improvements?",
    answer: "A/B testing is the gold standard for conversion optimization. Test one element at a time (headlines, CTAs, forms, layouts) with statistically significant sample sizes. Use tools like Google Optimize, Optimizely, or VWO to run controlled experiments and measure results accurately."
  },
  {
    question: "How do I know if my conversion rate is good?",
    answer: "Conversion rates vary by industry and business type. E-commerce sites typically see 2-5%, lead generation sites 5-15%, and SaaS businesses 2-10%. Compare your rates to industry benchmarks, but focus on improving your own performance rather than just matching averages."
  }
]

export default function WebsiteConversionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Target className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Transform Visitors Into Customers
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Stop losing potential customers. Learn proven strategies to optimize your website for maximum 
              conversions, improve user experience, and turn more visitors into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Your Free Conversion Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Conversion Metrics */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Metrics for Website Conversion Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track these essential metrics to measure your conversion improvements and identify optimization opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conversionMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{metric.metric}</h3>
                  <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <TargetIcon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{metric.target}</div>
                  <div className="text-sm text-gray-600 font-mono bg-gray-100 p-2 rounded">{metric.calculation}</div>
                </div>
                <p className="text-gray-700">{metric.importance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Conversion Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Conversion Challenges That Kill Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identify and address these critical issues that prevent your website from converting visitors into customers
            </p>
          </div>
          
          <div className="space-y-6">
            {conversionChallenges.map((challenge, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    challenge.impact === 'Critical' ? 'bg-red-100' : 
                    challenge.impact === 'High' ? 'bg-orange-100' : 'bg-yellow-100'
                  }`}>
                    <AlertTriangle className={`h-8 w-8 ${
                      challenge.impact === 'Critical' ? 'text-red-600' : 
                      challenge.impact === 'High' ? 'text-orange-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{challenge.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        challenge.impact === 'Critical' ? 'bg-red-100 text-red-800' : 
                        challenge.impact === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {challenge.impact} Impact
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">{challenge.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <TrendingDownIcon className="h-4 w-4 text-red-500" />
                          Warning Signs
                        </h4>
                        <ul className="space-y-2">
                          {challenge.symptoms.map((symptom, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600">
                              <div className="h-2 w-2 rounded-full bg-red-400"></div>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <LightbulbIcon className="h-4 w-4 text-green-500" />
                          Solutions
                        </h4>
                        <ul className="space-y-2">
                          {challenge.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600">
                              <div className="h-2 w-2 rounded-full bg-green-400"></div>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Strategies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Strategies for Conversion Optimization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implement these strategic approaches to overcome conversion challenges and maximize your website's performance
            </p>
          </div>
          
          <div className="space-y-12">
            {optimizationStrategies.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Lightning className="h-5 w-5 text-primary-600" />
                  </div>
                  {category.category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.strategies.map((strategy, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{strategy.name}</h4>
                      <p className="text-gray-600 mb-4">{strategy.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-600">Implementation: <span className="font-semibold">{strategy.implementation}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUpIcon className="h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Expected Impact: <span className="font-semibold">{strategy.expectedImpact}</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other businesses have dramatically improved their conversion rates using these proven strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution Implemented</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results Achieved</h4>
                    <p className="text-gray-600">{study.results}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Timer className="h-4 w-4" />
                    <span>Timeline: {study.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Website Conversion
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about improving your website's conversion rates and user experience
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Website's Conversion Rate?
            </h2>
            <p className="text-xl text-blue-100">
              Get a comprehensive conversion audit and actionable strategies to optimize your website, 
              improve user experience, and turn more visitors into paying customers.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Your Free Conversion Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold">
              Schedule a Strategy Call
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Free Audit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Actionable Insights</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
