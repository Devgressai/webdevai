# Calendly Integration Setup

## Quick Start

1. **Set your Calendly username in environment variables:**

   Create or update your `.env.local` file with:
   ```bash
   NEXT_PUBLIC_CALENDLY_USERNAME=your-username-here
   NEXT_PUBLIC_CALENDLY_EVENT_TYPE=discovery-call
   ```

2. **Find your Calendly username:**
   - Go to your Calendly account
   - Your username is the part after `calendly.com/` in your Calendly URL
   - Example: If your URL is `https://calendly.com/john-doe/discovery-call`, your username is `john-doe`

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

## What Was Implemented

### ✅ Dual CTA Buttons
- **Contact Us** (outline button) - Links to `/contact`
- **Book a Discovery Call** (primary button) - Opens Calendly popup

### ✅ Locations
- Header navigation (desktop & mobile)
- Homepage hero section (right after "Get Free Growth Plan" button)

### ✅ Features
- Calendly popup widget integration
- Graceful fallback to `/book` page if popup fails
- UTM parameter preservation for tracking
- Mobile-responsive design
- Accessibility support (keyboard navigation, ARIA labels)

### ✅ Pages Created
- `/book` page with embedded Calendly iframe
- Professional copy and layout

## Testing

1. **Test the popup:**
   - Click "Book a Discovery Call" button
   - Calendly popup should open
   - If popup doesn't load, it should redirect to `/book` page

2. **Test the fallback:**
   - Disable JavaScript temporarily
   - Click "Book a Discovery Call"
   - Should redirect to `/book` page

3. **Test UTM tracking:**
   - Visit with UTM params: `?utm_source=test&utm_campaign=test`
   - Click "Book a Discovery Call"
   - UTM params should be preserved in Calendly URL

## Customization

### Change Event Type
Update `NEXT_PUBLIC_CALENDLY_EVENT_TYPE` in `.env.local`:
```bash
NEXT_PUBLIC_CALENDLY_EVENT_TYPE=consultation
```

### Update Button Text
Edit the button text in:
- `components/layout/new-header.tsx` (desktop header)
- `components/layout/mobile-header.tsx` (mobile header)
- `components/sections/hero.tsx` (homepage hero)

### Update /book Page Copy
Edit `app/book/book-client.tsx` to customize the page content.

## Troubleshooting

**Popup not opening?**
- Check that `NEXT_PUBLIC_CALENDLY_USERNAME` is set correctly
- Verify Calendly script is loading (check browser console)
- Ensure your Calendly event type exists

**Redirecting to /book instead of popup?**
- Check browser console for errors
- Verify Calendly widget script is loaded
- Check that your Calendly username is correct

**UTM params not working?**
- Ensure UTM params are in the URL when clicking
- Check browser console for any errors
- Verify Calendly URL in network tab

