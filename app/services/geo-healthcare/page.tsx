import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Stethoscope, Heart, Brain, Pill, Building, Users, Eye, Activity } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'

export const metadata: Metadata = {
  title: 'GEO for Healthcare | AI Search Optimization for Medical Practices | Web Vello',
  description: 'Get your healthcare practice found in ChatGPT, Perplexity, and Google SGE. GEO optimization for doctors, dentists, specialists, and medical practices.',
  keywords: ['geo healthcare', 'ai seo doctors', 'medical practice chatgpt optimization', 'dentist geo optimization', 'healthcare ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-healthcare',
  },
  openGraph: {
    title: 'GEO for Healthcare | AI Search for Medical Practices | Web Vello',
    description: 'Get your healthcare practice found in AI search results.',
    url: 'https://www.webvello.com/services/geo-healthcare',
    type: 'website',
  }
}

const healthcareTypes = [
  { icon: Stethoscope, name: "Primary Care", description: "Family medicine, general practitioners, internists" },
  { icon: Heart, name: "Cardiology", description: "Heart specialists, cardiovascular care" },
  { icon: Brain, name: "Neurology", description: "Neurologists, brain and nerve specialists" },
  { icon: Eye, name: "Ophthalmology", description: "Eye doctors, optometrists, vision care" },
  { icon: Pill, name: "Dermatology", description: "Skin specialists, dermatologists" },
  { icon: Activity, name: "Orthopedics", description: "Bone, joint, and sports medicine" },
  { icon: Building, name: "Dental", description: "Dentists, orthodontists, oral surgeons" },
  { icon: Users, name: "Mental Health", description: "Psychiatrists, psychologists, therapists" }
]

const whyGeoMatters = [
  {
    query: "\"Best dermatologist in [city]\"",
    impact: "Patients increasingly ask AI for doctor recommendations, trusting AI to vet quality"
  },
  {
    query: "\"What doctor should I see for [symptom]?\"",
    impact: "AI helps patients navigate what type of specialist they need and who to see"
  },
  {
    query: "\"Find a dentist near me that takes [insurance]\"",
    impact: "AI handles complex queries combining location, specialty, and insurance"
  },
  {
    query: "\"Best [treatment] options in [city]\"",
    impact: "Treatment-focused queries where AI recommends specific providers"
  }
]

const services = [
  {
    title: "Medical Entity Optimization",
    description: "AI systems need to understand your practice as a distinct healthcare entity with clear specialties, credentials, and service areas.",
    features: ["Physician schema markup", "Specialty positioning", "Credential highlighting", "Location optimization"]
  },
  {
    title: "Healthcare Content Strategy",
    description: "Create authoritative content that establishes your practice as a trusted source for patient questions.",
    features: ["Condition pages", "Treatment FAQs", "Patient education content", "Symptom guides"]
  },
  {
    title: "Reputation & Trust Optimization",
    description: "AI systems heavily weight trust signals for healthcare. We optimize your reputation signals for AI visibility.",
    features: ["Review integration", "Credential display", "Hospital affiliations", "Board certifications"]
  },
  {
    title: "HIPAA-Compliant Implementation",
    description: "All our healthcare GEO work is implemented with HIPAA compliance and medical marketing regulations in mind.",
    features: ["Compliant content", "Privacy-safe schema", "Accurate claims only", "Regulatory adherence"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for healthcare providers?",
    answer: "When someone asks ChatGPT 'who's the best cardiologist in Denver' or asks Perplexity 'find a pediatric dentist near me,' AI systems recommend specific providers. If your practice isn't optimized, you're invisible to patients using AI for healthcare research."
  },
  {
    question: "How do you handle healthcare compliance?",
    answer: "All our healthcare GEO work complies with HIPAA, FTC guidelines, and state medical advertising regulations. We focus on educational content, accurate credentials, and verifiable claims. We never make unsubstantiated treatment claims."
  },
  {
    question: "Can GEO help with specific specialties?",
    answer: "Yes. We optimize for both general visibility ('best doctor in [city]') and specialty-specific queries ('endocrinologist for diabetes,' 'orthopedic surgeon for knee replacement'). Specialty targeting often delivers faster results."
  },
  {
    question: "How do you incorporate physician credentials?",
    answer: "We implement physician schema markup that highlights board certifications, hospital affiliations, education, and experience. AI systems use these signals to validate authority and make recommendations."
  },
  {
    question: "What about multi-provider practices?",
    answer: "For group practices, we optimize both the practice entity and individual provider profiles. This captures queries for both the practice name and specific physicians."
  },
  {
    question: "How do you measure healthcare GEO success?",
    answer: "We track AI mentions for relevant healthcare queries, monitor competitor visibility, and measure downstream metrics: new patient inquiries, appointment bookings, and patients who mention finding you through AI."
  }
]

export default function GEOHealthcarePage() {
  const pageSchema = generatePageSchema({
    pageType: 'geo',
    url: 'https://www.webvello.com/services/geo-healthcare',
    title: 'GEO for Healthcare | AI Search Optimization for Medical Practices',
    description: 'Get your healthcare practice found in ChatGPT, Perplexity, and Google SGE. GEO optimization for doctors, dentists, specialists, and medical practices.',
    geo: {
      city: 'Healthcare Industry',
      cityState: 'Healthcare Industry, US'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'GEO Healthcare', url: 'https://www.webvello.com/services/geo-healthcare' }
    ]
  })

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema)
        }}
      />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <Stethoscope className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Healthcare</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Practice
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "who's the best dermatologist in my area" or asks Perplexity 
              "find a dentist that takes my insurance"—your practice should be recommended.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Healthcare GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GEO Matters */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Healthcare Needs GEO
            </h2>
            <p className="text-xl text-slate-600">
              Patients are changing how they find doctors. AI recommendations carry high trust 
              for healthcare decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyGeoMatters.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <p className="text-lg font-bold text-slate-900 mb-3">{item.query}</p>
                <p className="text-slate-600">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Types */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Healthcare Specialties We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of healthcare providers get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {healthcareTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <type.icon className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{type.name}</h3>
                <p className="text-sm text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Healthcare GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your practice recommended by AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              FAQs for Healthcare GEO
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to attract more patients through AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your healthcare practice. See exactly how visible you are 
            when patients ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Healthcare GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-slate-600 text-sm mb-4 text-center">Related Services:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services/generative-engine-optimization" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Generative Engine Optimization
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/services/local-seo" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Local Medical Practice Visibility
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

