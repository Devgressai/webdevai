# Deployment Instructions - Growth Plan Funnel

## ✅ Commit Status

**Commit:** `6c1a123`  
**Message:** "feat: Add high-converting growth plan lead funnel with A/B testing"  
**Files Changed:** 11 files, 2,385 insertions(+), 28 deletions(-)

---

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended for Next.js)

If your project is connected to Vercel:

```bash
# Push to main/master branch (auto-deploys)
git push origin main

# Or push to your default branch
git push
```

**Vercel will automatically:**
- Detect the push
- Run `npm run build`
- Deploy to production
- Run any configured tests

**Manual Deploy (if needed):**
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel --prod
```

---

### Option 2: Netlify

If your project is connected to Netlify:

```bash
# Push to main/master branch (auto-deploys)
git push origin main
```

**Netlify will automatically:**
- Detect the push
- Run `npm run build`
- Deploy to production

**Manual Deploy:**
```bash
# Install Netlify CLI (if not installed)
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

---

### Option 3: Manual Deployment

If deploying manually:

```bash
# 1. Build the project
npm run build

# 2. Test the build locally
npm start

# 3. Deploy to your hosting provider
# (Follow your provider's specific instructions)
```

---

## ⚙️ Environment Variables Required

Before deploying, ensure these environment variables are set in your hosting platform:

### Required for Email Notifications:

**Choose ONE email method:**

#### SMTP:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_FROM_EMAIL=no-reply@webvello.com
CONTACT_TO_EMAIL=leads@webvello.com
```

#### OR Resend:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=leads@webvello.com
```

### Optional (for Analytics):
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📋 Pre-Deployment Checklist

- [x] Code committed
- [ ] Environment variables set in hosting platform
- [ ] Email provider configured (SMTP or Resend)
- [ ] Test email delivery
- [ ] Verify analytics tracking (if using GA4)
- [ ] Test on staging/preview (if available)

---

## 🧪 Post-Deployment Testing

After deployment, test:

1. **Hero URL Entry:**
   - Visit homepage
   - Enter URL: `example.com`
   - Click "Get Free Growth Plan"
   - Should navigate to `/free-growth-plan?site=https://example.com`

2. **Growth Plan Form:**
   - Fill out form
   - Submit
   - Check email notification received
   - Verify lead saved to `data/leads.json`

3. **A/B Testing:**
   - Test variant B: `/?v=b`
   - Test variant C: `/?v=c`
   - Verify analytics events firing

4. **Mobile:**
   - Test on mobile device
   - Verify responsive layout
   - Test form submission

5. **Accessibility:**
   - Test keyboard navigation
   - Test with screen reader
   - Verify focus states

---

## 🔍 Monitoring

After deployment, monitor:

1. **Analytics:**
   - Check GA4 for `growth_plan_view` events
   - Check `growth_plan_submit_success` events
   - Monitor conversion rates

2. **Error Logs:**
   - Check hosting platform logs
   - Monitor for API errors
   - Watch for rate limiting issues

3. **Email Delivery:**
   - Verify emails are being sent
   - Check spam folder
   - Monitor bounce rates

4. **Performance:**
   - Run Lighthouse audit
   - Monitor Core Web Vitals
   - Check page load times

---

## 🐛 Troubleshooting

### Build Fails

**Error:** TypeScript errors
```bash
# Fix: Run type check
npm run build
# Fix any TypeScript errors
```

**Error:** Missing dependencies
```bash
# Fix: Install dependencies
npm install
```

### Email Not Sending

1. Check environment variables are set
2. Verify SMTP/Resend credentials
3. Check hosting platform logs
4. Test email provider connection

### Analytics Not Working

1. Verify `NEXT_PUBLIC_GA_ID` is set
2. Check browser console for errors
3. Verify GA4 is configured correctly
4. Test with Google Tag Assistant

---

## 📊 Success Metrics

Track these metrics post-deployment:

- **Conversion Rate:** Form submissions / Page views
- **Variant Performance:** Compare A/B/C variants
- **Mobile vs Desktop:** Conversion by device
- **UTM Performance:** Which sources convert best
- **Time to Submit:** Form completion time

---

## 🎯 Next Steps

1. **Push to Production:**
   ```bash
   git push origin main
   ```

2. **Set Environment Variables:**
   - Add to Vercel/Netlify dashboard
   - Or use hosting platform's env var interface

3. **Monitor First 24 Hours:**
   - Watch for errors
   - Monitor conversion rates
   - Check email delivery

4. **Optimize Based on Data:**
   - A/B test results
   - User feedback
   - Analytics insights

---

**Ready to deploy!** 🚀

