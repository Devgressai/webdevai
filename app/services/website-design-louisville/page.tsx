import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, Monitor, Smartphone, Palette, Code, Zap, Target, MapPin, Phone, Mail, Star, Award, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Louisville Website Designer: Professional Website Design Services KY | Web Vello',
  description: 'Professional website design services in Louisville, KY. Expert website designers create custom, responsive websites for Louisville businesses. Free consultation available.',
  keywords: 'louisville website designer, website design louisville ky, louisville web designer, website design kentucky, custom website design louisville',
  openGraph: {
    title: 'Louisville Website Designer: Professional Website Design Services KY',
    description: 'Professional website design services in Louisville, KY. Expert website designers create custom, responsive websites for Louisville businesses.',
    url: 'https://www.webvello.com/services/website-design-louisville',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Website Design', 'Louisville Website Designer', 'Kentucky Website Design', 'Website Design Services'],
  },
}

export default function LouisvilleWebsiteDesignServicesPage() {
  const webDesignStats = [
    {
      stat: "72%",
      label: "Mobile Traffic",
      description: "Louisville users browse primarily on mobile devices"
    },
    {
      stat: "2.4s",
      label: "Average Load Time",
      description: "Louisville users expect fast-loading websites"
    },
    {
      stat: "62%",
      label: "Conversion Rate Increase",
      description: "Professional website design improves conversions"
    },
    {
      stat: "48%",
      label: "Bounce Rate Reduction",
      description: "Better design keeps visitors engaged"
    }
  ]

  const designProcess = [
    {
      phase: "Discovery & Strategy",
      duration: "Week 1-2",
      description: "Understanding your Louisville business goals and target audience",
      tasks: [
        "Business goals analysis",
        "Target audience research",
        "Competitive analysis",
        "Content strategy planning",
        "Louisville market research"
      ]
    },
    {
      phase: "Design & Prototyping",
      duration: "Week 3-4",
      description: "Creating visual designs and user experience prototypes",
      tasks: [
        "Wireframe creation",
        "Visual design mockups",
        "Mobile-first approach",
        "User experience testing",
        "Design revisions"
      ]
    },
    {
      phase: "Development & Testing",
      duration: "Week 5-8",
      description: "Building responsive, fast-loading websites",
      tasks: [
        "Frontend development",
        "Backend integration",
        "Mobile optimization",
        "Performance optimization",
        "Cross-browser testing"
      ]
    },
    {
      phase: "Launch & Optimization",
      duration: "Week 9-10",
      description: "Going live and continuous improvement",
      tasks: [
        "Website launch",
        "SEO optimization",
        "Analytics setup",
        "Performance monitoring",
        "Ongoing support"
      ]
    }
  ]

  const louisvilleIndustries = [
    {
      industry: "Healthcare & Medical",
      challenge: "Patient portal integration and HIPAA compliance",
      solution: "Secure, user-friendly design with patient-focused functionality",
      result: "42% improvement in patient engagement"
    },
    {
      industry: "Manufacturing & Logistics",
      challenge: "Complex product showcases and B2B sales processes",
      solution: "Modern, interactive design with technical content optimization",
      result: "48% increase in B2B leads"
    },
    {
      industry: "Education & Training",
      challenge: "Student portal integration and accessibility requirements",
      solution: "Accessible design with learning management system integration",
      result: "45% improvement in student engagement"
    },
    {
      industry: "Real Estate",
      challenge: "Property listings and virtual tour integration",
      solution: "Advanced property showcase with virtual tour capabilities",
      result: "55% increase in property inquiries"
    }
  ]

  const caseStudies = [
    {
      company: "Louisville Medical Center",
      industry: "Healthcare & Medical",
      challenge: "Outdated website hurting patient engagement and appointments",
      solution: "Modern, patient-focused design with integrated appointment system",
      results: [
        "65% increase in online appointments",
        "42% improvement in patient engagement",
        "$380K additional revenue in 6 months"
      ]
    },
    {
      company: "Kentucky Manufacturing Co.",
      industry: "Manufacturing & Logistics",
      challenge: "Poor B2B lead generation and complex product information",
      solution: "B2B-focused design with interactive product showcases",
      results: [
        "70% increase in B2B leads",
        "48% improvement in lead quality",
        "250% ROI on website design investment"
      ]
    },
    {
      company: "University of Louisville",
      industry: "Education & Training",
      challenge: "Low student recruitment and poor user experience",
      solution: "Student-focused design with integrated application system",
      results: [
        "55% increase in student applications",
        "45% improvement in user engagement",
        "$320K additional revenue"
      ]
    }
  ]

  const webDesignServices = [
    {
      service: "Custom Website Design",
      description: "Bespoke website design tailored to your Louisville business needs",
      features: ["Custom visual design", "Mobile-responsive layout", "User experience optimization", "Brand integration"],
      price: "Starting at $3,200"
    },
    {
      service: "E-commerce Development",
      description: "Online stores and payment processing systems for Louisville businesses",
      features: ["Shopping cart integration", "Payment processing", "Inventory management", "Order tracking"],
      price: "Starting at $5,200"
    },
    {
      service: "Website Redesign",
      description: "Modernizing existing websites for better performance and conversions",
      features: ["Design refresh", "Performance optimization", "Mobile optimization", "SEO improvements"],
      price: "Starting at $2,500"
    },
    {
      service: "Maintenance & Support",
      description: "Ongoing website maintenance and technical support",
      features: ["Regular updates", "Security monitoring", "Performance optimization", "Content updates"],
      price: "Starting at $125/month"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "Louisville Medical Center",
      role: "Practice Administrator",
      content: "Web Vello transformed our medical website into a patient engagement powerhouse. We saw a 65% increase in online appointments and $380K in additional revenue within 6 months.",
      rating: 5
    },
    {
      name: "Michael Johnson",
      company: "Kentucky Manufacturing Co.",
      role: "VP of Sales",
      content: "The B2B-focused design and interactive product showcases increased our leads by 70% and improved lead quality by 48%. Excellent ROI on our investment.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      company: "University of Louisville",
      role: "Admissions Director",
      content: "The student-focused design and integrated application system increased our student applications by 55% and improved user engagement by 45%.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Louisville Website Designer
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Professional website design services creating stunning, responsive websites 
              that drive results for Louisville businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Free Design Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
                <Link href="#case-studies">
                  View Our Work
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
              Proven Website Design Results for Louisville Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Louisville website design services deliver measurable improvements that drive business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webDesignStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.stat}</div>
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
              Why Choose Our Louisville Website Design Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local Louisville market expertise with cutting-edge design to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Louisville Expertise</h3>
              <p className="text-gray-600">Deep understanding of Louisville market dynamics and local business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning Design</h3>
              <p className="text-gray-600">Recognized for excellence in website design and user experience</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
              <p className="text-gray-600">Optimized for mobile devices where 72% of Louisville traffic originates</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Performance</h3>
              <p className="text-gray-600">Lightning-fast loading speeds that Louisville users expect</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">Experienced designers and developers focused on your success</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Focused</h3>
              <p className="text-gray-600">Every design decision optimized for maximum return on investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Design Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Louisville Website Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to website design success tailored for Louisville businesses
            </p>
          </div>
          <div className="space-y-8">
            {designProcess.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-orange-600 font-medium">{phase.duration}</p>
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

      {/* Louisville Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Louisville Industry-Specific Website Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized website design solutions for Louisville's key industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {louisvilleIndustries.map((industry, index) => (
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
              Louisville Website Design Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Louisville website design clients
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • Louisville, KY</p>
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
              Louisville Website Design Services & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive website design solutions tailored for Louisville businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webDesignServices.map((service, index) => (
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
                <div className="text-2xl font-bold text-orange-600 mb-4">{service.price}</div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
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
              What Louisville Business Owners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Louisville's leading businesses
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
                  <div className="text-orange-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Louisville Business Website?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get a free design consultation and discover how our Louisville website design services 
            can transform your online presence and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">
                Get Free Design Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              <Link href="tel:+15025550123">
                Call (502) 555-0123
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Louisville, KY
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (502) 555-0123
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                louisville@webvello.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
