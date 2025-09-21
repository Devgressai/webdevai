"use client"

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight, TrendingDown, Search, BarChart3, Target, Users, CheckCircle, AlertTriangle, Clock, Zap, Globe, Smartphone, Mail, Phone, Calendar, Star, Award, Building2, Eye, Filter, PieChart, Activity, TrendingUp, Lightbulb, Shield, Info, HelpCircle, BookOpen, FileText, ChevronDown, ChevronUp, MapPin, Globe2, Monitor, Smartphone as Mobile, Laptop, Tablet } from 'lucide-react'
import Link from 'next/link'

const trafficDeclineCauses = [
  {
    title: "Google Algorithm Updates",
    description: "Major search engine algorithm changes that can significantly impact your website’s search rankings and traffic",
    examples: [
      "Core Web Vitals updates",
      "BERT and natural language processing changes",
      "Mobile-first indexing",
      "E-A-T (Expertise, Authoritativeness, Trustworthiness) updates",
      "Page experience signals"
    ],
    impact: "Can cause 20-80% traffic drops",
    icon: Search,
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Technical SEO Issues",
    description: "Website technical problems that prevent search engines from properly crawling and indexing your content",
    examples: [
      "Broken internal links",
      "Slow page load speeds",
      "Mobile usability issues",
      "Duplicate content problems",
      "XML sitemap errors"
    ],
    impact: "Can cause 15-60% traffic drops",
    icon: BarChart3,
    color: "from-orange-500 to-yellow-600"
  },
  {
    title: "Content Quality Decline",
    description: "Deterioration in content quality, relevance, or freshness that reduces search engine rankings",
    examples: [
      "Outdated information",
      "Thin or low-value content",
      "Keyword stuffing",
      "Poor readability",
      "Lack of user engagement"
    ],
    impact: "Can cause 25-70% traffic drops",
    icon: FileText,
    color: "from-yellow-500 to-green-600"
  },
  {
    title: "Competition Increase",
    description: "New competitors entering your market or existing competitors improving their SEO performance",
    examples: [
      "New businesses targeting your keywords",
      "Competitors improving content quality",
      "Increased backlink competition",
      "Better user experience from competitors",
      "More aggressive marketing strategies"
    ],
    impact: "Can cause 10-50% traffic drops",
    icon: Target,
    color: "from-green-500 to-blue-600"
  },
  {
    title: "User Experience Problems",
    description: "Issues that cause visitors to leave quickly, increasing bounce rates and reducing rankings",
    examples: [
      "Poor mobile design",
      "Difficult navigation",
      "Slow loading times",
      "Broken functionality",
      "Poor accessibility"
    ],
    impact: "Can cause 20-65% traffic drops",
    icon: Users,
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Link Profile Issues",
    description: "Problems with your website’s backlink profile that can harm search engine rankings",
    examples: [
      "Lost valuable backlinks",
      "Toxic or spammy backlinks",
      "Link profile diversity issues",
      "Anchor text over-optimization",
      "Broken external links"
    ],
    impact: "Can cause 15-55% traffic drops",
    icon: Globe,
    color: "from-purple-500 to-pink-600"
  }
]

