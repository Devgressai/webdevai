import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { CheckCircle, Zap, TrendingUp, Phone, Mail, Clock, Shield, ArrowRight, Globe, BarChart3, Target, Users, Award, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Energy SEO Company | Oil & Gas Digital Marketing',
  description: 'Specialized SEO for energy companies. Dominate search results for oil, gas, solar, wind & renewable energy services.',
  keywords: 'energy seo company, oil gas seo, renewable energy marketing, solar seo services, energy digital marketing',
  alternates: { canonical: 'https://webvello.com/services/energy-seo-company' },
  openGraph: {
    title: 'Energy SEO Company | Oil & Gas Digital Marketing',
    description: 'Specialized SEO for energy companies. Dominate search results for oil, gas, solar, wind & renewable energy services.',
    url: 'https://webvello.com/services/energy-seo-company',
    type: 'website',
    images: [{ url: 'https://webvello.com/og-image.jpg', width: 1200, height: 630, alt: 'Energy SEO Company' }],
  }
}

export default function EnergySEOCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-yellow-400">
              <Zap className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Energy Sector Digital Marketing Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Energy SEO Company: Power Your Digital Presence</h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-50 leading-relaxed">Specialized SEO and digital marketing for energy companies. Drive qualified leads from oil & gas exploration, renewable energy development, solar installation, wind power, energy services, and power generation searches.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50 text-lg px-8 py-6"><Phone className="mr-2 h-5 w-5" />Request Audit</Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">View Results<ArrowRight className="ml-2 h-5 w-5" /></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">120+</div><div className="text-gray-600">Energy Clients</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">380%</div><div className="text-gray-600">Traffic Growth</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">$8.5M+</div><div className="text-gray-600">Revenue</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">4.9★</div><div className="text-gray-600">Rating</div></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">The energy sector faces unique digital marketing challenges. As a specialized <strong>energy SEO company</strong>, we understand that your target audience consists of B2B decision-makers, government entities, investors, and large-scale commercial clients—not typical consumers. Your SEO strategy must target high-value, low-volume keywords, compete in specialized niches with entrenched competitors, navigate complex regulatory and political sensitivities, demonstrate technical expertise and safety records, and generate leads worth millions rather than hundreds. Generic SEO agencies don't understand these nuances. We specialize exclusively in energy sector marketing and deliver results that matter to your bottom line.</p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">Whether you're in upstream oil and gas exploration, midstream pipeline and transportation, downstream refining and distribution, renewable energy development, solar or wind installation, energy services and consulting, power generation and utilities, or energy technology and equipment, we have deep experience driving digital results in your specific segment. Our energy SEO services have generated over $8.5M in attributed revenue for clients, increased qualified lead volume by an average of 380%, and helped energy companies dominate search results in competitive markets. We don't just drive traffic—we drive business growth through strategic digital marketing tailored to the energy industry's unique requirements.</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Energy SEO Services</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy-Specific Keyword Research</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Energy SEO requires targeting highly specialized keywords that generic keyword tools miss. We conduct deep research into oilfield services keywords, renewable energy project terms, power generation searches, energy consulting queries, equipment and technology searches, regulatory and compliance terms, geographic and basin-specific keywords, and investor/analyst research terms. Our keyword strategy focuses on commercial intent—terms used by qualified buyers and decision-makers ready to engage, not information seekers or job hunters. We identify the exact search terms your ideal customers use when researching solutions you provide.</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">We also analyze competitor keyword strategies, identify content gaps you can exploit, discover long-tail opportunities with less competition, and prioritize keywords based on business value rather than just search volume. In energy marketing, ranking #1 for 10 highly targeted keywords generating 50 qualified leads is far more valuable than ranking for 1000 generic keywords driving irrelevant traffic.</p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO for Energy Websites</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Energy company websites often suffer from technical issues that limit visibility. We audit and optimize site architecture and navigation, page speed and Core Web Vitals, mobile responsiveness, structured data and schema markup, XML sitemaps and robots.txt, canonicalization and duplicate content, HTTPS security and safety, international SEO for global operations, and technical infrastructure. Many energy websites are built on outdated platforms or focus heavily on investor relations at the expense of SEO fundamentals. We bring sites up to modern standards that search engines reward with better rankings.</p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Authority Content Development</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Energy buyers conduct extensive research before engaging vendors. We create authoritative content that answers their questions, demonstrates your expertise, and builds trust: comprehensive service pages explaining your capabilities; project case studies showcasing successful outcomes; technical guides and whitepapers; industry trend analysis and market reports; regulatory compliance guides; best practice articles; comparison and buying guides; and thought leadership content. This content serves multiple purposes—educates potential customers, demonstrates expertise, supports SEO with keyword-rich pages, provides sales enablement resources, and establishes your company as an industry authority.</p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Link Building & Digital PR</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Energy SEO requires high-quality backlinks from authoritative industry sources. We build links through industry publication contributions, trade association partnerships, conference sponsorships and speaking opportunities, industry directory listings, supplier and partner relationship leverage, case study and project announcements, research and data publication, and expert commentary and quotes. These aren't spammy blog comment links—they're authoritative references from respected energy industry sources that boost your domain authority and search rankings.</p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Local & Geographic SEO</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Many energy services are geographically focused—oilfield services in the Permian Basin, solar installation in California, wind power in Texas, offshore drilling in the Gulf of Mexico. We optimize for geographic and regional searches, oil and gas basin-specific terms, state and city-level service keywords, facility and project location optimization, Google Business Profile optimization for local presence, citation building in industry directories, and location-based content creation. Geographic SEO helps you dominate in your core service areas rather than getting lost competing nationally.</p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversion Rate Optimization</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Traffic means nothing without conversions. We optimize your website to convert visitors into leads through clear value propositions and messaging, streamlined contact and RFP processes, trust signals and social proof, case studies and project portfolios, lead magnet development, form optimization and testing, CTA testing and placement, and landing page optimization. Energy sales cycles are long and complex, but our optimization work increases the percentage of website visitors who enter your sales funnel.</p>
                </div>
              </div>
            </div>

            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Energy Sectors We Serve</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {['Oil & Gas Exploration', 'Oilfield Services', 'Pipeline & Midstream', 'Refining & Petrochemicals', 'Solar Energy', 'Wind Power', 'Hydroelectric', 'Nuclear Power', 'Energy Storage', 'Smart Grid Technology', 'Power Generation', 'Energy Consulting', 'Environmental Services', 'Drilling & Completion', 'Well Services', 'Geothermal Energy', 'Biofuels & Biomass', 'Energy Trading'].map((sector, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 flex items-center border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dominate Energy Sector Search Results?</h2>
              <p className="text-xl text-yellow-50">Get a free SEO audit and strategy consultation.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label><input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900" placeholder="John Smith" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label><input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900" placeholder="john@energycompany.com" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label><input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900" placeholder="(555) 123-4567" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label><input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900" placeholder="Your Energy Company" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Website URL</label><input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900" placeholder="https://yourcompany.com" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">What energy sector are you in?</label><textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-gray-900" placeholder="Oil & gas, renewable energy, power generation, etc..." /></div>
                <Button type="submit" size="lg" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-lg py-6">Get Free SEO Audit<ArrowRight className="ml-2 h-5 w-5" /></Button>
                <p className="text-center text-sm text-gray-600"><Shield className="inline h-4 w-4 mr-1" />Your information is secure. We respect your privacy.</p>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div><Phone className="h-8 w-8 mx-auto mb-3 text-yellow-300" /><div className="font-semibold mb-1">Call Us</div><a href="tel:+15305538883" className="text-yellow-200 hover:text-white">(530) 553-8883</a></div>
              <div><Mail className="h-8 w-8 mx-auto mb-3 text-yellow-300" /><div className="font-semibold mb-1">Email Us</div><a href="mailto:hello@webvello.com" className="text-yellow-200 hover:text-white">hello@webvello.com</a></div>
              <div><Clock className="h-8 w-8 mx-auto mb-3 text-yellow-300" /><div className="font-semibold mb-1">Business Hours</div><div className="text-yellow-100">Mon-Fri: 9AM-6PM</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
