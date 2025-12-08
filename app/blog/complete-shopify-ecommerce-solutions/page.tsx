import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, ShoppingCart, Settings, TrendingUp, Shield, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Shopify eCommerce Solutions | Web Vello',
  description: 'End-to-end Shopify eCommerce development solutions for growing businesses. Setup, design, integration, migration, and ongoing support services.',
  keywords: 'Shopify eCommerce development, Shopify store setup, Shopify integration, eCommerce solutions, Shopify maintenance, online store development',
  openGraph: {
    title: 'Complete Shopify eCommerce Solutions | Web Vello',
    description: 'End-to-end Shopify eCommerce development solutions for growing businesses. Setup, design, integration, migration, and ongoing support services.',
    type: 'article',
    publishedTime: '2025-11-02T00:00:00.000Z',
    authors: ['Web Vello'],
    tags: ['Shopify', 'E-commerce Development', 'Online Store', 'Web Development', 'Digital Commerce'],
  },
  alternates: {
    canonical: 'https://www.webvello.com/blog/complete-shopify-ecommerce-solutions',
  },
}

export default function CompleteShopifyEcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Shopify eCommerce Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive Development Services to Launch, Grow, and Scale Your Online Store
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Full Setup</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Custom Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Integration</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Transform Your Business with Professional Shopify eCommerce Development
              </h2>
              <p className="text-lg text-gray-700">
                In today's digital marketplace, 80% of consumers prefer shopping online for its convenience and 
                accessibility. To capitalize on this massive shift in consumer behavior, businesses need robust, 
                flexible, and optimized e-commerce solutions that deliver exceptional shopping experiences.
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Web Vello provides comprehensive Shopify eCommerce development services designed to help businesses 
              of all sizes establish, grow, and scale their online presence. As a dedicated Shopify development partner, 
              we offer end-to-end solutions—from initial store setup to ongoing optimization—ensuring your e-commerce 
              platform drives consistent revenue growth.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our experienced team of Shopify developers combines technical expertise with e-commerce best practices 
              to deliver customized solutions that align with your business goals, enhance customer experiences, and 
              maximize your return on investment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Why Choose Our Shopify eCommerce Solutions?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Complete Solutions</h3>
                <p className="text-gray-600">
                  From initial setup to ongoing support, we provide comprehensive e-commerce services that cover 
                  every aspect of your online store's success.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Delivery</h3>
                <p className="text-gray-600">
                  Launch your Shopify store in as little as 2 weeks with our efficient development process and 
                  proven methodologies.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
                <p className="text-gray-600">
                  Over 350+ experienced developers with proven track records in delivering successful Shopify 
                  e-commerce projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Comprehensive Shopify Development Services
            </h2>
            
            <div className="space-y-8">
              {/* Service 1 */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-xl border-l-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Shopify Store Setup & Configuration
                </h3>
                <p className="text-gray-700 mb-4">
                  Starting your e-commerce journey shouldn't be overwhelming. We handle every technical detail of 
                  your Shopify store setup, ensuring you launch with a professional, fully functional online store 
                  that's optimized for conversions from day one.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Complete Shopify account setup and configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Domain connection and SSL certificate installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Store settings optimization for performance</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Navigation structure and menu configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Legal pages setup (privacy, terms, refunds)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Tax and shipping rate configuration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-xl border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Custom Shopify Design & Theme Customization
                </h3>
                <p className="text-gray-700 mb-4">
                  First impressions matter in e-commerce. Our designers create visually stunning, brand-aligned 
                  Shopify stores that captivate visitors and guide them seamlessly toward purchase. We customize 
                  themes to perfectly reflect your brand identity while ensuring optimal user experience.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom theme design from concept to reality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Premium theme customization and modification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Brand-consistent design implementation</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Mobile-responsive design optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom page layouts and section development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Conversion-focused design elements</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-xl border-l-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Shopify Integration Services
                </h3>
                <p className="text-gray-700 mb-4">
                  Connect your Shopify store with the business tools and platforms you already use. Our integration 
                  specialists ensure seamless data flow between systems, automating workflows and eliminating manual 
                  processes that slow your business down.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Payment gateway integration (Stripe, PayPal, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Shopping cart and checkout optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">API integrations with third-party platforms</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">ERP and inventory management systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">CRM and email marketing platform connections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Shipping carrier and fulfillment integrations</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-xl border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Shopify Migration Services
                </h3>
                <p className="text-gray-700 mb-4">
                  Moving your existing online store to Shopify? Our migration experts ensure a smooth, risk-free 
                  transition. We carefully transfer all your data—products, customers, orders, and content—while 
                  preserving your SEO rankings and maintaining business continuity.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Complete data migration from any platform</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Product catalog transfer and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Customer and order history migration</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">SEO preservation with 301 redirects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Zero downtime migration planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Post-migration testing and verification</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 5 */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-xl border-l-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Shopify Maintenance & Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Your store's launch is just the beginning. Our ongoing maintenance and support services ensure 
                  your Shopify store remains secure, up-to-date, and performing optimally. We monitor, maintain, 
                  and enhance your store so you can focus on growing your business.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">24/7 technical support and assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Regular updates and security patches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Performance monitoring and optimization</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Bug fixes and issue resolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">App updates and compatibility management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Backup and disaster recovery services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Web Vello */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Why Businesses Trust Web Vello for Shopify Development
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Comprehensive Solutions</h3>
                <p className="text-gray-600 text-sm">
                  One-stop shop for all your Shopify needs, from setup to ongoing optimization and growth strategies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Flexible Service Models</h3>
                <p className="text-gray-600 text-sm">
                  Customized solutions adapted to your industry standards, business requirements, and budget constraints.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Affordable Pricing</h3>
                <p className="text-gray-600 text-sm">
                  High-quality Shopify development starting at competitive rates with transparent, no-surprise pricing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Consistent Project Reporting</h3>
                <p className="text-gray-600 text-sm">
                  Regular updates and progress reports keep you informed throughout the development process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">On-Time Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Structured timelines and milestone-based approach ensures we deliver on schedule, every time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Goal-Oriented Development</h3>
                <p className="text-gray-600 text-sm">
                  Every feature and enhancement is aligned with your specific business objectives and growth goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Experienced Team</h3>
                <p className="text-gray-600 text-sm">
                  Dedicated staff with proven expertise in Shopify development and e-commerce best practices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">User-Friendly Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Responsive, practical stores designed with your target audience's needs and preferences in mind.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Technology-Driven</h3>
                <p className="text-gray-600 text-sm">
                  Smart automation and cutting-edge technologies deliver error-free, high-performance e-commerce stores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Plus */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-green-900 to-teal-800 text-white p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Shopify Plus Development Services
              </h2>
              <p className="text-xl text-center mb-8 opacity-90">
                Enterprise-level e-commerce solutions for high-growth businesses
              </p>
              <p className="text-lg mb-6">
                Ready to scale your e-commerce operations? Shopify Plus provides enterprise-grade features, enhanced 
                customization capabilities, and dedicated support for businesses processing high order volumes. Our 
                Shopify Plus development services help you leverage these advanced features to maximize efficiency, 
                profitability, and customer satisfaction.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 text-xl">Shopify Plus Benefits:</h3>
                  <ul className="space-y-2">
                    <li>• Unlimited bandwidth and processing capacity</li>
                    <li>• Advanced wholesale and B2B capabilities</li>
                    <li>• Custom checkout experiences</li>
                    <li>• Automation tools and scripts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-xl">Our Shopify Plus Services:</h3>
                  <ul className="space-y-2">
                    <li>• Shopify Plus migration and setup</li>
                    <li>• Multi-store and international expansion</li>
                    <li>• Custom app and integration development</li>
                    <li>• Performance optimization and scaling</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
                    Discuss Shopify Plus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-green-600 mb-2">350+</div>
                <div className="text-gray-700 font-medium">Expert Developers</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-600 mb-2">2000+</div>
                <div className="text-gray-700 font-medium">Successful Projects</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-600 mb-2">2 Weeks</div>
                <div className="text-gray-700 font-medium">Average Launch Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Proven Development Process
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Consultation & Requirements', description: 'We discuss your business needs, goals, and requirements to create a detailed project scope.' },
                { title: 'Strategic Planning', description: 'Development roadmap creation with timelines, milestones, and resource allocation.' },
                { title: 'Design & Prototyping', description: 'Visual designs and prototypes for your review and approval before development begins.' },
                { title: 'Store Development', description: 'Expert developers build your store following best practices and your specifications.' },
                { title: 'Testing & Quality Assurance', description: 'Comprehensive testing across devices, browsers, and scenarios to ensure flawless performance.' },
                { title: 'Launch & Deployment', description: 'Smooth launch with monitoring and immediate support to address any issues.' },
                { title: 'Training & Handover', description: 'Complete training on managing your store and comprehensive documentation.' },
                { title: 'Ongoing Support', description: 'Continued maintenance, updates, and optimization to drive long-term success.' },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Shopify Store?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build a high-performing e-commerce store that drives revenue and delights customers. 
              Get started with a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
                  View Portfolio
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
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  How long does it take to develop a Shopify store?
                </h3>
                <p className="text-gray-600">
                  With our efficient process, we can launch a fully functional Shopify store in as little as 2 weeks 
                  for standard projects. More complex stores with custom features may take 4-8 weeks depending on 
                  specific requirements.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  What platforms can you migrate to Shopify from?
                </h3>
                <p className="text-gray-600">
                  We can migrate your store from any e-commerce platform including Magento, WooCommerce, BigCommerce, 
                  Wix, Squarespace, custom solutions, and more. Our migration process ensures zero data loss and 
                  maintains your SEO rankings.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  Do you provide post-launch support?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer comprehensive maintenance and support packages including 24/7 technical assistance, 
                  regular updates, performance monitoring, bug fixes, and ongoing optimization to ensure your store's 
                  continued success.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  How much does Shopify development cost?
                </h3>
                <p className="text-gray-600">
                  Our Shopify development services start at $499, with final pricing depending on your specific 
                  requirements, features, and customization needs. We provide transparent quotes with no hidden fees 
                  after understanding your project scope.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  Can you integrate Shopify with my existing business systems?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We specialize in integrating Shopify with ERPs, CRMs, accounting software, inventory 
                  management systems, marketing platforms, and any other business tools you currently use to create 
                  seamless workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}










