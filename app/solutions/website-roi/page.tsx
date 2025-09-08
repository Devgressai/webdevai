"use client"

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight, DollarSign, TrendingUp, BarChart3, Target, Users, CheckCircle, Calculator, Lightbulb, Shield, Clock, Zap, Globe, Smartphone, Mail, Phone, Calendar, Star, Award, Building2, Eye, Search, Filter, PieChart, Activity, TrendingDown, AlertTriangle, CheckCircle2, XCircle, Info, HelpCircle, BookOpen, FileText, Play, Pause, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../../components/ui/breadcrumb'

const roiMetrics = [
  {
    title: "Customer Acquisition Cost (CAC)",
    description: "The total cost to acquire a new customer through your website",
    calculation: "Total Marketing Spend ÷ Number of New Customers",
    target: "< $50",
    icon: Calculator,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Customer Lifetime Value (CLV)",
    description: "The total revenue a customer generates over their relationship with your business",
    calculation: "Average Purchase Value × Purchase Frequency × Customer Lifespan",
    target: "> $500",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Return on Ad Spend (ROAS)",
    description: "Revenue generated for every dollar spent on advertising",
    calculation: "Revenue from Ads ÷ Cost of Ads",
    target: "> 4:1",
    icon: BarChart3,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Conversion Rate",
    description: "Percentage of visitors who take a desired action",
    calculation: "Conversions ÷ Total Visitors × 100",
    target: "> 2.5%",
    icon: Target,
    color: "from-orange-500 to-red-600"
  }
]

const optimizationStrategies = [
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Systematically improve your website's ability to convert visitors into customers",
    tactics: [
      "A/B testing of headlines, CTAs, and layouts",
      "User experience optimization",
      "Trust signal implementation",
      "Form optimization and simplification",
      "Social proof and testimonials"
    ],
    impact: "15-40% increase in conversion rates",
    icon: Target,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility in search results to attract qualified traffic",
    tactics: [
      "Keyword research and optimization",
      "Content creation and optimization",
      "Technical SEO improvements",
      "Local SEO optimization",
      "Link building and authority building"
    ],
    impact: "200-400% increase in organic traffic",
    icon: Search,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "User Experience (UX) Design",
    description: "Create intuitive, engaging experiences that guide visitors toward conversion",
    tactics: [
      "Mobile-first responsive design",
      "Intuitive navigation and information architecture",
      "Fast loading times and performance optimization",
      "Accessibility compliance",
      "User journey mapping and optimization"
    ],
    impact: "25-50% improvement in user engagement",
    icon: Eye,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Content Marketing Strategy",
    description: "Create valuable, relevant content that attracts and converts your target audience",
    tactics: [
      "Blog content creation and optimization",
      "Video content and multimedia",
      "Email marketing campaigns",
      "Social media content strategy",
      "Lead magnet creation"
    ],
    impact: "300-500% increase in qualified leads",
    icon: FileText,
    color: "from-orange-500 to-red-600"
  }
]

const roiCaseStudies = [
  {
    company: "E-commerce Retailer",
    industry: "Fashion & Apparel",
    challenge: "Website generating only $2,000/month in sales with $5,000/month ad spend",
    solution: "Implemented CRO strategies, improved UX, and optimized product pages",
    results: [
      "Conversion rate increased from 1.2% to 3.8%",
      "Monthly revenue increased to $18,000",
      "ROAS improved from 0.4:1 to 3.6:1",
      "Customer acquisition cost reduced by 68%"
    ],
    roi: "800% return on optimization investment"
  },
  {
    company: "B2B Software Company",
    industry: "SaaS",
    challenge: "High website traffic but low lead generation and poor conversion rates",
    solution: "Redesigned landing pages, implemented lead nurturing, and optimized conversion funnels",
    results: [
      "Lead generation increased by 450%",
      "Sales qualified leads improved by 300%",
      "Customer acquisition cost reduced by 55%",
      "Monthly recurring revenue increased by 200%"
    ],
    roi: "650% return on optimization investment"
  },
  {
    company: "Local Service Business",
    industry: "Home Services",
    challenge: "Website not generating enough local leads and poor local search visibility",
    solution: "Implemented local SEO, improved user experience, and added trust signals",
    results: [
      "Local search rankings improved by 85%",
      "Website leads increased by 300%",
      "Phone calls from website increased by 400%",
      "Monthly revenue increased by 250%"
    ],
    roi: "750% return on optimization investment"
  }
]

