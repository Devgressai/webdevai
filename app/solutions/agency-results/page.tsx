"use client"

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Target, CheckCircle, AlertTriangle, Clock, Zap, Globe, Smartphone, Mail, Phone, Calendar, Star, Award, Building2, Eye, Search, Filter, PieChart, Activity, TrendingUp, Lightbulb, Shield, Info, HelpCircle, BookOpen, FileText, ChevronDown, ChevronUp, MapPin, Globe2, Monitor, TrendingDown, BarChart3, DollarSign, MessageSquare, UserPlus, Filter as Funnel, MousePointer, Settings, Database, BarChart3 as ChartBar, Users, ShoppingCart, CreditCard, MousePointer2, ArrowUpRight, ArrowDownRight, Percent, Timer, Target as TargetIcon, TrendingUp as TrendingUpIcon, TrendingDown as TrendingDownIcon, BarChart, PieChart as PieChartIcon, Activity as ActivityIcon, Zap as Lightning, Heart, Crown, Gem, Calculator, Eye as EyeIcon, Search as SearchIcon, Filter as FilterIcon, PieChart as PieChartIcon2, Activity as ActivityIcon2, TrendingUp as TrendingUpIcon2, TrendingDown as TrendingDownIcon2, Lightbulb as LightbulbIcon, Shield as ShieldIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, BookOpen as BookOpenIcon, FileText as FileTextIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, MapPin as MapPinIcon, Globe2 as Globe2Icon, Monitor as MonitorIcon, UserPlus as UserPlusIcon, Filter as FunnelIcon, MousePointer as MousePointerIcon, Settings as SettingsIcon, Database as DatabaseIcon, BarChart3 as ChartBarIcon, Users as UsersIcon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, MousePointer2 as MousePointer2Icon, ArrowUpRight as ArrowUpRightIcon, ArrowDownRight as ArrowDownRightIcon, Percent as PercentIcon, Timer as TimerIcon, Target as TargetIcon2, TrendingUp as TrendingUpIcon3, TrendingDown as TrendingDownIcon3, BarChart as BarChartIcon, PieChart as PieChartIcon3, Activity as ActivityIcon3 } from 'lucide-react'

// Data structures for the page
const agencyChallenges = [
  {
    title: "Declining Client Retention",
    description: "Clients leaving after initial projects, poor long-term relationships",
    impact: "High",
    symptoms: ["Low repeat business", "Poor client satisfaction scores", "Negative referrals"],
    solutions: ["Client success programs", "Regular check-ins", "Value-added services"]
  },
  {
    title: "Inconsistent Revenue Streams",
    description: "Unpredictable income, feast-or-famine cycles",
    impact: "Critical",
    symptoms: ["Cash flow issues", "Difficulty planning", "Team stress"],
    solutions: ["Retainer models", "Diversified service offerings", "Recurring revenue streams"]
  },
  {
    title: "Poor Team Productivity",
    description: "Low output, missed deadlines, quality issues",
    impact: "High",
    symptoms: ["Overtime costs", "Client complaints", "Team burnout"],
    solutions: ["Process optimization", "Tool automation", "Clear workflows"]
  },
  {
    title: "Weak Market Positioning",
    description: "Undifferentiated services, competing on price alone",
    impact: "Medium",
    symptoms: ["Price wars", "Low win rates", "Poor brand recognition"],
    solutions: ["Specialization", "Unique value propositions", "Thought leadership"]
  },
  {
    title: "Inefficient Client Acquisition",
    description: "High cost per acquisition, poor conversion rates",
    impact: "Critical",
    symptoms: ["Expensive marketing", "Low lead quality", "Poor ROI"],
    solutions: ["Targeted marketing", "Referral programs", "Content marketing"]
  }
]

const performanceMetrics = [
  {
    metric: "Client Retention Rate",
    target: "85%+",
    calculation: "Retained clients / Total clients × 100",
    importance: "Measures long-term client satisfaction and business stability"
  },
  {
    metric: "Revenue per Client",
    target: "$25,000+",
    calculation: "Total revenue / Number of active clients",
    importance: "Indicates client value and pricing strategy effectiveness"
  },
  {
    metric: "Project Profit Margin",
    target: "30%+",
    calculation: "(Revenue - Costs) / Revenue × 100",
    importance: "Shows operational efficiency and pricing adequacy"
  },
  {
    metric: "Client Acquisition Cost",
    target: "$2,000 or less",
    calculation: "Total marketing spend / New clients acquired",
    importance: "Measures marketing efficiency and ROI"
  },
  {
    metric: "Team Utilization Rate",
    target: "80%+",
    calculation: "Billable hours / Total available hours × 100",
    importance: "Indicates team productivity and capacity management"
  }
]