const recoveryStrategies = [
  {
    title: "Technical SEO Audit & Fixes",
    description: "Comprehensive technical analysis and optimization to resolve website performance issues",
    actions: [
      "Core Web Vitals optimization",
      "Mobile usability improvements",
      "Page speed optimization",
      "Technical error resolution",
      "Schema markup implementation"
    ],
    timeline: "2-4 weeks for initial improvements",
    impact: "15-40% traffic recovery",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Content Quality Enhancement",
    description: "Improving existing content and creating new high-value content to regain search rankings",
    actions: [
      "Content gap analysis",
      "Content optimization and expansion",
      "New content creation",
      "User intent optimization",
      "Content freshness updates"
    ],
    timeline: "4-8 weeks for measurable results",
    impact: "25-60% traffic recovery",
    icon: FileText,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "User Experience Optimization",
    description: "Improving website usability and engagement to reduce bounce rates and improve rankings",
    actions: [
      "Mobile-first design optimization",
      "Navigation and usability improvements",
      "Conversion funnel optimization",
      "Accessibility compliance",
      "Performance optimization"
    ],
    timeline: "3-6 weeks for implementation",
    impact: "20-50% traffic recovery",
    icon: Eye,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Link Building & Authority Building",
    description: "Strategic link acquisition and authority building to improve search engine rankings",
    actions: [
      "Broken link building",
      "Guest posting and content marketing",
      "Industry relationship building",
      "Social media engagement",
      "PR and media outreach"
    ],
    timeline: "6-12 weeks for sustainable results",
    impact: "30-70% traffic recovery",
    icon: Globe,
    color: "from-orange-500 to-red-600"
  }
]

const trafficRecoveryCaseStudies = [
  {
    company: "E-commerce Fashion Brand",
    industry: "Retail",
    problem: "Traffic dropped 65% after Google algorithm update",
    solution: "Implemented technical SEO fixes, improved mobile experience, and enhanced content quality",
    results: [
      "Traffic recovered to 120% of pre-drop levels",
      "Mobile conversion rate increased by 45%",
      "Search rankings improved for 85% of target keywords",
      "Revenue increased by 35% within 6 months"
    ],
    recoveryTime: "4 months to full recovery"
  },
  {
    company: "B2B Software Company",
    industry: "Technology",
    problem: "Traffic declined 40% due to content quality issues",
    solution: "Complete content audit, optimization, and new content creation strategy",
    results: [
      "Organic traffic increased by 180%",
      "Lead generation improved by 250%",
      "Search rankings improved for 90% of target terms",
      "Customer acquisition cost reduced by 40%"
    ],
    recoveryTime: "6 months to full recovery"
  },
  {
    company: "Local Service Business",
    industry: "Home Services",
    problem: "Traffic dropped 55% due to local SEO issues",
    solution: "Local SEO optimization, Google My Business improvement, and technical fixes",
    results: [
      "Local search traffic increased by 300%",
      "Google My Business visibility improved by 200%",
      "Phone calls from website increased by 400%",
      "Local search rankings improved by 85%"
    ],
    recoveryTime: "3 months to full recovery"
  }
]

const monitoringMetrics = [
  {
    title: "Organic Traffic",
    description: "Number of visitors coming from search engines",
    target: "Consistent month-over-month growth",
    tools: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs"],
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Search Rankings",
    description: "Position of your website in search results for target keywords",
    target: "Top 3 positions for primary keywords",
    tools: ["Google Search Console", "SEMrush", "Ahrefs", "Moz"],
    icon: Target,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Click-Through Rate (CTR)",
    description: "Percentage of search impressions that result in clicks",
    target: "Above industry average (typically 2-5%)",
    tools: ["Google Search Console", "Google Analytics", "SEMrush"],
    icon: Target,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Bounce Rate",
    description: "Percentage of visitors who leave after viewing only one page",
    target: "Below 50% for most pages",
    tools: ["Google Analytics", "Hotjar", "Crazy Egg"],
    icon: TrendingDown,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Page Load Speed",
    description: "Time it takes for your website pages to load completely",
    target: "Under 3 seconds for mobile, under 2 seconds for desktop",
    tools: ["Google PageSpeed Insights", "GTmetrix", "WebPageTest"],
    icon: Zap,
    color: "from-yellow-500 to-green-600"
  },
  {
    title: "Core Web Vitals",
    description: "Google’s metrics for measuring user experience",
    target: "All metrics in the 'Good' range",
    tools: ["Google PageSpeed Insights", "Google Search Console", "Web Vitals"],
    icon: Activity,
    color: "from-indigo-500 to-purple-600"
  }
]

