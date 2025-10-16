import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { CheckCircle, Truck, TrendingUp, Phone, Mail, Clock, Shield, ArrowRight, Globe, Package, BarChart3, Zap, Target, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Freight Forwarder Web Design | Logistics Website Development',
  description: 'Specialized web design for freight forwarders and logistics companies. Quote systems, tracking integration & lead generation.',
  keywords: 'freight forwarder web design, logistics website design, freight website development, shipping company web design',
  alternates: {
    canonical: 'https://webvello.com/services/freight-forwarder-web-design',
  },
  openGraph: {
    title: 'Freight Forwarder Web Design | Logistics Website Development',
    description: 'Specialized web design for freight forwarders and logistics companies. Quote systems, tracking integration & lead generation.',
    url: 'https://webvello.com/services/freight-forwarder-web-design',
    type: 'website',
    images: [{ url: 'https://webvello.com/og-image.jpg', width: 1200, height: 630, alt: 'Freight Forwarder Web Design' }],
  }
}

export default function FreightForwarderWebDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-orange-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-orange-400">
              <Truck className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Logistics Industry Web Design Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Freight Forwarder Web Design Company: Streamline Your Logistics Online
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-50 leading-relaxed">
              Professional website design specifically for freight forwarders, 3PLs, and logistics companies. Instant quote calculators, shipment tracking integration, and lead generation systems that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">180+</div><div className="text-gray-600">Logistics Sites</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">450%</div><div className="text-gray-600">Avg ROI</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">99.9%</div><div className="text-gray-600">Uptime</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">4.9★</div><div className="text-gray-600">Client Rating</div></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                The freight forwarding and logistics industry faces unique digital challenges. As specialists in <strong>freight forwarder web design</strong>, we understand that your website must do far more than look professional—it needs to instantly communicate your service offerings, provide automated quote calculations, integrate with tracking systems, demonstrate industry expertise, build trust with shippers, and generate qualified leads 24/7. Whether you specialize in ocean freight, air cargo, customs brokerage, warehousing, or full supply chain management, we create websites that position you as the obvious choice for shippers seeking reliable logistics partners.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Modern shippers conduct extensive research before contacting freight forwarders. They compare rates, evaluate capabilities, check references, and assess your digital presence as a proxy for operational competence. A dated, confusing, or generic website loses business to competitors with superior online presentations. Our freight forwarder websites combine industry-specific functionality with conversion-focused design to attract more quote requests, demonstrate your capabilities convincingly, streamline the RFQ process, build credibility through social proof, and differentiate you in a commoditized market. We don't build generic business websites—we engineer specialized tools that generate logistics leads and support your sales process.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Freight Forwarder Websites</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Generic business websites don't work for freight forwarders. The logistics industry requires specialized functionality that addresses the unique needs of shippers researching freight options. Here are the critical features every successful freight forwarder website must include:
              </p>
              
              <div className="space-y-8">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Quote Calculator</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The #1 reason shippers visit freight forwarder websites is to get pricing. Forcing them to call or submit forms creates friction and loses business to competitors offering instant estimates. We build sophisticated quote calculators that provide immediate ballpark pricing based on origin, destination, weight, dimensions, commodity type, service level, and additional services. These calculators can integrate with your rate database or provide algorithmic estimates based on historical data. The key is providing immediate value—even preliminary pricing—so visitors engage with your website rather than bouncing to competitors.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Beyond just displaying rates, intelligent quote systems capture lead information before revealing pricing, suggest upsells and additional services, explain what's included in quoted rates, provide instant booking options for standardized shipments, and feed qualified leads directly into your CRM. The quote calculator becomes not just an informational tool but a sophisticated lead generation and qualification system that works around the clock.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Overview & Capabilities</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Shippers need to quickly understand what you offer. We create comprehensive service pages covering ocean freight forwarding (FCL, LCL, breakbulk), air cargo services, customs brokerage and clearance, inland transportation, warehousing and distribution, project cargo and heavy lift, dangerous goods handling, temperature-controlled shipping, and supply chain consulting. Each service page explains the process, highlights your expertise, addresses common concerns, includes relevant case studies, and provides clear calls-to-action. The goal is to demonstrate comprehensive capabilities while making it easy for shippers to understand how you solve their specific challenges.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We also emphasize your network reach, carrier relationships, technology capabilities, compliance expertise, and industry specializations. Shippers want confidence that you can handle their specific commodities, trade lanes, and regulatory requirements. Detailed service pages build this confidence while providing SEO value by targeting keywords shippers use when researching freight forwarding options.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Shipment Tracking Integration</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Real-time shipment visibility has become table stakes in logistics. We integrate tracking functionality directly into your website, allowing customers to check shipment status without contacting your team. This can integrate with your TMS, pull data from carrier APIs, or provide a portal login for detailed tracking dashboards. Tracking integration reduces customer service workload, provides transparency that builds trust, differentiates you from less sophisticated competitors, and gives you additional touchpoints with customers using your website.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Advanced tracking systems can also provide proactive notifications about shipment milestones, delays, or issues; display detailed container/shipment history; offer document access for invoices, BOLs, and customs documents; and provide analytics on historical shipment performance. This transforms your website from a marketing tool into an operational platform that adds genuine value for customers.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Trade Lane & Destination Information</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Shippers want to know your expertise in specific trade lanes. We create dedicated pages for your key routes and destinations—China to USA freight forwarding, Europe to North America shipping, US to Latin America logistics, Asia Pacific freight services, Middle East cargo forwarding, and more. These pages demonstrate deep knowledge of specific routes, highlight carrier relationships and transit times, explain regulatory requirements and customs processes, showcase successful shipments in those lanes, and target high-intent keywords for geographic-specific searches.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Trade lane pages serve dual purposes—they prove your expertise to potential customers while driving organic search traffic from shippers researching specific routing options. Someone searching "freight forwarder Shanghai to Los Angeles" is in market and ready to buy. Being the first result for those searches generates high-quality leads.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry & Commodity Expertise</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    General freight forwarders face brutal price competition. Specialists with deep industry knowledge command premium pricing and customer loyalty. We help you demonstrate vertical expertise through dedicated pages covering your key industries—automotive logistics, pharmaceutical and healthcare shipping, perishable cargo, fashion and apparel, electronics freight forwarding, construction and heavy equipment, chemical and hazmat cargo, retail and e-commerce logistics, oil and gas logistics, and agricultural products. Each page explains unique challenges in that industry, showcases relevant certifications and capabilities, provides case studies from that sector, and attracts shippers from those verticals.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Specialization differentiates you from generic competitors and allows you to charge appropriately for specialized knowledge. Industry-specific pages attract your ideal customers while filtering out price shoppers seeking commodity services.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Credentials & Trust Signals</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Logistics involves trusting someone with your valuable cargo and tight deadlines. Building credibility is critical. We prominently display licensing and certifications (FMC, IATA, C-TPAT, TSA, etc.), insurance coverage and cargo liability information, industry memberships and associations, years in business and shipment volume, client testimonials and case studies, carrier partnerships and network reach, technology platforms and systems, and compliance programs and security measures. These trust signals reassure risk-averse shippers that you're a legitimate, capable partner.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We also implement review integration showing Google and industry-specific reviews, team bios highlighting experience and expertise, certifications and awards earned, and media mentions or industry recognition. In an industry where reputation is everything, comprehensive trust signals throughout your website convert skeptical visitors into confident customers.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Resources & Content</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Shippers researching freight options have questions about incoterms, customs regulations, documentation requirements, transit times, mode selection, cost factors, and countless other topics. We create comprehensive educational content that positions you as a trusted advisor rather than just another vendor. This includes detailed guides to international shipping processes, explanations of incoterms and their implications, customs clearance requirements by country, comparison articles on modes and services, glossaries of logistics terminology, regulatory compliance guides, shipping cost breakdowns and factors, and best practice recommendations.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Educational content serves multiple strategic purposes—attracts early-stage researchers who may not be ready to quote yet, demonstrates expertise that builds trust and credibility, provides SEO value by targeting informational keywords, gives sales teams resources to share with prospects, and keeps your website top-of-mind as a valuable resource. Content marketing is especially powerful in logistics because the buying cycle is long and relationship-based.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-Optimized Experience</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Logistics professionals increasingly research options on mobile devices—during travel, between meetings, or while handling urgent shipment needs. Your website must provide flawless mobile experiences with fast loading speeds, easy navigation, tap-friendly forms and quote tools, readable content without zooming, and click-to-call functionality prominently displayed. Mobile optimization is no longer optional—it's essential for both user experience and Google search rankings which now prioritize mobile performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Logistics Segments We Serve</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {['Ocean Freight Forwarders', 'Air Cargo Specialists', 'Customs Brokers', '3PL Providers', 'Warehousing Companies', 'Drayage Operators', 'Project Cargo', 'NVOCC Services', 'Freight Brokers', 'Express Couriers', 'Heavy Haul Transport', 'Temperature-Controlled', 'Hazmat Specialists', 'Cross-Border Logistics', 'E-commerce Fulfillment', 'Supply Chain Consultants', 'Freight Audit Services', 'Trade Compliance'].map((segment, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-center border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{segment}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Generate More Logistics Leads?</h2>
              <p className="text-xl text-orange-50">Get a free consultation and website audit.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label><input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900" placeholder="John Smith" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label><input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900" placeholder="john@freightcompany.com" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label><input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900" placeholder="(555) 123-4567" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label><input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900" placeholder="Your Logistics Company" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Current Website</label><input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900" placeholder="https://yourcompany.com" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">What services do you offer?</label><textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900" placeholder="Ocean freight, air cargo, customs brokerage..." /></div>
                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6">Get Free Consultation<ArrowRight className="ml-2 h-5 w-5" /></Button>
                <p className="text-center text-sm text-gray-600"><Shield className="inline h-4 w-4 mr-1" />Your information is secure. We respect your privacy.</p>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div><Phone className="h-8 w-8 mx-auto mb-3 text-orange-300" /><div className="font-semibold mb-1">Call Us</div><a href="tel:+17378885723" className="text-orange-200 hover:text-white">(737) 888-5723</a></div>
              <div><Mail className="h-8 w-8 mx-auto mb-3 text-orange-300" /><div className="font-semibold mb-1">Email Us</div><a href="mailto:hello@webvello.com" className="text-orange-200 hover:text-white">hello@webvello.com</a></div>
              <div><Clock className="h-8 w-8 mx-auto mb-3 text-orange-300" /><div className="font-semibold mb-1">Business Hours</div><div className="text-orange-100">Mon-Fri: 9AM-6PM</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
