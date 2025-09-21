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

export default function WebsiteDesignPage() {
  return <WebsiteDesignContent />
}
