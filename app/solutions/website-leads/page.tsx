"use client"

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Users, Target, CheckCircle, AlertTriangle, Clock, Zap, Globe, Smartphone, Mail, Phone, Calendar, Star, Award, Building2, Eye, Search, Filter, PieChart, Activity, TrendingUp, Lightbulb, Shield, Info, HelpCircle, BookOpen, FileText, ChevronDown, ChevronUp, MapPin, Globe2, Monitor, TrendingDown, BarChart3, DollarSign, MessageSquare, UserPlus, Filter as Funnel, MousePointer, Settings, Database, BarChart3 as ChartBar } from 'lucide-react'
import Link from 'next/link'

const leadGenerationChallenges = [
  {
    title: "Poor Website Conversion",
    description: "Your website attracts visitors but fails to convert them into leads or customers",
    symptoms: [
      "High traffic with low conversions",
      "Visitors leave without taking action",
      "Poor call-to-action performance",
      "Confusing user journey",
      "Weak value propositions"
    ],
    impact: "Can result in 80-95% of visitors leaving without converting",
    icon: Target,
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Inadequate Lead Capture Systems",
    description: "Missing or poorly designed lead capture mechanisms that fail to collect visitor information",
    symptoms: [
      "No lead forms or contact forms",
      "Poorly designed forms",
      "Missing lead magnets",
      "No email capture strategy",
      "Ineffective popup or modal systems"
    ],
    impact: "Can result in 0% lead capture from qualified traffic",
    icon: Funnel,
    color: "from-orange-500 to-yellow-600"
  },
  {
    title: "Weak Content Strategy",
    description: "Content that doesn’t address user needs or guide visitors toward conversion",
    symptoms: [
      "Content doesn’t match user intent",
      "Missing educational resources",
      "Poor content quality",
      "No lead nurturing content",
      "Weak content distribution"
    ],
    impact: "Can result in 60-80% lower engagement and conversions",
    icon: FileText,
    color: "from-yellow-500 to-green-600"
  },
  {
    title: "Poor User Experience",
    description: "Website design and functionality issues that prevent visitors from converting",
    symptoms: [
      "Difficult navigation",
      "Slow loading times",
      "Mobile usability issues",
      "Broken functionality",
      "Poor accessibility"
    ],
    impact: "Can result in 40-70% higher bounce rates",
    icon: Eye,
    color: "from-green-500 to-blue-600"
  },
  {
    title: "Insufficient Traffic Quality",
    description: "Website attracts the wrong type of visitors who aren’t interested in your offerings",
    symptoms: [
      "High bounce rates",
      "Low time on site",
      "Poor keyword targeting",
      "Wrong audience demographics",
      "Ineffective marketing channels"
    ],
    impact: "Can result in 50-80% of traffic being unqualified",
    icon: Users,
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Lack of Trust and Credibility",
    description: "Website fails to build trust with visitors, preventing them from taking action",
    symptoms: [
      "Missing testimonials",
      "No social proof",
      "Poor design quality",
      "Missing trust signals",
      "Weak brand presence"
    ],
    impact: "Can result in 70-90% lower conversion rates",
    icon: Shield,
    color: "from-purple-500 to-pink-600"
  }
]

const leadGenerationStrategies = [
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Systematically improve your website’s ability to convert visitors into leads",
    tactics: [
      "A/B testing of headlines and CTAs",
      "User experience optimization",
      "Trust signal implementation",
      "Form optimization",
      "Social proof and testimonials"
    ],
    timeline: "2-6 weeks for initial improvements",
    impact: "25-150% increase in conversion rates",
    icon: Target,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Lead Magnet Development",
    description: "Create valuable resources that encourage visitors to provide contact information",
    tactics: [
      "E-books and whitepapers",
      "Free consultations",
      "Webinar registrations",
      "Tool and calculator access",
      "Exclusive content downloads"
    ],
    timeline: "1-3 weeks for creation",
    impact: "200-500% increase in lead capture",
    icon: FileText,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Content Marketing Strategy",
    description: "Develop content that attracts, educates, and converts your target audience",
    tactics: [
      "Blog content creation",
      "Video content production",
      "Email marketing campaigns",
      "Social media content",
      "Lead nurturing sequences"
    ],
    timeline: "4-8 weeks for measurable results",
    impact: "300-800% increase in qualified leads",
    icon: BookOpen,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Landing Page Optimization",
    description: "Create high-converting landing pages specifically designed for lead generation",
    tactics: [
      "Focused messaging and design",
      "Clear value propositions",
      "Optimized forms and CTAs",
      "Social proof elements",
      "A/B testing and optimization"
    ],
    timeline: "2-4 weeks for implementation",
    impact: "40-200% increase in landing page conversions",
    icon: Monitor,
    color: "from-orange-500 to-red-600"
  }
]

