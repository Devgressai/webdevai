import { Metadata } from 'next'
import { Button } from '../../components/ui/button'
import { CheckCircle, ArrowRight, ExternalLink, TrendingUp, Users, Globe, Zap, Award, Star, BarChart3, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Web Development & SEO Success Stories',
  description: 'Explore our portfolio of successful web development and SEO projects. Real results for GutterFX, RenovationFX, and Pinewood Cabinets.',
  keywords: 'web development portfolio, seo case studies, client success stories, web design examples, digital marketing results',
  alternates: {
    canonical: 'https://www.webvello.com/case-studies',
  },
  openGraph: {
    title: 'Portfolio & Case Studies | Web Vello Success Stories',
    description: 'Explore our portfolio of successful web development and SEO projects. Real results for real businesses.',
    url: 'https://www.webvello.com/case-studies',
    type: 'website',
    images: [{ url: 'https://www.webvello.com/og-image.jpg', width: 1200, height: 630, alt: 'Web Vello Portfolio' }],
  }
}

const projects = [
  {
    name: 'GutterFX',
    url: 'https://gutterfx.com',
    tagline: 'Professional Gutter Services Website',
    description: 'Complete website design and development for a leading gutter installation and repair service company. Modern, conversion-focused design that drives qualified leads.',
    industry: 'Home Services',
    services: ['Web Design', 'Web Development', 'SEO Optimization', 'Lead Generation'],
    results: [
      { metric: '250%', label: 'Increase in Online Leads' },
      { metric: '180%', label: 'Organic Traffic Growth' },
      { metric: '4.8★', label: 'Average Customer Rating' },
      { metric: '65%', label: 'Mobile Conversion Rate' }
    ],
    features: [
      'Mobile-responsive design optimized for conversions',
      'Instant quote request system',
      'Service area targeting and local SEO',
      'Before/after photo gallery',
      'Customer review integration',
      'Fast page load speeds (< 2 seconds)'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Google Analytics'],
    gradient: 'from-blue-500 to-cyan-600',
    stats: {
      loadTime: '1.8s',
      mobileScore: '95/100',
      seoScore: '98/100'
    }
  },
  {
    name: 'RenovationFX',
    url: 'https://renovationfx.com',
    tagline: 'Full-Service Renovation Company',
    description: 'Custom website showcasing comprehensive renovation services including kitchen remodeling, bathroom updates, and complete home renovations. Built to highlight craftsmanship and generate high-value project inquiries.',
    industry: 'Construction & Remodeling',
    services: ['Custom Web Design', 'Content Strategy', 'Local SEO', 'Conversion Optimization'],
    results: [
      { metric: '320%', label: 'ROI in First Year' },
      { metric: '$850K', label: 'Projects from Website' },
      { metric: '45%', label: 'Form Completion Rate' },
      { metric: '#1', label: 'Ranking for Key Terms' }
    ],
    features: [
      'Stunning portfolio showcase with project galleries',
      'Service-specific landing pages',
      'Interactive cost estimator',
      'Video testimonials from satisfied clients',
      'Blog with renovation tips and trends',
      'Integration with project management system'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe Integration'],
    gradient: 'from-orange-500 to-red-600',
    stats: {
      loadTime: '2.1s',
      mobileScore: '92/100',
      seoScore: '96/100'
    }
  },
  {
    name: 'Pinewood Cabinets',
    url: 'https://pinewoodcabinets.com',
    tagline: 'Premium Custom Cabinetry',
    description: 'Elegant e-commerce and portfolio website for a premium custom cabinet maker. Showcases craftsmanship, facilitates quote requests, and educates customers on materials and design options.',
    industry: 'Custom Manufacturing',
    services: ['E-commerce Development', 'SEO Strategy', 'Brand Development', 'Photography Integration'],
    results: [
      { metric: '400%', label: 'Online Sales Growth' },
      { metric: '210%', label: 'Organic Search Traffic' },
      { metric: '58%', label: 'Increase in Quote Requests' },
      { metric: '4.9★', label: 'Customer Satisfaction' }
    ],
    features: [
      'High-resolution product gallery',
      'Material and finish selector tool',
      'Custom quote request system',
      'Design inspiration blog',
      'Customer testimonial showcase',
      'Integration with inventory management'
    ],
    technologies: ['WordPress', 'WooCommerce', 'Custom PHP', 'Advanced SEO'],
    gradient: 'from-amber-600 to-orange-700',
    stats: {
      loadTime: '1.9s',
      mobileScore: '94/100',
      seoScore: '97/100'
    }
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop&crop=center" 
            alt="Business analytics and portfolio showcase background" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-400">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Real Projects, Real Results</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Portfolio & Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50 leading-relaxed">
              Explore our portfolio of successful web development and SEO projects. We build websites that drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">$5M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">300%</div>
              <div className="text-gray-600">Avg ROI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Client Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each project represents a unique challenge solved through strategic design, development, and digital marketing expertise.
              </p>
            </div>

            <div className="space-y-20">
              {projects.map((project, index) => (
                <div key={project.name} className="group">
                  {/* Project Card */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    {/* Project Header */}
                    <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white`}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-3xl font-bold">{project.name}</h3>
                            <a 
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </div>
                          <p className="text-lg text-white/90">{project.tagline}</p>
                          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mt-3">
                            <span className="text-sm font-medium">{project.industry}</span>
                          </div>
                        </div>
                        <a 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                        >
                          <Button 
                            size="lg" 
                            className="bg-white text-gray-900 hover:bg-gray-100"
                          >
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Description */}
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Services Provided */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                          Services Provided
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, i) => (
                            <span 
                              key={i}
                              className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                          Key Results
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {project.results.map((result, i) => (
                            <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center border border-gray-200">
                              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                                {result.metric}
                              </div>
                              <div className="text-sm text-gray-600">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                          Key Features
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies & Performance */}
                      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span 
                                key={i}
                                className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            Performance Scores
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Load Time:</span>
                              <span className="text-sm font-semibold text-green-600">{project.stats.loadTime}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Mobile Score:</span>
                              <span className="text-sm font-semibold text-green-600">{project.stats.mobileScore}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">SEO Score:</span>
                              <span className="text-sm font-semibold text-green-600">{project.stats.seoScore}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Let's create something amazing together. Get a free consultation and discover how we can help your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
