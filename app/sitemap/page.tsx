import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HTML Sitemap | All Pages on Web Vello',
  description: 'Browse all key pages on Web Vello including services, blog posts, case studies, and location-specific pages. Find everything you need in one place.',
  keywords: 'sitemap, site map, website pages, Web Vello pages, site navigation, all pages',
  openGraph: {
    title: 'HTML Sitemap | Web Vello',
    description: 'Browse all key pages on Web Vello including services, blog posts, case studies, and location-specific pages.',
    url: 'https://webvello.com/sitemap',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webvello.com/sitemap',
  },
}

export default async function HtmlSitemap() {
  const base = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ]

  const services = [
    { href: '/services/website-design', label: 'Website Design' },
    { href: '/services/website-redesign', label: 'Website Redesign' },
    { href: '/services/web-development', label: 'Web Development' },
    { href: '/services/seo', label: 'SEO Services' },
    { href: '/services/wordpress-development', label: 'WordPress Development' },
    { href: '/services/local-seo', label: 'Local SEO' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">HTML Sitemap</h1>
      <p className="text-secondary-600 mb-10">Quick links to important pages on the site.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Core Pages</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {base.map((i) => (
            <li key={i.href}><Link className="text-primary-600 hover:underline" href={i.href}>{i.label}</Link></li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((i) => (
            <li key={i.href}><Link className="text-primary-600 hover:underline" href={i.href}>{i.label}</Link></li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Tools & Resources</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <li><Link className="text-primary-600 hover:underline" href="/seo-audit">Free SEO Audit</Link></li>
          <li><Link className="text-primary-600 hover:underline" href="/website-speed-test">Website Speed Test</Link></li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">City × Industry × Service</h2>
        <p className="text-secondary-600 mb-3">Browse per‑city sitemaps or by A–Z index:</p>
        <ul className="list-disc pl-6">
          <li><Link className="text-primary-600 hover:underline" href="/sitemap/locations">Locations A–Z</Link></li>
        </ul>
      </section>
    </div>
  )
}


