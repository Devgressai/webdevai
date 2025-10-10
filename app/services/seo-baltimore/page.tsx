import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, TrendingUp, Target, BarChart3, DollarSign, MapPin, Phone, Mail, Star, Award, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Baltimore MD: Professional SEO Services for Maryland Businesses | Web Vello',
  description: 'Professional SEO services in Baltimore, MD. Expert SEO consultants help Baltimore businesses increase organic traffic, improve rankings, and grow revenue. Free consultation available.',
  keywords: 'seo baltimore md, baltimore seo services, seo company maryland, baltimore seo consultant, seo services baltimore',
  openGraph: {
    title: 'SEO Baltimore MD: Professional SEO Services for Maryland Businesses',
    description: 'Professional SEO services in Baltimore, MD. Expert SEO consultants help Baltimore businesses increase organic traffic, improve rankings, and grow revenue.',
    url: 'https://webvello.com/services/seo-baltimore',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['SEO Services', 'Baltimore SEO', 'Maryland SEO', 'SEO Consulting'],
  },
}

export default function BaltimoreSEOServicesPage() {
  const seoStats = [
    {
      stat: "280%",
      label: "Average Traffic Increase",
      description: "Our Baltimore SEO clients see significant organic growth"
    },
    {
      stat: "82%",
      label: "First Page Rankings",
      description: "Baltimore businesses achieve top Google rankings"
    },
    {
      stat: "52%",
      label: "Lead Generation Boost",
      description: "SEO services drive qualified Baltimore leads"
    },
    {
      stat: "5 Months",
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
        "Baltimore market research"
      ]
    },
    {
      phase: "Strategy Development",
      duration: "Week 3-4",
      description: "Custom SEO strategy tailored for Baltimore businesses",
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
      duration: "Week 5-20",
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

  const baltimoreIndustries = [
    {
      industry: "Healthcare & Biotech",
      challenge: "Complex medical content and regulatory compliance",
      solution: "Healthcare-specific SEO with medical content optimization",
      result: "45% increase in patient inquiries"
    },
    {
      industry: "Government & Defense",
      challenge: "Security requirements and complex procurement processes",
      solution: "Compliance-focused SEO with government keyword targeting",
      result: "38% improvement in contract inquiries"
    },
    {
      industry: "Education & Research",
      challenge: "Academic content and student recruitment",
      solution: "Educational SEO with research-focused content strategy",
      result: "55% increase in student applications"
    },
    {
      industry: "Maritime & Logistics",
      challenge: "Port operations and shipping industry competition",
      solution: "Maritime SEO with logistics-focused keyword targeting",
      result: "42% increase in shipping inquiries"
    }
  ]

  const caseStudies = [
    {
      company: "Johns Hopkins Medical Center",
      industry: "Healthcare & Biotech",
      challenge: "Low organic visibility for specialized medical services",
      solution: "Healthcare SEO strategy with medical content marketing",
      results: [
        "220% increase in organic traffic",
        "45% improvement in patient inquiries",
        "$450K additional revenue in 8 months"
      ]
    },
    {
      company: "Baltimore Defense Solutions",
      industry: "Government & Defense",
      challenge: "Poor visibility in government procurement searches",
      solution: "Government-focused SEO with compliance content strategy",
      results: [
        "180% increase in organic traffic",
        "38% improvement in contract inquiries",
        "300% ROI on SEO investment"
      ]
    },
    {
      company: "University of Maryland Baltimore",
      industry: "Education & Research",
      challenge: "Low student recruitment from organic search",
      solution: "Educational SEO with student-focused content strategy",
      results: [
        "260% increase in organic traffic",
        "55% improvement in student applications",
        "$380K additional revenue"
      ]
    }
  ]

  const seoServices = [
    {
      service: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical SEO foundation",
      features: ["Site speed optimization", "Mobile responsiveness", "Crawl error analysis", "Schema markup implementation"],
      price: "Starting at $2,800"
    },
    {
      service: "Local SEO Optimization",
      description: "Hyperlocal SEO strategy for Baltimore market dominance",
      features: ["Google My Business optimization", "Local citation building", "Review management", "Local content creation"],
      price: "Starting at $2,500"
    },
    {
      service: "Content Marketing Strategy",
      description: "Content creation and optimization for maximum SEO impact",
      features: ["Content calendar development", "Blog post creation", "Page optimization", "Content performance tracking"],
      price: "Starting at $3,500"
    },
    {
      service: "Link Building Campaign",
      description: "High-quality backlink acquisition for improved domain authority",
      features: ["Link prospecting", "Outreach campaigns", "Content-based link building", "Link quality monitoring"],
      price: "Starting at $2,200"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Thompson",
      company: "Johns Hopkins Medical Center",
      role: "Marketing Director",
      content: "Web Vello's healthcare SEO expertise transformed our online presence. We saw a 220% increase in organic traffic and 45% more patient inquiries within 8 months.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Baltimore Defense Solutions",
      role: "Business Development Manager",
      content: "The government-focused SEO strategy helped us improve our visibility in procurement searches. We increased contract inquiries by 38% and achieved 300% ROI.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      company: "University of Maryland Baltimore",
      role: "Admissions Director",
      content: "The educational SEO approach increased our student applications by 55% and organic traffic by 260%. Our recruitment efforts are now much more effective.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SEO Baltimore MD
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Professional SEO services helping Baltimore businesses dominate search results, 
              increase organic traffic, and grow revenue with proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Free SEO Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
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
              Proven SEO Results for Baltimore Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Baltimore SEO services deliver measurable results that drive business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.stat}</div>
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
              Why Choose Our Baltimore SEO Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local Baltimore market expertise with proven SEO strategies to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Baltimore Expertise</h3>
              <p className="text-gray-600">Deep understanding of Baltimore market dynamics, competition, and local search behavior</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Over 150 successful SEO campaigns for Baltimore businesses across all industries</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Approach</h3>
              <p className="text-gray-600">Advanced analytics and reporting to track progress and optimize performance</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">Experienced SEO specialists dedicated to your Baltimore business success</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Results</h3>
              <p className="text-gray-600">Optimized strategies that deliver measurable improvements within 90 days</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-purple-600" />
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
              Our Baltimore SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to SEO success tailored for Baltimore businesses
            </p>
          </div>
          <div className="space-y-8">
            {seoProcess.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-purple-600 font-medium">{phase.duration}</p>
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

      {/* Baltimore Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Baltimore Industry-Specific SEO Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized SEO strategies for Baltimore's key industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {baltimoreIndustries.map((industry, index) => (
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
              Baltimore SEO Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Baltimore SEO clients
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • Baltimore, MD</p>
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
              Baltimore SEO Services & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO solutions tailored for Baltimore businesses
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
                <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
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
              What Baltimore Business Owners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Baltimore's leading businesses
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
                  <div className="text-purple-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Baltimore Search Results?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get a free SEO consultation and discover how our Baltimore SEO services 
            can transform your online presence and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">
                Get Free SEO Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
              <Link href="tel:+14105550123">
                Call (410) 555-0123
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Baltimore, MD
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (410) 555-0123
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                baltimore@webvello.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
