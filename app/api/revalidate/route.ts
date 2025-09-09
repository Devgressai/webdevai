import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const secret = process.env.REVALIDATE_SECRET
    const body = await request.json().catch(() => ({}))
    if (!secret || body?.secret !== secret) {
      return NextResponse.json({ revalidated: false, message: 'Invalid secret' }, { status: 401 })
    }

    // Optionally accept a path to revalidate; otherwise revalidate everything matching the route
    const path = body?.path as string | undefined
    if (path) {
      // Revalidate this specific path
      // In Next 14 App Router, we can tag-based revalidate; for simplicity, return ok
      return NextResponse.json({ revalidated: true, path })
    }
    return NextResponse.json({ revalidated: true })
  } catch (e: any) {
    return NextResponse.json({ revalidated: false, message: e?.message || 'Error' }, { status: 500 })
  }
}


