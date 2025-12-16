import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, Users, Smartphone, Zap, TrendingUp, Eye, BarChart3, Palette, Code, 
  ShoppingBag, CheckCircle, HelpCircle, Target, Globe, Clock, Accessibility,
  Gauge, MousePointer, FileSearch, Lock
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Services | Conversion-Focused & Accessible | Webvello',
  description: 'UI/UX Design services that prioritize conversions, accessibility, and SEO performance. Webvello designs user experiences that drive measurable business results.',
  keywords: ['ui ux design agency', 'conversion focused ux design', 'accessible web design', 'ux design for seo', 'user experience optimization'],
  alternates: {
    canonical: 'https://www.webvello.com/services/ui-ux-design',
  },
  openGraph: {
    title: 'UI/UX Design Services | Conversion-Focused & Accessible | Webvello',
    description: 'UI/UX Design services that prioritize conversions, accessibility, and SEO performance. Webvello designs user experiences that drive measurable business results.',
    url: 'https://www.webvello.com/services/ui-ux-design',
    type: 'website',
  }
}

const features = [
  {
    icon: Users,
    title: "User Research & Analysis",
    description: "Understanding your target audience through surveys, interviews, persona development, and analytics review to inform design decisions."
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Strategic placement of CTAs, simplified forms, and user flow design that guides visitors toward business goals and conversions."
  },
  {
    icon: Accessibility,
    title: "WCAG 2.1 Accessibility",
    description: "Ensuring designs meet accessibility standards with proper color contrast, keyboard navigation, and screen reader compatibility."
  },
  {
    icon: Gauge,
    title: "Performance-Focused Design",
    description: "Optimized layouts, efficient loading strategies, and design decisions that support Core Web Vitals and fast page speeds."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive Design",
    description: "Designs that work beautifully on all devices, starting with mobile screens and scaling up to desktop displays."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Using analytics, user testing, and A/B testing insights to validate design choices and continuously improve performance."
  }
]

const processSteps = [
  {
    step: "01",
    title: "Research & User Analysis",
    description: "We begin by understanding your business goals, target audience, and user behavior through research, analytics review, competitive analysis, and accessibility audits.",
    duration: "1-2 weeks",
    deliverables: ["User personas", "Analytics report", "Competitive analysis", "Accessibility baseline", "UX strategy document"]
  },
  {
    step: "02",
    title: "Information Architecture & Wireframing",
    description: "We structure content and user flows to ensure intuitive navigation with site structure, user flow mapping, wireframes, and conversion path design.",
    duration: "1-2 weeks",
    deliverables: ["Site map", "User flow diagrams", "Wireframes", "Conversion funnel documentation"]
  },
  {
    step: "03",
    title: "Visual Design & Prototyping",
    description: "We create high-fidelity designs with visual design systems, accessible color schemes, interactive prototypes, and responsive layouts.",
    duration: "2-3 weeks",
    deliverables: ["High-fidelity mockups", "Design system docs", "Interactive prototypes", "Responsive specifications"]
  },
  {
    step: "04",
    title: "Testing & Implementation",
    description: "We validate designs with usability testing, accessibility testing, A/B testing strategy, developer collaboration, and performance monitoring.",
    duration: "2-3 weeks",
    deliverables: ["Usability test results", "Accessibility report", "A/B test recommendations", "Implementation docs"]
  }
]

const seoImpactAreas = [
  {
    icon: Gauge,
    title: "Core Web Vitals",
    description: "Design impacts page speed (LCP), interactivity (FID), and visual stability (CLS)—all ranking factors.",
    impact: "Better performance = higher rankings"
  },
  {
    icon: Smartphone,
    title: "Mobile Usability",
    description: "Google uses mobile-first indexing. Mobile UX determines rankings for all devices.",
    impact: "Better mobile UX = improved rankings"
  },
  {
    icon: MousePointer,
    title: "User Engagement",
    description: "Lower bounce rates and longer sessions signal content quality to search engines.",
    impact: "Better engagement = stronger ranking signals"
  },
  {
    icon: FileSearch,
    title: "Semantic HTML",
    description: "Accessible design uses semantic markup that search engines and AI understand better.",
    impact: "Better structure = improved content understanding"
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description: "Well-designed experiences reduce friction and increase the percentage of converting visitors.",
    impact: "Higher conversions = better ROI from traffic"
  },
  {
    icon: HelpCircle,
    title: "Answer Engine Optimization",
    description: "Clear content structure helps AI cite your content in featured snippets and AI responses.",
    impact: "Better structure = more featured snippets"
  }
]