const successStrategies = [
  {
    category: "Client Relationship Management",
    strategies: [
      {
        name: "Client Success Programs",
        description: "Proactive client engagement and value delivery",
        implementation: "3-6 months",
        expectedImpact: "25% increase in retention"
      },
      {
        name: "Regular Business Reviews",
        description: "Quarterly strategic discussions with key clients",
        implementation: "1-2 months",
        expectedImpact: "Improved client satisfaction"
      },
      {
        name: "Value-Added Services",
        description: "Additional offerings that enhance client success",
        implementation: "2-4 months",
        expectedImpact: "Higher client lifetime value"
      }
    ]
  },
  {
    category: "Revenue Optimization",
    strategies: [
      {
        name: "Retainer Models",
        description: "Predictable monthly income streams",
        implementation: "2-3 months",
        expectedImpact: "30% revenue stability improvement"
      },
      {
        name: "Value-Based Pricing",
        description: "Pricing based on client outcomes, not hours",
        implementation: "3-4 months",
        expectedImpact: "20% average price increase"
      },
      {
        name: "Upselling Opportunities",
        description: "Identifying additional service needs",
        implementation: "1-2 months",
        expectedImpact: "15% revenue per client increase"
      }
    ]
  },
  {
    category: "Operational Excellence",
    strategies: [
      {
        name: "Process Automation",
        description: "Streamlining repetitive tasks and workflows",
        implementation: "2-4 months",
        expectedImpact: "40% efficiency improvement"
      },
      {
        name: "Project Management Tools",
        description: "Better tracking and communication systems",
        implementation: "1-2 months",
        expectedImpact: "25% deadline adherence improvement"
      },
      {
        name: "Quality Assurance Systems",
        description: "Consistent output and error reduction",
        implementation: "2-3 months",
        expectedImpact: "30% quality improvement"
      }
    ]
  }
]

const caseStudies = [
  {
    company: "Digital Marketing Agency",
    challenge: "Declining client retention and inconsistent revenue",
    solution: "Implemented client success programs and retainer models",
    results: "85% retention rate, 40% revenue increase, 60% profit margin improvement",
    timeline: "6 months"
  },
  {
    company: "Web Development Studio",
    challenge: "Poor team productivity and missed deadlines",
    solution: "Process optimization and project management tools",
    results: "90% on-time delivery, 35% efficiency improvement, 50% team satisfaction increase",
    timeline: "4 months"
  },
  {
    company: "SEO Consulting Firm",
    challenge: "Weak market positioning and price competition",
    solution: "Specialization in local business SEO and thought leadership",
    results: "200% price increase, 80% win rate, 300% brand recognition improvement",
    timeline: "8 months"
  }
]

const faqs = [
  {
    question: "How long does it take to see results from agency optimization?",
    answer: "Most agencies see initial improvements within 2-3 months, with significant results within 6-12 months. The timeline depends on the specific challenges and implementation speed."
  },
  {
    question: "What’s the most important metric for agency success?",
    answer: "Client retention rate is typically the most critical metric, as it directly impacts revenue stability, team morale, and long-term business growth. A high retention rate indicates satisfied clients and effective service delivery."
  },
  {
    question: "How can we improve team productivity without burnout?",
    answer: "Focus on process optimization, automation, and clear workflows rather than just working harder. Implement realistic deadlines, provide proper tools, and ensure work-life balance for sustainable productivity improvements."
  },
  {
    question: "What’s the best pricing strategy for agencies?",
    answer: "Value-based pricing typically outperforms hourly billing. Price based on the outcomes and value you deliver to clients, not the time you spend. This approach allows for higher margins and better client relationships."
  },
  {
    question: "How do we differentiate our agency in a crowded market?",
    answer: "Specialize in a specific industry or service type, develop unique methodologies, showcase thought leadership, and focus on delivering exceptional client experiences. Avoid competing solely on price."
  }
]

export default function AgencyResultsPage() {
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
              Transform Your Agency’s Performance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Stop struggling with inconsistent results. Learn proven strategies to boost client retention, 
              increase revenue, and build a high-performing agency that scales sustainably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Your Free Agency Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Performance Metrics for Agency Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track these essential metrics to identify opportunities and measure your agency’s performance improvements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
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

      {/* Common Agency Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Agency Challenges That Kill Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identify and address these critical issues that prevent agencies from reaching their full potential
            </p>
          </div>
          
          <div className="space-y-6">
            {agencyChallenges.map((challenge, index) => (
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

      {/* Success Strategies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Strategies for Agency Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implement these strategic approaches to overcome challenges and achieve sustainable agency growth
            </p>
          </div>
          
          <div className="space-y-12">
            {successStrategies.map((category, index) => (
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
              Real Results from Real Agencies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other agencies have transformed their performance using these proven strategies
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
              Frequently Asked Questions About Agency Performance
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about improving agency performance and results
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
              Ready to Transform Your Agency’s Performance?
            </h2>
            <p className="text-xl text-blue-100">
              Get a personalized assessment of your agency’s performance and actionable strategies 
              to boost results, increase revenue, and build a scalable business.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Your Free Agency Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold">
              Schedule a Strategy Call
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Free Assessment</span>
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
