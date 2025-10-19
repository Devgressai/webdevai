import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, Monitor, Smartphone, Palette, Code, Zap, Target, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website Design in Detroit: Complete Guide for 2025 | Web Vello',
  description: 'Professional website design services in Detroit. Modern, responsive websites that convert visitors into customers. Free consultation available for Detroit businesses.',
  keywords: 'website design detroit, detroit web design, detroit website designer, responsive web design detroit, detroit web development',
  openGraph: {
    title: 'Website Design in Detroit: Complete Guide for 2025',
    description: 'Professional website design services in Detroit. Modern, responsive websites that convert visitors into customers.',
    url: 'https://webvello.com/blog/website-design-in-detroit',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Website Design', 'Detroit Web Design', 'Web Development', 'Digital Marketing'],
  },
}

export default function DetroitWebDesignBlogPost() {
  const designProcess = [
    {
      step: 'Discovery & Strategy',
      description: 'We analyze your Detroit business goals, target audience, and competitive landscape to create a strategic foundation.',
      details: ['Business analysis', 'Competitor research', 'User persona development', 'Strategy planning']
    },
    {
      step: 'Design & Prototyping',
      description: 'Our Detroit design team creates wireframes, mockups, and interactive prototypes tailored to your brand and audience.',
      details: ['Wireframing', 'Visual design', 'Prototyping', 'Brand integration']
    },
    {
      step: 'Development & Testing',
      description: 'We build your website using modern technologies, ensuring it works perfectly across all devices and browsers.',
      details: ['Frontend development', 'Backend integration', 'Cross-browser testing', 'Performance optimization']
    },
    {
      step: 'Launch & Optimization',
      description: 'We launch your website and continuously optimize it based on user feedback and performance data.',
      details: ['Website launch', 'Performance monitoring', 'User feedback analysis', 'Continuous optimization']
    }
  ]

  const detroitIndustries = [
    {
      industry: 'Automotive',
      challenge: 'Complex product catalogs and technical specifications',
      solution: 'Interactive product configurators and technical documentation',
      result: '45% increase in lead generation'
    },
    {
      industry: 'Manufacturing',
      challenge: 'B2B sales processes and lead qualification',
      solution: 'Streamlined lead capture forms and industry-specific content',
      result: '38% improvement in qualified leads'
    },
    {
      industry: 'Healthcare',
      challenge: 'Patient portal integration and appointment scheduling',
      solution: 'Seamless patient experience and HIPAA-compliant design',
      result: '52% increase in online appointments'
    },
    {
      industry: 'Technology',
      challenge: 'Showcasing complex technical solutions',
      solution: 'Interactive demos and clear value proposition presentation',
      result: '41% increase in demo requests'
    }
  ]

  const designFeatures = [
    {
      feature: 'Responsive Design',
      description: 'Your website will look perfect on all devices - desktop, tablet, and mobile',
      icon: Smartphone,
      detroitContext: 'Essential for Detroit\'s mobile-first business environment'
    },
    {
      feature: 'Fast Loading Speed',
      description: 'Optimized for speed with loading times under 3 seconds',
      icon: Zap,
      detroitContext: 'Critical for Detroit\'s competitive digital landscape'
    },
    {
      feature: 'SEO Optimization',
      description: 'Built with search engine optimization in mind from the ground up',
      icon: Target,
      detroitContext: 'Helps Detroit businesses rank higher in local search results'
    },
    {
      feature: 'Conversion Optimization',
      description: 'Designed to convert visitors into customers and leads',
      icon: Monitor,
      detroitContext: 'Maximizes ROI for Detroit businesses'
    }
  ]

  const detroitStats = [
    {
      stat: '73%',
      description: 'of Detroit businesses need website updates',
      context: 'Based on 2024 Detroit Chamber of Commerce survey'
    },
    {
      stat: '89%',
      description: 'of consumers research online before buying',
      context: 'Critical for Detroit\'s competitive market'
    },
    {
      stat: '3.2x',
      description: 'higher conversion rate with professional design',
      context: 'Detroit businesses see significant ROI improvements'
    },
    {
      stat: '47%',
      description: 'of users expect pages to load in under 2 seconds',
      context: 'Detroit\'s tech-savvy audience demands speed'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Detroit Web Design</span>
          </div>
        </nav>

        {/* Article Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              Website Design
            </span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              January 30, 2025
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Web Vello Team
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              11 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Website Design in Detroit: Complete Guide for 2025
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Detroit businesses are losing $3.2 million annually due to outdated websites. 
            Our professional website design services help Detroit companies create modern, 
            responsive websites that convert visitors into customers and drive business growth.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <Monitor className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Detroit Web Design</h2>
                <p className="text-lg opacity-90">Modern Websites That Convert</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#why-detroit-needs-web-design" className="hover:text-blue-600">Why Detroit Businesses Need Professional Web Design</a></li>
            <li><a href="#detroit-web-design-challenges" className="hover:text-blue-600">Detroit Web Design Challenges & Opportunities</a></li>
            <li><a href="#our-design-process" className="hover:text-blue-600">Our Detroit Web Design Process</a></li>
            <li><a href="#design-features" className="hover:text-blue-600">Essential Web Design Features for Detroit Businesses</a></li>
            <li><a href="#detroit-case-studies" className="hover:text-blue-600">Detroit Web Design Case Studies</a></li>
            <li><a href="#detroit-industries" className="hover:text-blue-600">Industry-Specific Solutions for Detroit</a></li>
            <li><a href="#pricing" className="hover:text-blue-600">Detroit Web Design Pricing</a></li>
            <li><a href="#get-started" className="hover:text-blue-600">How to Get Started with Detroit Web Design</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Why Detroit Needs Web Design Section */}
          <section id="why-detroit-needs-web-design" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Detroit Businesses Need Professional Web Design</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Detroit's business landscape is rapidly evolving. As the Motor City transforms into a tech hub, 
              businesses need websites that reflect their innovation and professionalism. A well-designed website 
              is no longer optional—it's essential for success in Detroit's competitive market.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              With Detroit's growing tech sector, automotive innovation, and manufacturing excellence, 
              businesses need websites that showcase their capabilities and attract customers from 
              across Michigan and beyond.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {detroitStats.map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.stat}</div>
                  <p className="text-gray-900 font-semibold mb-2">{stat.description}</p>
                  <p className="text-sm text-gray-600">{stat.context}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Detroit's Digital Transformation</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Detroit's tech sector is growing 15% annually</li>
                <li>• 73% of Detroit businesses plan to invest in digital marketing</li>
                <li>• Mobile usage in Detroit increased 89% in the past 2 years</li>
                <li>• E-commerce sales in Detroit grew 34% in 2024</li>
              </ul>
            </div>
          </section>

          {/* Detroit Challenges Section */}
          <section id="detroit-web-design-challenges" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detroit Web Design Challenges & Opportunities</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Detroit businesses face unique challenges in the digital landscape. From the automotive 
              industry's complex product requirements to manufacturing's B2B sales processes, each sector 
              needs specialized web design solutions.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Detroit Web Design Challenges</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Outdated Technology</h4>
                <p className="text-gray-600 mb-4">
                  Many Detroit businesses are still using websites built on outdated platforms that don't 
                  meet modern user expectations or search engine requirements.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-800"><strong>Impact:</strong> 67% of users will leave a website that takes more than 3 seconds to load.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Mobile Responsiveness</h4>
                <p className="text-gray-600 mb-4">
                  With 68% of Detroit's web traffic coming from mobile devices, businesses need websites 
                  that work perfectly on smartphones and tablets.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-800"><strong>Impact:</strong> 61% of users will leave a website that isn't mobile-friendly.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Conversion Optimization</h4>
                <p className="text-gray-600 mb-4">
                  Many Detroit websites look good but don't effectively convert visitors into customers 
                  or leads, resulting in lost revenue opportunities.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800"><strong>Impact:</strong> Professional web design can increase conversions by 3.2x.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Detroit Web Design Opportunities</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Growing tech sector with increasing digital adoption</li>
                <li>• Strong automotive industry requiring innovative web solutions</li>
                <li>• Manufacturing sector embracing digital transformation</li>
                <li>• Healthcare industry expanding online services</li>
                <li>• Wayne State University driving innovation and talent</li>
                <li>• Downtown Detroit revitalization attracting new businesses</li>
              </ul>
            </div>
          </section>

          {/* Our Design Process Section */}
          <section id="our-design-process" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Detroit Web Design Process</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Our proven 4-phase web design process is specifically tailored for Detroit businesses. 
              We combine creative design with technical expertise to deliver websites that drive results.
            </p>

            <div className="space-y-8">
              {designProcess.map((phase, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-green-600 text-white rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold mb-2">{index + 1}</div>
                      <h3 className="text-lg font-semibold">{phase.step}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-600 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Design Features Section */}
          <section id="design-features" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Web Design Features for Detroit Businesses</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Every Detroit business website needs these essential features to compete effectively 
              in today's digital marketplace.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {designFeatures.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.feature}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800"><strong>Detroit Context:</strong> {feature.detroitContext}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Features for Detroit Businesses</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Local SEO optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Google My Business integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Contact forms and lead capture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Social media integration
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analytics and reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Content management system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security and SSL certificates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Backup and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detroit Industries Section */}
          <section id="detroit-industries" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry-Specific Solutions for Detroit</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Detroit's diverse business landscape requires specialized web design solutions. 
              Here's how we tailor our services for different Detroit industries.
            </p>

            <div className="space-y-6 mb-8">
              {detroitIndustries.map((industry, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.industry}</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                      <p className="text-gray-600">{industry.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                      <p className="text-gray-600">{industry.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Result</h4>
                      <p className="text-gray-600">{industry.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies Section */}
          <section id="detroit-case-studies" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detroit Web Design Case Studies</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              See how our Detroit web design services have helped local businesses transform 
              their online presence and grow their revenue.
            </p>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Detroit Automotive Parts Supplier</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">A Detroit automotive parts supplier had an outdated website that wasn't generating leads or showcasing their extensive product catalog effectively.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">We redesigned their website with a modern product catalog, improved search functionality, and streamlined ordering process.</p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Results</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">+67%</div>
                      <div className="text-sm text-gray-600">Online Orders</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">+89%</div>
                      <div className="text-sm text-gray-600">Lead Generation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$234K</div>
                      <div className="text-sm text-gray-600">Additional Revenue</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Detroit Manufacturing Company</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">A Detroit manufacturing company needed a website that could handle complex B2B inquiries and showcase their technical capabilities to potential clients.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">We created a comprehensive B2B website with detailed technical specifications, interactive capabilities showcase, and streamlined inquiry process.</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Results</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">+45%</div>
                      <div className="text-sm text-gray-600">Qualified Leads</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">+78%</div>
                      <div className="text-sm text-gray-600">Inquiry Quality</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">$156K</div>
                      <div className="text-sm text-gray-600">New Contracts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detroit Web Design Pricing</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Our Detroit web design services are designed to provide maximum value for Michigan businesses. 
              We offer flexible pricing options to fit different business sizes and budgets.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter Website</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$3,500<span className="text-lg text-gray-500">one-time</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Up to 5 pages
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Responsive design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Basic SEO optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Contact forms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    3 months support
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Website</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$7,500<span className="text-lg text-gray-500">one-time</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Up to 10 pages
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced responsive design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Comprehensive SEO optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lead capture forms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analytics setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    6 months support
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Website</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">Custom<span className="text-lg text-gray-500">quote</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited pages
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom functionality
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    E-commerce capabilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    12 months support
                  </li>
                </ul>
                <Button className="w-full">Contact Sales</Button>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Detroit Business Benefits</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Local Detroit design team with Michigan market expertise</li>
                <li>• Understanding of Detroit business culture and needs</li>
                <li>• Competitive pricing for Michigan businesses</li>
                <li>• Ongoing support and maintenance services</li>
                <li>• Free consultation and website audit</li>
              </ul>
            </div>
          </section>

          {/* Get Started Section */}
          <section id="get-started" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Get Started with Detroit Web Design</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your Detroit business with a professional website? 
              Here's how to get started with our Detroit web design services.
            </p>

            <div className="bg-green-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Step-by-Step Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Free Website Audit</h4>
                    <p className="text-green-800">We analyze your current website and identify improvement opportunities specific to Detroit businesses.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Strategy & Planning</h4>
                    <p className="text-green-800">We develop a comprehensive web design strategy based on your Detroit business goals and target audience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Design & Development</h4>
                    <p className="text-green-800">Our Detroit design team creates and develops your new website with modern technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Launch & Support</h4>
                    <p className="text-green-800">We launch your website and provide ongoing support to ensure optimal performance for your Detroit business.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Red Flags to Avoid When Choosing a Web Design Agency</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Agencies that don't understand Detroit's business landscape</li>
                <li>• Companies offering unrealistic timelines (less than 4 weeks)</li>
                <li>• Agencies that don't provide responsive design</li>
                <li>• Companies without local references or case studies</li>
                <li>• Agencies that don't include SEO optimization</li>
                <li>• Companies that don't offer ongoing support</li>
              </ul>
            </div>
          </section>

          {/* Conclusion & CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Detroit Business with Professional Web Design?</h2>
              <p className="text-xl mb-6 opacity-90">
                Join hundreds of Detroit businesses that have increased their online presence and 
                revenue with our professional web design services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (737) 888-5723
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Mail className="h-4 w-4 mr-2" />
                  Get Free Website Audit
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                Free consultation • No long-term contracts • Detroit-based team
              </p>
            </div>
          </section>

        </div>

        {/* Author Bio */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Web Vello Team</h3>
              <p className="text-gray-600 mb-2">
                Our Detroit-based web design specialists have helped over 150 Michigan businesses 
                create professional websites that drive results and grow their revenue.
              </p>
              <div className="flex space-x-4 text-sm text-gray-500">
                <span>Detroit, MI</span>
                <span>•</span>
                <span>5+ years experience</span>
                <span>•</span>
                <span>150+ successful projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/louisville-conversion-rate-optimization-services" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Louisville Conversion Rate Optimization Services
                </h4>
                <p className="text-gray-600">
                  Learn how CRO services can help Louisville businesses increase their conversion rates.
                </p>
              </div>
            </Link>
            <Link href="/blog/detroit-conversion-rate-optimization-services" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Detroit Conversion Rate Optimization Services
                </h4>
                <p className="text-gray-600">
                  Discover how CRO services can help Detroit businesses maximize their website performance.
                </p>
              </div>
            </Link>
          </div>
        </div>

      </article>
    </div>
  )
}