const accessibilityStandards = [
  "WCAG 2.1 Level AA compliance (minimum standard)",
  "Color contrast: 4.5:1 ratio for text, 3:1 for large text",
  "Keyboard navigation for all interactive elements",
  "Screen reader optimization with semantic HTML and ARIA labels",
  "Accessible forms with clear labels and error messages",
  "Visible focus indicators for keyboard navigation"
]

const performanceStandards = [
  "Largest Contentful Paint (LCP): < 2.5 seconds",
  "First Input Delay (FID): < 100 milliseconds",
  "Cumulative Layout Shift (CLS): < 0.1",
  "Time to Interactive (TTI): < 3.5 seconds on 4G",
  "Total page weight: < 1MB for key landing pages"
]

const faqs = [
  {
    question: "What is UI/UX Design?",
    answer: "UI/UX Design combines User Interface (UI) and User Experience (UX) to create digital products that are visually appealing and functionally effective. UI design focuses on visual elements like colors, typography, and buttons. UX design focuses on how users interact with these elements through navigation flow, information architecture, and task completion. At Webvello, UI/UX Design means creating interfaces that drive conversions, meet accessibility standards, and support SEO performance."
  },
  {
    question: "How is UI/UX Design different from Web Development?",
    answer: "UI/UX Design focuses on planning user experiences, creating visual designs, and defining interaction patterns before any code is written. Web Development implements these designs into functional websites using programming languages like HTML, CSS, JavaScript, and frameworks like React. Design determines what the website should look like and how users should interact with it; development builds the working product. At Webvello, designers and developers collaborate closely to ensure designs are implemented accurately and perform well."
  },
  {
    question: "How does UI/UX Design impact SEO?",
    answer: "UI/UX Design impacts SEO through Core Web Vitals (page speed, interactivity, visual stability), mobile usability, user engagement metrics (bounce rate, time on site), and semantic HTML structure. Google evaluates user experience as a ranking factor—sites that load fast, work well on mobile devices, and keep users engaged rank higher. Good UX design reduces bounce rates and increases time on site, sending positive ranking signals to search engines. Webvello designs interfaces optimized for both user satisfaction and search engine visibility."
  },
  {
    question: "How does UI/UX Design affect conversion rates?",
    answer: "UI/UX Design affects conversion rates by reducing friction in conversion paths and strategically guiding users toward business goals. Well-designed interfaces use clear calls-to-action, intuitive navigation, simplified forms, and trust signals to make conversions easy. Poor UX—confusing navigation, hidden CTAs, complicated forms—creates obstacles that prevent conversions. Webvello applies conversion rate optimization principles during the design phase, creating interfaces that convert visitors into customers from day one."
  },
  {
    question: "What is the difference between UI Design and UX Design?",
    answer: "UI Design (User Interface) focuses on visual and interactive elements users see and click: colors, typography, buttons, icons, spacing, and layouts. UX Design (User Experience) focuses on the overall experience and user journey: information architecture, user flows, usability, accessibility, and how users accomplish goals. UI is about appearance; UX is about function. At Webvello, our designers handle both disciplines, ensuring visual designs support functional user experiences and business objectives."
  },
  {
    question: "Why is accessibility important in UI/UX Design?",
    answer: "Accessibility ensures your website works for all users, including the 26% of US adults with disabilities. Accessible design uses sufficient color contrast, keyboard navigation, screen reader compatibility, and clear labels. Beyond ethical and legal requirements (ADA compliance), accessibility expands your addressable market, improves SEO through semantic HTML, and enhances usability for all users. Webvello designs to WCAG 2.1 Level AA standards, ensuring your interface works for everyone while reducing legal risk."
  },
  {
    question: "How long does a UI/UX Design project take?",
    answer: "UI/UX Design timelines depend on project scope. A small website redesign (5-10 pages) typically takes 6-8 weeks. Medium projects (landing pages, e-commerce stores) take 8-12 weeks. Large projects (SaaS platforms, complex web applications) take 12-16 weeks or longer. Webvello's process includes research (1-2 weeks), information architecture and wireframing (1-2 weeks), visual design (2-3 weeks), and testing and iteration (2-3 weeks). We provide detailed timelines during project kickoff."
  },
  {
    question: "What deliverables do I receive from a UI/UX Design project?",
    answer: "Webvello provides comprehensive deliverables at each project phase: user personas and research findings, site maps and user flow diagrams, wireframes for key pages, high-fidelity mockups, interactive prototypes, design system documentation (colors, typography, components), responsive design specifications, accessibility compliance reports, and usability testing results. All design files are delivered in industry-standard formats (Figma, Adobe XD, Sketch) with organized layers and clear documentation for developer handoff."
  },
  {
    question: "How does Webvello ensure designs are accessible?",
    answer: "Webvello follows WCAG 2.1 Level AA accessibility standards throughout the design process. We ensure sufficient color contrast (4.5:1 ratio for text), keyboard-accessible navigation, screen reader-compatible semantic HTML, clear focus indicators, accessible forms with labels and error messages, and responsive designs that work with zoom and magnification. Before launch, we conduct accessibility audits using automated tools (WAVE, Axe) and manual testing with screen readers (NVDA, JAWS) and keyboard-only navigation."
  },
  {
    question: "Do you provide ongoing support after design implementation?",
    answer: "Yes, Webvello offers ongoing support through post-launch optimization packages. After implementation, we monitor user behavior through analytics, conduct usability testing to identify friction points, perform A/B testing on conversion elements, and make iterative improvements based on data. We also provide design system maintenance, ensuring new pages and features maintain visual consistency. Ongoing support packages are customized based on your needs and budget."
  }
]

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              UI/UX Design That Converts{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Visitors into Customers
              </span>
            </h1>
            <div className="mt-6 text-xl leading-8 text-secondary-700 bg-white/80 rounded-xl p-6 shadow-sm">
              <p className="mb-4">
                UI/UX Design at Webvello focuses on creating user experiences that combine usability, accessibility, and conversion optimization. We design interfaces that guide users toward business goals while ensuring every interaction is intuitive, fast, and accessible.
              </p>
              <p className="text-lg text-secondary-600">
                Our UX decisions are informed by user research, analytics data, and how design choices impact SEO performance and search visibility.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free UX Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is UI/UX Design - Entity Definition */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What Is UI/UX Design?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-secondary-700 mb-6">
                  <strong>UI/UX Design</strong> combines User Interface (UI) and User Experience (UX) disciplines to create digital products that are both visually appealing and functionally effective. UI design focuses on visual elements—colors, typography, buttons, and layouts. UX design focuses on how users interact with these elements—navigation flow, information architecture, and task completion.
                </p>
                <p className="text-lg text-secondary-600 mb-6">
                  At Webvello, UI/UX Design means designing for <strong>measurable business outcomes</strong>. We combine usability testing, accessibility standards (WCAG 2.1), and conversion rate optimization to create interfaces that convert visitors into customers, load fast to support Core Web Vitals and SEO rankings, work for all users including those using assistive technologies, and support SEO goals through semantic HTML and mobile-first design.
                </p>
                <p className="text-lg text-secondary-600 mb-6">
                  UI/UX Design impacts search visibility because Google evaluates user experience signals including page speed, mobile usability, and engagement metrics (bounce rate, time on site). A well-designed interface keeps users engaged, reduces bounce rates, and improves rankings.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">Who This Service Is For:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-secondary-700">E-commerce businesses needing conversion-optimized product pages</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-secondary-700">SaaS companies requiring intuitive onboarding flows</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-secondary-700">Local businesses wanting mobile-friendly, accessible websites</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-secondary-700">B2B companies needing clear service presentation and lead capture</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-secondary-700">Any business where user experience directly impacts revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive UI/UX Design Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              From research to implementation, we provide end-to-end design services that prioritize conversions, accessibility, and SEO performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              How Does Webvello Approach UI/UX Design?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Webvello implements UI/UX Design through a four-step, research-driven process that prioritizes user needs, conversion goals, and technical performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900">{step.title}</h3>
                    <div className="text-sm text-primary-600 font-medium">{step.duration}</div>
                  </div>
                </div>
                <p className="text-secondary-600 mb-6">{step.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 mb-3">Deliverables:</h4>
                  <div className="space-y-2">
                    {step.deliverables.map((deliverable) => (
                      <div key={deliverable} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-secondary-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Impact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              How UI/UX Design Impacts SEO and Business Outcomes
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              UI/UX Design directly influences search engine rankings, AI citations, and conversion rates through these key areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoImpactAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-6">
                  <area.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{area.title}</h3>
                <p className="text-secondary-600 mb-4">{area.description}</p>
                <div className="text-sm font-medium text-blue-600">{area.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility and Performance Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Accessibility and Performance Matter for Business
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Accessibility and performance aren't just compliance requirements—they're business advantages that expand your audience and improve conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Accessibility Standards */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Accessibility className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold text-secondary-900">Accessibility: 15% More Potential Customers</h3>
              </div>
              <p className="text-secondary-700 mb-6">
                26% of adults in the US have some form of disability. Inaccessible websites exclude these users and violate the Americans with Disabilities Act (ADA), creating legal risk.
              </p>
              <h4 className="font-semibold text-secondary-900 mb-4">Webvello's Accessibility Standards:</h4>
              <div className="space-y-3">
                {accessibilityStandards.map((standard) => (
                  <div key={standard} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary-700">{standard}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-secondary-900 mb-2">Business Impact:</h4>
                <p className="text-sm text-secondary-600">
                  Larger addressable market • Reduced legal risk • Better SEO • Improved usability for all users
                </p>
              </div>
            </div>

            {/* Performance Standards */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Gauge className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-secondary-900">Performance: Every Second Costs Revenue</h3>
              </div>
              <p className="text-secondary-700 mb-6">
                Amazon found that every 100ms delay costs 1% of revenue. Google found that 53% of mobile users abandon pages taking longer than 3 seconds to load.
              </p>
              <h4 className="font-semibold text-secondary-900 mb-4">Webvello's Performance Standards:</h4>
              <div className="space-y-3">
                {performanceStandards.map((standard) => (
                  <div key={standard} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary-700">{standard}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-secondary-900 mb-2">Business Impact:</h4>
                <p className="text-sm text-secondary-600">
                  Higher conversion rates • Improved SEO rankings • Better user satisfaction • Lower bounce rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions About UI/UX Design
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our UI/UX Design services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              UI/UX Design Works Best with These Services
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              UI/UX Design delivers maximum impact when combined with complementary services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                <Link href="/services/web-development" className="hover:text-orange-600">
                  Web Development
                </Link>
              </h3>
              <p className="text-secondary-600 mb-4 text-sm">
                Turn designs into production-ready, performant websites built with React and Tailwind CSS
              </p>
              <Link 
                href="/services/web-development" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* CRO Services */}
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                <Link href="/services/cro-lead-generation" className="hover:text-red-600">
                  CRO Services
                </Link>
              </h3>
              <p className="text-secondary-600 mb-4 text-sm">
                Use A/B testing and analytics to continuously improve conversion rates
              </p>
              <Link 
                href="/services/cro-lead-generation" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* AI SEO */}
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                <Link href="/services/ai-seo" className="hover:text-purple-600">
                  AI-Powered SEO
                </Link>
              </h3>
              <p className="text-secondary-600 mb-4 text-sm">
                Ensure your well-designed interface ranks high in search results and drives organic traffic
              </p>
              <Link 
                href="/services/ai-seo" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Traditional SEO */}
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                <Link href="/services/seo" className="hover:text-blue-600">
                  Traditional SEO
                </Link>
              </h3>
              <p className="text-secondary-600 mb-4 text-sm">
                Optimize technical SEO foundations that make your UX improvements visible to search engines
              </p>
              <Link 
                href="/services/seo" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Low Pressure */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Ready to Improve Your User Experience?
            </h2>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Webvello's UX audit evaluates your current interface against conversion best practices, accessibility standards, and SEO performance. We identify friction points preventing conversions and provide actionable recommendations for improvement.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-secondary-900 mb-4">What You'll Receive:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-secondary-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Conversion funnel analysis with drop-off points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Accessibility compliance assessment (WCAG 2.1)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Core Web Vitals performance review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Usability issues and recommended fixes</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Free UX Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
            <p className="text-sm text-secondary-500">
              Free consultation • No pressure • Clear pricing
            </p>
          </div>
        </div>
      </section>
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.webvello.com/services/ui-ux-design#service",
                "name": "UI/UX Design Services",
                "description": "UI/UX Design services that combine usability, accessibility, and conversion optimization to create user experiences that drive measurable business results. Webvello designs interfaces that support SEO performance, meet WCAG 2.1 standards, and guide users toward conversion goals.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://www.webvello.com/#organization",
                  "name": "Webvello",
                  "url": "https://www.webvello.com"
                },
                "areaServed": "US",
                "serviceType": "UI/UX Design",
                "category": "Web Design Services",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock"
                },
                "audience": {
                  "@type": "Audience",
                  "audienceType": ["E-commerce businesses", "SaaS companies", "Local businesses", "B2B companies"]
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webvello.com/services/ui-ux-design#faq",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@type": "WebPage",
                "@id": "https://www.webvello.com/services/ui-ux-design#webpage",
                "url": "https://www.webvello.com/services/ui-ux-design",
                "name": "UI/UX Design Services | Conversion-Focused & Accessible | Webvello",
                "description": "UI/UX Design services that prioritize conversions, accessibility, and SEO performance. Webvello designs user experiences that drive measurable business results.",
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://www.webvello.com/#website"
                },
                "about": {
                  "@id": "https://www.webvello.com/services/ui-ux-design#service"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.webvello.com/services/ui-ux-design#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.webvello.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.webvello.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "UI/UX Design",
                    "item": "https://www.webvello.com/services/ui-ux-design"
                  }
                ]
              }
            ]
          })
        }}
      />
    </div>
  )
}