const commonMistakes = [
  {
    mistake: "Focusing Only on Traffic",
    description: "Many businesses obsess over increasing website traffic without considering quality or conversion potential",
    impact: "High traffic with low conversions leads to poor ROI and wasted resources",
    solution: "Focus on attracting qualified traffic that matches your ideal customer profile",
    icon: TrendingUp,
    color: "from-red-500 to-pink-600"
  },
  {
    mistake: "Ignoring Mobile Experience",
    description: "Neglecting mobile optimization when 60%+ of web traffic comes from mobile devices",
    impact: "Poor mobile experience leads to high bounce rates and lost conversions",
    solution: "Implement mobile-first design and ensure excellent mobile user experience",
    icon: Smartphone,
    color: "from-orange-500 to-yellow-600"
  },
  {
    mistake: "No Conversion Tracking",
    description: "Failing to implement proper analytics and conversion tracking",
    impact: "Unable to measure performance, identify issues, or optimize for better results",
    solution: "Set up comprehensive tracking including goals, funnels, and conversion attribution",
    icon: BarChart3,
    color: "from-yellow-500 to-green-600"
  },
  {
    mistake: "Poor Value Proposition",
    description: "Website doesn't clearly communicate what makes your business unique and valuable",
    impact: "Visitors leave without understanding why they should choose your business",
    solution: "Create compelling, clear value propositions that address customer pain points",
    icon: Target,
    color: "from-green-500 to-blue-600"
  },
  {
    mistake: "Slow Website Performance",
    description: "Website takes too long to load, causing visitors to abandon before seeing content",
    impact: "Every second of delay can reduce conversions by 7%",
    solution: "Optimize images, minimize code, use CDN, and implement caching strategies",
    icon: Clock,
    color: "from-blue-500 to-purple-600"
  },
  {
    mistake: "Weak Call-to-Actions",
    description: "Unclear or unappealing CTAs that don't motivate visitors to take action",
    impact: "Low conversion rates and missed opportunities to capture leads",
    solution: "Create compelling, action-oriented CTAs with clear value propositions",
    icon: ArrowRight,
    color: "from-purple-500 to-pink-600"
  }
]

const roiCalculator = {
  currentMetrics: {
    monthlyTraffic: 10000,
    conversionRate: 1.5,
    averageOrderValue: 150,
    monthlyAdSpend: 5000
  },
  improvedMetrics: {
    monthlyTraffic: 15000,
    conversionRate: 3.0,
    averageOrderValue: 200,
    monthlyAdSpend: 5000
  }
}

