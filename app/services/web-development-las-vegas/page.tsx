import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, Code, Monitor, Smartphone, Palette, Zap, Target, MapPin, Phone, Mail, Star, Award, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Development Las Vegas: Professional Web Development Services NV | Web Vello',
  description: 'Professional web development services in Las Vegas, NV. Expert web developers create custom websites, web applications, and digital solutions for Las Vegas businesses. Free consultation available.',
  keywords: 'web development las vegas, las vegas web developer, web development nevada, las vegas web development company, custom web development las vegas',
  openGraph: {
    title: 'Web Development Las Vegas: Professional Web Development Services NV',
    description: 'Professional web development services in Las Vegas, NV. Expert web developers create custom websites, web applications, and digital solutions for Las Vegas businesses.',
    url: 'https://www.webvello.com/services/web-development-las-vegas',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-30T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Web Development', 'Las Vegas Web Development', 'Nevada Web Development', 'Web Development Services'],
  },
}

export default function LasVegasWebDevelopmentServicesPage() {
  const webDevStats = [
    {
      stat: "78%",
      label: "Mobile Traffic",
      description: "Las Vegas users browse primarily on mobile devices"
    },
    {
      stat: "2.1s",
      label: "Average Load Time",
      description: "Las Vegas users expect lightning-fast websites"
    },
    {
      stat: "65%",
      label: "Conversion Rate Increase",
      description: "Professional web development improves conversions"
    },
    {
      stat: "50%",
      label: "Bounce Rate Reduction",
      description: "Better development keeps visitors engaged"
    }
  ]

  const developmentProcess = [
    {
      phase: "Planning & Strategy",
      duration: "Week 1-2",
      description: "Understanding your Las Vegas business goals and technical requirements",
      tasks: [
        "Business goals analysis",
        "Technical requirements gathering",
        "Technology stack selection",
        "Project timeline planning",
        "Las Vegas market research"
      ]
    },
    {
      phase: "Design & Prototyping",
      duration: "Week 3-4",
      description: "Creating user experience designs and technical architecture",
      tasks: [
        "UI/UX design creation",
        "Technical architecture planning",
        "Database design",
        "API integration planning",
        "Design revisions"
      ]
    },
    {
      phase: "Development & Testing",
      duration: "Week 5-10",
      description: "Building responsive, scalable web applications",
      tasks: [
        "Frontend development",
        "Backend development",
        "Database implementation",
        "API development",
        "Quality assurance testing"
      ]
    },
    {
      phase: "Deployment & Maintenance",
      duration: "Week 11-12",
      description: "Going live and providing ongoing support",
      tasks: [
        "Production deployment",
        "Performance optimization",
        "Security implementation",
        "Documentation creation",
        "Ongoing maintenance"
      ]
    }
  ]

  const lasVegasIndustries = [
    {
      industry: "Entertainment & Gaming",
      challenge: "High-traffic applications and real-time data processing",
      solution: "Scalable web applications with real-time features and high availability",
      result: "40% increase in user engagement"
    },
    {
      industry: "Hospitality & Tourism",
      challenge: "Booking systems and customer experience optimization",
      solution: "Integrated booking platforms with seamless user experience",
      result: "45% improvement in booking conversions"
    },
    {
      industry: "Real Estate",
      challenge: "Property listings and virtual tour integration",
      solution: "Advanced property management systems with virtual tour capabilities",
      result: "55% increase in property inquiries"
    },
    {
      industry: "Healthcare",
      challenge: "Patient portals and appointment scheduling systems",
      solution: "Secure healthcare applications with HIPAA compliance",
      result: "38% improvement in patient satisfaction"
    }
  ]

  const caseStudies = [
    {
      company: "Las Vegas Casino Group",
      industry: "Entertainment & Gaming",
      challenge: "Outdated booking system affecting customer experience",
      solution: "Modern web application with real-time booking and payment processing",
      results: [
        "70% increase in online bookings",
        "50% improvement in user experience",
        "$520K additional revenue in 6 months"
      ]
    },
    {
      company: "Strip Hotel Management",
      industry: "Hospitality & Tourism",
      challenge: "Poor mobile experience and low booking rates",
      solution: "Mobile-first web application with integrated booking system",
      results: [
        "65% increase in mobile bookings",
        "45% improvement in booking conversions",
        "280% ROI on web development investment"
      ]
    },
    {
      company: "Las Vegas Realty Group",
      industry: "Real Estate",
      challenge: "Complex property listings and low lead generation",
      solution: "Advanced property management system with virtual tour integration",
      results: [
        "80% increase in property inquiries",
        "60% improvement in lead quality",
        "$380K additional revenue"
      ]
    }
  ]

  const webDevServices = [
    {
      service: "Custom Web Applications",
      description: "Bespoke web solutions tailored to your Las Vegas business needs",
      features: ["Custom functionality", "Database integration", "API development", "Scalable architecture"],
      price: "Starting at $8,500"
    },
    {
      service: "E-commerce Development",
      description: "Online stores and payment processing systems for Las Vegas businesses",
      features: ["Shopping cart integration", "Payment processing", "Inventory management", "Order tracking"],
      price: "Starting at $6,500"
    },
    {
      service: "Mobile Web Development",
      description: "Mobile-optimized web applications for Las Vegas users",
      features: ["Responsive design", "Mobile performance", "Touch optimization", "Offline capabilities"],
      price: "Starting at $4,500"
    },
    {
      service: "Web Application Maintenance",
      description: "Ongoing maintenance and technical support for web applications",
      features: ["Regular updates", "Security monitoring", "Performance optimization", "Bug fixes"],
      price: "Starting at $300/month"
    }
  ]

  const testimonials = [
    {
      name: "David Martinez",
      company: "Las Vegas Casino Group",
      role: "IT Director",
      content: "Web Vello's web development expertise transformed our booking system. We saw a 70% increase in online bookings and $520K in additional revenue within 6 months.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Strip Hotel Management",
      role: "Operations Manager",
      content: "The mobile-first approach and integrated booking system increased our mobile bookings by 65% and improved conversions by 45%. Excellent ROI.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Las Vegas Realty Group",
      role: "VP of Sales",
      content: "The property management system with virtual tour integration increased our property inquiries by 80% and improved lead quality by 60%.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Development Las Vegas
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Professional web development services creating custom websites, web applications, 
              and digital solutions for Las Vegas businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Free Development Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
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
              Proven Web Development Results for Las Vegas Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Las Vegas web development services deliver measurable improvements that drive business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webDevStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.stat}</div>
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
              Why Choose Our Las Vegas Web Development Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local Las Vegas market expertise with cutting-edge development to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Las Vegas Expertise</h3>
              <p className="text-gray-600">Deep understanding of Las Vegas market dynamics and business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning Development</h3>
              <p className="text-gray-600">Recognized for excellence in web development and user experience</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Development</h3>
              <p className="text-gray-600">Optimized for mobile devices where 78% of Las Vegas traffic originates</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning-Fast Performance</h3>
              <p className="text-gray-600">Ultra-fast loading speeds that Las Vegas users expect</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">Experienced developers and designers focused on your success</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Focused</h3>
              <p className="text-gray-600">Every development decision optimized for maximum return on investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Las Vegas Web Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to web development success tailored for Las Vegas businesses
            </p>
          </div>
          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-red-600 font-medium">{phase.duration}</p>
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

      {/* Las Vegas Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las Vegas Industry-Specific Web Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized web development solutions for Las Vegas's key industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lasVegasIndustries.map((industry, index) => (
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
              Las Vegas Web Development Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Las Vegas web development clients
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • Las Vegas, NV</p>
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
              Las Vegas Web Development Services & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored for Las Vegas businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webDevServices.map((service, index) => (
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
                <div className="text-2xl font-bold text-red-600 mb-4">{service.price}</div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
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
              What Las Vegas Business Owners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Las Vegas's leading businesses
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
                  <div className="text-red-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Las Vegas Business with Custom Web Development?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get a free development consultation and discover how our Las Vegas web development services 
            can transform your online presence and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">
                Get Free Development Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
              <Link href="tel:+17025550123">
                Call (702) 555-0123
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Las Vegas, NV
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (702) 555-0123
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                lasvegas@webvello.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