const preventionStrategies = [
  {
    title: "Regular Technical Audits",
    description: "Monthly technical SEO audits to identify and fix issues before they impact traffic",
    frequency: "Monthly",
    keyAreas: [
      "Page speed monitoring",
      "Mobile usability checks",
      "Technical error scanning",
      "Core Web Vitals tracking",
      "Security and SSL monitoring"
    ],
    icon: Shield,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Content Quality Monitoring",
    description: "Ongoing content performance analysis and optimization to maintain search rankings",
    frequency: "Weekly",
    keyAreas: [
      "Content performance tracking",
      "Keyword ranking monitoring",
      "User engagement analysis",
      "Content gap identification",
      "Competitor content analysis"
    ],
    icon: FileText,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Competitive Analysis",
    description: "Regular monitoring of competitor strategies and performance to stay ahead",
    frequency: "Monthly",
    keyAreas: [
      "Competitor keyword analysis",
      "Content strategy monitoring",
      "Backlink profile analysis",
      "User experience comparison",
      "Market trend identification"
    ],
    icon: Target,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "User Experience Optimization",
    description: "Continuous improvement of website usability and performance",
    frequency: "Ongoing",
    keyAreas: [
      "User behavior analysis",
      "Conversion funnel optimization",
      "Mobile experience enhancement",
      "Accessibility improvements",
      "Performance optimization"
    ],
    icon: Eye,
    color: "from-orange-500 to-red-600"
  }
]

