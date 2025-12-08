import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Visibility & Rankings Solution | Improve Search Performance',
  description: 'Dominate search results and capture organic traffic with AI-powered SEO strategies. Improve your Google visibility, rankings, and organic search performance.',
  keywords: [
    'Google visibility',
    'search rankings',
    'organic traffic',
    'SEO improvement',
    'search engine optimization',
    'Google rankings',
    'search visibility',
    'organic search performance'
  ],
  openGraph: {
    title: 'Google Visibility & Rankings Solution | Web Vello',
    description: 'Dominate search results and capture organic traffic with AI-powered SEO strategies. Improve your Google visibility and rankings.',
    url: 'https://webvello.com/solutions/google-visibility',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-google-visibility.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Visibility & Rankings Solution - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Visibility & Rankings Solution | Web Vello',
    description: 'Dominate search results and capture organic traffic with AI-powered SEO strategies.',
    images: ['https://webvello.com/og-google-visibility.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/solutions/google-visibility',
  },
}

export default function GoogleVisibilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}







