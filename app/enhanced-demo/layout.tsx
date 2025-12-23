import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enhanced Design & UX Component Showcase | Web Vello',
  description: 'Experience our enhanced UI components with smooth animations, interactive elements, and modern design patterns. See how our components create engaging user experiences.',
  keywords: [
    'UI components',
    'UX design showcase',
    'interactive components',
    'animated UI',
    'modern web design',
    'component library',
    'design system',
    'user experience design'
  ],
  openGraph: {
    title: 'Enhanced Design & UX Component Showcase | Web Vello',
    description: 'Experience our enhanced UI components with smooth animations, interactive elements, and modern design patterns.',
    url: 'https://webvello.com/enhanced-demo',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-enhanced-demo.jpg',
        width: 1200,
        height: 630,
        alt: 'Enhanced Design & UX Component Showcase - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enhanced Design & UX Component Showcase | Web Vello',
    description: 'Experience our enhanced UI components with smooth animations, interactive elements, and modern design patterns.',
    images: ['https://webvello.com/og-enhanced-demo.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/enhanced-demo',
  },
}

export default function EnhancedDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}











