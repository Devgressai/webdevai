import type { Metadata } from 'next'
import { BookPageClient } from './book-client'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Book a Discovery Call | Web Vello',
  description: 'Schedule a dedicated time to discuss your project, goals, and challenges. We'll evaluate your current digital presence and outline clear next steps.',
  keywords: ['book discovery call', 'schedule consultation', 'web development consultation', 'SEO consultation', 'digital marketing consultation'],
  alternates: {
    canonical: 'https://www.webvello.com/book',
  },
  openGraph: {
    title: 'Book a Discovery Call | Web Vello',
    description: 'Schedule a dedicated time to discuss your project, goals, and challenges. We'll evaluate your current digital presence and outline clear next steps.',
    url: 'https://www.webvello.com/book',
    type: 'website',
    images: [
      {
        url: 'https://www.webvello.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Book a Discovery Call - Web Vello',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BookPage() {
  return <BookPageClient />
}

