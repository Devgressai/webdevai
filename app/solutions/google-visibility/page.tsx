"use client"

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Target, CheckCircle, AlertTriangle, Clock, Zap, Globe, Smartphone, Mail, Phone, Calendar, Star, Award, Building2, Eye, Search, Filter, PieChart, Activity, TrendingUp, Lightbulb, Shield, Info, HelpCircle, BookOpen, FileText, ChevronDown, ChevronUp, MapPin, Globe2, Monitor, TrendingDown, BarChart3, DollarSign, MessageSquare, UserPlus, Filter as Funnel, MousePointer, Settings, Database, BarChart3 as ChartBar, Users, ShoppingCart, CreditCard, MousePointer2, ArrowUpRight, ArrowDownRight, Percent, Timer, Target as TargetIcon, TrendingUp as TrendingUpIcon, TrendingDown as TrendingDownIcon, BarChart, PieChart as PieChartIcon, Activity as ActivityIcon, Zap as Lightning, Heart, Crown, Gem, Calculator, Eye as EyeIcon, Search as SearchIcon, Filter as FilterIcon, PieChart as PieChartIcon2, Activity as ActivityIcon2, TrendingUp as TrendingUpIcon2, TrendingDown as TrendingDownIcon2, Lightbulb as LightbulbIcon, Shield as ShieldIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, BookOpen as BookOpenIcon, FileText as FileTextIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, MapPin as MapPinIcon, Globe2 as Globe2Icon, Monitor as MonitorIcon, UserPlus as UserPlusIcon, Filter as FunnelIcon, MousePointer as MousePointerIcon, Settings as SettingsIcon, Database as DatabaseIcon, BarChart3 as ChartBarIcon, Users as UsersIcon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, MousePointer2 as MousePointer2Icon, ArrowUpRight as ArrowUpRightIcon, ArrowDownRight as ArrowDownRightIcon, Percent as PercentIcon, Timer as TimerIcon, Target as TargetIcon2, TrendingUp as TrendingUpIcon3, TrendingDown as TrendingDownIcon3, BarChart as BarChartIcon, PieChart as PieChartIcon3, Activity as ActivityIcon3 } from 'lucide-react'

// Data structures for the page
const visibilityChallenges = [
  {
    title: "Low Search Rankings",
    description: "Website not appearing in top search results for target keywords",
    impact: "Critical",
    symptoms: ["Page 2+ rankings", "Low organic traffic", "Poor click-through rates"],
    solutions: ["Technical SEO optimization", "Content quality improvement", "Backlink building"]
  },
  {
    title: "Poor Local Search Visibility",
    description: "Not appearing in local search results or Google Maps",
    impact: "High",
    symptoms: ["Missing from local packs", "Poor Google My Business optimization", "No local citations"],
    solutions: ["Google My Business optimization", "Local citation building", "Local content creation"]
  },
  {
    title: "Mobile Search Issues",
    description: "Poor performance in mobile search results",
    impact: "High",
    symptoms: ["Mobile usability problems", "Slow mobile loading", "Poor mobile UX"],
    solutions: ["Mobile-first optimization", "Page speed improvement", "Mobile UX enhancement"]
  },
  {
    title: "Voice Search Invisibility",
    description: "Not optimized for voice search queries",
    impact: "Medium",
    symptoms: ["Missing voice search results", "Poor featured snippet optimization", "No conversational content"],
    solutions: ["Featured snippet optimization", "Conversational content", "Voice search keywords"]
  },
  {
    title: "Featured Snippet Gap",
    description: "Missing opportunities for featured snippets and rich results",
    impact: "Medium",
    symptoms: ["No featured snippets", "Poor rich snippet optimization", "Missing structured data"],
    solutions: ["Structured data implementation", "Featured snippet optimization", "Rich result targeting"]
  }
]

const visibilityMetrics = [
  {
    metric: "Organic Search Visibility",
    target: "Top 3 positions",
    calculation: "Average ranking position across target keywords",
    importance: "Measures overall search engine visibility and competitive position"
  },
  {
    metric: "Click-Through Rate (CTR)",
    target: "3%+",
    calculation: "Clicks / Impressions × 100",
    importance: "Indicates how compelling your search results are to users"
  },
  {
    metric: "Featured Snippet Rate",
    target: "15%+",
    calculation: "Featured snippets / Total keyword opportunities × 100",
    importance: "Shows optimization for rich results and voice search"
  },
  {
    metric: "Local Pack Appearance",
    target: "Top 3 positions",
    calculation: "Position in local search results",
    importance: "Critical for local business visibility and foot traffic"
  },
  {
    metric: "Mobile Search Performance",
    target: "90%+",
    calculation: "Mobile search visibility score",
    importance: "Essential as mobile search dominates user behavior"
  }
]