const leadGenerationCaseStudies = [
  {
    company: "B2B Software Company",
    industry: "Technology",
    challenge: "Website generating only 5-10 leads per month despite 10,000+ monthly visitors",
    solution: "Implemented comprehensive CRO strategy, created lead magnets, and optimized conversion funnels",
    results: [
      "Lead generation increased by 800%",
      "Conversion rate improved from 0.1% to 1.2%",
      "Cost per lead reduced by 75%",
      "Sales qualified leads improved by 400%",
      "Monthly revenue increased by 300%"
    ],
    timeline: "6 months to full implementation"
  },
  {
    company: "E-commerce Business",
    industry: "Retail",
    challenge: "High cart abandonment and low email list growth",
    solution: "Implemented exit-intent popups, created lead magnets, and optimized checkout process",
    results: [
      "Email list growth increased by 500%",
      "Cart abandonment reduced by 35%",
      "Repeat customer rate improved by 200%",
      "Average order value increased by 25%",
      "Customer lifetime value improved by 150%"
    ],
    timeline: "4 months to full implementation"
  },
  {
    company: "Local Service Business",
    industry: "Home Services",
    challenge: "Website not generating enough local leads and poor phone call conversion",
    solution: "Local SEO optimization, lead magnet creation, and conversion funnel improvement",
    results: [
      "Website leads increased by 400%",
      "Phone calls from website increased by 600%",
      "Local search rankings improved by 85%",
      "Customer acquisition cost reduced by 60%",
      "Monthly revenue increased by 250%"
    ],
    timeline: "3 months to full implementation"
  }
]

const leadCaptureElements = [
  {
    title: "Lead Capture Forms",
    description: "Strategic forms placed throughout your website to collect visitor information",
    bestPractices: [
      "Keep forms short and simple",
      "Use progressive profiling",
      "Implement smart form fields",
      "Add trust signals and privacy notices",
      "Test form placement and design"
    ],
    conversionRate: "15-25% average conversion rate",
    icon: Funnel,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Lead Magnets",
    description: "Valuable resources offered in exchange for contact information",
    bestPractices: [
      "Create high-value, relevant content",
      "Use compelling headlines and descriptions",
      "Ensure easy access and delivery",
      "Follow up with nurturing sequences",
      "Regularly update and refresh content"
    ],
    conversionRate: "20-40% average conversion rate",
    icon: FileText,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Exit-Intent Popups",
    description: "Targeted popups that appear when visitors are about to leave",
    bestPractices: [
      "Offer immediate value",
      "Use compelling messaging",
      "Test different triggers and timing",
      "Ensure mobile compatibility",
      "A/B test different offers"
    ],
    conversionRate: "10-20% average conversion rate",
    icon: AlertTriangle,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Live Chat Systems",
    description: "Real-time communication tools that capture leads and provide immediate assistance",
    bestPractices: [
      "Use proactive chat invitations",
      "Train chat agents on lead qualification",
      "Implement chat-to-form conversion",
      "Offer chat transcripts and follow-ups",
      "Integrate with CRM systems"
    ],
    conversionRate: "25-50% average conversion rate",
    icon: MessageSquare,
    color: "from-purple-500 to-indigo-600"
  }
]

const leadNurturingStrategies = [
  {
    title: "Email Marketing Automation",
    description: "Automated email sequences that nurture leads through the sales funnel",
    components: [
      "Welcome email series",
      "Educational content sequences",
      "Product/service information",
      "Social proof and testimonials",
      "Call-to-action emails"
    ],
    frequency: "2-3 emails per week",
    impact: "200-400% increase in lead-to-customer conversion",
    icon: Mail,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Content Personalization",
    description: "Tailoring content and offers based on lead behavior and preferences",
    components: [
      "Behavioral tracking",
      "Dynamic content delivery",
      "Personalized recommendations",
      "Segmented messaging",
      "Progressive profiling"
    ],
    frequency: "Real-time personalization",
    impact: "150-300% increase in engagement",
    icon: Target,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Multi-Channel Nurturing",
    description: "Engaging leads across multiple channels for maximum impact",
    components: [
      "Email marketing",
      "Social media engagement",
      "Retargeting campaigns",
      "Direct mail",
      "Phone follow-ups"
    ],
    frequency: "3-5 touchpoints per week",
    impact: "250-500% increase in lead quality",
    icon: Globe,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Lead Scoring and Qualification",
    description: "Systematic process for identifying and prioritizing the most promising leads",
    components: [
      "Behavioral scoring",
      "Demographic scoring",
      "Engagement tracking",
      "Lead qualification criteria",
      "Sales handoff process"
    ],
    frequency: "Real-time scoring updates",
    impact: "300-600% improvement in sales efficiency",
    icon: ChartBar,
    color: "from-orange-500 to-red-600"
  }
]

