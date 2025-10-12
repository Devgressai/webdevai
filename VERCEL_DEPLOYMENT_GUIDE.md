# 🚀 Vercel Deployment Guide - GSC & Indexing API

## ✅ What's Ready to Deploy

All your Google Search Console and Indexing API code is ready! Now we just need to add environment variables to Vercel.

---

## 📝 **Step-by-Step Deployment**

### **Step 1: Add Environment Variables**

Run these commands to add your environment variables to Vercel:

```bash
cd /Users/george/webdevai

# Add Google Service Account Email
vercel env add GOOGLE_SERVICE_ACCOUNT_EMAIL production

# Add Google Private Key (paste when prompted)
vercel env add GOOGLE_PRIVATE_KEY production

# Add Google Search Console Site URL
vercel env add GOOGLE_SEARCH_CONSOLE_SITE_URL production

# Add API Secret Key
vercel env add API_SECRET_KEY production

# Add Next Public Base URL
vercel env add NEXT_PUBLIC_BASE_URL production
```

**When prompted, paste these values:**

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: `webvello-indexing@webvello.iam.gserviceaccount.com`
- `GOOGLE_PRIVATE_KEY`: (copy from `.env.local`)
- `GOOGLE_SEARCH_CONSOLE_SITE_URL`: `https://webvello.com`
- `API_SECRET_KEY`: (copy from `.env.local`)
- `NEXT_PUBLIC_BASE_URL`: `https://webvello.com`

---

### **Step 2: Commit New Files**

```bash
cd /Users/george/webdevai

# Check what's new
git status

# Add all new API files
git add app/api/gsc/ app/api/indexing/ app/api/test-gsc-auth/
git add lib/google-api.ts lib/gsc-helpers.ts lib/indexing-helpers.ts
git add docs/GSC_INDEXING_API_GUIDE.md
git add *.md

# Commit
git commit -m "Add Google Search Console and Indexing API integration"
```

---

### **Step 3: Deploy**

```bash
# Deploy to production
vercel --prod
```

Or just push to your main branch and Vercel will auto-deploy:

```bash
git push origin main
```

---

## 🎯 **After Deployment**

Your APIs will be live at:

- **Test Auth**: `https://webvello.com/api/test-gsc-auth`
- **GSC Analytics**: `https://webvello.com/api/gsc/analytics`
- **GSC Sites**: `https://webvello.com/api/gsc/sites`
- **GSC Sitemaps**: `https://webvello.com/api/gsc/sitemaps`
- **Indexing API**: `https://webvello.com/api/indexing/notify`

---

## 🧪 **Test Production APIs**

```bash
# Test authentication
curl https://webvello.com/api/test-gsc-auth

# Get search analytics (with API key)
curl "https://webvello.com/api/gsc/analytics?startDate=2025-09-01&endDate=2025-10-12&dimensions=query&rowLimit=10" \
  -H "x-api-key: YOUR_API_SECRET_KEY"

# Notify Google about a URL
curl -X POST https://webvello.com/api/indexing/notify \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_SECRET_KEY" \
  -d '{"url": "https://webvello.com/services/web-design", "type": "URL_UPDATED"}'
```

---

## 🔐 **Environment Variable Values**

Copy these from your `.env.local`:

```bash
# Get Service Account Email
grep GOOGLE_SERVICE_ACCOUNT_EMAIL .env.local

# Get Private Key (careful - this is sensitive!)
grep GOOGLE_PRIVATE_KEY .env.local

# Get API Secret Key
grep API_SECRET_KEY .env.local
```

---

## ⚡ **Quick Deploy (All-in-One)**

If you want to do everything at once:

```bash
# Make sure you're in the project directory
cd /Users/george/webdevai

# Add and commit files
git add -A
git commit -m "Add Google Search Console and Indexing API integration"

# Push to deploy
git push origin main

# Vercel will automatically deploy!
```

**Then add environment variables in Vercel Dashboard:**
1. Go to: https://vercel.com/your-project/settings/environment-variables
2. Add all 5 environment variables
3. Redeploy if needed

---

## 📊 **Vercel Dashboard Method**

Prefer using the web interface?

1. Go to your project: https://vercel.com
2. Select your webvello project
3. Go to **Settings** > **Environment Variables**
4. Click **Add New**
5. Add all 5 variables one by one
6. Click **Save**
7. Redeploy your project

---

## ✅ **Deployment Checklist**

- [ ] Service account added to Google Search Console (✅ Already done!)
- [ ] Environment variables added to Vercel
- [ ] Code committed to git
- [ ] Pushed to main branch / Deployed to Vercel
- [ ] Tested production endpoints
- [ ] APIs working on webvello.com

---

## 🎉 **You're Ready!**

Everything is set up and ready to deploy. Just run the commands above!

