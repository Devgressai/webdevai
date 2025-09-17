import Link from 'next/link'
import { cities } from '@/lib/cities'

export const dynamicParams = false

export async function generateStaticParams() {
  const letters = new Set(Object.values(cities).map((c) => c.fullName[0].toUpperCase()))
  return Array.from(letters).map((l) => ({ letter: l.toLowerCase() }))
}

export default function LetterLocations({ params }: { params: { letter: string } }) {
  const { letter } = params
  const list = Object.values(cities)
    .filter((c) => c.fullName[0].toLowerCase() === letter)
    .sort((a, b) => a.fullName.localeCompare(b.fullName))

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Cities – {letter.toUpperCase()}</h1>
      <ul className="space-y-2">
        {list.map((c) => (
          <li key={c.slug}>
            <Link className="text-primary-600 hover:underline" href={`/sitemap/city/${c.slug}`}>{c.fullName}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link className="text-primary-600 hover:underline" href="/sitemap/locations">Back to A–Z</Link>
      </div>
    </div>
  )
}