const leadGenerationMetrics = [
  {
    title: "Lead Conversion Rate",
    description: "Percentage of website visitors who become leads",
    target: "2-5% for most industries",
    calculation: "Number of Leads ÷ Total Visitors × 100",
    tools: ["Google Analytics", "Google Tag Manager", "CRM Systems"],
    icon: Target,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Cost Per Lead (CPL)",
    description: "Total cost to acquire a single lead",
    target: "Industry-specific, typically $20-200",
    calculation: "Total Marketing Spend ÷ Number of Leads",
    tools: ["Google Ads", "Facebook Ads", "CRM Systems", "Marketing Analytics"],
    icon: DollarSign,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Lead Quality Score",
    description: "Measure of lead fit and likelihood to convert",
    target: "7-10 out of 10",
    calculation: "Based on behavior, demographics, and engagement",
    tools: ["CRM Systems", "Marketing Automation", "Lead Scoring Tools"],
    icon: Star,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Lead-to-Customer Conversion",
    description: "Percentage of leads that become paying customers",
    target: "10-30% for most industries",
    calculation: "Number of Customers ÷ Number of Leads × 100",
    tools: ["CRM Systems", "Sales Analytics", "Revenue Tracking"],
    icon: UserPlus,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Time to Conversion",
    description: "Average time from lead capture to customer conversion",
    target: "30-90 days for most B2B, 1-7 days for B2C",
    calculation: "Sum of Conversion Times ÷ Number of Conversions",
    tools: ["CRM Systems", "Marketing Automation", "Analytics Platforms"],
    icon: Clock,
    color: "from-yellow-500 to-green-600"
  },
  {
    title: "Lead Nurturing Effectiveness",
    description: "Measure of how well your nurturing campaigns perform",
    target: "Above industry average",
    calculation: "Engagement rates, open rates, click-through rates",
    tools: ["Email Marketing Platforms", "Marketing Automation", "Analytics Tools"],
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-600"
  }
]

