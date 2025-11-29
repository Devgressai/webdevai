import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Code, Zap, Shield, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shopify App Development & Custom Solutions | Web Vello',
  description: 'Transform your e-commerce business with expert Shopify app development services. Custom apps, integrations, and tailored solutions to boost sales and enhance customer experience.',
  keywords: 'Shopify app development, custom Shopify apps, Shopify development agency, Shopify Plus developer, e-commerce solutions, Shopify integration',
  openGraph: {
    title: 'Shopify App Development & Custom Solutions | Web Vello',
    description: 'Transform your e-commerce business with expert Shopify app development services. Custom apps, integrations, and tailored solutions to boost sales and enhance customer experience.',
    type: 'article',
    publishedTime: '2025-11-02T00:00:00.000Z',
    authors: ['Web Vello'],
    tags: ['Shopify', 'E-commerce', 'App Development', 'Web Development', 'Digital Commerce'],
  },
  alternates: {
    canonical: 'https://www.webvello.com/blog/shopify-app-development-custom-solutions',
  },
}

export default function ShopifyAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shopify App Development & Custom Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Build Powerful E-commerce Experiences with Expert Shopify Development Services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Custom Apps</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">API Integration</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Shopify Plus</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Mobile Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              In the competitive world of e-commerce, having a standard online store isn't enough. Modern businesses 
              need customized solutions that align with their unique workflows, enhance customer experiences, and drive 
              measurable results. That's where professional Shopify app development comes into play.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At Web Vello, we specialize in creating bespoke Shopify applications and custom development solutions 
              that transform ordinary online stores into powerful sales engines. Whether you're launching a new venture 
              or scaling an existing business, our Shopify development services provide the technical foundation you need 
              to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Custom Shopify Development */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Why Choose Custom Shopify App Development?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Enhanced Functionality</h3>
                <p className="text-gray-600">
                  Extend your store's capabilities beyond standard features with custom apps tailored to your 
                  specific business requirements and customer needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Competitive Advantage</h3>
                <p className="text-gray-600">
                  Stand out from competitors with unique features and functionalities that aren't available 
                  in off-the-shelf solutions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Build apps that grow with your business, handling increased traffic, products, and 
                  transactions without compromising performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Shopify Development Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Shopify Development Services
            </h2>
            
            <div className="space-y-8">
              {/* Service 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Shopify App Development</h3>
                <p className="text-gray-700 mb-4">
                  We create fully customized Shopify applications from the ground up, designed specifically to meet 
                  your business objectives. Our apps integrate seamlessly with your existing store infrastructure and 
                  provide intuitive user experiences for both merchants and customers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Public and private app development for Shopify and Shopify Plus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom admin interfaces and merchant dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Advanced product customization and configuration tools</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Shopify API Integration Services</h3>
                <p className="text-gray-700 mb-4">
                  Connect your Shopify store with third-party platforms, business tools, and external systems through 
                  robust API integrations. We ensure seamless data flow between systems while maintaining security and 
                  reliability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Payment gateway and processor integrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">ERP, CRM, and inventory management system connections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Marketing automation and email platform integrations</span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Shopify Plus Development</h3>
                <p className="text-gray-700 mb-4">
                  For enterprise-level businesses, we provide specialized Shopify Plus development services that 
                  leverage the platform's advanced features and capabilities to handle high-volume operations and 
                  complex business requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom checkout experiences and payment flows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Multi-store and multi-currency implementations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Wholesale and B2B portal development</span>
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Theme Development & Modification</h3>
                <p className="text-gray-700 mb-4">
                  Create stunning, brand-aligned Shopify themes that deliver exceptional user experiences and drive 
                  conversions. Our developers craft responsive, performance-optimized themes using Liquid, JavaScript, 
                  and modern front-end technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Fully custom theme development from scratch</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Existing theme customization and enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mobile-first, responsive design implementation</span>
                  </li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Mobile App Development for Shopify</h3>
                <p className="text-gray-700 mb-4">
                  Extend your Shopify store's reach with native mobile applications for iOS and Android. Provide 
                  customers with convenient shopping experiences while leveraging mobile-specific features like push 
                  notifications and location services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Native iOS and Android app development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Real-time synchronization with your Shopify store</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Push notifications and personalized mobile experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Shopify App Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Discovery & Planning</h3>
                <p className="text-gray-600 text-sm">
                  We analyze your business requirements, define project scope, and create a detailed development roadmap.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Design & Prototyping</h3>
                <p className="text-gray-600 text-sm">
                  Our designers create intuitive interfaces and interactive prototypes for your approval before development begins.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Development & Testing</h3>
                <p className="text-gray-600 text-sm">
                  Expert developers build your app using best practices, followed by rigorous quality assurance testing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Launch & Support</h3>
                <p className="text-gray-600 text-sm">
                  We deploy your app, provide training, and offer ongoing maintenance and support to ensure optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Front-End Technologies</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• Liquid templating language</p>
                  <p className="text-gray-700">• JavaScript, React, and Vue.js</p>
                  <p className="text-gray-700">• HTML5, CSS3, and Tailwind CSS</p>
                  <p className="text-gray-700">• Shopify Polaris design system</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Back-End & APIs</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• Shopify REST & GraphQL APIs</p>
                  <p className="text-gray-700">• Node.js, Ruby, and Python</p>
                  <p className="text-gray-700">• Webhook implementations</p>
                  <p className="text-gray-700">• Third-party API integrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Benefits of Working with Web Vello
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Experienced Development Team</h3>
                  <p className="text-gray-600">Years of expertise in Shopify development and e-commerce solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Fast Development Cycles</h3>
                  <p className="text-gray-600">Agile methodology ensures quick turnaround times without sacrificing quality</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Transparent Communication</h3>
                  <p className="text-gray-600">Regular updates and clear project reporting throughout development</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ongoing Support & Maintenance</h3>
                  <p className="text-gray-600">Continued assistance after launch to ensure your app performs optimally</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Competitive Pricing</h3>
                  <p className="text-gray-600">High-quality development services at transparent, competitive rates</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Security-First Approach</h3>
                  <p className="text-gray-600">Built-in security best practices to protect your store and customer data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Common Shopify App Development Use Cases
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Subscription Management</h3>
                <p className="text-gray-600 text-sm">
                  Build recurring revenue models with custom subscription apps that handle billing, customer portals, and automated fulfillment.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Product Customization</h3>
                <p className="text-gray-600 text-sm">
                  Enable customers to personalize products with custom options, configurations, and real-time visualization tools.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Inventory Management</h3>
                <p className="text-gray-600 text-sm">
                  Advanced inventory tracking, multi-location management, and automated reordering systems for complex operations.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Loyalty Programs</h3>
                <p className="text-gray-600 text-sm">
                  Create custom rewards programs that increase customer retention and drive repeat purchases with points and perks.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Shipping Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Integrate with shipping carriers, calculate complex rates, print labels, and provide tracking information seamlessly.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Analytics & Reporting</h3>
                <p className="text-gray-600 text-sm">
                  Custom dashboards and reports that provide deeper insights into sales, customer behavior, and business performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Shopify Store?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how custom Shopify app development can help you achieve your e-commerce goals 
              and stand out from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
                  View Our Work
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
                <h3 className="text-lg font-bold mb-2 text-gray-900">How long does it take to develop a custom Shopify app?</h3>
                <p className="text-gray-600">
                  Development timelines vary based on complexity and features. Simple apps can take 4-6 weeks, while 
                  more complex solutions may require 2-4 months. We provide detailed timelines during the planning phase.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">What's the difference between public and private Shopify apps?</h3>
                <p className="text-gray-600">
                  Public apps are listed in the Shopify App Store and available to all merchants. Private apps are 
                  custom-built for a single store and not publicly distributed. We develop both types based on your needs.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Do you provide ongoing maintenance and support?</h3>
                <p className="text-gray-600">
                  Yes! We offer comprehensive maintenance packages that include bug fixes, security updates, feature 
                  enhancements, and technical support to keep your app running smoothly.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Can you integrate my Shopify store with other platforms?</h3>
                <p className="text-gray-600">
                  Absolutely. We specialize in API integrations with ERPs, CRMs, accounting software, marketing tools, 
                  and any other platforms your business uses.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">What is the cost of custom Shopify app development?</h3>
                <p className="text-gray-600">
                  Costs depend on the app's complexity, features, and integration requirements. We provide transparent 
                  quotes after understanding your project scope. Contact us for a free consultation and estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}







