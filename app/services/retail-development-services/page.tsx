import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { CheckCircle, ShoppingCart, TrendingUp, Users, Award, Target, Phone, Mail, Clock, Star, Shield, ArrowRight, Package, CreditCard, Smartphone, Globe, BarChart3, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Retail Development Services | E-commerce Solutions',
  description: 'Complete retail development services for modern commerce. Custom e-commerce platforms, POS integration & omnichannel solutions.',
  keywords: 'retail development services, e-commerce development, retail software, pos integration, omnichannel retail, retail technology',
  alternates: {
    canonical: 'https://www.webvello.com/services/retail-development-services',
  },
  openGraph: {
    title: 'Retail Development Services | E-commerce Solutions',
    description: 'Complete retail development services for modern commerce. Custom e-commerce platforms, POS integration & omnichannel solutions.',
    url: 'https://www.webvello.com/services/retail-development-services',
    type: 'website',
    images: [{ url: 'https://www.webvello.com/og-image.jpg', width: 1200, height: 630, alt: 'Retail Development Services' }],
  }
}

export default function RetailDevelopmentServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-purple-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-400">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Enterprise Retail Technology Partner</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Retail Development Services: Build Your Retail Empire
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-50 leading-relaxed">
              End-to-end retail technology solutions that power modern commerce. From custom e-commerce platforms to omnichannel systems, we build scalable retail infrastructure that drives revenue and delivers exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">250+</div>
              <div className="text-gray-600">Retail Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">$2.5B+</div>
              <div className="text-gray-600">GMV Processed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">4.8★</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                Modern retail demands sophisticated technology infrastructure. As specialists in <strong>retail development services</strong>, we engineer comprehensive solutions that seamlessly integrate online and offline commerce, manage complex inventory across multiple channels, process payments securely at scale, deliver personalized customer experiences, and provide real-time analytics for data-driven decisions. Whether you're launching a new e-commerce brand, modernizing legacy retail systems, or building omnichannel capabilities, we have the expertise to deliver retail technology that drives competitive advantage.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The retail landscape has transformed dramatically. Consumer expectations for seamless shopping experiences, inventory visibility, flexible fulfillment options, and personalized recommendations have never been higher. Meanwhile, retailers face increasing pressure from Amazon and digital-native brands while managing the complexity of multi-channel operations. Success requires retail technology that's not just functional but exceptional—fast, scalable, intelligent, and customer-centric. We build retail systems that don't just meet today's requirements but anticipate tomorrow's challenges, positioning your business for sustainable growth in an increasingly competitive marketplace.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Retail Technology Solutions</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our <strong>retail development services</strong> cover every aspect of modern commerce technology. We don't just build websites—we create complete retail ecosystems that power growth:
              </p>
              
              <div className="space-y-8">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom E-Commerce Platforms</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Off-the-shelf e-commerce platforms limit your competitive differentiation. We build custom e-commerce solutions tailored to your specific business model, customer experience requirements, integration needs, and scalability goals. Our custom platforms include: headless commerce architectures for maximum flexibility, progressive web apps for app-like experiences without app stores, advanced product configurators for complex products, subscription and membership commerce capabilities, B2B wholesale portals with custom pricing logic, marketplace platforms connecting multiple vendors, international e-commerce with localization, and API-first architectures enabling endless integrations.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Custom development means no compromises. You get exactly the features you need, user experiences that differentiate your brand, performance optimized for your catalog size and traffic patterns, and the ability to evolve your platform as your business grows. While platforms like Shopify work for basic stores, businesses with unique requirements, complex business logic, or differentiated experiences need custom solutions that provide competitive moats.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Omnichannel Commerce Systems</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Modern shoppers don't distinguish between online and offline—they expect seamless experiences across all touchpoints. We build omnichannel systems that unify your retail operations: unified inventory management across online, stores, and warehouses; clienteling tools enabling sales associates to access customer data; endless aisle capabilities letting stores sell inventory from any location; buy online pick up in store (BOPIS) functionality; ship from store capabilities optimizing fulfillment costs; unified customer profiles tracking behavior across channels; centralized order management orchestrating fulfillment; and consistent pricing and promotions across all channels.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    True omnichannel commerce breaks down silos between channels, creating unified experiences that increase customer satisfaction and operational efficiency. Customers can shop however they want—online for home delivery, online for store pickup, in-store with access to your full catalog, or any combination. Associates have complete visibility into customer history and inventory. You gain centralized data and control while delivering decentralized, personalized experiences.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Point of Sale (POS) Systems</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Your POS system is the operational heart of physical retail. We develop modern, cloud-based POS solutions featuring: intuitive interfaces requiring minimal training; mobile POS for line-busting and mobile checkout; integrated payment processing; real-time inventory synchronization; customer lookup and purchase history; loyalty program integration; employee management and commissions; offline mode for internet outages; detailed analytics and reporting; and integration with accounting and ERP systems.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Modern POS systems do far more than process transactions—they're customer engagement platforms, inventory management tools, and data collection systems. The right POS enables better customer service, reduces checkout friction, prevents inventory discrepancies, and provides actionable insights into store performance. We build POS systems that work beautifully for your employees while integrating seamlessly with your broader retail technology ecosystem.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Inventory Management Systems</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Inventory management makes or breaks retail profitability. We build sophisticated inventory systems that provide: real-time inventory visibility across all locations; automated reorder points and purchase order generation; demand forecasting using machine learning; multi-location transfer management; kit and bundle inventory handling; serial number and lot tracking; cycle counting and inventory audit tools; supplier management and EDI integration; stockout and overstock alerts; and inventory valuation and accounting integration.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Great inventory management increases turns, reduces carrying costs, prevents stockouts, and improves cash flow. Our systems provide the visibility and intelligence needed to optimize inventory investment while ensuring product availability. Whether managing thousands of SKUs across dozens of locations or handling complex inventory scenarios like perishables, apparel sizing, or made-to-order products, we build systems that master your inventory complexity.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Data & Personalization</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Amazon's recommendation engine drives 35% of their revenue. Your retail business needs similar personalization capabilities. We build customer data platforms and personalization engines that: unify customer data from all touchpoints; segment customers based on behavior and preferences; deliver personalized product recommendations; create dynamic pricing and promotions; automate email and SMS marketing; predict customer lifetime value; identify churn risks; and measure campaign effectiveness. Modern consumers expect personalized experiences, and our systems deliver them at scale.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Business Intelligence</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Data-driven retailers outperform competitors. We build comprehensive analytics systems providing: real-time sales dashboards; inventory analytics and forecasting; customer behavior analysis; marketing attribution modeling; product performance reports; staff performance metrics; financial reporting integration; and custom KPI tracking. Our analytics systems transform raw data into actionable insights that drive better business decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Retail Segments We Serve</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our retail development expertise spans diverse retail segments, each with unique technology requirements:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Fashion & Apparel',
                  'Consumer Electronics',
                  'Home & Garden',
                  'Health & Beauty',
                  'Sporting Goods',
                  'Grocery & Food',
                  'Jewelry & Accessories',
                  'Furniture',
                  'Automotive Parts',
                  'Toys & Games',
                  'Books & Media',
                  'Pet Supplies',
                  'Hardware & Tools',
                  'Office Supplies',
                  'Specialty Retail',
                  'Convenience Stores',
                  'Department Stores',
                  'Luxury Retail'
                ].map((segment, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-center border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{segment}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Retail Success Stories</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8 border border-purple-200">
                  <div className="text-purple-900 mb-4">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Fashion Retailer (50 Locations)</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">320%</div>
                  <p className="text-gray-700 mb-4">E-commerce growth in first year</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unified 50 stores into single inventory system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>40% reduction in stockouts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>$18M online revenue in year one</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8 border border-purple-200">
                  <div className="text-purple-900 mb-4">
                    <Zap className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Consumer Electronics Chain</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">$125M</div>
                  <p className="text-gray-700 mb-4">Annual GMV through new platform</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Custom B2B wholesale portal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>75% reduction in order processing time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integrated with 15 supplier EDI systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Retail Technology?
              </h2>
              <p className="text-xl text-purple-50">
                Schedule a consultation to discuss your retail development needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900" placeholder="john@retailbusiness.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900" placeholder="Your Retail Business" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Website</label>
                  <input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900" placeholder="https://yourstore.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your retail development needs</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900" placeholder="Describe your current challenges and goals..." />
                </div>

                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6">
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-gray-600">
                  <Shield className="inline h-4 w-4 mr-1" />
                  Your information is secure. We respect your privacy.
                </p>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-3 text-purple-300" />
                <div className="font-semibold mb-1">Call Us</div>
                <a href="tel:+17378885723" className="text-purple-200 hover:text-white">(737) 888-5723</a>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-3 text-purple-300" />
                <div className="font-semibold mb-1">Email Us</div>
                <a href="mailto:hello@webvello.com" className="text-purple-200 hover:text-white">hello@webvello.com</a>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-3 text-purple-300" />
                <div className="font-semibold mb-1">Business Hours</div>
                <div className="text-purple-100">Mon-Fri: 9AM-6PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


