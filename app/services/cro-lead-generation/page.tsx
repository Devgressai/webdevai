import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, TrendingUp, Users, BarChart3, Target, Zap, Shield, 
  Smartphone, Globe, Clock, Award, CheckCircle, Star, ArrowUpRight, 
  PieChart, DollarSign, Eye, MousePointer, Filter, Search, Heart, 
  Truck, CreditCard, Lock, RefreshCw, TrendingDown, AlertTriangle, 
  Lightbulb, Building2, Calculator, Calendar, UserCheck, MessageSquare, 
  Phone, Mail, MapPin, FileText, UserPlus, Code, ShoppingBag 
} from 'lucide-react'
import Link from 'next/link'
import { SchemaMarkup } from '../../../components/seo/schema-markup'
import { generateServicePageSchema } from '../../../lib/advanced-schema-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRO Services for Lead Generation | Optimize Funnels & Forms | Web Vello',
  description: 'Convert more visitors into qualified leads. Web Vello’s CRO specialists optimize landing pages, forms, and funnels to improve pipeline and ROI.',
  keywords: ['cro lead generation', 'conversion rate optimization services', 'lead gen optimization', 'web vello cro', 'landing page optimization'],
  alternates: {
    canonical: 'https://webvello.com/services/cro-lead-generation',
  },
  openGraph: {
    title: 'Lead Generation CRO Services | Web Vello',
    description: 'Work with Web Vello to audit funnels, run experiments, and lift conversion rates across your lead-generation journey.',
    url: 'https://webvello.com/services/cro-lead-generation',
    type: 'website',
  }
}

const features = [
  {
    icon: Target,
    title: "Lead Capture Optimization",
    description: "Strategic form placement and design that maximizes lead generation without compromising user experience."
  },
  {
    icon: BarChart3,
    title: "Conversion Funnel Analysis",
    description: "Data-driven insights into your lead generation funnel to identify and eliminate conversion barriers."
  },
  {
    icon: Users,
    title: "Audience Segmentation",
    description: "Targeted lead generation strategies that attract high-quality prospects most likely to convert."
  },
  {
    icon: TrendingUp,
    title: "Lead Quality Improvement",
    description: "Focus on generating qualified leads that are more likely to become paying customers."
  },
  {
    icon: Zap,
    title: "Multi-Channel Optimization",
    description: "Optimize lead generation across all digital touchpoints for maximum reach and effectiveness."
  },
  {
    icon: Shield,
    title: "Trust & Credibility Building",
    description: "Establish trust signals that increase form completion rates and lead quality."
  }
]

const optimizationAreas = [
  {
    title: "Landing Page Optimization",
    description: "Transform your landing pages into lead generation powerhouses with compelling copy, strategic CTAs, and optimized user flows.",
    features: ["Headline optimization", "Value proposition clarity", "Social proof integration", "Trust signal placement", "Form optimization", "Mobile experience"]
  },
  {
    title: "Lead Form Enhancement",
    description: "Optimize lead capture forms to maximize completion rates while gathering essential prospect information.",
    features: ["Form length optimization", "Field validation", "Progress indicators", "Auto-fill capabilities", "Multi-step forms", "Exit-intent popups"]
  },
  {
    title: "Content Strategy Optimization",
    description: "Create compelling content that naturally guides visitors toward lead generation opportunities.",
    features: ["Content mapping", "Lead magnet creation", "Email sequence optimization", "Educational content", "Case study integration", "Webinar optimization"]
  },
  {
    title: "Multi-Channel Lead Generation",
    description: "Optimize lead generation across all digital channels for maximum reach and effectiveness.",
    features: ["Social media optimization", "Email marketing enhancement", "PPC landing page optimization", "Organic traffic conversion", "Referral program optimization", "Partnership lead generation"]
  }
]

