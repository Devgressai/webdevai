# Favicon Setup Instructions

## Quick Setup

1. **Save your blue "W" image** to:
   ```
   public/favicon-source.png
   ```
   (or `.jpg`, `.svg`, `.webp` - any format supported by Sharp)

2. **Run the generation script**:
   ```bash
   npm run generate-favicon
   ```

3. **Done!** All favicon files will be generated in the `public/` directory.

## Generated Files

The script will create:
- `favicon.ico` - Main favicon (32x32)
- `favicon.svg` - Scalable SVG version
- `favicon-16x16.png` - 16x16 PNG
- `favicon-32x32.png` - 32x32 PNG
- `apple-touch-icon.png` - 180x180 for iOS
- `android-chrome-192x192.png` - 192x192 for Android
- `android-chrome-512x512.png` - 512x512 for Android
- `mstile-150x150.png` - 150x150 for Windows

## Image Requirements

- **Recommended size**: At least 512x512 pixels
- **Format**: PNG, JPG, SVG, or WebP
- **Background**: Transparent background works best
- **Color**: Your blue "W" letter (royal blue #2563EB or similar)

## Manual Alternative

If you prefer to create favicons manually:

1. Use an online tool like [favicon.io](https://favicon.io/favicon-converter/)
2. Upload your blue "W" image
3. Download the generated favicon package
4. Replace the files in the `public/` directory

## Notes

- The favicon files are already referenced in `app/layout.tsx`
- No code changes needed after generating the files
- Clear your browser cache to see the new favicon

