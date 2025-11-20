import { Button } from '../../../components/ui/button'
import { ArrowRight, Code, Smartphone, Zap, TrendingUp, Users, Shield, BarChart3, Globe, ShoppingBag, Database, Cloud, Server, Layers, FileText, Palette, Cpu, HardDrive, Wrench, Settings, Monitor, Smartphone as Mobile, CheckCircle, Star, Award, Clock, DollarSign, Target, Lightbulb, Building2, Eye, Search, Lock, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WordPress Development Services | Secure, Scalable Builds | Web Vello',
  description: 'Upgrade your WordPress site with Web Vello’s senior developers. We craft custom themes, secure infrastructures, and performance-tuned experiences.',
  keywords: ['wordpress development agency', 'custom wordpress theme', 'wordpress performance optimization', 'web vello wordpress', 'wordpress security services'],
  alternates: {
    canonical: 'https://www.webvello.com/services/wordpress-development',
  },
  openGraph: {
    title: 'WordPress Development Services | Web Vello',
    description: 'Partner with Web Vello to design, build, and optimize WordPress sites that are fast, secure, and conversion-focused.',
    url: 'https://www.webvello.com/services/wordpress-development',
    type: 'website',
  }
}

const customFeatures = [
  {
    icon: Code,
    title: "Custom Theme Development",
    description: "Bespoke WordPress themes built from scratch, perfectly tailored to your brand and business requirements."
  },
  {
    icon: Wrench,
    title: "Plugin Development",
    description: "Custom WordPress plugins that extend functionality and integrate seamlessly with your business processes."
  },
  {
    icon: Shield,
    title: "Security Hardening",
    description: "Advanced security measures including custom authentication, data encryption, and vulnerability protection."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds through custom caching, database optimization, and code efficiency."
  },
  {
    icon: Search,
    title: "SEO Integration",
    description: "Built-in SEO optimization with custom meta tags, schema markup, and search engine friendly architecture."
  },
  {
    icon: Database,
    title: "Custom Database Design",
    description: "Tailored database structures and custom post types designed specifically for your content needs."
  }
]

const elementorFeatures = [
  {
    icon: Palette,
    title: "Visual Page Builder",
    description: "Drag-and-drop interface that allows real-time design changes without touching a single line of code."
  },
  {
    icon: Clock,
    title: "Rapid Development",
    description: "Faster project delivery with pre-built templates and widgets that accelerate the development process."
  },
  {
    icon: Users,
    title: "User-Friendly Management",
    description: "Easy content management system that allows non-technical users to update and maintain their website."
  },
  {
    icon: Mobile,
    title: "Responsive Design",
    description: "Built-in responsive controls ensure your website looks perfect on all devices and screen sizes."
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Pre-built conversion-focused templates and widgets designed to maximize lead generation and sales."
  },
  {
    icon: RefreshCw,
    title: "Easy Updates",
    description: "Simple content updates and design changes that can be made quickly without developer assistance."
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your business needs, target audience, and technical requirements to determine the best WordPress approach.",
    duration: "1-2 weeks"
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Create wireframes, mockups, and technical architecture for your WordPress solution.",
    duration: "2-3 weeks"
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Build your WordPress site with custom development or Elementor implementation, including all integrations.",
    duration: "3-6 weeks"
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Comprehensive testing, optimization, and deployment with ongoing support and maintenance.",
    duration: "1-2 weeks + ongoing"
  }
]

const results = [
  { metric: "Page Load Speed", value: "< 2 seconds", description: "Optimized for Google’s Core Web Vitals" },
  { metric: "Mobile Performance", value: "95+ Score", description: "Perfect mobile experience across all devices" },
  { metric: "SEO Score", value: "90+ Score", description: "Built-in SEO optimization and best practices" },
  { metric: "Security Rating", value: "A+ Grade", description: "Enterprise-level security and protection" }
]

