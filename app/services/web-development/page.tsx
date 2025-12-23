SAFETY RULES:
- New tool only.

TASK:
Implement monitoring:
- Add BullMQ repeatable job "scheduled_scan"
- Store immutable scan snapshots
- Diff engine that compares latest scan to previous scan for same domain:
  - score deltas
  - new/resolved issues
  - regressed clusters metrics
- UI: /domains/[domainId]/monitoring shows trends and “what changed”

Add alert rules (DB stored), but do not send emails yet (just store alerts).
Output: created files + diff logic.
import { Button } from '../../../components/ui/button'
import { ArrowRight, Code, Smartphone, Zap, TrendingUp, Users, Shield, BarChart3, Globe, ShoppingBag, CheckCircle, Brain, Sparkles, Layers, FileText, Palette, Server, Database, Cloud, HardDrive } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom React + Tailwind Web Development | Webvello',
  description: 'Custom web development using React and Tailwind CSS. Performance-optimized, SEO-ready websites built for visibility and conversions. Expert team.',
  keywords: ['custom web development', 'React development', 'Tailwind CSS websites', 'custom React websites', 'performance web development', 'SEO-ready web development'],
  alternates: {
    canonical: 'https://www.webvello.com/services/web-development',
  },
  openGraph: {
    title: 'Custom React + Tailwind Web Development | Webvello',
    description: 'Custom web development using React and Tailwind CSS. Performance-optimized, SEO-ready websites built for visibility and conversions.',
    url: 'https://www.webvello.com/services/web-development',
    type: 'website',
  }
}

const features = [
  {
    icon: Code,
    title: "Component Architecture",
    description: "Reusable React components for maintainable, scalable code that grows with your business."
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Core Web Vitals optimization with page loads under 2 seconds for better rankings and conversions."
  },
  {
    icon: Shield,
    title: "SEO & AEO Ready",
    description: "Server-side rendering and clean code structure optimized for search engines and AI citations."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive Tailwind CSS ensures perfect display across all devices and screen sizes."
  },
  {
    icon: TrendingUp,
    title: "Scalable Infrastructure",
    description: "Architecture designed to add features and handle growth without rebuilding from scratch."
  },
  {
    icon: Users,
    title: "Accessibility Built-In",
    description: "WCAG compliant development for keyboard navigation, screen readers, and inclusive design."
  }
]

const faqs = [
  {
    question: "What is custom web development?",
    answer: "Custom web development builds websites from scratch using programming languages and frameworks rather than templates or website builders. Webvello custom development writes code specifically for business needs using React, Tailwind CSS, and Next.js—creating unique websites optimized for specific goals rather than adapting generic templates."
  },
  {
    question: "Why should I choose React and Tailwind over WordPress or template builders?",
    answer: "React and Tailwind provide superior performance, scalability, and customization compared to WordPress or template builders. React websites load faster (typically under 2 seconds vs. 3-5 seconds for WordPress), are more secure without plugin vulnerabilities, and allow unlimited customization without template constraints. For businesses prioritizing performance, SEO rankings, and unique functionality, custom React development provides technical advantages that template solutions cannot match."
  },
  {
    question: "How long does custom web development take?",
    answer: "Custom web development timelines depend on project complexity. A simple 5-8 page website takes 6-8 weeks from start to launch. Websites with custom functionality, e-commerce, or user accounts take 8-12 weeks. Complex web applications may take 12-16 weeks. Webvello provides detailed timelines during discovery, with milestones for design approval, development completion, and launch."
  },
  {
    question: "What is the difference between web development and web design?",
    answer: "Web design creates the visual appearance and user experience—what the website looks like and how users interact with it. Web development builds the functional website using code—making the design work in browsers and implementing features like forms, databases, and integrations. At Webvello, both are integrated: designers create mockups, developers build them using React and Tailwind, ensuring designs are both beautiful and technically sound."
  },
  {
    question: "How does custom development help with SEO?",
    answer: "Custom development enables technical SEO implementations that improve search rankings. Next.js server-side rendering ensures search engines can crawl content, fast page speeds (under 2 seconds) improve Core Web Vitals scores that affect rankings, clean code structure allows proper schema markup implementation, and mobile-responsive design satisfies Google's mobile-first indexing."
  },
  {
    question: "Can you integrate with my existing business systems?",
    answer: "Yes, custom development allows integration with virtually any business system through APIs. Webvello regularly integrates websites with CRM systems (Salesforce, HubSpot), email marketing platforms (Mailchimp, Klaviyo), payment processors (Stripe, PayPal), inventory management, customer support tools, and analytics platforms. Integration requirements are identified during discovery and built into the development timeline."
  },
  {
    question: "What happens after the website launches?",
    answer: "After launch, Webvello provides 30 days of post-launch support for bug fixes and minor adjustments. Ongoing maintenance packages are available for continued updates, security patches, feature additions, and performance optimization. Most clients choose ongoing support plans that include monthly updates, performance monitoring, security maintenance, and SEO optimization."
  },
  {
    question: "How much does custom React + Tailwind development cost?",
    answer: "Custom web development pricing depends on project scope and complexity. Simple websites (5-8 pages, basic functionality) typically range from $8,000-$15,000. Medium complexity projects (10-15 pages, custom features, CMS) range from $15,000-$30,000. Complex applications with e-commerce, user authentication, or advanced integrations range from $30,000-$60,000+. Webvello provides detailed proposals during discovery with fixed pricing, milestone payments, and clear deliverables."
  },
  {
    question: "What is the difference between React and Next.js?",
    answer: "React is a JavaScript library for building user interfaces through components. Next.js is a framework built on top of React that adds server-side rendering, static site generation, routing, and performance optimizations. Webvello uses Next.js for almost all React projects because it provides the server-side rendering needed for search engine visibility while maintaining React's interactive capabilities."
  },
  {
    question: "Can I update the website content myself after launch?",
    answer: "Yes, content update capability is built into most projects. Webvello implements content management systems (like Sanity or Contentful) when clients need regular content updates, providing admin interfaces for changing text, images, and blog posts without coding. For simpler sites, Webvello provides documentation for basic updates or offers content update services as part of ongoing maintenance plans."
  }
]

