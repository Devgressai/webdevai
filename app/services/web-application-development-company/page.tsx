import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { CheckCircle, Code, TrendingUp, Phone, Mail, Clock, Shield, ArrowRight, Globe, BarChart3, Target, Users, Award, Star, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Application Development Company | Custom Software',
  description: 'Enterprise web application development. Scalable, secure custom software solutions for modern businesses.',
  keywords: 'web application development company, custom web app development, enterprise software development, saas development',
  alternates: { canonical: 'https://www.webvello.com/services/web-application-development-company' },
  openGraph: {
    title: 'Web Application Development Company | Custom Software',
    description: 'Enterprise web application development. Scalable, secure custom software solutions for modern businesses.',
    url: 'https://www.webvello.com/services/web-application-development-company',
    type: 'website',
    images: [{ url: 'https://www.webvello.com/og-image.jpg', width: 1200, height: 630, alt: 'Web Application Development' }],
  }
}

export default function WebApplicationDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-indigo-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-indigo-400">
              <Code className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Enterprise Application Development Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Web Application Development Company: Build Powerful Applications</h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-50 leading-relaxed">Custom web application development for enterprises and startups. Build scalable, secure, high-performance applications that drive business growth and competitive advantage.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6"><Phone className="mr-2 h-5 w-5" />Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">View Portfolio<ArrowRight className="ml-2 h-5 w-5" /></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">500+</div><div className="text-gray-600">Apps Built</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">15M+</div><div className="text-gray-600">Users</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">99.99%</div><div className="text-gray-600">Uptime</div></div>
            <div><div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">4.9★</div><div className="text-gray-600">Rating</div></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">As a leading <strong>web application development company</strong>, we transform business ideas into powerful, scalable applications that drive growth. Whether you need a customer-facing SaaS platform, internal business tool, marketplace, CRM system, project management application, or complex enterprise software, we engineer solutions that combine exceptional user experiences with robust technical architecture. Our applications serve millions of users, process billions in transactions, and provide mission-critical functionality for enterprises worldwide.</p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">Modern businesses need applications that scale effortlessly as user bases grow, maintain security against evolving threats, integrate with existing systems, provide intuitive user experiences, perform under heavy load, support multiple devices and platforms, and evolve with changing requirements. We build applications architected for these demands using modern frameworks like React, Vue, Angular, Node.js, Python, and cloud infrastructure from AWS, Google Cloud, and Azure.</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Web Application Services</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Application Development</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">We build applications tailored to your exact requirements: SaaS platforms and subscription businesses; marketplace and multi-vendor platforms; CRM and sales enablement tools; project and resource management systems; inventory and supply chain applications; HR and employee management platforms; finance and accounting software; booking and scheduling systems; and custom business process automation. Off-the-shelf software forces you to adapt your processes to the software. Custom development adapts software to your processes, providing competitive advantages through purpose-built tools.</p>
                </div>

                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Progressive Web Applications (PWAs)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">PWAs provide app-like experiences through web browsers—fast, reliable, engaging experiences that work offline, can be installed on devices, send push notifications, and access device features while avoiding app store gatekeepers. We build PWAs that deliver native app experiences without the friction of app store downloads, reach users across all devices with a single codebase, update instantly without app store review processes, and reduce development costs compared to separate iOS and Android apps.</p>
                </div>

                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">API Development & Integration</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Modern applications don't exist in isolation—they integrate with payment processors, CRMs, ERPs, marketing tools, analytics platforms, and countless other systems. We build RESTful and GraphQL APIs that enable seamless integrations, develop webhooks for real-time data sync, create middleware for legacy system integration, implement authentication and authorization, design rate limiting and security, and provide comprehensive API documentation. Strong API architecture ensures your application plays nicely with your entire technology ecosystem.</p>
                </div>

                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Database Architecture & Optimization</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Your database is the foundation of application performance. We design scalable database architectures using PostgreSQL, MySQL, MongoDB, Redis, and other technologies; optimize queries for speed; implement caching strategies; design data partitioning and sharding; ensure backup and disaster recovery; maintain data integrity and consistency; and plan for growth and scaling. Poor database design creates performance bottlenecks that no amount of frontend optimization can fix. We get it right from the start.</p>
                </div>

                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure & DevOps</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">We deploy applications on scalable cloud infrastructure with automated deployment pipelines, containerization with Docker and Kubernetes, infrastructure as code, monitoring and alerting systems, auto-scaling and load balancing, security hardening and compliance, backup and disaster recovery, and cost optimization strategies. Modern DevOps practices ensure your application deploys reliably, scales automatically, and maintains high availability.</p>
                </div>

                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">Security isn't an afterthought—it's built into every layer. We implement secure authentication and authorization, data encryption at rest and in transit, SQL injection and XSS prevention, CSRF protection, security headers and HTTPS, regular security audits, compliance with GDPR, HIPAA, SOC 2, and other regulations, and penetration testing. Enterprise applications handle sensitive data and require enterprise-grade security from day one.</p>
                </div>
              </div>
            </div>

            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {['Healthcare & Medical', 'Financial Services', 'E-commerce & Retail', 'Real Estate', 'Education & eLearning', 'Manufacturing', 'Transportation & Logistics', 'Hospitality & Travel', 'Media & Entertainment', 'Professional Services', 'Non-Profit', 'Government', 'Construction', 'Energy & Utilities', 'Agriculture', 'Insurance', 'Legal Services', 'Telecommunications'].map((industry, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 flex items-center border border-gray-200">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Application?</h2>
              <p className="text-xl text-indigo-50">Schedule a consultation to discuss your project.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label><input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-gray-900" placeholder="John Smith" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label><input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-gray-900" placeholder="john@company.com" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label><input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-gray-900" placeholder="(555) 123-4567" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label><input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-gray-900" placeholder="Your Company" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Current Website (if any)</label><input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-gray-900" placeholder="https://yourcompany.com" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your application idea</label><textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-gray-900" placeholder="What problem does your application solve? Who are the users? What are the key features?" /></div>
                <Button type="submit" size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6">Schedule Consultation<ArrowRight className="ml-2 h-5 w-5" /></Button>
                <p className="text-center text-sm text-gray-600"><Shield className="inline h-4 w-4 mr-1" />Your information is secure. We respect your privacy.</p>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div><Phone className="h-8 w-8 mx-auto mb-3 text-indigo-300" /><div className="font-semibold mb-1">Call Us</div><a href="tel:+15305538883" className="text-indigo-200 hover:text-white">(737) 888-5723</a></div>
              <div><Mail className="h-8 w-8 mx-auto mb-3 text-indigo-300" /><div className="font-semibold mb-1">Email Us</div><a href="mailto:hello@webvello.com" className="text-indigo-200 hover:text-white">hello@webvello.com</a></div>
              <div><Clock className="h-8 w-8 mx-auto mb-3 text-indigo-300" /><div className="font-semibold mb-1">Business Hours</div><div className="text-indigo-100">Mon-Fri: 9AM-6PM</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