export default function WebsiteROIPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [showCalculator, setShowCalculator] = useState(false)

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  const calculateROI = (traffic: number, conversion: number, orderValue: number, adSpend: number) => {
    const revenue = (traffic * (conversion / 100) * orderValue)
    const profit = revenue - adSpend
    const roi = (profit / adSpend) * 100
    return { revenue, profit, roi }
  }

  const currentROI = calculateROI(
    roiCalculator.currentMetrics.monthlyTraffic,
    roiCalculator.currentMetrics.conversionRate,
    roiCalculator.currentMetrics.averageOrderValue,
    roiCalculator.currentMetrics.monthlyAdSpend
  )

  const improvedROI = calculateROI(
    roiCalculator.improvedMetrics.monthlyTraffic,
    roiCalculator.improvedMetrics.conversionRate,
    roiCalculator.improvedMetrics.averageOrderValue,
    roiCalculator.improvedMetrics.monthlyAdSpend
  )

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-cyan-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={[
              { label: 'Solutions', href: '/solutions' },
              { label: 'Website ROI', current: true }
            ]} 
            className="mb-8"
          />
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-sm font-semibold mb-8 shadow-lg">
              <DollarSign className="w-5 h-5 mr-2" />
              Website ROI Optimization
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-secondary-900 mb-8 leading-tight">
              Your Website{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Not Driving ROI?
              </span>{" "}
              Let's Fix That
            </h1>
            
            <p className="text-xl lg:text-2xl leading-8 text-secondary-600 mb-12 max-w-3xl mx-auto">
              Transform your website from a cost center into a revenue-generating asset with our 
              proven ROI optimization strategies. We've helped businesses achieve 300-800% returns 
              on their website investments through data-driven optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact" className="flex items-center">
                  Get Free ROI Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                onClick={() => setShowCalculator(!showCalculator)}
              >
                <Calculator className="w-5 h-5 mr-2" />
                ROI Calculator
              </Button>
            </div>

            {showCalculator && (
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">Website ROI Calculator</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-secondary-900">Current Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Monthly Traffic:</span>
                        <span className="font-semibold">{roiCalculator.currentMetrics.monthlyTraffic.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Conversion Rate:</span>
                        <span className="font-semibold">{roiCalculator.currentMetrics.conversionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Avg Order Value:</span>
                        <span className="font-semibold">${roiCalculator.currentMetrics.averageOrderValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Monthly Ad Spend:</span>
                        <span className="font-semibold">${roiCalculator.currentMetrics.monthlyAdSpend.toLocaleString()}</span>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Current ROI:</span>
                        <span className={currentROI.roi >= 0 ? 'text-green-600' : 'text-red-600'}>
                          {currentROI.roi.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-secondary-900">Optimized Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Monthly Traffic:</span>
                        <span className="font-semibold text-green-600">{roiCalculator.improvedMetrics.monthlyTraffic.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Conversion Rate:</span>
                        <span className="font-semibold text-green-600">{roiCalculator.improvedMetrics.conversionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Avg Order Value:</span>
                        <span className="font-semibold text-green-600">${roiCalculator.improvedMetrics.averageOrderValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Monthly Ad Spend:</span>
                        <span className="font-semibold">${roiCalculator.improvedMetrics.monthlyAdSpend.toLocaleString()}</span>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Improved ROI:</span>
                        <span className="text-green-600">{improvedROI.roi.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-secondary-600 mb-4">
                    <strong>Potential Improvement:</strong> {((improvedROI.roi - currentROI.roi) / Math.abs(currentROI.roi) * 100).toFixed(1)}% increase in ROI
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    <Link href="/contact" className="flex items-center">
                      Get Your Custom ROI Plan
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Key ROI Metrics You Need to Track
            </h2>
            <p className="text-xl text-secondary-600">
              Understanding these critical metrics is essential for measuring and improving your website's return on investment. 
              Each metric provides insights into different aspects of your website's performance and revenue generation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roiMetrics.map((metric, index) => (
              <div key={metric.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-6`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{metric.title}</h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">{metric.description}</p>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-blue-800 mb-2">Calculation:</p>
                  <p className="text-blue-700 font-mono text-sm">{metric.calculation}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-800 mb-2">Target:</p>
                  <p className="text-green-700 font-bold">{metric.target}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Why Your Website Isn't Driving ROI
            </h2>
            <p className="text-xl text-secondary-600">
              Identify the key issues preventing your website from delivering measurable returns on your investment. 
              These common problems can significantly impact your website's ability to generate revenue and provide ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-6">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">No Lead Generation</h3>
              <p className="text-secondary-600 leading-relaxed">
                Your website isn't capturing leads or converting visitors into potential customers. 
                Without lead generation, your website becomes a digital brochure rather than a business tool.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 mb-6">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Poor Analytics</h3>
              <p className="text-secondary-600 leading-relaxed">
                Lack of tracking and measurement makes it impossible to optimize for better performance. 
                You can't improve what you can't measure, leading to missed optimization opportunities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 mb-6">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Wrong Audience</h3>
              <p className="text-secondary-600 leading-relaxed">
                Your website attracts visitors who aren't interested in your products or services. 
                This leads to high bounce rates and wasted marketing spend on unqualified traffic.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Poor User Experience</h3>
              <p className="text-secondary-600 leading-relaxed">
                Visitors leave before converting due to confusing navigation, slow performance, or poor design. 
                User experience directly impacts conversion rates and overall website effectiveness.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 mb-6">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">No Clear Value</h3>
              <p className="text-secondary-600 leading-relaxed">
                Visitors don't understand what you offer or why they should choose your business. 
                Without a compelling value proposition, visitors have no reason to convert or engage.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Lack of Optimization</h3>
              <p className="text-secondary-600 leading-relaxed">
                No ongoing optimization to improve performance and increase conversions over time. 
                Websites require continuous improvement to maintain and increase ROI as markets evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Proven ROI Optimization Strategies
            </h2>
            <p className="text-xl text-secondary-600">
              Our comprehensive approach combines multiple optimization strategies to maximize your website's return on investment. 
              Each strategy is designed to address specific aspects of website performance and conversion optimization.
            </p>
          </div>

          <div className="space-y-8">
            {optimizationStrategies.map((strategy, index) => (
              <div key={strategy.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center flex-shrink-0`}>
                    <strategy.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">{strategy.title}</h3>
                    <p className="text-lg text-secondary-600 mb-6 leading-relaxed">{strategy.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-secondary-900 mb-3">Key Tactics:</h4>
                        <ul className="space-y-2">
                          {strategy.tactics.map((tactic, tacticIndex) => (
                            <li key={tacticIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-secondary-700">{tactic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                        <h4 className="text-sm font-semibold text-green-800 mb-2">Expected Impact:</h4>
                        <p className="text-2xl font-bold text-green-700">{strategy.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Real ROI Results from Real Businesses
            </h2>
            <p className="text-xl text-secondary-600">
              See how our ROI optimization strategies have transformed websites from cost centers into 
              revenue-generating assets. These case studies demonstrate the real impact of data-driven optimization.
            </p>
          </div>

          <div className="space-y-8">
            {roiCaseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{caseStudy.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">{caseStudy.company}</h3>
                    <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                      <strong>Challenge:</strong> {caseStudy.challenge}
                    </p>
                    <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                      <strong>Solution:</strong> {caseStudy.solution}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-secondary-900">Results:</h4>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white text-center">
                      <h4 className="text-lg font-semibold mb-2">ROI Achievement</h4>
                      <p className="text-2xl font-bold">{caseStudy.roi}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Common ROI-Killing Mistakes to Avoid
            </h2>
            <p className="text-xl text-secondary-600">
              Many businesses unknowingly make these critical mistakes that significantly reduce their website's ROI. 
              Understanding and avoiding these pitfalls is essential for maximizing your website's performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonMistakes.map((mistake, index) => (
              <div key={mistake.mistake} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${mistake.color} flex items-center justify-center mb-6`}>
                  <mistake.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{mistake.mistake}</h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">{mistake.description}</p>
                
                <div className="bg-red-100 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">Impact:</h4>
                  <p className="text-red-700">{mistake.impact}</p>
                </div>
                
                <div className="bg-green-100 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">Solution:</h4>
                  <p className="text-green-700">{mistake.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Frequently Asked Questions About Website ROI
            </h2>
            <p className="text-xl text-secondary-600">
              Get answers to the most common questions about website ROI optimization and how to improve your website's performance.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to see ROI improvements from website optimization?",
                answer: "Most businesses see initial improvements within 30-60 days, with significant ROI gains typically appearing within 3-6 months. The timeline depends on the scope of optimization, your industry, and the strategies implemented. We provide monthly progress reports so you can track improvements in real-time."
              },
              {
                question: "What's the typical ROI improvement businesses see from website optimization?",
                answer: "Our clients typically see 300-800% returns on their optimization investment. This includes increased conversion rates, higher average order values, reduced customer acquisition costs, and improved search rankings. The exact improvement depends on your starting point and optimization goals."
              },
              {
                question: "Do I need to redesign my entire website to improve ROI?",
                answer: "Not necessarily. While a complete redesign can be beneficial, many ROI improvements come from optimizing existing elements like conversion funnels, user experience, content, and technical performance. We start with high-impact, low-cost optimizations before recommending larger changes."
              },
              {
                question: "How do you measure and track ROI improvements?",
                answer: "We implement comprehensive tracking including conversion goals, user behavior analysis, A/B testing, and revenue attribution. We provide detailed dashboards showing key metrics like conversion rates, customer acquisition costs, and revenue per visitor. This data-driven approach ensures measurable improvements."
              },
              {
                question: "What's included in your ROI optimization services?",
                answer: "Our comprehensive service includes website audit, conversion rate optimization, user experience improvements, content optimization, technical SEO, performance optimization, ongoing testing, and monthly reporting. We work as an extension of your team to continuously improve your website's performance."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-secondary-900">{faq.question}</span>
                  {activeFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-secondary-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-secondary-500" />
                  )}
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get ROI from Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let our ROI experts transform your website into a revenue-generating machine. 
            We've helped hundreds of businesses achieve remarkable returns on their website investments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-blue-600 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact" className="flex items-center">
                Get Free ROI Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/case-studies" className="flex items-center">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>24hr Response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