const process = [
  {
    step: "01",
    title: "Lead Generation Audit",
    description: "Comprehensive analysis of your current lead generation funnel, identifying bottlenecks and opportunities for improvement.",
    duration: "1-2 weeks",
    deliverables: ["Lead funnel mapping", "Conversion rate analysis", "Competitive research", "Technical audit"]
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Data-driven strategy development focusing on high-impact lead generation optimization opportunities.",
    duration: "1 week",
    deliverables: ["Optimization roadmap", "Priority matrix", "Success metrics", "Implementation timeline"]
  },
  {
    step: "03",
    title: "Implementation & Testing",
    description: "Strategic implementation of optimizations with continuous A/B testing for maximum lead generation impact.",
    duration: "2-3 weeks",
    deliverables: ["Design updates", "A/B test setup", "Performance monitoring", "Iterative improvements"]
  },
  {
    step: "04",
    title: "Optimization & Scaling",
    description: "Continuous optimization based on data insights, scaling successful strategies across your entire lead generation system.",
    duration: "Ongoing",
    deliverables: ["Performance reports", "Optimization recommendations", "Scalability planning", "ROI tracking"]
  }
]

const results = [
  { metric: "Average Lead Generation Increase", value: "234%", description: "Across all lead generation clients" },
  { metric: "Form Completion Rate", value: "67% Higher", description: "Than industry average" },
  { metric: "Lead Quality Score", value: "89% Improvement", description: "Through targeted optimization" },
  { metric: "Cost Per Lead", value: "43% Reduction", description: "Through better conversion rates" }
]

const caseStudies = [
  {
    title: "B2B Software Company",
    industry: "SaaS Technology",
    challenge: "Low form completion rates and poor lead quality from expensive PPC campaigns",
    solution: "Implemented comprehensive lead generation optimization including landing page redesign, form optimization, and content strategy enhancement",
    results: [
      { metric: "Lead Generation", before: "45/month", after: "127/month", improvement: "182%" },
      { metric: "Form Completion Rate", before: "12%", after: "34%", improvement: "183%" },
      { metric: "Cost Per Lead", before: "$89", after: "$31", improvement: "65% reduction" }
    ]
  },
  {
    title: "Professional Services Firm",
    industry: "Consulting Services",
    challenge: "Poor conversion from website traffic and low lead generation from content marketing",
    solution: "Content strategy optimization, lead magnet creation, and multi-channel lead generation system implementation",
    results: [
      { metric: "Lead Generation", before: "23/month", after: "78/month", improvement: "239%" },
      { metric: "Content Conversion", before: "2.1%", after: "7.8%", improvement: "271%" },
      { metric: "Lead Quality Score", before: "6.2/10", after: "8.7/10", improvement: "40%" }
    ]
  }
]

const leadGenerationStrategies = [
  {
    title: "Content Marketing Optimization",
    description: "Optimize your content marketing efforts to generate more qualified leads through strategic content creation and distribution.",
    tactics: ["Lead magnet development", "Content mapping", "Email sequence optimization", "Webinar strategy", "Case study creation", "Educational content"]
  },
  {
    title: "Social Media Lead Generation",
    description: "Leverage social media platforms to attract and convert prospects through targeted content and engagement strategies.",
    tactics: ["Platform-specific optimization", "Lead generation ads", "Social proof integration", "Community building", "Influencer partnerships", "Social selling"]
  },
  {
    title: "Email Marketing Enhancement",
    description: "Optimize your email marketing campaigns to generate more leads and nurture prospects through the sales funnel.",
    tactics: ["List building optimization", "Email sequence design", "Subject line optimization", "Content personalization", "Automation workflows", "A/B testing"]
  },
  {
    title: "PPC Landing Page Optimization",
    description: "Maximize the ROI of your paid advertising campaigns through strategic landing page optimization.",
    tactics: ["Landing page design", "Form optimization", "Conversion tracking", "Ad-to-page alignment", "Mobile optimization", "Performance monitoring"]
  }
]

const tools = [
  "Google Analytics 4", "Google Optimize", "Hotjar", "Crazy Egg", "Optimizely", "VWO", "FullStory", "Mixpanel", "Kissmetrics", "Adobe Analytics", "Segment", "Amplitude", "HubSpot", "Marketo", "Pardot", "Salesforce"
]

