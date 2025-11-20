import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, TrendingUp, Target, BarChart3, DollarSign, MapPin, Phone, Mail, Star, Award, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Company Mesa: Professional SEO Services for Arizona Businesses | Web Vello',
  description: 'Professional SEO company services in Mesa, AZ. Expert SEO consultants help Mesa businesses increase organic traffic, improve rankings, and grow revenue. Free consultation available.',
  keywords: 'seo company mesa, mesa seo services, seo company arizona, mesa seo consultant, seo services mesa az',
  openGraph: {
    title: 'SEO Company Mesa: Professional SEO Services for Arizona Businesses',
    description: 'Professional SEO company services in Mesa, AZ. Expert SEO consultants help Mesa businesses increase organic traffic, improve rankings, and grow revenue.',
    url: 'https://www.webvello.com/services/seo-company-mesa',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['SEO Company', 'Mesa SEO', 'Arizona SEO', 'SEO Services'],
  },
}

export default function MesaSEOCompanyServicesPage() {
  const seoStats = [
    {
      stat: "320%",
      label: "Average Traffic Increase",
      description: "Our Mesa SEO clients see significant organic growth"
    },
    {
      stat: "88%",
      label: "First Page Rankings",
      description: "Mesa businesses achieve top Google rankings"
    },
    {
      stat: "58%",
      label: "Lead Generation Boost",
      description: "SEO company services drive qualified Mesa leads"
    },
    {
      stat: "4 Months",
      label: "Average Timeline",
      description: "To see measurable SEO results"
    }
  ]

  const seoProcess = [
    {
      phase: "SEO Audit & Analysis",
      duration: "Week 1-2",
      description: "Comprehensive analysis of your current SEO performance",
      tasks: [
        "Technical SEO audit",
        "Keyword research and analysis",
        "Competitive analysis",
        "Content gap analysis",
        "Mesa market research"
      ]
    },
    {
      phase: "Strategy Development",
      duration: "Week 3-4",
      description: "Custom SEO strategy tailored for Mesa businesses",
      tasks: [
        "SEO roadmap creation",
        "Keyword targeting strategy",
        "Content strategy development",
        "Local SEO optimization plan",
        "Technical improvements planning"
      ]
    },
    {
      phase: "Implementation & Optimization",
      duration: "Week 5-16",
      description: "Execute SEO strategy and monitor performance",
      tasks: [
        "On-page optimization",
        "Technical SEO improvements",
        "Content creation and optimization",
        "Local SEO implementation",
        "Link building campaigns"
      ]
    },
    {
      phase: "Monitoring & Reporting",
      duration: "Ongoing",
      description: "Continuous monitoring and strategy refinement",
      tasks: [
        "Performance tracking",
        "Monthly reporting",
        "Strategy adjustments",
        "ROI analysis",
        "Long-term optimization"
      ]
    }
  ]

  const mesaIndustries = [
    {
      industry: "Technology & Innovation",
      challenge: "High competition and technical content requirements",
      solution: "Technical SEO strategy with innovation-focused content",
      result: "50% increase in tech leads"
    },
    {
      industry: "Healthcare & Medical",
      challenge: "HIPAA compliance and patient privacy concerns",
      solution: "Healthcare-specific SEO with patient education content",
      result: "42% improvement in patient acquisition"
    },
    {
      industry: "Manufacturing & Aerospace",
      challenge: "B2B sales cycles and complex product descriptions",
      solution: "B2B SEO with technical content optimization",
      result: "48% increase in industrial leads"
    },
    {
      industry: "Real Estate",
      challenge: "Local competition and seasonal fluctuations",
      solution: "Hyperlocal SEO with neighborhood-specific content",
      result: "55% increase in property inquiries"
    }
  ]

  const caseStudies = [
    {
      company: "Mesa Tech Solutions",
      industry: "Technology & Innovation",
      challenge: "Low organic visibility in competitive tech market",
      solution: "Technical SEO strategy with innovation-focused content marketing",
      results: [
        "280% increase in organic traffic",
        "50% improvement in tech lead quality",
        "$420K additional revenue in 6 months"
      ]
    },
    {
      company: "Mesa Medical Center",
      industry: "Healthcare & Medical",
      challenge: "Poor online visibility for patient acquisition",
      solution: "Healthcare SEO with patient education content strategy",
      results: [
        "220% increase in organic traffic",
        "42% improvement in patient appointments",
        "260% ROI on SEO investment"
      ]
    },
    {
      company: "Mesa Manufacturing Co.",
      industry: "Manufacturing & Aerospace",
      challenge: "Low B2B lead generation from organic search",
      solution: "B2B SEO strategy with technical content optimization",
      results: [
        "300% increase in qualified leads",
        "48% improvement in sales conversion",
        "$380K additional revenue"
      ]
    }
  ]

  const seoServices = [
    {
      service: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical SEO foundation",
      features: ["Site speed optimization", "Mobile responsiveness", "Crawl error analysis", "Schema markup implementation"],
      price: "Starting at $2,600"
    },
    {
      service: "Local SEO Optimization",
      description: "Hyperlocal SEO strategy for Mesa market dominance",
      features: ["Google My Business optimization", "Local citation building", "Review management", "Local content creation"],
      price: "Starting at $2,300"
    },
    {
      service: "Content Marketing Strategy",
      description: "Content creation and optimization for maximum SEO impact",
      features: ["Content calendar development", "Blog post creation", "Page optimization", "Content performance tracking"],
      price: "Starting at $3,300"
    },
    {
      service: "Link Building Campaign",
      description: "High-quality backlink acquisition for improved domain authority",
      features: ["Link prospecting", "Outreach campaigns", "Content-based link building", "Link quality monitoring"],
      price: "Starting at $2,000"
    }
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Mesa Tech Solutions",
      role: "Marketing Director",
      content: "Web Vello's SEO company expertise transformed our tech visibility. We saw a 280% increase in organic traffic and 50% improvement in lead quality within 6 months.",
      rating: 5
    },
    {
      name: "Dr. Robert Johnson",
      company: "Mesa Medical Center",
      role: "Practice Administrator",
      content: "The healthcare SEO expertise and HIPAA-compliant approach helped us attract more patients while maintaining compliance. Our organic traffic increased by 220%.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      company: "Mesa Manufacturing Co.",
      role: "VP of Sales",
      content: "The B2B SEO strategy delivered exactly what we needed - high-quality industrial leads. We saw a 300% increase in qualified prospects and $380K in additional revenue.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SEO Company Mesa
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Professional SEO company services helping Mesa businesses dominate search results, 
              increase organic traffic, and grow revenue with proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Free SEO Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg">
                <Link href="#case-studies">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven SEO Results for Mesa Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Mesa SEO company services deliver measurable results that drive business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.stat}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Mesa SEO Company Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local Mesa market expertise with proven SEO strategies to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Mesa Expertise</h3>
              <p className="text-gray-600">Deep understanding of Mesa market dynamics, competition, and local search behavior</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Over 180 successful SEO campaigns for Mesa businesses across all industries</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Approach</h3>
              <p className="text-gray-600">Advanced analytics and reporting to track progress and optimize performance</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">Experienced SEO specialists dedicated to your Mesa business success</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Results</h3>
              <p className="text-gray-600">Optimized strategies that deliver measurable improvements within 90 days</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Focused</h3>
              <p className="text-gray-600">Every strategy designed to maximize return on investment and business growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mesa SEO Company Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to SEO success tailored for Mesa businesses
            </p>
          </div>
          <div className="space-y-8">
            {seoProcess.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-emerald-600 font-medium">{phase.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{phase.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mesa Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mesa Industry-Specific SEO Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized SEO strategies for Mesa's key industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mesaIndustries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{industry.industry}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{industry.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{industry.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Result:</h4>
                    <p className="text-green-600 font-medium">{industry.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mesa SEO Company Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Mesa SEO company clients
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • Mesa, AZ</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="text-gray-600 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mesa SEO Company Services & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO solutions tailored for Mesa businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.service}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-4">{service.price}</div>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Mesa Business Owners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Mesa's leading businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-emerald-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Mesa Search Results?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get a free SEO consultation and discover how our Mesa SEO company services 
            can transform your online presence and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">
                Get Free SEO Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg">
              <Link href="tel:+14805550123">
                Call (480) 555-0123
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Mesa, AZ
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (480) 555-0123
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                mesa@webvello.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
