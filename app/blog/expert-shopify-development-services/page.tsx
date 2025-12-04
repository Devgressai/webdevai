import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Rocket, Users, Target, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Expert Shopify Development Services | Web Vello',
  description: 'Professional Shopify development services to elevate your e-commerce business. Custom design, theme development, migrations, and expert Shopify solutions.',
  keywords: 'Shopify development services, Shopify experts, Shopify theme development, Shopify migration, e-commerce development, Shopify web design',
  openGraph: {
    title: 'Expert Shopify Development Services | Web Vello',
    description: 'Professional Shopify development services to elevate your e-commerce business. Custom design, theme development, migrations, and expert Shopify solutions.',
    type: 'article',
    publishedTime: '2025-11-02T00:00:00.000Z',
    authors: ['Web Vello'],
    tags: ['Shopify', 'Web Development', 'E-commerce', 'Online Store', 'Theme Development'],
  },
  alternates: {
    canonical: 'https://www.webvello.com/blog/expert-shopify-development-services',
  },
}

export default function ExpertShopifyDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Shopify Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transform Your E-commerce Vision Into Reality with Professional Shopify Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Custom Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Theme Development</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Store Migration</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Building a successful online store requires more than just listing products on a website. It demands 
              strategic planning, expert execution, and a deep understanding of both e-commerce fundamentals and 
              Shopify's powerful platform capabilities. At Web Vello, we bring years of specialized Shopify development 
              experience to every project.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're launching your first online store, migrating from another platform, or looking to optimize 
              an existing Shopify site, our team of certified Shopify experts provides comprehensive development services 
              tailored to your unique business needs and growth objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Why Choose Web Vello for Shopify Development?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Certified Experts</h3>
                <p className="text-gray-600 text-sm">
                  Our developers hold Shopify certifications and have extensive real-world experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Efficient workflows and agile methods ensure your store launches on schedule.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Dedicated Support</h3>
                <p className="text-gray-600 text-sm">
                  Ongoing assistance and maintenance to keep your store performing at its best.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Results-Focused</h3>
                <p className="text-gray-600 text-sm">
                  Every decision is driven by data and focused on maximizing your ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Core Shopify Development Services
            </h2>
            
            <div className="space-y-12">
              {/* Service 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Custom Shopify Theme Development
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Stand out from the competition with a completely custom Shopify theme designed specifically for 
                    your brand. Our designers and developers collaborate to create unique, high-performing themes that 
                    reflect your brand identity and deliver exceptional user experiences.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">100% custom design tailored to your brand</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Mobile-responsive and cross-browser compatible</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Performance-optimized for fast loading times</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">SEO-friendly code structure and markup</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-xl h-64 flex items-center justify-center">
                  <p className="text-purple-700 font-semibold text-center">Custom Theme Development Visualization</p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-xl h-64 flex items-center justify-center">
                  <p className="text-blue-700 font-semibold text-center">Store Setup & Configuration</p>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Complete Shopify Store Setup
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Starting a new Shopify store can be overwhelming with countless decisions and technical 
                    configurations. We handle every aspect of your store setup, from initial configuration to 
                    product organization, ensuring your store is ready for success from day one.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Complete store configuration and settings optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Product catalog organization and categorization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Payment gateway and shipping method setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Essential app installation and configuration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Shopify Migration Services
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ready to move your existing online store to Shopify? Our migration experts ensure a smooth, 
                    seamless transition from any e-commerce platform—including Magento, WooCommerce, BigCommerce, 
                    Wix, or custom solutions—without losing data or SEO rankings.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Complete data migration (products, customers, orders)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">SEO preservation with proper redirects and URL mapping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Design recreation or improvement on Shopify</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Post-migration testing and quality assurance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-xl h-64 flex items-center justify-center">
                  <p className="text-purple-700 font-semibold text-center">Seamless Migration Process</p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-xl h-64 flex items-center justify-center">
                  <p className="text-pink-700 font-semibold text-center">Custom Functionality Development</p>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Custom Functionality & Integrations
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Every business has unique requirements. We develop custom functionalities and integrations that 
                    extend Shopify's capabilities to match your specific operational needs, from complex product 
                    configurations to enterprise system integrations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom app development for unique features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Third-party system integrations (ERP, CRM, POS)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Advanced product variant and option management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom checkout experiences and extensions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Development Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Tailored Solutions</h3>
                <p className="text-gray-600">
                  We don't believe in one-size-fits-all approaches. Every project begins with understanding your 
                  unique business model, target audience, and specific goals. This insight drives every decision we 
                  make throughout the development process.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Responsive Design</h3>
                <p className="text-gray-600">
                  With mobile commerce accounting for the majority of online sales, we ensure your Shopify store 
                  delivers flawless experiences across all devices—from smartphones to tablets to desktop computers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Scalability Focus</h3>
                <p className="text-gray-600">
                  We build stores that grow with your business. Whether you're starting with 100 products or 10,000, 
                  our development approach ensures your store can handle increasing traffic, inventory, and complexity.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Performance Optimization</h3>
                <p className="text-gray-600">
                  Speed matters in e-commerce. We implement best practices for code optimization, image compression, 
                  and caching to ensure your store loads quickly and provides smooth browsing experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Technologies We Master
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Frontend</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Liquid Template Language</li>
                    <li>• HTML5 & CSS3</li>
                    <li>• JavaScript & jQuery</li>
                    <li>• React & Vue.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Tools & Frameworks</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Shopify CLI</li>
                    <li>• Theme Kit</li>
                    <li>• Git Version Control</li>
                    <li>• Webpack & Build Tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">APIs & Integration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Shopify Admin API</li>
                    <li>• Storefront API</li>
                    <li>• GraphQL</li>
                    <li>• REST APIs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900">Fashion & Apparel</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900">Beauty & Cosmetics</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900">Home & Garden</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900">Electronics</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900">Food & Beverage</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900">Health & Wellness</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900">Sports & Fitness</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900">Jewelry & Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Development Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Discovery & Consultation</h3>
                  <p className="text-gray-600">
                    We start by understanding your business, goals, and requirements through detailed consultations 
                    and analysis of your current situation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Strategic Planning</h3>
                  <p className="text-gray-600">
                    We create a comprehensive project plan including timelines, milestones, feature specifications, 
                    and design direction.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Design & Prototyping</h3>
                  <p className="text-gray-600">
                    Our designers create mockups and prototypes for your review, iterating based on your feedback 
                    until we achieve the perfect design.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Development & Testing</h3>
                  <p className="text-gray-600">
                    Our developers bring the design to life, implementing all functionality and rigorously testing 
                    every feature across devices and browsers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Launch & Optimization</h3>
                  <p className="text-gray-600">
                    We handle the complete launch process, monitor performance, and make optimizations to ensure 
                    your store performs at its best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Dream Shopify Store?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's bring your e-commerce vision to life with expert Shopify development services. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">What is custom Shopify theme development?</h3>
                <p className="text-gray-600">
                  Custom theme development involves creating a completely unique design and functionality for your 
                  Shopify store, built from scratch to match your specific brand identity and business requirements, 
                  rather than using a pre-made template.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Can I make changes to my custom theme after it's developed?</h3>
                <p className="text-gray-600">
                  Absolutely! Custom themes can be updated and modified at any time. We provide training and documentation, 
                  or you can engage us for ongoing support and updates as your needs evolve.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">How long does it take to develop a custom Shopify theme?</h3>
                <p className="text-gray-600">
                  Development timelines vary based on complexity and custom requirements. A typical custom theme takes 
                  4-8 weeks from initial consultation to launch, though simpler projects may be faster and more complex 
                  ones may take longer.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">How much does custom Shopify development cost?</h3>
                <p className="text-gray-600">
                  Costs depend on the project scope, complexity, and specific features required. Custom themes typically 
                  start from a few thousand dollars. Contact us for a detailed quote based on your specific needs.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Do you offer ongoing support after launch?</h3>
                <p className="text-gray-600">
                  Yes! We offer various support and maintenance packages to keep your store updated, secure, and 
                  performing optimally. We're here to help your business succeed long after the initial launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}