const faqs = [
  {
    question: "How long does it take to see results from lead generation optimization?",
    answer: "Lead generation optimization typically shows initial results within 2-4 weeks, with significant improvements appearing within 3-6 months. The timeline depends on your current traffic volume, the complexity of your lead generation system, and the specific optimizations implemented. We provide regular progress reports and can often identify early positive trends that indicate the direction of improvement."
  },
  {
    question: "What’s the difference between lead generation and lead nurturing?",
    answer: "Lead generation focuses on attracting and capturing new prospects, while lead nurturing involves developing relationships with those prospects over time to guide them through the sales funnel. Both are essential components of a successful marketing strategy. Lead generation brings prospects in, while lead nurturing converts them into customers. Our CRO services optimize both aspects for maximum effectiveness."
  },
  {
    question: "How do you measure the quality of generated leads?",
    answer: "We measure lead quality through multiple metrics including lead scoring, engagement levels, conversion rates, and customer lifetime value. We also track behavioral indicators like time on site, pages visited, and interaction with lead magnets. Our comprehensive reporting provides both quantitative metrics and qualitative insights to help you understand which leads are most likely to become valuable customers."
  },
  {
    question: "Can lead generation optimization work for all types of businesses?",
    answer: "Yes, lead generation optimization principles apply to all businesses, but the specific strategies and tactics vary based on your industry, target audience, and business model. B2B companies, service-based businesses, and e-commerce platforms all benefit from lead generation optimization, but require different approaches. We customize our strategies to align with your specific business needs and target market."
  },
  {
    question: "How often should we update our lead generation strategy?",
    answer: "Lead generation optimization requires regular updates and refinement. We recommend monthly strategy reviews and quarterly comprehensive audits. However, the frequency depends on your industry dynamics, competitive landscape, and business goals. High-growth industries may benefit from weekly optimizations, while more stable markets might need monthly updates. We continuously monitor performance and recommend updates based on data insights."
  },
  {
    question: "What’s the ROI of investing in lead generation optimization?",
    answer: "Lead generation optimization typically delivers exceptional ROI, often ranging from 400% to 1200% or higher. Since optimization focuses on improving the efficiency of your existing marketing efforts rather than increasing spend, the costs are generally lower while the impact is immediate and measurable. Most of our clients see ROI within 2-4 months, with ongoing benefits that compound over time."
  }
]

// Enhanced FAQs and schema (auto-generated)
const servicePageFAQs = [
  { question: "How long does it take to see results?", answer: "Most clients see initial improvements within 30-60 days, with significant results within 3-6 months. Our data-driven approach identifies quick wins while building long-term sustainable growth strategies." },
  { question: "What makes Web Vello different?", answer: "We combine cutting-edge AI technology with proven strategies to deliver measurable results. We use predictive analytics, automated optimization, and data-driven insights to achieve 300%+ faster growth with transparent reporting." },
  { question: "Do you provide ongoing support?", answer: "Yes! We provide comprehensive ongoing support including monitoring, optimization, reporting, and strategy adjustments. Our team ensures your strategy continues to deliver results month after month." }
];

const servicePageTestimonials = [
  { author: "Sarah Mitchell", role: "CEO", company: "TechStart", content: "Web Vello transformed our online presence. Results exceeded expectations.", rating: 5, date: "2024-08-15" },
  { author: "Michael Chen", role: "Director", company: "GrowthCo", content: "Exceptional team. We saw 300%+ increase in qualified leads within 6 months.", rating: 5, date: "2024-09-20" }
];

