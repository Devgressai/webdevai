/*
  Usage:
  node scripts/process-hero-image.js "<image_url>" public/images/hero-night-orbit.webp
*/

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

async function main() {
  const input = process.argv[2]
  const outPath = process.argv[3] || 'public/images/hero-night-orbit.webp'

  if (!input) {
    console.error('Missing image URL. Usage: node scripts/process-hero-image.js <url> [outPath]')
    process.exit(1)
  }

  let buffer
  if (/^https?:\/\//i.test(input)) {
    console.log('Downloading:', input)
    const res = await fetch(input)
    if (!res.ok) {
      console.error('Failed to download image:', res.status, res.statusText)
      process.exit(1)
    }
    const arrayBuffer = await res.arrayBuffer()
    buffer = Buffer.from(arrayBuffer)
  } else {
    const abs = path.isAbsolute(input) ? input : path.join(process.cwd(), input)
    console.log('Reading local file:', abs)
    buffer = fs.readFileSync(abs)
  }

  // Ensure output directory exists
  const dir = path.dirname(outPath)
  fs.mkdirSync(dir, { recursive: true })

  // Tone adjustments for hero: slightly lift contrast, keep saturation controlled
  // Convert to WebP, target wide hero width
  const processed = await sharp(buffer)
    .resize({ width: 2400, withoutEnlargement: true })
    .modulate({ brightness: 0.95, saturation: 1.05 })
    .gamma(1.05)
    .webp({ quality: 80 })
    .toBuffer()

  fs.writeFileSync(outPath, processed)
  console.log('Saved:', outPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})


