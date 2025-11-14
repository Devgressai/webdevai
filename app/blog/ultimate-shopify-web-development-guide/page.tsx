import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Code, ShoppingCart, Rocket, TrendingUp, Shield, Zap, Users, Target, Award, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ultimate Shopify Web Development Guide 2025 | Web Vello',
  description: 'Complete guide to Shopify web development: custom apps, themes, migrations, integrations, and expert services. Everything you need to build a successful online store.',
  keywords: 'Shopify web development company, Shopify development services, Shopify app development, custom Shopify solutions, Shopify Plus, e-commerce development',
  openGraph: {
    title: 'Ultimate Shopify Web Development Guide 2025 | Web Vello',
    description: 'Complete guide to Shopify web development: custom apps, themes, migrations, integrations, and expert services. Everything you need to build a successful online store.',
    type: 'article',
    publishedTime: '2025-11-02T00:00:00.000Z',
    authors: ['Web Vello'],
    tags: ['Shopify', 'Web Development', 'E-commerce', 'Online Store', 'Shopify Plus'],
  },
  alternates: {
    canonical: 'https://webvello.com/blog/ultimate-shopify-web-development-guide',
  },
}

export default function UltimateShopifyGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              Ultimate 2025 Guide
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shopify Web Development Company
            </h1>
            <p className="text-2xl md:text-3xl mb-8 opacity-90">
              The Complete Guide to Building, Scaling, and Optimizing Your E-commerce Success
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
              <span className="bg-white/20 px-4 py-2 rounded-full">Custom Development</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">App Creation</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Theme Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Migration</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Integration</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Shopify Plus</span>
            </div>
            <p className="text-lg opacity-80">
              Everything you need to know about professional Shopify web development services in 2025
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">Complete Guide Contents</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <a href="#overview" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  1. Shopify Development Overview
                </a>
                <a href="#why-shopify" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  2. Why Choose Shopify?
                </a>
                <a href="#services" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  3. Core Development Services
                </a>
              </div>
              <div className="space-y-2">
                <a href="#custom-apps" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  4. Custom App Development
                </a>
                <a href="#themes" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  5. Theme Development
                </a>
                <a href="#integrations" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  6. Integrations & APIs
                </a>
              </div>
              <div className="space-y-2">
                <a href="#shopify-plus" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  7. Shopify Plus Solutions
                </a>
                <a href="#choosing-partner" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  8. Choosing a Development Partner
                </a>
                <a href="#faq" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  9. FAQs & Best Practices
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="overview" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Shopify Web Development: Your Path to E-commerce Success
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                In 2025, the global e-commerce market continues its explosive growth, with online shopping becoming 
                the preferred method for over 80% of consumers worldwide. This digital transformation presents an 
                unprecedented opportunity for businesses of all sizes—but only if they have the right platform and 
                development partner to capitalize on it.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Shopify has emerged as the leading e-commerce platform, powering over 4.5 million active stores across 
                175 countries. Its combination of powerful features, scalability, and ease of use makes it the platform 
                of choice for everyone from solo entrepreneurs to Fortune 500 companies. However, to truly unlock 
                Shopify's potential and stand out in competitive markets, businesses need professional web development 
                services that go beyond basic templates.
              </p>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">What This Guide Covers</h3>
                <p className="text-gray-700 mb-4">
                  This comprehensive guide explores everything you need to know about Shopify web development services, 
                  from custom app creation to enterprise-level solutions. Whether you're starting fresh, migrating from 
                  another platform, or scaling an existing store, you'll discover:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Complete breakdown of Shopify development services and capabilities</li>
                  <li>• Custom app development strategies and best practices</li>
                  <li>• Theme customization and design optimization techniques</li>
                  <li>• Integration solutions for seamless business operations</li>
                  <li>• Shopify Plus features for enterprise-level businesses</li>
                  <li>• How to choose the right development partner for your needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shopify */}
      <section id="why-shopify" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Why Shopify is the Leading E-commerce Platform
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">4.5M+</div>
                <div className="text-gray-700 font-medium">Active Stores Worldwide</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">$444B</div>
                <div className="text-gray-700 font-medium">Total Sales Volume</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">175</div>
                <div className="text-gray-700 font-medium">Countries Served</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">99.99%</div>
                <div className="text-gray-700 font-medium">Platform Uptime</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Rapid Deployment</h3>
                <p className="text-gray-600">
                  Launch professional online stores in weeks, not months. Shopify's robust infrastructure and extensive 
                  ecosystem accelerate time-to-market significantly.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Unlimited Scalability</h3>
                <p className="text-gray-600">
                  From first sale to millions in revenue, Shopify scales seamlessly. Handle traffic spikes, expand 
                  product catalogs, and grow without technical limitations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Enterprise Security</h3>
                <p className="text-gray-600">
                  Level 1 PCI DSS compliance, SSL certificates, and fraud protection built-in. Shopify handles security 
                  so you can focus on business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Comprehensive Shopify Web Development Services
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Professional Shopify development encompasses a wide range of services, each designed to address 
              specific business needs and growth objectives.
            </p>
            
            <div className="space-y-12">
              {/* Service Category 1 */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Store Setup & Configuration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600">
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Complete Store Setup</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Full Shopify account configuration, domain setup, SSL installation, payment gateway integration, 
                      shipping configuration, and essential app installation.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Account creation and configuration</li>
                      <li>✓ Domain and hosting setup</li>
                      <li>✓ Payment and shipping methods</li>
                      <li>✓ Legal pages and policies</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-xl border-l-4 border-indigo-600">
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Product Catalog Management</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Professional product organization, categorization, variant setup, inventory configuration, and 
                      SEO-optimized product descriptions.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Product data entry and organization</li>
                      <li>✓ Collection creation and management</li>
                      <li>✓ Inventory tracking setup</li>
                      <li>✓ Product SEO optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Category 2 */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Design & User Experience</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border-l-4 border-purple-600">
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Custom Theme Development</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Completely custom Shopify themes designed and developed from scratch to match your unique brand 
                      identity and business requirements.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Custom design and branding</li>
                      <li>✓ Mobile-responsive development</li>
                      <li>✓ Performance optimization</li>
                      <li>✓ Accessibility compliance</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl border-l-4 border-pink-600">
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Theme Customization</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Modification and enhancement of existing Shopify themes to better align with your brand and 
                      improve conversion rates.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Layout and design modifications</li>
                      <li>✓ Custom section development</li>
                      <li>✓ Feature additions and enhancements</li>
                      <li>✓ Brand integration and styling</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Category 3 */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical Development</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border-l-4 border-green-600">
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Platform Migration</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Seamless migration from any e-commerce platform to Shopify with complete data transfer and 
                      SEO preservation.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Data migration (products, customers, orders)</li>
                      <li>✓ SEO and URL structure preservation</li>
                      <li>✓ Design recreation or improvement</li>
                      <li>✓ Zero-downtime migration planning</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-white p-6 rounded-xl border-l-4 border-teal-600">
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Performance Optimization</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Speed and performance optimization to improve load times, user experience, and search engine 
                      rankings.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Code optimization and minification</li>
                      <li>✓ Image compression and lazy loading</li>
                      <li>✓ Caching implementation</li>
                      <li>✓ Core Web Vitals optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Apps Section */}
      <section id="custom-apps" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Custom Shopify App Development
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Extend your store's capabilities with custom applications tailored to your specific business needs
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Custom App Development?</h3>
              <p className="text-gray-700 mb-6">
                While Shopify's app store offers thousands of applications, custom app development provides solutions 
                perfectly aligned with your unique workflows, processes, and business requirements. Custom apps deliver 
                competitive advantages that off-the-shelf solutions simply cannot match.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-indigo-50 rounded-xl">
                  <Code className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2 text-gray-900">Unique Functionality</h4>
                  <p className="text-sm text-gray-600">
                    Features designed specifically for your business processes
                  </p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Target className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2 text-gray-900">Competitive Edge</h4>
                  <p className="text-sm text-gray-600">
                    Capabilities your competitors don't have access to
                  </p>
                </div>
                <div className="text-center p-6 bg-indigo-50 rounded-xl">
                  <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h4 className="font-bold mb-2 text-gray-900">Perfect Integration</h4>
                  <p className="text-sm text-gray-600">
                    Seamless connection with your existing systems
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Public Apps</h3>
                <p className="text-gray-700 mb-4">
                  Distribute your custom functionality to other Shopify merchants through the Shopify App Store. 
                  Perfect for creating new revenue streams or expanding your software offerings.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">App Store listing and distribution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">OAuth authentication implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Multi-tenant architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Billing and subscription management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Private Apps</h3>
                <p className="text-gray-700 mb-4">
                  Custom applications built exclusively for your store, providing specialized functionality tailored 
                  to your specific operational requirements and business processes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom admin interfaces and dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Automated workflow and process tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom reporting and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Internal tool development</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Popular Custom App Use Cases</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-gray-900">Subscription Management</h4>
                  <p className="text-sm text-gray-600">
                    Recurring billing, customer portals, subscription modifications, and automated fulfillment systems.
                  </p>
                </div>
                <div className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-gray-900">Product Customization</h4>
                  <p className="text-sm text-gray-600">
                    Real-time product configurators, custom option management, and personalization tools.
                  </p>
                </div>
                <div className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-gray-900">Inventory Management</h4>
                  <p className="text-sm text-gray-600">
                    Advanced inventory tracking, multi-location management, and automated reordering systems.
                  </p>
                </div>
                <div className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-gray-900">Loyalty Programs</h4>
                  <p className="text-sm text-gray-600">
                    Points systems, rewards management, referral programs, and customer engagement tools.
                  </p>
                </div>
                <div className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-gray-900">Wholesale Portals</h4>
                  <p className="text-sm text-gray-600">
                    B2B customer portals, custom pricing, bulk ordering, and account management systems.
                  </p>
                </div>
                <div className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-gray-900">Booking Systems</h4>
                  <p className="text-sm text-gray-600">
                    Appointment scheduling, calendar management, service booking, and availability tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Shopify Integration Services
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Connect your Shopify store with the business tools and platforms you already use
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Modern businesses rely on multiple specialized platforms for different aspects of their operations. 
                Professional Shopify integration services ensure these systems work together seamlessly, automating 
                workflows, eliminating manual data entry, and providing a unified view of your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Common Integration Types</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Payment Gateways</h4>
                    <p className="text-gray-600 text-sm">
                      Stripe, PayPal, Square, Authorize.net, and regional payment processors for seamless transactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">ERP Systems</h4>
                    <p className="text-gray-600 text-sm">
                      SAP, Oracle, NetSuite, Microsoft Dynamics for unified business management and data synchronization.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">CRM Platforms</h4>
                    <p className="text-gray-600 text-sm">
                      Salesforce, HubSpot, Zoho CRM for customer relationship management and sales pipeline tracking.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email Marketing</h4>
                    <p className="text-gray-600 text-sm">
                      Mailchimp, Klaviyo, SendGrid for automated email campaigns and customer engagement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Integration Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900">Automated Workflows</div>
                      <p className="text-gray-600 text-sm">Eliminate manual data entry and reduce human errors</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900">Real-Time Synchronization</div>
                      <p className="text-gray-600 text-sm">Keep data consistent across all business systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900">Enhanced Efficiency</div>
                      <p className="text-gray-600 text-sm">Streamline operations and reduce processing time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900">Better Insights</div>
                      <p className="text-gray-600 text-sm">Unified data provides comprehensive business intelligence</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Integration Expertise</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-gray-900">API Development</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Shopify REST API</li>
                    <li>• GraphQL API</li>
                    <li>• Storefront API</li>
                    <li>• Admin API</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-gray-900">Middleware Solutions</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Custom middleware development</li>
                    <li>• Data transformation</li>
                    <li>• Error handling</li>
                    <li>• Queue management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-gray-900">Webhook Implementation</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Real-time event handling</li>
                    <li>• Automated notifications</li>
                    <li>• Data synchronization</li>
                    <li>• Custom workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Plus */}
      <section id="shopify-plus" className="py-16 bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Shopify Plus: Enterprise E-commerce Solutions
            </h2>
            <p className="text-xl text-center mb-12 opacity-90">
              Advanced capabilities for high-volume businesses and complex operations
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">What is Shopify Plus?</h3>
                <p className="mb-4 opacity-90">
                  Shopify Plus is the enterprise version of Shopify, designed for high-volume merchants and brands 
                  with complex requirements. It offers advanced features, dedicated support, and unlimited scalability 
                  for businesses processing over $1 million in annual revenue.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Unlimited bandwidth and no transaction limits</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Advanced customization and API access</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Dedicated success manager and support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Exclusive apps and integrations</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Shopify Plus Features</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-1">Shopify Flow</h4>
                    <p className="text-sm opacity-90">
                      Automation platform for complex workflows and business processes
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Shopify Scripts</h4>
                    <p className="text-sm opacity-90">
                      Custom pricing, discounts, and checkout customizations with Ruby
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Launchpad</h4>
                    <p className="text-sm opacity-90">
                      Schedule and automate marketing campaigns and flash sales
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Wholesale Channel</h4>
                    <p className="text-sm opacity-90">
                      Dedicated B2B portal with custom pricing and ordering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 px-8">
                  Discuss Shopify Plus Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing a Partner */}
      <section id="choosing-partner" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Choosing the Right Shopify Development Partner
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              The success of your Shopify project depends heavily on selecting the right development partner
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Experience & Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Look for agencies with proven Shopify experience, certified developers, and a portfolio of 
                  successful projects similar to your needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Communication & Support</h3>
                <p className="text-gray-600 text-sm">
                  Choose partners who prioritize clear communication, provide regular updates, and offer ongoing 
                  support after launch.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Results & ROI Focus</h3>
                <p className="text-gray-600 text-sm">
                  The best partners focus on business outcomes, not just technical implementation. They understand 
                  e-commerce metrics and growth strategies.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Web Vello</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">350+ experienced Shopify developers on staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">2,000+ successful Shopify projects delivered</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Shopify Partner Program certification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Transparent pricing starting at $499</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">24/7 support and ongoing maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Average 2-week launch time for standard stores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Expertise in custom apps and integrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Proven track record across multiple industries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Shopify Success Story?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Let's transform your e-commerce vision into reality with expert Shopify web development services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-80">
              Free consultation • Transparent pricing • No hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  What is Shopify web development?
                </h3>
                <p className="text-gray-600">
                  Shopify web development encompasses all technical services related to building, customizing, and 
                  optimizing online stores on the Shopify platform. This includes theme development, custom app creation, 
                  API integrations, migrations, and ongoing maintenance.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  How much does Shopify development cost?
                </h3>
                <p className="text-gray-600">
                  Costs vary based on project complexity. Basic store setup starts around $499-$2,000, custom theme 
                  development ranges from $3,000-$15,000, and custom app development typically starts at $5,000-$25,000+. 
                  Enterprise Shopify Plus projects can range from $50,000-$500,000+ depending on requirements.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  How long does it take to build a Shopify store?
                </h3>
                <p className="text-gray-600">
                  Standard Shopify stores using premium themes can launch in 2-4 weeks. Custom theme development typically 
                  takes 6-12 weeks. Complex custom applications or Shopify Plus implementations may require 3-6 months or 
                  more depending on scope and features.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  Can you migrate my existing store to Shopify?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide complete migration services from any e-commerce platform including Magento, WooCommerce, 
                  BigCommerce, Wix, Squarespace, and custom solutions. We handle data transfer, design recreation, SEO 
                  preservation, and ensure zero downtime during the transition.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  What's the difference between Shopify and Shopify Plus?
                </h3>
                <p className="text-gray-600">
                  Shopify Plus is the enterprise version designed for high-volume businesses. It offers unlimited bandwidth, 
                  advanced customization options, dedicated support, automation tools (Flow), custom checkout, and features 
                  like Launchpad and Scripts. It's recommended for businesses doing $1M+ in annual revenue.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  Do you provide ongoing support after launch?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We offer comprehensive support and maintenance packages including 24/7 technical assistance, 
                  regular updates, performance monitoring, bug fixes, security patches, and ongoing optimization. Your 
                  success doesn't end at launch—it's just the beginning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