const optimizationStrategies = [
  {
    category: "Technical SEO Foundation",
    strategies: [
      {
        name: "Core Web Vitals Optimization",
        description: "Improve page speed, interactivity, and visual stability",
        implementation: "2-4 months",
        expectedImpact: "15-25% ranking improvement"
      },
      {
        name: "Mobile-First Indexing",
        description: "Ensure mobile version is fully optimized and indexed",
        implementation: "1-2 months",
        expectedImpact: "20-30% mobile visibility boost"
      },
      {
        name: "Schema Markup Implementation",
        description: "Add structured data for rich snippets and better understanding",
        implementation: "2-3 months",
        expectedImpact: "10-20% rich result appearance"
      }
    ]
  },
  {
    category: "Content & Keyword Optimization",
    strategies: [
      {
        name: "Featured Snippet Targeting",
        description: "Optimize content to capture featured snippets",
        implementation: "3-4 months",
        expectedImpact: "25-40% featured snippet rate increase"
      },
      {
        name: "Voice Search Optimization",
        description: "Create conversational content for voice queries",
        implementation: "2-3 months",
        expectedImpact: "15-25% voice search visibility"
      },
      {
        name: "Long-tail Keyword Strategy",
        description: "Target specific, high-intent search queries",
        implementation: "2-4 months",
        expectedImpact: "30-50% conversion rate improvement"
      }
    ]
  },
  {
    category: "Local SEO Enhancement",
    strategies: [
      {
        name: "Google My Business Optimization",
        description: "Complete profile optimization and regular updates",
        implementation: "1-2 months",
        expectedImpact: "40-60% local search improvement"
      },
      {
        name: "Local Citation Building",
        description: "Build consistent business listings across directories",
        implementation: "2-3 months",
        expectedImpact: "25-35% local visibility boost"
      },
      {
        name: "Local Content Creation",
        description: "Create location-specific content and landing pages",
        implementation: "3-4 months",
        expectedImpact: "20-30% local traffic increase"
      }
    ]
  }
]

const caseStudies = [
  {
    company: "Local Restaurant Chain",
    challenge: "Poor local search visibility and Google Maps presence",
    solution: "Complete Google My Business optimization and local citation building",
    results: "Top 3 local pack positions, 200% local traffic increase, 150% foot traffic boost",
    timeline: "4 months"
  },
  {
    company: "E-commerce Website",
    challenge: "Low organic rankings and poor mobile performance",
    solution: "Technical SEO overhaul and mobile-first optimization",
    results: "85% ranking improvement, 300% mobile traffic increase, 40% conversion rate boost",
    timeline: "6 months"
  },
  {
    company: "Professional Services Firm",
    challenge: "Missing featured snippets and poor voice search visibility",
    solution: "Featured snippet optimization and conversational content creation",
    results: "25% featured snippet rate, 180% voice search visibility, 60% CTR improvement",
    timeline: "5 months"
  }
]

const faqs = [
  {
    question: "How long does it take to improve Google search visibility?",
    answer: "Initial improvements can be seen within 2-4 weeks, but significant and sustainable visibility gains typically take 3-6 months. The timeline depends on your current technical foundation, content quality, and competitive landscape."
  },
  {
    question: "What’s the most important factor for Google visibility?",
    answer: "User experience and content quality are the most critical factors. Google prioritizes websites that provide valuable, relevant content and excellent user experience across all devices. Technical SEO provides the foundation, but content and UX drive rankings."
  },
  {
    question: "How important is mobile optimization for Google visibility?",
    answer: "Mobile optimization is absolutely critical. Google uses mobile-first indexing, meaning your mobile version is the primary version used for ranking. Poor mobile performance will significantly hurt your search visibility across all devices."
  },
  {
    question: "Can local SEO improve overall Google visibility?",
    answer: "Yes, local SEO can significantly improve overall visibility, especially for businesses serving specific geographic areas. Local signals like citations, reviews, and Google My Business optimization contribute to both local and general search rankings."
  },
  {
    question: "What’s the best way to target featured snippets?",
    answer: "Focus on creating comprehensive, well-structured content that directly answers user questions. Use clear headings, bullet points, and numbered lists. Research what questions your target audience is asking and provide authoritative, helpful answers."
  }
]

export default function GoogleVisibilityPage() {
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
                <Eye className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Dominate Google Search Results
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Stop being invisible on Google. Learn proven strategies to boost your search rankings, 
              capture featured snippets, and dominate both organic and local search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Your Free Visibility Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Visibility Metrics */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Metrics for Google Search Visibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track these essential metrics to measure your search visibility improvements and identify optimization opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibilityMetrics.map((metric, index) => (
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

      {/* Common Visibility Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Google Visibility Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identify and address these critical issues that prevent your website from appearing prominently in Google search results
            </p>
          </div>
          
          <div className="space-y-6">
            {visibilityChallenges.map((challenge, index) => (
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
              Proven Strategies for Google Visibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implement these strategic approaches to overcome visibility challenges and dominate Google search results
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
              See how other businesses have dramatically improved their Google search visibility using these proven strategies
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
              Frequently Asked Questions About Google Visibility
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about improving your Google search visibility and rankings
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
              Ready to Dominate Google Search Results?
            </h2>
            <p className="text-xl text-blue-100">
              Get a comprehensive visibility audit and actionable strategies to boost your Google rankings, 
              capture featured snippets, and dominate both organic and local search results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Your Free Visibility Audit
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
