'use client'

import { Button } from '../../../components/ui/button'
import { ArrowRight, Code, Smartphone, Zap, TrendingUp, Users, Shield, BarChart3, Globe, ShoppingBag, Database, Cloud, Server, Layers, FileText, Palette, Cpu, HardDrive } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored websites built specifically for your business needs, not generic templates."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive design that works perfectly on all devices and screen sizes."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast loading speeds that improve user experience and SEO rankings."
  },
  {
    icon: TrendingUp,
    title: "Conversion Focused",
    description: "Every element designed to turn visitors into customers and increase sales."
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Intuitive navigation and design that keeps visitors engaged and moving through your funnel."
  },
  {
    icon: Shield,
    title: "Security & SEO",
    description: "Built with security best practices and SEO optimization from the ground up."
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, competitors, and target audience to create a winning strategy.",
    duration: "1-2 weeks"
  },
  {
    step: "02",
    title: "Design & Wireframing",
    description: "Create stunning designs and user experience that aligns with your brand and goals.",
    duration: "2-3 weeks"
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your website with clean, efficient code and thorough testing across all devices.",
    duration: "3-4 weeks"
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "Deploy your site and continuously optimize for better performance and conversions.",
    duration: "1 week + ongoing"
  }
]

const results = [
  { metric: "Average Conversion Rate", value: "3x Higher", description: "Than industry standard" },
  { metric: "Page Load Speed", value: "< 2 seconds", description: "Google's recommended speed" },
  { metric: "Mobile Performance", value: "95+ Score", description: "Google PageSpeed Insights" },
  { metric: "SEO Score", value: "90+ Score", description: "Technical SEO optimization" }
]

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Web Development',
            provider: { '@type': 'Organization', name: 'Web Vello', url: 'https://webvello.com', logo: 'https://webvello.com/logo.png' },
            areaServed: 'US',
            audience: { '@type': 'BusinessAudience', audienceType: 'B2B' },
            brand: { '@type': 'Brand', name: 'Web Vello' }
          })
        }}
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Custom{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Web Development
              </span>{" "}
              That Converts
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              We don't just build websites—we build digital assets that drive business growth. 
              Our custom web development focuses on conversions, performance, and results that 
              transform your online presence and boost your bottom line.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free Website Audit
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

      {/* What is Custom Web Development Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What is Custom Web Development?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Custom web development is the process of building websites from scratch using programming languages, frameworks, and technologies specifically chosen for your business needs. Unlike website builders or templates, custom development gives you complete control over functionality, performance, and user experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Tailored functionality that matches your exact business requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Optimized performance and loading speeds for better user experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Scalable architecture that grows with your business</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Enhanced security and SEO optimization from the ground up</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Custom vs. Template Development</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium text-green-800">Custom Development</span>
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-medium text-red-800">Template Solutions</span>
                  <span className="text-red-600 font-semibold">✗</span>
                </div>
                <div className="text-sm text-secondary-600 mt-4">
                  <p className="mb-2"><strong>Custom:</strong> Unique design, unlimited functionality, full control</p>
                  <p><strong>Template:</strong> Limited customization, generic features, restricted control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Choose Our Web Development?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We combine cutting-edge technology with proven conversion principles to create 
              websites that don't just look great—they perform exceptionally.
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
              Our Development Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A proven methodology that ensures your website is built right the first time, 
              on time, and within budget.
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
              Results That Speak for Themselves
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our websites consistently outperform industry standards and deliver measurable 
              business results for our clients.
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

      {/* Technologies Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Built with Modern Technologies
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We use the latest technologies and frameworks to ensure your website is fast, 
              secure, and future-proof. Each technology is carefully chosen for specific benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Next.js 14 */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black group-hover:bg-gray-800 transition-colors mb-4">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Next.js 14</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Full-stack React framework with server-side rendering, API routes, and automatic optimization.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: SEO, Performance, Scalability
              </div>
            </div>

            {/* React */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 group-hover:bg-blue-600 transition-colors mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">React</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Component-based library for building interactive user interfaces with reusable elements.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: UI Components, Interactivity, Maintainability
              </div>
            </div>

            {/* TypeScript */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 group-hover:bg-blue-700 transition-colors mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">TypeScript</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Strongly typed JavaScript that catches errors at compile time and improves code quality.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Error Prevention, Code Quality, Team Development
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 group-hover:bg-cyan-600 transition-colors mb-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Tailwind CSS</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Utility-first CSS framework for rapid UI development with consistent design systems.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Rapid Development, Consistency, Responsive Design
              </div>
            </div>

            {/* Node.js */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 group-hover:bg-green-700 transition-colors mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Node.js</h3>
              <p className="text-sm text-secondary-600 mb-3">
                JavaScript runtime for server-side development with high performance and scalability.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: APIs, Real-time Apps, Backend Services
              </div>
            </div>

            {/* PostgreSQL */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 group-hover:bg-blue-800 transition-colors mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">PostgreSQL</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Advanced open-source relational database with ACID compliance and extensibility.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Data Integrity, Complex Queries, Scalability
              </div>
            </div>

            {/* AWS */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 group-hover:bg-orange-600 transition-colors mb-4">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">AWS</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Comprehensive cloud platform providing scalable infrastructure and services.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Scalability, Reliability, Global Reach
              </div>
            </div>

            {/* Vercel */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 group-hover:bg-black transition-colors mb-4">
                <HardDrive className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Vercel</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Frontend cloud platform optimized for Next.js with global CDN and edge functions.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Deployment, Performance, Global CDN
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
              Why This Technology Stack?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Lightning Fast</h4>
                <p className="text-secondary-600 text-sm">
                  Optimized for speed with server-side rendering, code splitting, and edge caching.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Enterprise Security</h4>
                <p className="text-secondary-600 text-sm">
                  Built-in security features, type safety, and best practices for production apps.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Future-Proof</h4>
                <p className="text-secondary-600 text-sm">
                  Modern stack with active development, community support, and long-term viability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Pricing & Packages */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Web Development Pricing & Packages
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Choose the perfect development package for your business needs. All packages include 
              custom design, responsive development, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">$5,000</div>
                <p className="text-secondary-600">Perfect for small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">5-8 page custom website</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Mobile-responsive design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Basic SEO optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Contact form integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">3 months support</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-sm text-secondary-500 mb-2">Delivery: 4-6 weeks</div>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-500 relative hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">$12,000</div>
                <p className="text-secondary-600">Ideal for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">10-15 page custom website</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Advanced functionality</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">E-commerce integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Advanced SEO optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">CMS integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">6 months support</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-sm text-secondary-500 mb-2">Delivery: 6-8 weeks</div>
                <Button className="w-full bg-primary-600 hover:bg-primary-700" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">$25,000+</div>
                <p className="text-secondary-600">For large-scale projects</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Unlimited pages & features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Custom web applications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">API development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Advanced security features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Performance optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">12 months support</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-sm text-secondary-500 mb-2">Delivery: 8-12 weeks</div>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & Success Stories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Success Stories from Our Web Development
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              See how our custom web development has transformed businesses and delivered measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900">E-commerce Platform</h3>
                  <p className="text-secondary-600">Online Retail Business</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6">
                Built a custom e-commerce platform that increased online sales by 340% in the first year, 
                with improved user experience and mobile conversion rates.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">340%</div>
                  <div className="text-sm text-secondary-600">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">2.8s</div>
                  <div className="text-sm text-secondary-600">Page Load Speed</div>
                </div>
              </div>
              <Link href="/case-studies" className="text-primary-600 hover:text-primary-700 font-medium">
                View Full Case Study →
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900">SaaS Application</h3>
                  <p className="text-secondary-600">B2B Software Company</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6">
                Developed a custom SaaS platform that streamlined operations for 500+ businesses, 
                resulting in 85% user retention and 200% revenue growth.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">85%</div>
                  <div className="text-sm text-secondary-600">User Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">200%</div>
                  <div className="text-sm text-secondary-600">Revenue Growth</div>
                </div>
              </div>
              <Link href="/case-studies" className="text-primary-600 hover:text-primary-700 font-medium">
                View Full Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our web development services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  How long does it take to develop a custom website?
                </h3>
                <p className="text-secondary-600">
                  Development time varies based on complexity. A simple 5-8 page website takes 4-6 weeks, 
                  while complex applications can take 8-12 weeks. We'll provide a detailed timeline during 
                  our initial consultation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  What technologies do you use for web development?
                </h3>
                <p className="text-secondary-600">
                  We use modern, industry-standard technologies including Next.js, React, TypeScript, 
                  Node.js, and cloud platforms like AWS and Vercel. This ensures your website is fast, 
                  secure, and future-proof.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  Do you provide ongoing support after launch?
                </h3>
                <p className="text-secondary-600">
                  Yes! All our packages include post-launch support. We offer 3-12 months of support 
                  depending on your package, plus ongoing maintenance and optimization services.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  Can you integrate with my existing business systems?
                </h3>
                <p className="text-secondary-600">
                  Absolutely! We specialize in integrating websites with CRM systems, payment gateways, 
                  inventory management, and other business tools. This ensures seamless operations 
                  across your entire business.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  How do you ensure my website is SEO-friendly?
                </h3>
                <p className="text-secondary-600">
                  SEO is built into every website from the ground up. We implement technical SEO best 
                  practices, optimize page speed, ensure mobile responsiveness, and create content 
                  structures that search engines love.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  What if I need changes after the website is launched?
                </h3>
                <p className="text-secondary-600">
                  We're here to help! We offer flexible maintenance packages and can make updates, 
                  add new features, or modify existing functionality. We believe in building long-term 
                  partnerships with our clients.
                </p>
              </div>
            </div>
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
              Web development works best when combined with our other digital marketing services. 
              Create a complete online presence that ranks, converts, and grows your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UI/UX Design */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                UI/UX Design
              </h3>
              <p className="text-secondary-600 mb-4">
                User-centered design that works seamlessly with your custom website.
              </p>
              <Link 
                href="/services/ui-ux-design" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* AI SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition-colors mb-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-indigo-600 transition-colors">
                AI-Powered SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Optimize your new website for search engines with cutting-edge AI strategies.
              </p>
              <Link 
                href="/services/ai-seo" 
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
                Dominate local search results with your new, locally-optimized website.
              </p>
              <Link 
                href="/services/local-seo" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
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
                Convert website visitors into customers with conversion rate optimization.
              </p>
              <Link 
                href="/services/cro-lead-generation" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* E-commerce Development */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                E-commerce Design
              </h3>
              <p className="text-secondary-600 mb-4">
                Turn your website into a powerful online store that drives sales.
              </p>
              <Link 
                href="/services/ecommerce-design" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Software Development */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                Software Development
              </h3>
              <p className="text-secondary-600 mb-4">
                Build custom applications that integrate seamlessly with your website.
              </p>
              <Link 
                href="/services/software-development" 
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
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's build a website that doesn't just look great—it drives real business results 
            and helps you dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Website Audit</Link>
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
