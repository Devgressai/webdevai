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
  const brightness = parseFloat(process.argv[4] || '0.95')
  const saturation = parseFloat(process.argv[5] || '1.05')
  const gammaVal = parseFloat(process.argv[6] || '1.05')
  const width = parseInt(process.argv[7] || '2000', 10)
  const quality = parseInt(process.argv[8] || '65', 10)

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

  // Tone adjustments for hero: parametric brightness/saturation/gamma
  // Convert to WebP, target wide hero width
  const processed = await sharp(buffer)
    .resize({ width, withoutEnlargement: true })
    .modulate({ brightness, saturation })
    .gamma(gammaVal)
    .webp({ quality })
    .toBuffer()

  fs.writeFileSync(outPath, processed)
  console.log('Saved:', outPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})