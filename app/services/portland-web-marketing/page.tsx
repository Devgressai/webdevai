import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { CheckCircle, TrendingUp, Users, Award, Target, Phone, Mail, Clock, Star, Shield, Search, BarChart3, Globe, ArrowRight, Zap, DollarSign, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portland Web Marketing Agency | Digital Marketing Experts',
  description: 'Top-rated web marketing agency in Portland, OR. SEO, PPC, social media & content marketing that drives ROI. Get more customers online.',
  keywords: 'portland web marketing, digital marketing portland, seo portland, ppc portland oregon, social media marketing portland',
  alternates: {
    canonical: 'https://webvello.com/services/portland-web-marketing',
  },
  openGraph: {
    title: 'Portland Web Marketing Agency | Digital Marketing Experts',
    description: 'Top-rated web marketing agency in Portland, OR. SEO, PPC, social media & content marketing that drives ROI.',
    url: 'https://webvello.com/services/portland-web-marketing',
    type: 'website',
    images: [{ url: 'https://webvello.com/og-image.jpg', width: 1200, height: 630, alt: 'Portland Web Marketing' }],
  }
}

export default function PortlandWebMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-green-500">
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Portland's Premier Digital Marketing Agency</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Portland Web Marketing: Drive Growth with Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50 leading-relaxed">
              Full-service digital marketing agency specializing in SEO, PPC, social media, and content marketing for Portland businesses. Data-driven strategies that deliver measurable ROI and sustainable growth in the Pacific Northwest market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Marketing Audit
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                View Our Portfolio
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
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Portland Businesses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">450%</div>
              <div className="text-gray-600">Avg ROI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">$15M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">4.9★</div>
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
                Portland's vibrant business ecosystem demands digital marketing strategies that cut through the noise. As the leading <strong>Portland web marketing</strong> agency, we combine deep local market knowledge with cutting-edge digital tactics to help businesses dominate their industries. Whether you're a tech startup in the Pearl District, a retail shop in Hawthorne, or a B2B company in the Lloyd District, we craft customized marketing campaigns that resonate with Portland audiences and drive measurable business growth.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Our team lives and breathes Portland. We understand the unique characteristics of the Rose City market—from the tech-savvy, environmentally conscious consumer base to the fierce local business pride that defines Portland commerce. This intimate knowledge allows us to create marketing campaigns that authentically connect with Portland customers while leveraging data-driven strategies that maximize your marketing investment. We don't believe in one-size-fits-all solutions. Every campaign is tailored to your specific business goals, target audience, and competitive landscape within the Portland metro area.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Portland Businesses Choose Our Web Marketing Services</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Portland's business environment is unlike anywhere else in America. The combination of strong local loyalty, environmental consciousness, and tech-forward consumers creates unique marketing challenges and opportunities. Here's why over 200 Portland businesses trust us with their digital marketing:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <Target className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Portland Market Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're not outsiders applying generic strategies to Portland. Our team has spent years studying Portland consumer behavior, neighborhood demographics, seasonal trends, and competitive dynamics. We know what messaging resonates in Sellwood versus Slabtown, understand the Pearl District professional demographic, and can target the family-focused audience in suburbs like Beaverton and Hillsboro. This hyperlocal knowledge translates directly into more effective campaigns that speak authentically to Portland customers.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <DollarSign className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ROI-Focused Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Marketing budgets aren't unlimited. Every dollar you invest needs to return value. We're obsessive about ROI tracking and optimization. Our clients see an average 450% return on their marketing investment within the first year. We accomplish this through rigorous A/B testing, continuous campaign optimization, detailed conversion tracking, and transparent reporting that shows exactly how your marketing spend translates into revenue. No vanity metrics—just real business growth.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <Users className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Channel Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Modern consumers don't live in silos—they interact with businesses across multiple channels. Our integrated approach ensures consistent messaging and seamless customer experiences whether prospects find you through Google search, social media, email, or display advertising. We orchestrate coordinated campaigns across all digital channels, creating synergies that amplify results beyond what any single channel could achieve alone.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <Shield className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical, Sustainable Marketing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Portland values sustainability and ethical business practices. We mirror these values in our marketing approach—no black-hat tactics, no manipulation, no false promises. We build long-term business success through authentic storytelling, valuable content, genuine customer relationships, and strategies that create sustainable competitive advantages. Our methods align with Portland's values and build lasting brand equity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Portland Web Marketing Services</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As Portland's most comprehensive digital marketing agency, we offer the full spectrum of online marketing services. Whether you need help with a single channel or require a complete digital transformation, we have the expertise and resources to deliver exceptional results:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Search Engine Optimization (SEO)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Dominate Portland search results with our comprehensive SEO services. We conduct in-depth keyword research targeting terms Portland customers actually use, optimize your website's technical foundation for maximum search visibility, create authoritative content that answers customer questions and builds trust, build high-quality backlinks from Portland and Pacific Northwest sources, and provide ongoing optimization to maintain and improve rankings as algorithms evolve.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our local SEO expertise is particularly strong. We optimize your Google Business Profile for maximum local visibility, build citations across Portland business directories, generate authentic customer reviews, create location-specific content for neighborhoods you serve, and implement schema markup that helps Google understand your business. Whether someone searches for "best coffee shop in Portland" or "Portland web design agency," we ensure your business appears at the top.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay-Per-Click (PPC) Advertising</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Get immediate visibility and qualified leads through strategic PPC campaigns. Our Google Ads experts create highly targeted campaigns that appear when Portland customers search for your services. We handle keyword research and bidding strategies, ad copywriting that drives clicks and conversions, landing page optimization for maximum conversion rates, A/B testing to continuously improve performance, and detailed analytics and ROI tracking.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Beyond Google Ads, we manage campaigns across Bing Ads, display advertising networks, YouTube advertising, and remarketing campaigns that bring back visitors who didn't convert initially. Our PPC management reduces wasted spend, improves quality scores, and delivers qualified leads at the lowest possible cost per acquisition.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Portland consumers are highly engaged on social media. We help you build meaningful connections with your audience through strategic social media marketing. Our services include content creation and curation that reflects your brand voice, community management and engagement, paid social advertising on Facebook, Instagram, LinkedIn, and Twitter, influencer partnerships with Portland-based influencers, and performance analytics and optimization.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We understand that social media in Portland has unique characteristics—the emphasis on authenticity, the importance of environmental and social responsibility, the value of supporting local businesses. Our social strategies leverage these cultural elements to create campaigns that resonate deeply with Portland audiences and build loyal communities around your brand.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Quality content attracts, educates, and converts customers. Our content marketing services include blog writing that positions you as an industry authority, video production showcasing your Portland business, infographics and visual content, email newsletters that nurture leads, case studies and white papers, and podcast production and promotion. Every piece of content serves a strategic purpose in your customer acquisition funnel.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Portland audiences appreciate storytelling that's authentic, values-driven, and locally relevant. We create content that highlights your Portland roots, showcases your community involvement, addresses local issues and interests, and builds emotional connections with your audience while supporting your SEO and conversion goals.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversion Rate Optimization (CRO)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Traffic means nothing if visitors don't convert. We optimize every element of your digital presence to maximize conversions. This includes website UX/UI audits and improvements, A/B testing of headlines, calls-to-action, and page layouts, form optimization to reduce friction, landing page design and testing, heat mapping and user behavior analysis, and checkout process optimization for e-commerce sites.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our CRO process follows a scientific methodology: analyze current performance, identify conversion barriers, hypothesize improvements, test changes, measure results, and iterate. This continuous improvement approach compounds over time, steadily increasing the return on all your marketing investments.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Marketing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Email remains one of the highest-ROI marketing channels. We design and execute email campaigns that nurture leads and drive repeat business. Our email marketing services include strategy development and audience segmentation, template design and development, automated drip campaigns, newsletter creation and distribution, A/B testing and optimization, and detailed performance analytics.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We help you build and maintain a valuable email list, create compelling content that subscribers want to read, avoid spam filters and maintain high deliverability, and integrate email marketing with your broader digital strategy for maximum impact. Email marketing's direct line to customers makes it invaluable for customer retention and lifetime value optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve in Portland</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our <strong>Portland web marketing</strong> expertise spans diverse industries. We understand that each sector has unique challenges, customer behaviors, and competitive dynamics. Here are some of the Portland industries we've helped dominate their markets:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Technology & Software',
                  'Retail & E-commerce',
                  'Restaurants & Hospitality',
                  'Healthcare & Medical',
                  'Professional Services',
                  'Real Estate',
                  'Manufacturing',
                  'Education',
                  'Non-Profit Organizations',
                  'Financial Services',
                  'Home Services',
                  'Legal Services',
                  'Automotive',
                  'Fitness & Wellness',
                  'Arts & Entertainment',
                  'Tourism & Travel',
                  'B2B Services',
                  'Construction'
                ].map((industry, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-center border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Portland Success Stories</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                  <div className="text-green-900 mb-4">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Pearl District Restaurant</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
                  <p className="text-gray-700 mb-4">Increase in online reservations in 6 months</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>#1 ranking for "best brunch Portland"</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Instagram following grew from 2K to 15K</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>$250K additional annual revenue</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                  <div className="text-green-900 mb-4">
                    <Zap className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Portland Tech Startup</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">520%</div>
                  <p className="text-gray-700 mb-4">ROI from PPC campaigns in first year</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cost per acquisition reduced by 67%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>3.2M website visitors in 12 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>$2.1M in attributed revenue</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Dominate Portland's Digital Landscape?
              </h2>
              <p className="text-xl text-green-50">
                Get a free comprehensive marketing audit and discover your biggest growth opportunities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900" placeholder="john@business.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900" placeholder="(503) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900" placeholder="Your Business" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Website URL</label>
                  <input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900" placeholder="https://yourbusiness.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">What are your marketing goals?</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900" placeholder="Tell us about your business and marketing objectives..." />
                </div>

                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                  Get My Free Marketing Audit
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
                <Phone className="h-8 w-8 mx-auto mb-3 text-green-300" />
                <div className="font-semibold mb-1">Call Us</div>
                <a href="tel:+17378885723" className="text-green-200 hover:text-white">(737) 888-5723</a>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-3 text-green-300" />
                <div className="font-semibold mb-1">Email Us</div>
                <a href="mailto:hello@webvello.com" className="text-green-200 hover:text-white">hello@webvello.com</a>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-3 text-green-300" />
                <div className="font-semibold mb-1">Business Hours</div>
                <div className="text-green-100">Mon-Fri: 9AM-6PM PST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join 200+ Portland Businesses Growing with Web Vello
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Partner with Portland's most trusted <strong>web marketing agency</strong>. Let's build your digital success story together.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
              Schedule Your Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


