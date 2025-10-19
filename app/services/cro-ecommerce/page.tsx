import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, TrendingUp, ShoppingCart, Users, BarChart3, Target, Zap, 
  Shield, Smartphone, Globe, Clock, Award, CheckCircle, Star, ArrowUpRight, 
  PieChart, DollarSign, Eye, MousePointer, Filter, Search, Heart, 
  Truck, CreditCard, Lock, RefreshCw, TrendingDown, AlertTriangle, 
  Lightbulb, Building2, Calculator, Calendar, UserCheck, MessageSquare, 
  Phone, Mail, MapPin 
} from 'lucide-react'
import Link from 'next/link'
import { SchemaMarkup } from '../../../components/seo/schema-markup'
import { generateServicePageSchema } from '../../../lib/advanced-schema-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce CRO Services | Increase AOV & Conversion Rate | Web Vello',
  description: 'Boost revenue per visitor with Web Vello’s e-commerce CRO program. We optimize product pages, checkout flows, and retention journeys to drive continuous growth.',
  keywords: ['ecommerce cro services', 'shop conversion optimization', 'increase average order value', 'web vello ecommerce', 'shopify conversion optimization'],
  alternates: {
    canonical: 'https://webvello.com/services/cro-ecommerce',
  },
  openGraph: {
    title: 'E-commerce Conversion Optimization | Web Vello',
    description: 'Partner with Web Vello to analyze buyer behavior, test improvements, and lift e-commerce conversion metrics.',
    url: 'https://webvello.com/services/cro-ecommerce',
    type: 'website',
  }
}

const features = [
  {
    icon: Target,
    title: "Conversion-Focused Design",
    description: "Every element strategically designed to guide visitors toward making a purchase decision."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Optimization",
    description: "Continuous improvement based on real user behavior and performance analytics."
  },
  {
    icon: ShoppingCart,
    title: "Shopping Experience Enhancement",
    description: "Streamlined checkout processes that reduce cart abandonment and increase sales."
  },
  {
    icon: Users,
    title: "User Experience Optimization",
    description: "Intuitive navigation and design that keeps customers engaged and converting."
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth Focus",
    description: "Every optimization directly tied to increasing your bottom line and ROI."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds that improve user experience and conversion rates."
  }
]

const optimizationAreas = [
  {
    title: "Landing Page Optimization",
    description: "Transform your landing pages into conversion powerhouses with strategic design, compelling copy, and optimized user flows.",
    features: ["A/B testing implementation", "Headline optimization", "Call-to-action placement", "Social proof integration", "Trust signals", "Mobile responsiveness"]
  },
  {
    title: "Product Page Enhancement",
    description: "Optimize product pages to showcase your offerings effectively and drive purchase decisions.",
    features: ["High-quality product images", "Compelling product descriptions", "Customer reviews display", "Related products", "Stock availability", "Shipping information"]
  },
  {
    title: "Shopping Cart Optimization",
    description: "Reduce cart abandonment and increase checkout completion rates with strategic cart design.",
    features: ["Cart abandonment recovery", "Guest checkout options", "Progress indicators", "Trust badges", "Multiple payment methods", "Shipping calculator"]
  },
  {
    title: "Checkout Process Streamlining",
    description: "Simplify the checkout process to minimize friction and maximize conversions.",
    features: ["One-page checkout", "Form optimization", "Auto-fill capabilities", "Payment method selection", "Order summary", "Confirmation pages"]
  }
]

const process = [
  {
    step: "01",
    title: "Conversion Audit & Analysis",
    description: "Comprehensive analysis of your current conversion funnel, identifying bottlenecks and opportunities for improvement.",
    duration: "1-2 weeks",
    deliverables: ["Conversion funnel mapping", "User behavior analysis", "Competitive analysis", "Technical audit"]
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Data-driven strategy development focusing on high-impact optimization opportunities.",
    duration: "1 week",
    deliverables: ["Optimization roadmap", "Priority matrix", "Success metrics", "Implementation timeline"]
  },
  {
    step: "03",
    title: "Implementation & Testing",
    description: "Strategic implementation of optimizations with continuous A/B testing for maximum impact.",
    duration: "2-3 weeks",
    deliverables: ["Design updates", "A/B test setup", "Performance monitoring", "Iterative improvements"]
  },
  {
    step: "04",
    title: "Optimization & Scaling",
    description: "Continuous optimization based on data insights, scaling successful strategies across your entire e-commerce platform.",
    duration: "Ongoing",
    deliverables: ["Performance reports", "Optimization recommendations", "Scalability planning", "ROI tracking"]
  }
]

const results = [
  { metric: "Average Conversion Rate Increase", value: "127%", description: "Across all e-commerce clients" },
  { metric: "Cart Abandonment Reduction", value: "43%", description: "Through optimized checkout processes" },
  { metric: "Revenue Per Visitor", value: "89% Higher", description: "Than industry average" },
  { metric: "Customer Lifetime Value", value: "156% Increase", description: "Through better user experience" }
]

const caseStudies = [
  {
    title: "Fashion E-commerce Platform",
    industry: "Retail Fashion",
    challenge: "Low conversion rates and high cart abandonment",
    solution: "Implemented comprehensive CRO strategy including landing page optimization, checkout streamlining, and mobile experience enhancement",
    results: [
      { metric: "Conversion Rate", before: "1.2%", after: "3.8%", improvement: "217%" },
      { metric: "Cart Abandonment", before: "78%", after: "42%", improvement: "46% reduction" },
      { metric: "Revenue", before: "$45K/month", after: "$127K/month", improvement: "182%" }
    ]
  },
  {
    title: "Electronics Online Store",
    industry: "Consumer Electronics",
    challenge: "Poor mobile conversion rates and complex checkout process",
    solution: "Mobile-first redesign with simplified checkout, product page optimization, and trust signal integration",
    results: [
      { metric: "Mobile Conversion Rate", before: "0.8%", after: "2.9%", improvement: "263%" },
      { metric: "Checkout Completion", before: "34%", after: "67%", improvement: "97%" },
      { metric: "Average Order Value", before: "$89", after: "$156", improvement: "75%" }
    ]
  }
]

