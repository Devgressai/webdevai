import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, ShoppingCart, Zap, Shield, Users, BarChart3, Globe, Code, 
  CheckCircle, Rocket, TrendingUp, Star, Award, Target, Clock, 
  Smartphone, Settings, Package, DollarSign, Eye, Search, 
  Layers, Database, Lock, RefreshCw, MessageSquare, Box
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopify Development Company | Custom Themes, Apps & Expert Solutions 2025',
  description: 'Leading Shopify development company offering custom theme development, Shopify app creation, migrations, integrations, and optimization. Partner with certified Shopify experts.',
  keywords: 'shopify development company, shopify web development, custom shopify themes, shopify app development, shopify experts, shopify plus development, shopify migration, ecommerce development',
  alternates: {
    canonical: 'https://www.webvello.com/services/shopify-development',
  },
  openGraph: {
    title: 'Shopify Development Company | Web Vello',
    description: 'Professional Shopify development services: custom themes, apps, migrations, and optimization. Transform your e-commerce vision into reality.',
    url: 'https://www.webvello.com/services/shopify-development',
    type: 'website',
  }
}

export default function ShopifyDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-sm font-semibold text-green-700 mb-6">
              <Award className="h-4 w-4" />
              Certified Shopify Development Partner
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Shopify Development Company
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-4">
              Transform your e-commerce vision into reality with expert Shopify development services. 
              Custom themes, powerful apps, seamless migrations, and optimization that drives sales.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-10">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">350+ Projects Delivered</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-green-600" />
                <span className="font-semibold">2-Week Launch Time</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg">
                <Link href="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg">
                <Link href="/portfolio" className="flex items-center">
                  View Portfolio
                  <Eye className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">350+</div>
              <div className="text-gray-600 font-medium">Shopify Stores Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2 Weeks</div>
              <div className="text-gray-600 font-medium">Average Launch Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Web Vello as Your Shopify Development Company?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg mb-6">
                In today's competitive e-commerce landscape, your online store needs to be more than just functional—it 
                needs to be exceptional. As a leading Shopify development company, Web Vello specializes in creating 
                high-performance, conversion-optimized online stores that help businesses thrive in the digital marketplace.
              </p>
              <p className="text-lg mb-6">
                With over 350 successful Shopify projects delivered and a team of certified Shopify experts, we understand 
                what it takes to build stores that not only look beautiful but also drive measurable results. From startups 
                launching their first online store to enterprise brands scaling with Shopify Plus, we provide end-to-end 
                development services tailored to your specific business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Comprehensive Shopify Development Services
            </h2>
            <p className="text-xl text-gray-600">
              From strategy to execution, we deliver complete Shopify solutions that drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-6">
                <Code className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Theme Development</h3>
              <p className="text-gray-600 mb-4">
                Fully custom Shopify themes designed from scratch to perfectly match your brand identity 
                and deliver exceptional user experiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>100% custom design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile-first responsive design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Performance optimized</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>SEO-friendly code structure</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-6">
                <Package className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shopify App Development</h3>
              <p className="text-gray-600 mb-4">
                Custom Shopify applications that extend your store's functionality and provide unique 
                features tailored to your business requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Public & private apps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>API integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom admin interfaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ongoing maintenance</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                <ShoppingCart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Store Setup</h3>
              <p className="text-gray-600 mb-4">
                Full Shopify store setup and configuration services to get your e-commerce business 
                up and running quickly and professionally.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Account setup & configuration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Product catalog setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Shipping & tax configuration</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 mb-6">
                <RefreshCw className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamless migration from any e-commerce platform to Shopify with complete data transfer 
                and SEO preservation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete data migration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>SEO rankings preservation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Zero downtime migration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Post-migration testing</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 mb-6">
                <Layers className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Third-Party Integrations</h3>
              <p className="text-gray-600 mb-4">
                Connect your Shopify store with essential business tools and platforms for seamless 
                operations and automation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ERP & CRM integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Marketing automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Inventory management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Shipping & fulfillment</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 mb-6">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Speed optimization and performance tuning to ensure your Shopify store loads fast 
                and provides excellent user experiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Code optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Image compression</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Caching implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Core Web Vitals optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Plus Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="h-4 w-4 text-yellow-400" />
                Enterprise Solutions
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Shopify Plus Development Services
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Scale your e-commerce operations with Shopify Plus. We provide enterprise-level 
                development services for high-volume businesses with complex requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Unlimited Scalability</div>
                    <p className="text-gray-400">Handle unlimited products, traffic, and transactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Custom Checkout</div>
                    <p className="text-gray-400">Fully customizable checkout experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Advanced Automation</div>
                    <p className="text-gray-400">Shopify Flow for workflow automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Dedicated Support</div>
                    <p className="text-gray-400">Priority support and account management</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/contact" className="flex items-center">
                  Discuss Shopify Plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Shopify Plus Features</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Rocket className="h-6 w-6 text-green-400" />
                  <span className="font-medium">Wholesale Channel (B2B)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <span className="font-medium">Multi-Store & Multi-Currency</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-400" />
                  <span className="font-medium">Advanced Security & Compliance</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-orange-400" />
                  <span className="font-medium">Advanced Analytics & Reporting</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Code className="h-6 w-6 text-yellow-400" />
                  <span className="font-medium">Shopify Scripts & Launchpad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Our Proven Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach that ensures quality, transparency, and on-time delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Planning</h3>
              <p className="text-gray-600">
                We analyze your business requirements, target audience, and competitive landscape to create 
                a comprehensive development strategy.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design & Prototyping</h3>
              <p className="text-gray-600">
                Our designers create stunning mockups and interactive prototypes for your review and approval 
                before development begins.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development & Testing</h3>
              <p className="text-gray-600">
                Expert developers build your store using best practices, followed by rigorous testing across 
                devices and browsers.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch & Optimization</h3>
              <p className="text-gray-600">
                We launch your store, monitor performance, provide training, and offer ongoing optimization 
                and support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Why Businesses Choose Web Vello
            </h2>
            <p className="text-xl text-gray-600">
              Experience, expertise, and results that set us apart from other Shopify development companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Award className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Shopify Experts</h3>
              <p className="text-gray-600">
                Our team holds official Shopify certifications and has years of hands-on experience building 
                successful e-commerce stores.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Rocket className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Development Cycles</h3>
              <p className="text-gray-600">
                Launch your Shopify store in as little as 2 weeks with our efficient agile development methodology 
                and proven workflows.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Target className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conversion-Focused Design</h3>
              <p className="text-gray-600">
                Every design decision is backed by data and focused on maximizing conversions, average order 
                value, and customer lifetime value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Shield className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise-Grade Security</h3>
              <p className="text-gray-600">
                Built-in security best practices, PCI compliance, and regular security audits to protect your 
                store and customer data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <MessageSquare className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Communication</h3>
              <p className="text-gray-600">
                Regular project updates, clear timelines, and open communication throughout the entire 
                development process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <DollarSign className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                High-quality Shopify development at transparent, competitive rates with no hidden fees or 
                surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Our Technical Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Mastery of modern technologies and Shopify-specific tools
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Front-End</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Liquid Template Language</li>
                <li>• JavaScript & React</li>
                <li>• HTML5 & CSS3</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Back-End</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Shopify APIs</li>
                <li>• GraphQL</li>
                <li>• Node.js</li>
                <li>• Ruby on Rails</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Shopify CLI</li>
                <li>• Theme Kit</li>
                <li>• Git Version Control</li>
                <li>• Shopify Polaris</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Integrations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Webhooks</li>
                <li>• REST & GraphQL APIs</li>
                <li>• Third-party Services</li>
                <li>• Payment Gateways</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized Shopify solutions for diverse industry verticals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Fashion & Apparel',
              'Beauty & Cosmetics',
              'Home & Garden',
              'Electronics',
              'Food & Beverage',
              'Health & Wellness',
              'Sports & Fitness',
              'Jewelry & Accessories',
              'Books & Media',
              'Toys & Games',
              'Pet Supplies',
              'Automotive'
            ].map((industry) => (
              <div key={industry} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="font-medium text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Ready to Build Your High-Performance Shopify Store?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Partner with Web Vello's certified Shopify experts to create an online store that drives sales, 
            delights customers, and scales with your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <Link href="/contact" className="flex items-center">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link href="/blog/ultimate-shopify-web-development-guide">
                Read Shopify Guide
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-green-100">
            Free consultation • 2-week launch time • 24/7 support
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our Shopify development services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How much does Shopify development cost?
              </h3>
              <p className="text-gray-600">
                Shopify development costs vary based on project complexity. Basic store setup with theme customization 
                starts at $2,000-$5,000. Custom theme development ranges from $5,000-$20,000. Complex custom apps and 
                Shopify Plus projects can range from $15,000-$100,000+. Contact us for a detailed quote based on your 
                specific requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How long does it take to build a Shopify store?
              </h3>
              <p className="text-gray-600">
                Timeline depends on project scope. Standard Shopify stores with theme customization can launch in 2-4 
                weeks. Custom theme development typically takes 6-10 weeks. Complex projects with custom apps or Shopify 
                Plus implementations may require 3-6 months. We provide detailed timelines during the planning phase.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can you migrate my existing store to Shopify?
              </h3>
              <p className="text-gray-600">
                Yes! We provide complete migration services from any e-commerce platform including Magento, WooCommerce, 
                BigCommerce, Wix, Squarespace, and custom solutions. We transfer all your data (products, customers, 
                orders), preserve SEO rankings with proper redirects, and ensure zero downtime during migration.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do you provide ongoing support after launch?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer comprehensive maintenance and support packages including 24/7 technical assistance, 
                regular updates, performance monitoring, bug fixes, security patches, and ongoing optimization. Your 
                success is our priority beyond just the launch.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What's the difference between Shopify and Shopify Plus?
              </h3>
              <p className="text-gray-600">
                Shopify Plus is the enterprise version designed for high-volume businesses processing $1M+ in annual 
                revenue. It offers unlimited bandwidth, advanced customization, automation tools (Flow), custom checkout, 
                Launchpad for campaigns, dedicated support, and wholesale channels. Regular Shopify is perfect for 
                growing businesses with more modest requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can you integrate my Shopify store with other business systems?
              </h3>
              <p className="text-gray-600">
                Yes! We specialize in integrating Shopify with ERPs, CRMs, accounting software (QuickBooks, Xero), 
                inventory management systems, marketing platforms (Klaviyo, Mailchimp), fulfillment services, and any 
                other business tools you use. We create seamless workflows that eliminate manual processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-t">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Want to Learn More About Shopify Development?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive guides and resources on Shopify development, best practices, and e-commerce growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/blog/ultimate-shopify-web-development-guide" className="flex items-center">
                  Read Ultimate Shopify Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/blog">
                  View All Blog Posts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
