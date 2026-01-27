import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hawaii SEO & Web Design Services | Honolulu & Kona',
  description: 'Professional SEO and web design for Hawaii businesses. Serving Honolulu, Kona, and all islands remotely. Technical SEO, AI search optimization, and high-performance websites.',
  keywords: 'Hawaii SEO, Oahu web design, Big Island digital marketing, Hawaii web development, Honolulu SEO, Kona SEO, remote digital marketing Hawaii',
  openGraph: {
    title: 'Web Vello Hawaii | SEO & Web Design for Oahu, Big Island & Beyond',
    description: 'Professional digital marketing services for Hawaiian businesses. Technical SEO, AI search optimization, and custom web development. Serving all islands remotely.',
    url: 'https://www.webvello.com/locations/hawaii',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.webvello.com/locations/hawaii',
  },
}

export default function HawaiiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