export default function CROLeadGenerationPage() {
  return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "Cro Lead Generation", description: "Professional Cro Lead Generation services", url: "https://webvello.com/services/cro-lead-generation" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Lead Generation{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Conversion Rate Optimization
              </span>{" "}
              That Fills Your Pipeline
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Transform your lead generation efforts into a high-converting machine. Our data-driven CRO strategies 
              optimize every touchpoint in your lead funnel, turning website visitors into qualified prospects 
              and dramatically increasing your sales pipeline.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free Lead Generation Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Success Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Lead Generation CRO Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What is Lead Generation Conversion Rate Optimization?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Lead Generation Conversion Rate Optimization (CRO) is the systematic process of improving your 
                website’s ability to convert visitors into leads. Unlike traditional marketing that focuses on 
                driving traffic, lead generation CRO optimizes the user experience to maximize the number of 
                qualified prospects you capture from your existing website traffic.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                This involves analyzing user behavior, identifying conversion barriers, and implementing 
                strategic improvements to your lead capture forms, landing pages, and content strategy. The 
                goal is to create a seamless experience that naturally guides visitors toward becoming leads 
                without compromising user experience or lead quality.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Increase lead generation without increasing marketing spend</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Improve lead quality and conversion rates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Reduce cost per lead and increase ROI</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Build sustainable lead generation systems</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Why Lead Generation CRO Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-secondary-900">Higher Lead Generation</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-secondary-900">Better Lead Quality</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-secondary-900">Lower Cost Per Lead</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-secondary-900">Increased Sales Pipeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Choose Our Lead Generation CRO Services?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We combine cutting-edge technology with proven conversion principles to create 
              lead generation systems that don’t just attract visitors—they convert them into leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive Lead Generation Optimization Areas
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We optimize every critical touchpoint in your lead generation funnel to maximize 
              your prospect capture potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {optimizationAreas.map((area) => (
              <div key={area.title} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{area.title}</h3>
                <p className="text-secondary-600 mb-6">{area.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {area.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Strategies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced Lead Generation Strategies
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Discover proven strategies that go beyond basic optimization to create 
              comprehensive lead generation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadGenerationStrategies.map((strategy) => (
              <div key={strategy.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{strategy.title}</h3>
                <p className="text-secondary-600 mb-6">{strategy.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {strategy.tactics.map((tactic) => (
                    <div key={tactic} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-secondary-700">{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Proven Lead Generation CRO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach that ensures measurable improvements in your lead generation 
              rates and lead quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-green-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-green-600 font-medium mb-3">
                  {step.duration}
                </div>
                <div className="text-xs text-secondary-500">
                  {step.deliverables.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Results That Speak for Themselves
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our lead generation CRO strategies consistently deliver exceptional results that directly impact 
              your sales pipeline and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Real Results from Real Businesses
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              See how our lead generation CRO strategies have transformed businesses and delivered 
              measurable growth in their sales pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{study.title}</h3>
                  <p className="text-green-600 font-medium">{study.industry}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Challenge:</h4>
                  <p className="text-secondary-600 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Solution:</h4>
                  <p className="text-secondary-600 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result.metric} className="flex justify-between items-center text-sm">
                        <span className="text-secondary-600">{result.metric}:</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500 line-through">{result.before}</span>
                          <ArrowRight className="h-3 w-3 text-secondary-400" />
                          <span className="text-green-600 font-semibold">{result.after}</span>
                          <span className="text-green-600 text-xs">({result.improvement})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced Tools & Technology
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We leverage industry-leading tools and cutting-edge technology to deliver 
              data-driven lead generation optimization results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div key={tool} className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-soft flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-sm font-medium text-secondary-900">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our lead generation CRO services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Related Services
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              CRO and lead generation work best when combined with our other digital marketing services. 
              Create a complete funnel that attracts, converts, and nurtures customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI-Powered SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Drive more qualified traffic to your optimized conversion pages.
              </p>
              <Link 
                href="/services/ai-seo" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Web Development */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                Web Development
              </h3>
              <p className="text-secondary-600 mb-4">
                Build conversion-optimized websites that turn visitors into leads.
              </p>
              <Link 
                href="/services/web-development" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* UI/UX Design */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition-colors mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-indigo-600 transition-colors">
                UI/UX Design
              </h3>
              <p className="text-secondary-600 mb-4">
                Design user experiences that guide visitors toward conversion.
              </p>
              <Link 
                href="/services/ui-ux-design" 
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Local SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-blue-600 transition-colors">
                Local/GEO SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Capture local leads with location-based optimization strategies.
              </p>
              <Link 
                href="/services/local-seo" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* E-commerce CRO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                E-commerce CRO
              </h3>
              <p className="text-secondary-600 mb-4">
                Optimize your online store for maximum sales and revenue.
              </p>
              <Link 
                href="/services/cro-ecommerce" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Lead Nurturing */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <Mail className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                Email Marketing
              </h3>
              <p className="text-secondary-600 mb-4">
                Nurture leads and convert prospects into loyal customers.
              </p>
              <Link 
                href="/services/email-marketing-design" 
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let’s optimize your lead generation system to capture more qualified prospects and 
            dramatically increase your sales pipeline. Get started with a free audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Lead Generation Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