export default function WordPressDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'WordPress Development',
            provider: { '@type': 'Organization', name: 'Web Vello', url: 'https://www.webvello.com', logo: 'https://www.webvello.com/logo.png' },
            areaServed: 'US',
            audience: { '@type': 'BusinessAudience', audienceType: 'B2B' },
            brand: { '@type': 'Brand', name: 'Web Vello' }
          })
        }}
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                WordPress Development
              </span>{" "}
              Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              We specialize in both custom WordPress development and Elementor-based solutions. 
              Whether you need a completely bespoke website or a rapid, user-friendly solution, 
              we deliver WordPress sites that drive results and grow your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free WordPress Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Our WordPress Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Overview Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Why Choose WordPress for Your Business?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                WordPress powers over 43% of all websites on the internet, and for good reason. 
                It offers unparalleled flexibility, scalability, and user-friendliness that makes 
                it the perfect choice for businesses of all sizes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Open-source platform with unlimited customization possibilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Extensive plugin ecosystem with over 60,000 available plugins</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">SEO-friendly architecture that search engines love</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Cost-effective solution with excellent ROI potential</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">WordPress Market Share</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700">Content Management Systems</span>
                  <span className="text-2xl font-bold text-blue-600">43.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{width: '43.2%'}}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">60K+</div>
                    <div className="text-sm text-secondary-600">Available Plugins</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-600">10K+</div>
                    <div className="text-sm text-secondary-600">Free Themes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom vs Elementor Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Custom WordPress vs Elementor: Which is Right for You?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Both approaches have their advantages. Let us help you understand the differences 
              and choose the perfect solution for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Custom WordPress Development */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Custom WordPress Development</h3>
              </div>
              
              <p className="text-secondary-600 mb-6">
                Custom WordPress development involves building your website from the ground up, 
                creating bespoke themes, plugins, and functionality specifically designed for 
                your unique business requirements.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-secondary-900">Perfect For:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-secondary-600">Large enterprises with complex requirements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-secondary-600">Unique business processes and workflows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-secondary-600">High-performance requirements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-secondary-600">Long-term scalability needs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-semibold text-blue-900 mb-2">Investment Range</h5>
                <p className="text-blue-700">$15,000 - $50,000+</p>
                <p className="text-sm text-blue-600 mt-1">Timeline: 8-16 weeks</p>
              </div>
            </div>

            {/* Elementor WordPress Development */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-xl bg-cyan-100 flex items-center justify-center mr-4">
                  <Palette className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Elementor WordPress Development</h3>
              </div>
              
              <p className="text-secondary-600 mb-6">
                Elementor-based development uses the powerful page builder to create stunning, 
                professional websites quickly and efficiently while maintaining full customization 
                capabilities.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-secondary-900">Perfect For:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-secondary-600">Small to medium businesses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-secondary-600">Faster time-to-market requirements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-secondary-600">Client-manageable content updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-secondary-600">Cost-effective solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-900 mb-2">Investment Range</h5>
                <p className="text-cyan-700">$5,000 - $20,000</p>
                <p className="text-sm text-cyan-600 mt-1">Timeline: 4-8 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom WordPress Features */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Custom WordPress Development Features
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              When you need complete control and unlimited customization, custom WordPress development 
              delivers exactly what your business requires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" />
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

      {/* Elementor Features */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Elementor WordPress Development Features
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Elementor combines the power of WordPress with visual design capabilities, 
              making it perfect for rapid development and easy content management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elementorFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 group-hover:bg-cyan-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-cyan-600" />
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

      {/* Detailed Comparison Table */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Detailed Comparison: Custom vs Elementor
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Understanding the key differences to make the right choice for your project.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Custom WordPress</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-cyan-600">Elementor WordPress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-secondary-900">Development Time</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">8-16 weeks</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">4-8 weeks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-secondary-900">Customization Level</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">Unlimited</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">High (within framework)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-secondary-900">Performance</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">Optimized</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">Good (with optimization)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-secondary-900">Client Management</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">Technical knowledge required</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">User-friendly interface</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-secondary-900">Maintenance</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">Developer required</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">Client can manage</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-secondary-900">Scalability</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">Excellent</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">Good</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-secondary-900">Cost Range</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">$15,000 - $50,000+</td>
                  <td className="px-6 py-4 text-center text-sm text-secondary-600">$5,000 - $20,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our WordPress Development Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A proven methodology that ensures your WordPress website is built right the first time, 
              on time, and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-blue-600 font-medium">
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
              Our WordPress websites consistently outperform industry standards and deliver measurable 
              business results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Pricing & Packages */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              WordPress Development Pricing & Packages
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Choose the perfect WordPress development package for your business needs. All packages include 
              responsive design, SEO optimization, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Elementor Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Elementor WordPress</h3>
                <div className="text-4xl font-bold text-cyan-600 mb-2">$5,000</div>
                <p className="text-secondary-600">Perfect for small to medium businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">5-10 page Elementor website</span>
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
                  <span className="text-secondary-600">Client training session</span>
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

            {/* Custom WordPress Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 relative hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Custom WordPress</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$15,000</div>
                <p className="text-secondary-600">Ideal for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">10-20 page custom website</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Custom theme development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Advanced functionality</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Performance optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Advanced SEO optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">6 months support</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-sm text-secondary-500 mb-2">Delivery: 8-12 weeks</div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Enterprise WordPress</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$35,000+</div>
                <p className="text-secondary-600">For large-scale projects</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Unlimited pages & features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">Custom plugin development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-secondary-600">API integrations</span>
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
                <div className="text-sm text-secondary-500 mb-2">Delivery: 12-20 weeks</div>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
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
              Get answers to the most common questions about our WordPress development services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  What’s the difference between custom WordPress and Elementor development?
                </h3>
                <p className="text-secondary-600">
                  Custom WordPress development involves building themes and functionality from scratch, 
                  offering unlimited customization but requiring more time and investment. Elementor 
                  development uses the visual page builder for faster, more cost-effective solutions 
                  while maintaining high customization levels.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  How long does WordPress development take?
                </h3>
                <p className="text-secondary-600">
                  Elementor-based projects typically take 4-8 weeks, while custom WordPress development 
                  takes 8-16 weeks. Timeline depends on complexity, number of pages, custom functionality, 
                  and integration requirements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  Do you provide training for managing WordPress sites?
                </h3>
                <p className="text-secondary-600">
                  Yes! We provide comprehensive training sessions for both custom and Elementor WordPress 
                  sites. For Elementor sites, clients can easily manage content updates themselves. 
                  Custom sites may require more technical knowledge or ongoing developer support.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  Can you migrate my existing website to WordPress?
                </h3>
                <p className="text-secondary-600">
                  Absolutely! We specialize in website migrations to WordPress, preserving your content, 
                  SEO rankings, and functionality. We handle everything from content transfer to URL 
                  redirects and ensure zero downtime during the migration process.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  What ongoing support do you provide?
                </h3>
                <p className="text-secondary-600">
                  All our packages include ongoing support ranging from 3-12 months. We provide 
                  security updates, performance monitoring, content updates, and technical support. 
                  Extended support packages are available for long-term partnerships.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  Is WordPress secure for business websites?
                </h3>
                <p className="text-secondary-600">
                  WordPress is extremely secure when properly configured and maintained. We implement 
                  enterprise-level security measures including SSL certificates, security plugins, 
                  regular updates, and custom security hardening to protect your business data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your WordPress Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you need a custom WordPress solution or an Elementor-based website, 
            we’ll help you choose the perfect approach and deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free WordPress Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/pricing">View All Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
