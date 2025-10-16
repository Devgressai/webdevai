import { Button } from '../../components/ui/button'
import { Users, Target, TrendingUp, Award, Globe, Zap, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We don’t just promise results—we guarantee them. Every strategy is designed to deliver measurable business growth."
  },
  {
    icon: TrendingUp,
    title: "Data-First",
    description: "Our decisions are backed by data, not guesswork. We analyze, optimize, and iterate based on real performance metrics."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We become an extension of your team, working collaboratively to achieve your business goals and exceed expectations."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve with cutting-edge technology and strategies that give you a competitive advantage."
  }
]

const team = [
  {
    name: "George S.",
    position: "CEO & Founder",
    bio: "Visionary leader with extensive experience in digital marketing and business strategy, driving Web Vello’s mission to deliver exceptional results.",
    expertise: ["Strategic Planning", "Business Development", "Client Relations"]
  },
  {
    name: "Rueben G.",
    position: "CTO & AI Specialist",
    bio: "Leading our AI-powered SEO initiatives and technical innovation across all digital marketing solutions with cutting-edge technology.",
    expertise: ["AI/ML", "Technical SEO", "Data Analytics"]
  },
  {
    name: "Irina I.",
    position: "Head of Local SEO",
    bio: "Expert in local search optimization with proven strategies for businesses in competitive markets, specializing in Austin and Texas markets.",
    expertise: ["Local SEO", "Google My Business", "Review Management"]
  },
  {
    name: "Mark S.",
    position: "Lead Web Developer",
    bio: "Creating conversion-focused websites that not only look great but drive real business results with modern development practices.",
    expertise: ["Web Development", "Conversion Optimization", "Performance"]
  }
]

const milestones = [
  { year: "2018", title: "Company Founded", description: "Started with a vision to deliver real results in digital marketing" },
  { year: "2019", title: "First Major Client", description: "Proved our methodology works with early success stories" },
  { year: "2020", title: "AI Integration", description: "Began incorporating AI into our SEO strategies" },
  { year: "2021", title: "100+ Clients", description: "Reached a major milestone in client success" },
  { year: "2022", title: "$1M+ Revenue", description: "Generated over $1 million for our clients" },
  { year: "2024", title: "Industry Leader", description: "Recognized as the premier digital marketing agency" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('page', { title: 'About' })} 
            className="mb-8"
          />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Web Vello
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              We’re not just another digital marketing agency. We’re the team that transforms 
              businesses through data-driven strategies, AI-powered insights, and unwavering 
              commitment to results.
            </p>
          </div>
        </div>
      </section>

      {/* What is Web Vello? entity copy */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">What is Web Vello?</h2>
          <p className="text-lg text-secondary-700 mb-4">
            Web Vello is a professional digital marketing agency and technology partner for B2B organizations in the
            United States. We specialize in AI‑powered SEO, Local SEO, website design, and custom web development.
            Our methodology blends data, experimentation, and creative strategy to deliver measurable growth.
          </p>
          <p className="text-secondary-700">
            Clients choose us for transparent reporting, a senior expert team, and proven results—often 300%+ traffic
            growth within 6 months. We operate nationwide with deep experience across regulated and competitive
            industries.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                To empower businesses with digital marketing strategies that don’t just promise 
                growth—they deliver it. We believe every business deserves to dominate their market, 
                and we have the proven methodology to make it happen.
              </p>
              <p className="text-lg text-secondary-600">
                Since 2018, we’ve helped over 100 businesses achieve remarkable growth, generating 
                more than $1 million in additional revenue through our comprehensive digital 
                marketing solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-primary-600 mb-4">$1M+</div>
              <div className="text-xl text-primary-700">Revenue Generated for Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              These principles guide everything we do and ensure we deliver exceptional results 
              for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-3xl shadow-soft ring-1 ring-secondary-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 mb-6">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              The experts behind every successful campaign. Our team combines deep expertise 
              with innovative thinking to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-sm text-secondary-600 mb-4">
                  {member.bio}
                </p>
                <div className="space-y-2">
                  {member.expertise.map((skill) => (
                    <div key={skill} className="flex items-center justify-center text-sm text-secondary-600">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary-600" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              From startup to industry leader, here’s how we’ve grown and evolved over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-lg font-semibold text-secondary-900 mb-2">
                      {milestone.title}
                    </div>
                    <div className="text-secondary-600">
                      {milestone.description}
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise & Services Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Team Expertise & Services
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              Our team members are specialists in their fields. Discover which services each expert 
              leads and how their expertise translates into results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* George S. - Strategic Services */}
            <div className="group bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mr-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-blue-600 transition-colors">
                    George S.
                  </h3>
                  <p className="text-blue-600 font-medium">CEO & Strategic Planning Expert</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6">
                Visionary leader with extensive experience in digital marketing and business strategy, 
                driving Web Vello’s mission to deliver exceptional results for clients nationwide.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Strategic Planning</span>
                  <Link href="/services/ai-consulting" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Business Development</span>
                  <Link href="/services/digital-marketing" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Client Relations</span>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="text-sm text-secondary-500">
                <span className="font-medium">Specializes in:</span> Strategic Planning, Business Development, Client Relations
              </div>
            </div>

            {/* Rueben G. - AI & Technical Services */}
            <div className="group bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mr-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-purple-600 transition-colors">
                    Rueben G.
                  </h3>
                  <p className="text-purple-600 font-medium">CTO & AI Specialist</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6">
                Leading our AI-powered SEO initiatives and technical innovation across all digital marketing solutions. 
                Expert in machine learning, data analytics, and cutting-edge technology implementation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">AI-Powered SEO</span>
                  <Link href="/services/ai-seo" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Technical SEO</span>
                  <Link href="/services/seo" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Data Analytics</span>
                  <Link href="/services/ai-consulting" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="text-sm text-secondary-500">
                <span className="font-medium">Specializes in:</span> AI/ML, Technical SEO, Data Analytics
              </div>
            </div>

            {/* Irina I. - Local SEO Services */}
            <div className="group bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mr-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-green-600 transition-colors">
                    Irina I.
                  </h3>
                  <p className="text-green-600 font-medium">Head of Local SEO</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6">
                Expert in local search optimization with proven strategies for businesses in competitive markets. 
                Specializes in Austin and Texas markets, Google My Business, and review management.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Local SEO</span>
                  <Link href="/services/local-seo" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Austin Market</span>
                  <Link href="/austin-tx" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Google My Business</span>
                  <Link href="/services/local-seo" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="text-sm text-secondary-500">
                <span className="font-medium">Specializes in:</span> Local SEO, Google My Business, Review Management
              </div>
            </div>

            {/* Mark S. - Web Development Services */}
            <div className="group bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mr-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-orange-600 transition-colors">
                    Mark S.
                  </h3>
                  <p className="text-orange-600 font-medium">Lead Web Developer</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6">
                Creating conversion-focused websites that not only look great but drive real business results. 
                Expert in modern development practices, performance optimization, and user experience.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Web Development</span>
                  <Link href="/services/web-development" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">UI/UX Design</span>
                  <Link href="/services/ui-ux-design" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Conversion Optimization</span>
                  <Link href="/services/cro-lead-generation" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="text-sm text-secondary-500">
                <span className="font-medium">Specializes in:</span> Web Development, Conversion Optimization, Performance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join over 100 businesses that have already transformed their digital presence 
            with our proven methodology and expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Strategy Session</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