export default function WebsiteLeadsPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/5 to-blue-600/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 text-sm font-semibold mb-8 shadow-lg">
              <Users className="w-5 h-5 mr-2" />
              Lead Generation Solutions
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-secondary-900 mb-8 leading-tight">
              Your Website{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                Not Generating Leads?
              </span>{" "}
              Let’s Fix That
            </h1>
            
            <p className="text-xl lg:text-2xl leading-8 text-secondary-600 mb-12 max-w-3xl mx-auto">
              Don’t let valuable website traffic go to waste. Our proven lead generation strategies have helped 
              hundreds of businesses transform their websites into lead-generating machines. We identify the 
              barriers and implement solutions that capture, nurture, and convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact" className="flex items-center">
                  Get Lead Generation Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/case-studies" className="flex items-center">
                  View Lead Generation Results
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
              Common Lead Generation Challenges
            </h2>
            <p className="text-xl text-secondary-600">
              Understanding why your website isn’t generating leads is the first step to solving the problem. 
              These are the most common challenges we encounter and their impact on lead generation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadGenerationChallenges.map((challenge, index) => (
              <div key={challenge.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${challenge.color} flex items-center justify-center mb-6`}>
                  <challenge.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{challenge.title}</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">{challenge.description}</p>
                
                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">Typical Impact:</h4>
                  <p className="text-red-700 font-bold">{challenge.impact}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Common Symptoms:</h4>
                  <ul className="space-y-1">
                    {challenge.symptoms.map((symptom, symptomIndex) => (
                      <li key={symptomIndex} className="text-blue-700 text-sm flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Proven Lead Generation Strategies
            </h2>
            <p className="text-xl text-secondary-600">
              Our comprehensive approach to lead generation addresses the root causes and implements solutions 
              that deliver sustainable, long-term results. Each strategy is designed to capture and convert 
              more website visitors into qualified leads.
            </p>
          </div>

          <div className="space-y-8">
            {leadGenerationStrategies.map((strategy, index) => (
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
              Essential Lead Capture Elements
            </h2>
            <p className="text-xl text-secondary-600">
              These key elements work together to capture visitor information and convert them into leads. 
              Each element is strategically designed to maximize conversion rates and lead quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadCaptureElements.map((element, index) => (
              <div key={element.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${element.color} flex items-center justify-center mb-6`}>
                  <element.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{element.title}</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">{element.description}</p>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">Best Practices:</h4>
                  <ul className="space-y-1">
                    {element.bestPractices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="text-green-700 text-sm flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Typical Conversion Rate:</h4>
                  <p className="text-blue-700 font-bold">{element.conversionRate}</p>
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
              Lead Nurturing Strategies
            </h2>
            <p className="text-xl text-secondary-600">
              Capturing leads is just the beginning. Effective lead nurturing strategies convert prospects 
              into customers and build long-term relationships. These approaches ensure maximum value from 
              your lead generation efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadNurturingStrategies.map((strategy, index) => (
              <div key={strategy.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center mb-6`}>
                  <strategy.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{strategy.title}</h3>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">{strategy.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3">Key Components:</h4>
                    <ul className="space-y-2">
                      {strategy.components.map((component, componentIndex) => (
                        <li key={componentIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-700">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">Frequency:</h4>
                      <p className="text-blue-700 font-bold">{strategy.frequency}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-green-800 mb-2">Expected Impact:</h4>
                      <p className="text-green-700 font-bold">{strategy.impact}</p>
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
              Real Lead Generation Results
            </h2>
            <p className="text-xl text-secondary-600">
              See how our lead generation strategies have transformed websites from traffic wasters into 
              lead-generating machines. These case studies demonstrate our proven approach to lead 
              generation and conversion optimization.
            </p>
          </div>

          <div className="space-y-8">
            {leadGenerationCaseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
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
                      <h4 className="text-lg font-semibold mb-2">Implementation Time</h4>
                      <p className="text-2xl font-bold">{caseStudy.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Key Lead Generation Metrics
            </h2>
            <p className="text-xl text-secondary-600">
              Tracking the right metrics is essential for measuring lead generation success and identifying 
              optimization opportunities. These key performance indicators will help you maximize your 
              lead generation ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadGenerationMetrics.map((metric, index) => (
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
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Calculation:</h4>
                  <p className="text-blue-700 font-mono text-sm">{metric.calculation}</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-purple-800 mb-2">Tools:</h4>
                  <ul className="space-y-1">
                    {metric.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-purple-700 text-sm flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
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

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Frequently Asked Questions About Lead Generation
            </h2>
            <p className="text-xl text-secondary-600">
              Get answers to the most common questions about website lead generation, conversion optimization, 
              and how to maximize your website’s lead generation potential.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to see results from lead generation improvements?",
                answer: "Most businesses see initial improvements within 2-4 weeks, with significant results typically appearing within 2-3 months. The timeline depends on the strategies implemented, your industry, and the scope of changes. We provide weekly progress reports so you can track improvements in real-time."
              },
              {
                question: "What’s the typical improvement in lead generation businesses see?",
                answer: "Our clients typically see 200-800% increases in lead generation, with conversion rate improvements of 25-150%. The exact improvement depends on your starting point, industry, and the specific strategies implemented. We focus on sustainable, long-term improvements rather than quick fixes."
              },
              {
                question: "Do I need to redesign my entire website to improve lead generation?",
                answer: "Not necessarily. While design improvements can help, most lead generation improvements come from optimizing conversion elements, creating lead magnets, and improving user experience. We start with high-impact, low-cost optimizations before recommending larger changes."
              },
              {
                question: "How do you measure lead generation success?",
                answer: "We track multiple metrics including lead conversion rates, cost per lead, lead quality scores, and lead-to-customer conversion rates. Success is measured by both quantity and quality of leads, ensuring you’re generating the right type of leads for your business."
              },
              {
                question: "What’s included in your lead generation services?",
                answer: "Our comprehensive service includes lead generation audit, conversion rate optimization, lead magnet creation, landing page optimization, lead nurturing strategy, and ongoing optimization. We work as an extension of your team to continuously improve your lead generation performance."
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

      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Generate More Leads?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Don’t let valuable website traffic go to waste. Our proven lead generation strategies have helped 
            hundreds of businesses transform their websites into lead-generating machines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-green-600 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact" className="flex items-center">
                Get Lead Generation Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/case-studies" className="flex items-center">
                View Lead Generation Results
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-green-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Lead Generation Audit</span>
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