const tools = [
  "Google Analytics 4", "Google Optimize", "Hotjar", "Crazy Egg", "Optimizely", "VWO", "FullStory", "Mixpanel", "Kissmetrics", "Adobe Analytics", "Segment", "Amplitude"
]

const faqs = [
  {
    question: "How long does it take to see results from CRO optimization?",
    answer: "While some improvements can be seen within 2-4 weeks, significant and sustainable results typically appear within 3-6 months. This timeframe allows for proper A/B testing, data collection, and iterative optimization. We provide regular progress reports and can often identify early positive trends that indicate the direction of improvement."
  },
  {
    question: "What’s the difference between CRO and traditional SEO?",
    answer: "SEO focuses on getting more visitors to your website, while CRO focuses on converting those visitors into customers. SEO is about visibility and traffic generation, whereas CRO is about optimizing the user experience and conversion funnel to maximize the value of your existing traffic. Both are essential for e-commerce success and work together synergistically."
  },
  {
    question: "How do you measure the success of CRO campaigns?",
    answer: "We measure success through multiple key performance indicators including conversion rates, cart abandonment rates, average order value, customer lifetime value, and overall revenue growth. We also track micro-conversions like email signups, product page views, and time on site. Our comprehensive reporting provides both high-level business metrics and detailed user behavior insights."
  },
  {
    question: "Can CRO optimization work for all types of e-commerce businesses?",
    answer: "Yes, CRO principles apply to all e-commerce businesses, but the specific strategies and optimizations vary based on your industry, target audience, and business model. B2B e-commerce, subscription services, and marketplace platforms all benefit from CRO, but require different approaches. We customize our strategies to align with your specific business needs and customer journey."
  },
  {
    question: "How often should we update our CRO strategy?",
    answer: "CRO is an ongoing process that requires regular updates and optimization. We recommend monthly strategy reviews and quarterly comprehensive audits. However, the frequency depends on your traffic volume, seasonality, and business goals. High-traffic sites may benefit from weekly optimizations, while smaller sites might need monthly updates. We continuously monitor performance and recommend updates based on data insights."
  },
  {
    question: "What’s the ROI of investing in CRO optimization?",
    answer: "CRO typically delivers exceptional ROI, often ranging from 300% to 1000% or higher. Since CRO focuses on converting existing traffic rather than acquiring new traffic, the costs are generally lower while the impact is immediate and measurable. Most of our clients see ROI within 3-6 months, with ongoing benefits that compound over time. The key is that CRO improvements are permanent and continue to deliver value long after implementation."
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

export default function CROEcommercePage() {
  return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "Cro Ecommerce", description: "Professional Cro Ecommerce services", url: "https://webvello.com/services/cro-ecommerce" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              E-Commerce{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Conversion Rate Optimization
              </span>{" "}
              That Drives Revenue
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Transform your e-commerce website into a conversion powerhouse. Our data-driven CRO strategies 
              optimize every step of the customer journey, turning browsers into buyers and dramatically 
              increasing your revenue per visitor.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free CRO Audit
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

      {/* What is E-Commerce CRO Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What is E-Commerce Conversion Rate Optimization?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                E-commerce Conversion Rate Optimization (CRO) is the systematic process of improving your 
                online store’s ability to convert visitors into customers. Unlike traditional marketing that 
                focuses on driving traffic, CRO optimizes the user experience to maximize the value of every 
                visitor who lands on your site.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                CRO involves analyzing user behavior, identifying conversion barriers, and implementing 
                strategic improvements to your website design, content, and user flow. The goal is to create 
                a seamless shopping experience that guides visitors naturally toward making a purchase.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Increase revenue without increasing marketing spend</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Improve customer experience and satisfaction</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Reduce cart abandonment and increase order value</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Build long-term customer relationships and loyalty</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Why E-Commerce CRO Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-secondary-900">Higher Revenue Per Visitor</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-secondary-900">Better Customer Experience</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-secondary-900">Improved Profit Margins</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-secondary-900">Competitive Advantage</span>
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
              Why Choose Our E-Commerce CRO Services?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We combine cutting-edge technology with proven conversion principles to create 
              e-commerce experiences that don’t just look great—they perform exceptionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-purple-600" />
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
              Comprehensive E-Commerce Optimization Areas
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We optimize every critical touchpoint in your e-commerce conversion funnel to maximize 
              your revenue potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {optimizationAreas.map((area) => (
              <div key={area.title} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg">
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

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Proven CRO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach that ensures measurable improvements in your conversion rates 
              and revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-purple-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-purple-600 font-medium mb-3">
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
              Our CRO strategies consistently deliver exceptional results that directly impact 
              your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{result.value}</div>
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
              Real Results from Real E-Commerce Businesses
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              See how our CRO strategies have transformed e-commerce businesses and delivered 
              measurable revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{study.title}</h3>
                  <p className="text-purple-600 font-medium">{study.industry}</p>
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
                          <span className="text-purple-600 text-xs">({result.improvement})</span>
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
              data-driven optimization results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div key={tool} className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl shadow-soft flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
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
              Get answers to the most common questions about our e-commerce CRO services.
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your E-Commerce Conversion Rates?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let’s optimize your online store to convert more visitors into customers and 
            dramatically increase your revenue. Get started with a free CRO audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free CRO Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
