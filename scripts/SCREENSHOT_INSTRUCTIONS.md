# Screenshot Capture Instructions

This script captures screenshots of different sections from your website and saves them as WebP images in a `webvello` folder on your Desktop.

## Prerequisites

1. Make sure your development server is running (if using localhost)
2. Or have your production URL ready

## Usage

### Option 1: Using Local Development Server

1. Start your development server:
   ```bash
   npm run dev
   ```

2. In a new terminal, run the screenshot script:
   ```bash
   npm run capture-screenshots
   ```

### Option 2: Using Production URL

Set the `BASE_URL` environment variable to your production URL:

```bash
BASE_URL=https://www.webvello.com npm run capture-screenshots
```

Or on Windows:
```bash
set BASE_URL=https://www.webvello.com && npm run capture-screenshots
```

## Output

All screenshots will be saved to:
- **Location**: `~/Desktop/webvello/`
- **Format**: WebP (high quality, optimized file size)
- **Resolution**: 1920x1080 @ 2x DPI (3840x2160 effective)

## Screenshots Captured

The script captures the following sections:

### Homepage Sections
- Hero section
- Services section
- Stats section
- Testimonials section
- CTA section

### Full Pages
- Services page
- About page
- Contact page
- Case studies page
- Pricing page
- Industries page

### Service Pages
- AI SEO service
- Local SEO service
- Web Development service

## Manifest File

A `manifest.json` file is also created in the output folder with details about all captured screenshots, including:
- Timestamp
- Base URL used
- Success/failure status for each screenshot
- File paths

## Troubleshooting

1. **Selector not found**: If a specific selector isn't found, the script will fall back to capturing the full page
2. **Timeout errors**: Increase the timeout in the script if your pages load slowly
3. **Missing sections**: You can edit `scripts/capture-screenshots.js` to add more sections or adjust selectors

## Customization

To add more screenshots or change selectors, edit `scripts/capture-screenshots.js` and modify the `screenshots` array.

