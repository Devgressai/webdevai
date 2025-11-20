import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { CheckCircle, Shield, TrendingUp, Users, Award, Zap, Lock, FileCheck, Globe, Search, BarChart3, Target, ArrowRight, Phone, Mail, Clock, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Company for Government Website | Secure & Compliant',
  description: 'Specialized SEO services for government websites. WCAG compliant, security-focused, and proven results. Trusted by federal, state, and local agencies.',
  keywords: 'seo company for government website, government seo services, public sector seo, federal website optimization, state government seo',
  alternates: {
    canonical: 'https://www.webvello.com/services/seo-company-government-website',
  },
  openGraph: {
    title: 'SEO Company for Government Website | Secure & Compliant',
    description: 'Specialized SEO services for government websites. WCAG compliant, security-focused, and proven results for federal, state, and local agencies.',
    url: 'https://www.webvello.com/services/seo-company-government-website',
    type: 'website',
    images: [
      {
        url: 'https://www.webvello.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Vello Government SEO Services',
      },
    ],
  }
}

export default function GovernmentSEOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-700">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Security-First SEO for Government Agencies</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              SEO Company for Government Website Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Specialized search engine optimization services designed exclusively for federal, state, and local government agencies. WCAG compliant, security-focused, and results-driven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Government Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">WCAG Compliant</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">200%</div>
              <div className="text-gray-600">Avg Traffic Increase</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">FedRAMP</div>
              <div className="text-gray-600">Security Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                In today's digital-first world, government agencies face unique challenges when it comes to search engine optimization. Unlike commercial websites, government sites must balance visibility with security, accessibility with compliance, and public service with technical excellence. As a specialized <strong>SEO company for government website</strong> projects, we understand these nuanced requirements and deliver solutions that meet the highest standards of public sector digital services.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Government websites serve critical functions—from providing essential services to disseminating vital information during emergencies. When citizens can't find your website or the information they need, it impacts public trust, service delivery, and democratic participation. Our government-focused SEO services ensure your agency's digital presence is discoverable, accessible, and effective while maintaining the security and compliance standards that government organizations require.
              </p>
            </div>

            {/* Why Government SEO is Different */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Government Website SEO Requires Specialized Expertise</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Government website optimization isn't just about ranking higher in search results. It's about meeting strict compliance requirements, ensuring accessibility for all citizens, maintaining robust security protocols, and serving the public interest. Here's what makes government SEO uniquely challenging and why you need a specialized partner:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Lock className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Security-First Approach</h3>
                  <p className="text-gray-700">
                    Government websites are prime targets for cyber attacks. Our SEO strategies never compromise security. We implement SEO improvements that work within your existing security frameworks, follow FedRAMP guidelines, and ensure all optimizations meet federal security standards including FISMA compliance.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <FileCheck className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility Compliance</h3>
                  <p className="text-gray-700">
                    Section 508 and WCAG 2.1 AA compliance isn't optional—it's the law. Our SEO techniques enhance accessibility rather than hindering it. Every optimization we implement is tested against accessibility standards to ensure equal access for all citizens, including those with disabilities.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Shield className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Data Protection</h3>
                  <p className="text-gray-700">
                    Government agencies handle sensitive citizen data. Our SEO analytics and tracking methods comply with privacy regulations including the Privacy Act of 1974, ensuring no personally identifiable information (PII) is collected or misused in our optimization process.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <Users className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Public Service Focus</h3>
                  <p className="text-gray-700">
                    Government SEO serves the public interest, not profit. We optimize for user intent that matters—citizens seeking services, accessing resources, and finding critical information. Our strategies prioritize user experience and information access over conversion metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Comprehensive Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Government SEO Services</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As a full-service <strong>SEO company for government website</strong> optimization, we provide end-to-end solutions tailored to the public sector. Our services address every aspect of government digital presence, from technical infrastructure to content strategy, ensuring your agency's website achieves maximum visibility while maintaining compliance and security.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO Audits & Implementation</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Government websites often run on legacy systems with unique technical constraints. Our comprehensive technical audits identify optimization opportunities that work within your existing infrastructure. We analyze site architecture, crawlability, indexation, page speed, mobile responsiveness, and Core Web Vitals—all while ensuring changes don't compromise security or compliance.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Common technical issues we address include improper XML sitemaps, duplicate content across .gov domains, slow page load times due to heavy government frameworks, broken internal links in large site structures, and mobile usability issues. Our solutions are tested against government security protocols before implementation.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility-Enhanced SEO</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Section 508 compliance and SEO work hand-in-hand. We optimize HTML structure, heading hierarchies, alt text, ARIA labels, and semantic markup to improve both accessibility and search visibility. Our approach ensures screen readers, keyboard navigation, and assistive technologies work flawlessly while boosting your search rankings.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We conduct regular accessibility testing using government-approved tools, ensure all PDFs are tagged and accessible, optimize forms for assistive technology users, and provide detailed documentation of all accessibility improvements. Every SEO change is validated against WCAG 2.1 AA standards.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Strategy & Optimization</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Government content must be authoritative, accurate, and accessible. We help agencies create and optimize content that ranks well while meeting plain language requirements. Our content strategies focus on the information citizens actually need, using keyword research that reflects how people search for government services.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We optimize existing content for readability and search visibility, create SEO-friendly plain language guidelines, develop content hierarchies that improve navigation and SEO, and implement structured data markup for government services. All content recommendations align with your agency's communication policies and legal requirements.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Government SEO</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    For state, county, and municipal agencies, local visibility is crucial. We optimize your presence for location-based searches, ensuring citizens find local services easily. This includes Google Business Profile optimization (for eligible government locations), local citation building, geographic content targeting, and local schema markup.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our local SEO strategies help departments of motor vehicles, health departments, social services, libraries, and other local agencies connect with their communities. We ensure accurate NAP (Name, Address, Phone) consistency across all platforms and optimize for "near me" searches that drive foot traffic to government offices.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Link Building & Digital PR</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Government websites need authoritative backlinks from credible sources. We build high-quality link profiles through legitimate digital PR, partnerships with other government agencies, educational institutions, and reputable news organizations. All link building follows Google's Webmaster Guidelines and government ethics rules.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We never use manipulative link schemes or pay for links. Instead, we earn links through newsworthy content, research publications, public service announcements, and inter-governmental collaborations. This ethical approach builds long-term authority and trust signals that benefit your rankings.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency & Crisis Communication SEO</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    During emergencies, your website becomes a critical information hub. We implement SEO strategies that ensure crisis information ranks immediately, appears in featured snippets, and reaches citizens when they need it most. This includes optimizing emergency alert pages, news releases, and public health information.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our crisis SEO protocols include rapid content optimization for breaking situations, schema markup for emergency alerts, mobile-first emergency page design, and coordination with social media for maximum reach. We help agencies prepare SEO-ready crisis communication templates before emergencies occur.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance & Security */}
            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Security & Compliance First</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As an <strong>SEO company for government website</strong> projects, we understand that security and compliance aren't just checkboxes—they're fundamental requirements. Every optimization we implement undergoes rigorous security review and compliance testing.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Security Standards
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>FedRAMP compliance protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>FISMA security requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>NIST Cybersecurity Framework</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>ATO (Authority to Operate) support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Accessibility Compliance
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Section 508 Standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>WCAG 2.1 Level AA compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>ADA digital accessibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Regular accessibility audits</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Privacy & Data
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Privacy Act compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>No PII collection in analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>HTTPS-only recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Data retention policies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Government SEO Process</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Working with government agencies requires a structured, transparent, and compliant approach. Our proven process ensures successful SEO implementation while navigating the unique requirements of the public sector.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Compliance Review',
                    description: 'We start by understanding your agency\'s mission, target audiences, and compliance requirements. This includes reviewing your existing security protocols, accessibility standards, content policies, and any legal constraints. We identify your current SEO performance baselines and set realistic, measurable goals aligned with your public service objectives.'
                  },
                  {
                    step: '02',
                    title: 'Comprehensive Audit',
                    description: 'Our technical audit examines your website\'s current state across 200+ SEO factors while specifically checking for accessibility issues, security vulnerabilities, and compliance gaps. We analyze your site architecture, content quality, technical infrastructure, and competitive landscape within the government sector.'
                  },
                  {
                    step: '03',
                    title: 'Strategy Development',
                    description: 'Based on audit findings, we develop a customized SEO strategy that prioritizes quick wins, addresses critical issues, and outlines long-term improvements. Every recommendation includes security and compliance considerations, implementation timelines, and expected outcomes. We present strategies in plain language for stakeholder buy-in.'
                  },
                  {
                    step: '04',
                    title: 'Implementation & Testing',
                    description: 'We work within your change management processes and approval workflows. All changes are tested in development environments first, undergo security reviews, and are validated for accessibility compliance before going live. We provide detailed documentation for IT security teams and maintain rollback procedures.'
                  },
                  {
                    step: '05',
                    title: 'Monitoring & Reporting',
                    description: 'Government accountability requires transparent reporting. We provide monthly performance reports showing organic traffic growth, keyword rankings, technical health metrics, and accessibility scores. All reporting uses government-approved analytics platforms and protects citizen privacy.'
                  },
                  {
                    step: '06',
                    title: 'Ongoing Optimization',
                    description: 'SEO is never "done." We continuously monitor performance, adapt to search algorithm updates, and optimize based on real user data. Our ongoing support includes quarterly strategy reviews, regular security audits, and proactive issue resolution to maintain your competitive advantage in search results.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results for Government Agencies</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our track record speaks for itself. We've helped federal agencies, state departments, county offices, and municipal governments dramatically improve their online visibility and better serve their constituents.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                  <div className="text-blue-900 mb-4">
                    <Award className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">State Health Department</h3>
                  <div className="text-4xl font-bold text-blue-900 mb-2">287%</div>
                  <p className="text-gray-700 mb-4">Increase in organic traffic to public health resources in 6 months</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>COVID-19 information ranking #1 for all local searches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>100% WCAG 2.1 AA compliance achieved</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Emergency alerts appearing in featured snippets</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                  <div className="text-blue-900 mb-4">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Federal Agency</h3>
                  <div className="text-4xl font-bold text-blue-900 mb-2">156%</div>
                  <p className="text-gray-700 mb-4">Growth in citizen engagement through organic search in 8 months</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduced average time to find services from 4 minutes to 45 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All technical implementations passed ATO review</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Page load times improved by 62%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Government Agencies Choose Web Vello</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Specialized Government Experience</h3>
                    <p className="text-gray-700 leading-relaxed">We exclusively work with public sector organizations and understand the unique challenges you face. Our team has cleared federal background checks and understands government procurement processes, compliance requirements, and public sector workflows.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Proven Compliance Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">Every project maintains 100% compliance with Section 508, WCAG 2.1, and relevant security frameworks. We document all compliance measures and provide audit trails for your records. No shortcuts, no exceptions.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Transparent, Results-Driven Approach</h3>
                    <p className="text-gray-700 leading-relaxed">Government agencies deserve transparency. We provide clear reporting, honest timelines, and realistic expectations. You'll always know what we're doing, why we're doing it, and what results to expect.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">White Hat, Ethical Methods Only</h3>
                    <p className="text-gray-700 leading-relaxed">Government websites must maintain public trust. We never use manipulative tactics, black-hat techniques, or anything that could risk your reputation. Our methods follow Google's guidelines and government ethics standards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Long-Term Partnership Focus</h3>
                    <p className="text-gray-700 leading-relaxed">We're not here for quick wins and departures. Our government clients work with us for years because we become trusted partners in their digital success. We invest in understanding your mission and help you achieve it.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Improve Your Government Website's Visibility?
              </h2>
              <p className="text-xl text-blue-100">
                Get a free SEO audit and discover how we can help your agency better serve citizens through improved search visibility.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="john.smith@agency.gov"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="agency" className="block text-sm font-semibold text-gray-700 mb-2">
                      Agency/Department *
                    </label>
                    <input
                      type="text"
                      id="agency"
                      name="agency"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="Department of..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Website URL *
                    </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="https://youragency.gov"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your SEO Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                    placeholder="What are your main objectives for improving your website's search visibility?"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                    I agree to receive communications about SEO services and understand that my information will be handled according to government privacy standards. *
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                  Request Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-gray-600">
                  <Lock className="inline h-4 w-4 mr-1" />
                  Your information is secure and will never be shared with third parties
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Call Us</div>
                <a href="tel:+17378885723" className="text-blue-300 hover:text-white">
                  (737) 888-5723
                </a>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Email Us</div>
                <a href="mailto:hello@webvello.com" className="text-blue-300 hover:text-white">
                  hello@webvello.com
                </a>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Business Hours</div>
                <div className="text-blue-100">Mon-Fri: 9AM-6PM EST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Citizens Are Searching. Will They Find You?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Partner with the leading <strong>SEO company for government website</strong> success. Let's make your agency more discoverable, accessible, and effective.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

