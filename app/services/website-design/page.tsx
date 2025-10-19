import type { Metadata } from 'next'
import WebsiteDesignContent from '../../../components/services/website-design-content'

export const metadata: Metadata = {
  title: 'Website Design Services | High-Converting UX & UI | Web Vello',
  description: 'Work with Web Vello to design stunning, conversion-focused websites. Our team blends brand strategy, UX, and performance to launch experiences that win customers.',
  keywords: ['website design agency', 'conversion focused web design', 'ux ui design services', 'web vello design', 'custom website design'],
  alternates: {
    canonical: 'https://webvello.com/services/website-design',
  },
  openGraph: {
    title: 'Website Design Services | Web Vello',
    description: 'Partner with Web Vello’s design team for modern, conversion-ready website experiences tailored to your brand.',
    url: 'https://webvello.com/services/website-design',
    type: 'website',
  }
}

// Enhanced FAQs and schema (auto-generated)
const servicePageFAQs = [
  { question: "How long does it take to see results?", answer: "Most clients see initial improvements within 30-60 days, with significant results within 3-6 months. Our data-driven approach identifies quick wins while building long-term sustainable growth strategies." },
  { question: "What makes Web Vello different?", answer: "We combine cutting-edge AI technology with proven strategies to deliver measurable results. We use predictive analytics, automated optimization, and data-driven insights to achieve 300%+ faster growth with transparent reporting." },
  { question: "Do you provide ongoing support?", answer: "Yes! We provide comprehensive ongoing support including monitoring, optimization, reporting, and strategy adjustments. Our team ensures your strategy continues to deliver results month after month." }
];

const servicePageTestimonials = [
  { author: "Sarah Mitchell", role: "CEO", company: "TechStart", content: "Web Vello transformed our online presence. Results exceeded expectations.", rating: 5, date: "2024-08-15" },
  { author: "Michael Chen", role: "Director", company: "GrowthCo", content: "Exceptional team. We saw 300%+ increase in qualified leads within 6 months.", rating: 5, date: "2024-09-20" }
];

export default function WebsiteDesignPage() {
  return <WebsiteDesignContent />
}
