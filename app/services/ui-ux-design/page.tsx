import { Button } from '../../../components/ui/button'
import { ArrowRight, Users, Smartphone, Zap, TrendingUp, Eye, BarChart3, Palette, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Services | Research-Backed Experiences | Web Vello',
  description: 'Deliver intuitive, conversion-focused digital experiences. Web Vello’s UI/UX team blends research, prototyping, and testing to launch products customers love.',
  keywords: ['ui ux design agency', 'user experience design', 'product design services', 'web vello ux', 'ux research company'],
  alternates: {
    canonical: 'https://www.webvello.com/services/ui-ux-design',
  },
  openGraph: {
    title: 'UI/UX Design Services | Web Vello',
    description: 'Partner with Web Vello to create modern, research-driven interfaces that increase engagement and conversions.',
    url: 'https://www.webvello.com/services/ui-ux-design',
    type: 'website',
  }
}

const features = [
  {
    icon: Users,
    title: "User Research",
    description: "Deep understanding of your target audience through surveys, interviews, and behavioral analysis."
  },
  {
    icon: Eye,
    title: "Visual Design",
    description: "Stunning, on-brand designs that capture attention and communicate your message effectively."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Seamless experience across all devices, from mobile phones to desktop computers."
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Optimized designs that load quickly and provide smooth user interactions."
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Every design element optimized to guide users toward your business goals."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Design",
    description: "Design decisions backed by user behavior data and A/B testing results."
  }
]

const process = [
  {
    step: "01",
    title: "Research & Discovery",
    description: "Understand your business, users, and competitive landscape to inform design decisions.",
    duration: "1-2 weeks"
  },
  {
    step: "02",
    title: "User Personas & Journey",
    description: "Create detailed user personas and map their journey through your digital experience.",
    duration: "1 week"
  },
  {
    step: "03",
    title: "Wireframing & Prototyping",
    description: "Develop wireframes and interactive prototypes to test user flows and functionality.",
    duration: "2-3 weeks"
  },
  {
    step: "04",
    title: "Visual Design & Testing",
    description: "Create final designs and conduct user testing to ensure optimal user experience.",
    duration: "2-3 weeks"
  }
]

const results = [
  { metric: "Bounce Rate Reduction", value: "40%", description: "Lower bounce rates" },
  { metric: "Time on Site", value: "60% Increase", description: "More engaged users" },
  { metric: "Conversion Rate", value: "2.5x Higher", description: "Better conversion rates" },
  { metric: "User Satisfaction", value: "95%", description: "Positive user feedback" }
]

const designPrinciples = [
  "User-Centered Design",
  "Accessibility First",
  "Mobile-First Approach",
  "Performance Optimization",
  "Brand Consistency",
  "Conversion Focus"
]

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              User Experience{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Design
              </span>{" "}
              That Delights
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              We create intuitive, engaging user experiences that don’t just look beautiful—they 
              drive results. Our UI/UX design focuses on user satisfaction, conversion optimization, 
              and creating digital experiences that users love to interact with.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free UX Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive UI/UX Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              From initial research to final implementation, we provide end-to-end design 
              services that transform your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600" />
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

      {/* Process Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Design Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A proven methodology that ensures your design is user-centered, effective, 
              and aligned with your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  {step.duration}
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
              Measurable Design Results
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our design improvements consistently deliver measurable business results 
              and enhanced user satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Design Principles
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              These core principles guide every design decision we make, ensuring 
              exceptional user experiences and business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designPrinciples.map((principle) => (
              <div key={principle} className="bg-white p-6 rounded-2xl shadow-soft ring-1 ring-secondary-900/5">
                <div className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 mr-4">
                    <Palette className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="font-semibold text-secondary-900">{principle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Professional Design Tools
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We use industry-standard tools and technologies to create professional, 
              scalable designs that meet modern web standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Figma", "Adobe Creative Suite", "Sketch", "InVision",
              "Principle", "Framer", "Zeplin", "Abstract"
            ].map((tool) => (
              <div key={tool} className="text-center">
                <div className="h-20 w-20 mx-auto bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="h-8 w-8 text-secondary-600" />
                </div>
                <div className="text-sm font-medium text-secondary-900">{tool}</div>
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
              UI/UX design works best when combined with our other digital marketing services. 
              Create a complete user experience that converts visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                Web Development
              </h3>
              <p className="text-secondary-600 mb-4">
                Turn your designs into fully functional, high-performing websites.
              </p>
              <Link 
                href="/services/web-development" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* CRO Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-red-600 transition-colors">
                CRO Services
              </h3>
              <p className="text-secondary-600 mb-4">
                Optimize your designs for maximum conversion and user engagement.
              </p>
              <Link 
                href="/services/cro-lead-generation" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* AI SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI-Powered SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Ensure your designs are optimized for search engines and user intent.
              </p>
              <Link 
                href="/services/ai-seo" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* E-commerce Design */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                E-commerce Design
              </h3>
              <p className="text-secondary-600 mb-4">
                Create shopping experiences that convert browsers into buyers.
              </p>
              <Link 
                href="/services/ecommerce-design" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* App Design & Development */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-blue-600 transition-colors">
                App Design & Development
              </h3>
              <p className="text-secondary-600 mb-4">
                Design and develop mobile apps that users love and engage with.
              </p>
              <Link 
                href="/services/app-design-development" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Brand Identity Design */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <Palette className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                Brand Identity Design
              </h3>
              <p className="text-secondary-600 mb-4">
                Create cohesive brand experiences across all digital touchpoints.
              </p>
              <Link 
                href="/services/digital-marketing" 
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
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let’s create digital experiences that delight your users and drive 
            measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free UX Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