export default function DecliningTrafficPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/5 to-orange-600/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-3 text-sm font-semibold mb-8 shadow-lg">
              <TrendingDown className="w-5 h-5 mr-2" />
              Traffic Decline Recovery
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-secondary-900 mb-8 leading-tight">
              Your Website Traffic{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Declining?
              </span>{" "}
              Let’s Fix That
            </h1>
            
            <p className="text-xl lg:text-2xl leading-8 text-secondary-600 mb-12 max-w-3xl mx-auto">
              Don’t let declining traffic destroy your business. Our proven recovery strategies have helped 
              hundreds of businesses regain and exceed their previous traffic levels. We identify the root causes 
              and implement solutions that deliver lasting results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact" className="flex items-center">
                  Get Traffic Recovery Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary-300 hover:border-red-500 hover:bg-red-50 hover:text-red-700 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/case-studies" className="flex items-center">
                  View Recovery Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Common Causes of Traffic Decline
            </h2>
            <p className="text-xl text-secondary-600">
              Understanding why your traffic is declining is the first step to recovery. These are the most common 
              causes we encounter and their typical impact on website performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trafficDeclineCauses.map((cause, index) => (
              <div key={cause.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cause.color} flex items-center justify-center mb-6`}>
                  <cause.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{cause.title}</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">{cause.description}</p>
                
                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">Typical Impact:</h4>
                  <p className="text-red-700 font-bold">{cause.impact}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Common Examples:</h4>
                  <ul className="space-y-1">
                    {cause.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-blue-700 text-sm flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
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
              Proven Traffic Recovery Strategies
            </h2>
            <p className="text-xl text-secondary-600">
              Our systematic approach to traffic recovery addresses the root causes and implements solutions 
              that deliver sustainable, long-term results. Each strategy is designed to rebuild your search 
              rankings and traffic levels.
            </p>
          </div>

          <div className="space-y-8">
            {recoveryStrategies.map((strategy, index) => (
              <div key={strategy.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center flex-shrink-0`}>
                    <strategy.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">{strategy.title}</h3>
                    <p className="text-lg text-secondary-600 mb-6 leading-relaxed">{strategy.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-secondary-900 mb-3">Key Actions:</h4>
                        <ul className="space-y-2">
                          {strategy.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-secondary-700">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="text-sm font-semibold text-blue-800 mb-2">Timeline:</h4>
                        <p className="text-blue-700 font-bold">{strategy.timeline}</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6">
                        <h4 className="text-sm font-semibold text-green-800 mb-2">Expected Impact:</h4>
                        <p className="text-green-700 font-bold">{strategy.impact}</p>
                      </div>
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
              Real Traffic Recovery Results
            </h2>
            <p className="text-xl text-secondary-600">
              See how our traffic recovery strategies have transformed websites from declining performance 
              to record-breaking traffic levels. These case studies demonstrate our proven approach to 
              traffic recovery and growth.
            </p>
          </div>

          <div className="space-y-8">
            {trafficRecoveryCaseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{caseStudy.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">{caseStudy.company}</h3>
                    <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                      <strong>Problem:</strong> {caseStudy.problem}
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
                      <h4 className="text-lg font-semibold mb-2">Recovery Time</h4>
                      <p className="text-2xl font-bold">{caseStudy.recoveryTime}</p>
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
              Key Metrics to Monitor
            </h2>
            <p className="text-xl text-secondary-600">
              Tracking the right metrics is essential for identifying traffic issues early and measuring 
              recovery progress. These key performance indicators will help you stay ahead of traffic declines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monitoringMetrics.map((metric, index) => (
              <div key={metric.title} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-6`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{metric.title}</h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">{metric.description}</p>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">Target:</h4>
                  <p className="text-green-700 font-bold">{metric.target}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Monitoring Tools:</h4>
                  <ul className="space-y-1">
                    {metric.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-blue-700 text-sm flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
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
              Prevention Strategies for Future Traffic Declines
            </h2>
            <p className="text-xl text-secondary-600">
              Don’t wait for traffic to decline again. These proactive strategies will help you maintain 
              strong search rankings and prevent future traffic drops before they happen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {preventionStrategies.map((strategy, index) => (
              <div key={strategy.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center mb-6`}>
                  <strategy.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{strategy.title}</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">{strategy.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Frequency:</h4>
                  <p className="text-blue-700 font-bold">{strategy.frequency}</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">Key Areas:</h4>
                  <ul className="space-y-1">
                    {strategy.keyAreas.map((area, areaIndex) => (
                      <li key={areaIndex} className="text-green-700 text-sm flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
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
              Frequently Asked Questions About Traffic Recovery
            </h2>
            <p className="text-xl text-secondary-600">
              Get answers to the most common questions about traffic decline, recovery strategies, and 
              how to prevent future traffic drops.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to recover from a traffic decline?",
                answer: "Recovery time varies depending on the cause and severity of the decline. Minor technical issues may resolve in 2-4 weeks, while major algorithm updates can take 3-6 months. Our clients typically see initial improvements within 30-60 days, with full recovery usually achieved within 4-6 months."
              },
              {
                question: "What’s the most common cause of traffic decline?",
                answer: "Google algorithm updates are the most common cause, followed by technical SEO issues and content quality problems. Algorithm updates can cause sudden drops, while technical and content issues typically cause gradual declines. The key is identifying the specific cause to implement the right recovery strategy."
              },
              {
                question: "Can I recover traffic without changing my website design?",
                answer: "Yes, in many cases. While design improvements can help, most traffic recovery comes from technical SEO fixes, content optimization, and user experience improvements. We focus on high-impact, low-cost optimizations first before recommending major design changes."
              },
              {
                question: "How do you measure traffic recovery success?",
                answer: "We track multiple metrics including organic traffic, search rankings, click-through rates, bounce rates, and conversion rates. Success is measured by returning to pre-decline levels and often exceeding them. We provide monthly reports showing progress and ROI of recovery efforts."
              },
              {
                question: "What’s included in your traffic recovery services?",
                answer: "Our comprehensive service includes traffic decline analysis, technical SEO audit and fixes, content optimization, user experience improvements, ongoing monitoring, and monthly reporting. We work as an extension of your team to ensure sustainable traffic recovery and growth."
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

      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Recover Your Traffic?
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
            Don’t let declining traffic destroy your business. Our proven recovery strategies have helped 
            hundreds of businesses regain and exceed their previous traffic levels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-red-600 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact" className="flex items-center">
                Get Traffic Recovery Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/case-studies" className="flex items-center">
                View Recovery Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-red-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Traffic Analysis</span>
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