import { generatePageSchema } from '@/lib/clean-schema-generator'

export default function WebDevelopmentPage() {
  const pageSchema = generatePageSchema({
    pageType: 'service',
    url: 'https://www.webvello.com/services/web-development',
    title: 'Custom React + Tailwind Web Development | Webvello',
    description: 'Custom web development using React and Tailwind CSS. Performance-optimized, SEO-ready websites built for visibility and conversions.',
    service: {
      name: 'Custom Web Development',
      description: 'Custom web development using React, Tailwind CSS, and Next.js. Performance-optimized, SEO-ready websites built for business growth and search visibility.',
      type: 'Web Development'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'Web Development', url: 'https://www.webvello.com/services/web-development' }
    ]
  })

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Custom{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                React + Tailwind
              </span>{" "}
              Web Development
            </h1>
            <div className="mt-6 text-lg leading-8 text-secondary-700 bg-white/80 rounded-xl p-6 shadow-sm">
              <p className="font-medium mb-3">
                Webvello builds custom websites using React and Tailwind CSS—a modern technology stack focused on performance, scalability, and search visibility.
              </p>
              <p className="text-secondary-600">
                Custom React + Tailwind development provides complete control over user experience, page speed, and technical SEO implementation, unlike template-based solutions.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free Consultation
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

      {/* What is Web Development at Webvello */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What is Web Development at Webvello?
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                <strong>Web development at Webvello</strong> builds custom websites and web applications using React, Tailwind CSS, and Next.js. This approach creates performance-optimized, SEO-ready websites with scalable architecture designed for business growth.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                Webvello's web development services differ from template-based website builders and WordPress sites. The team writes custom code using component-based architecture, allowing for unique designs, advanced functionality, and precise control over performance metrics like Core Web Vitals.
              </p>
              
              <div className="mt-8 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Key Characteristics:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700"><strong>Custom React components</strong> for reusable, maintainable code</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700"><strong>Tailwind CSS</strong> for consistent, responsive design systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700"><strong>Next.js framework</strong> for server-side rendering and <Link href="/services/seo" className="text-primary-600 hover:text-primary-700 underline">SEO optimization</Link></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700"><strong>Performance-first architecture</strong> prioritizing page speed and Core Web Vitals</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700"><strong>SEO and <Link href="/services/answer-engine-optimization" className="text-primary-600 hover:text-primary-700 underline">AEO</Link> integration</strong> built into the development process</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700"><strong>Scalable infrastructure</strong> supporting business growth and feature expansion</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">Custom vs. Template Development</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-green-800">Custom React Development</span>
                      <span className="text-green-600 text-xl">✓</span>
                    </div>
                    <p className="text-sm text-secondary-600">Unique design, unlimited functionality, complete control, optimized performance</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-red-800">Template Solutions</span>
                      <span className="text-red-600 text-xl">✗</span>
                    </div>
                    <p className="text-sm text-secondary-600">Limited customization, generic features, restricted control, performance constraints</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Performance Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Page Load Speed</span>
                    <span className="text-2xl font-bold text-green-600">&lt; 2s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">PageSpeed Score</span>
                    <span className="text-2xl font-bold text-green-600">90+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Core Web Vitals</span>
                    <span className="text-2xl font-bold text-green-600">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This Service */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Who Needs Custom React + Tailwind Development?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Custom web development is ideal for businesses requiring complete design control, superior performance, and scalable architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Complete Design Control</h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Unique branding beyond templates</li>
                <li>• Custom user experiences</li>
                <li>• Competitive differentiation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Performance Requirements</h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Page loads under 2 seconds</li>
                <li>• Google PageSpeed 90+ scores</li>
                <li>• Core Web Vitals optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">SEO & AEO Readiness</h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• <Link href="/services/seo" className="text-primary-600 hover:text-primary-700 underline">Advanced SEO</Link> architecture</li>
                <li>• Server-side rendering for crawlability</li>
                <li>• Content optimized for AI citations</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Scalability Needs</h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Add features without rebuilding</li>
                <li>• Handle traffic growth seamlessly</li>
                <li>• Long-term maintainability</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Technical Integration</h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• E-commerce functionality</li>
                <li>• User authentication systems</li>
                <li>• Third-party API connections</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">NOT Ideal For</h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Simple brochure websites</li>
                <li>• Extremely tight budgets</li>
                <li>• Launch needed within 1-2 weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Websites */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              How Webvello Builds Custom Websites
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Webvello's four-phase development process builds websites correctly, on time, and aligned with business goals through discovery, design, development, and launch phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900">Discovery & Architecture Planning</h3>
                  <p className="text-sm text-blue-600 font-medium">Timeline: 1-2 weeks</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-4">
                Understanding business needs and planning technical architecture. Identify features, select technologies, and map information architecture.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-secondary-900 mb-2">Key Activities:</p>
                <ul className="space-y-1 text-sm text-secondary-600">
                  <li>• Business goal analysis</li>
                  <li>• User journey mapping</li>
                  <li>• Technical requirements documentation</li>
                  <li>• Technology stack selection</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900">Design & Component Structure</h3>
                  <p className="text-sm text-purple-600 font-medium">Timeline: 2-3 weeks</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-4">
                Create visual design and component system. High-fidelity mockups translated into reusable React components styled with Tailwind CSS.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-secondary-900 mb-2">Key Activities:</p>
                <ul className="space-y-1 text-sm text-secondary-600">
                  <li>• Visual design creation</li>
                  <li>• Component library planning</li>
                  <li>• Responsive breakpoint definition</li>
                  <li>• Accessibility review (WCAG)</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900">Development & Testing</h3>
                  <p className="text-sm text-green-600 font-medium">Timeline: 3-6 weeks</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-4">
                Build using React components, implement Tailwind CSS styling, and integrate Next.js. Test across browsers/devices and optimize performance.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-secondary-900 mb-2">Key Activities:</p>
                <ul className="space-y-1 text-sm text-secondary-600">
                  <li>• React component development</li>
                  <li>• <Link href="/services/seo" className="text-primary-600 hover:text-primary-700 underline">SEO</Link> implementation (meta tags, schema)</li>
                  <li>• Performance optimization</li>
                  <li>• Cross-browser testing</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900">Deployment & Optimization</h3>
                  <p className="text-sm text-orange-600 font-medium">Timeline: 1 week + ongoing</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-4">
                Deploy to production servers, monitor performance metrics, and continuously optimize based on real user data.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-secondary-900 mb-2">Key Activities:</p>
                <ul className="space-y-1 text-sm text-secondary-600">
                  <li>• Production deployment</li>
                  <li>• Google Search Console integration</li>
                  <li>• Performance monitoring setup</li>
                  <li>• 30-day post-launch support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Architecture Matters for SEO & AEO */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Web Architecture Matters for SEO & AEO
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Technical architecture directly impacts search visibility, AI citations, and conversion performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Performance & Rankings</h3>
              <p className="text-secondary-600 mb-4">
                Google uses Core Web Vitals as ranking factors. Custom development allows precise control over LCP (&lt; 2.5s), FID (&lt; 100ms), and CLS (&lt; 0.1).
              </p>
              <Link href="/services/seo" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Learn about technical SEO →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">SEO Implementation</h3>
              <p className="text-secondary-600 mb-4">
                Server-side rendering through Next.js ensures search engines can crawl content. Enables dynamic meta tags, structured data, semantic HTML, and XML sitemaps.
              </p>
              <Link href="/services/ai-seo" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Explore AI SEO strategies →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">AEO & AI Citations</h3>
              <p className="text-secondary-600 mb-4">
                Clean, semantic code structure is easily parsed by AI systems. Custom development enables clear content hierarchy, FAQ schema, and entity definitions.
              </p>
              <Link href="/services/answer-engine-optimization" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Learn about AEO →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Accessibility & UX</h3>
              <p className="text-secondary-600">
                Accessible websites rank better and convert more visitors. Custom development ensures keyboard navigation, screen reader compatibility, WCAG compliance, and responsive design.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Scalability for Growth</h3>
              <p className="text-secondary-600">
                Component-based architecture allows adding features without rebuilding. New pages use existing components, e-commerce integrates into existing design, APIs connect to business systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">GEO Optimization</h3>
              <p className="text-secondary-600 mb-4">
                Architecture supporting <Link href="/services/generative-engine-optimization" className="text-primary-600 hover:text-primary-700 underline">Generative Engine Optimization</Link> ensures content is cited by AI platforms like ChatGPT and Perplexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Custom Web Development Features
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Comprehensive features ensuring performance, security, accessibility, and search visibility.
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

      {/* Technology Stack */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              The Webvello Technology Stack
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Carefully selected technologies optimized for performance, SEO, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* React */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 group-hover:bg-blue-600 transition-colors mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">React</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Component-based library for reusable, maintainable interfaces. Reduces development time and ensures consistency.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Component reusability, maintainability
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 group-hover:bg-cyan-600 transition-colors mb-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Tailwind CSS</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Utility-first CSS framework for rapid development with consistent design systems and small file sizes (10-20KB).
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Rapid development, consistency
              </div>
            </div>

            {/* Next.js */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black group-hover:bg-gray-800 transition-colors mb-4">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Next.js</h3>
              <p className="text-sm text-secondary-600 mb-3">
                React framework with server-side rendering, automatic code splitting, and built-in optimizations for SEO-friendly apps.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: SEO, performance, scalability
              </div>
            </div>

            {/* TypeScript */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 group-hover:bg-blue-700 transition-colors mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">TypeScript</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Type safety catching errors during development. Results in fewer bugs and more maintainable code.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Error prevention, code quality
              </div>
            </div>

            {/* Node.js */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 group-hover:bg-green-700 transition-colors mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Node.js</h3>
              <p className="text-sm text-secondary-600 mb-3">
                JavaScript runtime for server-side functionality and API development with high performance.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: APIs, real-time apps, backend
              </div>
            </div>

            {/* PostgreSQL */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 group-hover:bg-blue-800 transition-colors mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">PostgreSQL</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Advanced relational database with ACID compliance and extensibility for data integrity.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Data integrity, complex queries
              </div>
            </div>

            {/* AWS */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 group-hover:bg-orange-600 transition-colors mb-4">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">AWS</h3>
              <p className="text-sm text-secondary-600 mb-3">
                Comprehensive cloud platform providing scalable infrastructure and services for global reach.
              </p>
              <div className="text-xs text-primary-600 font-medium">
                Perfect for: Scalability, reliability
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
                Perfect for: Deployment, performance
              </div>
            </div>
          </div>

          {/* Why This Stack */}
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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get answers to the most common questions about custom React + Tailwind web development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
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
              Web development works best when combined with our other digital marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-blue-600 transition-colors">
                SEO Services
              </h3>
              <p className="text-secondary-600 mb-4">
                Optimize your custom website for search engines with comprehensive SEO strategies.
              </p>
              <Link 
                href="/services/seo" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
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
                Leverage AI technology to optimize your new website for search engines.
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                Local SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Dominate local search results with your new, locally-optimized website.
              </p>
              <Link 
                href="/services/local-seo" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

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

            {/* E-commerce */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <ShoppingBag className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                E-commerce Design
              </h3>
              <p className="text-secondary-600 mb-4">
                Turn your website into a powerful online store that drives sales.
              </p>
              <Link 
                href="/services/ecommerce-design" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline"
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
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Custom Website?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's create a high-performance React + Tailwind website that drives results and supports your SEO, GEO, and AEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
          <p className="text-sm text-primary-100">
            No obligation • Free consultation • Fixed pricing • 30-day post-launch support
          </p>
        </div>
      </section>
    </div>
  )
}
