# Google Indexing API Setup Guide

## 🎯 Quick Summary

Your indexing script is ready, but it needs Google credentials on Vercel to work!

---

## ✅ **Step-by-Step Setup**

### **Step 1: Add Environment Variables to Vercel**

1. Go to Vercel Dashboard: https://vercel.com
2. Select your project: `webdevai` or `webvello`
3. Go to **Settings** → **Environment Variables**
4. Add these 3 variables:

#### Variable 1:
```
Name: GOOGLE_SERVICE_ACCOUNT_EMAIL
Value: webvello-indexing@webvello.iam.gserviceaccount.com
```

#### Variable 2:
```
Name: GOOGLE_PRIVATE_KEY  
Value: (get from your .env.local file - the entire key including BEGIN/END)
```

#### Variable 3:
```
Name: GOOGLE_SEARCH_CONSOLE_SITE_URL
Value: https://webvello.com
```

5. Set **Environment** to: `Production`, `Preview`, and `Development`
6. Click **Save**

---

### **Step 2: Redeploy Your Site**

After adding the variables:
1. Go to **Deployments** tab
2. Click the `...` menu on the latest deployment
3. Click **Redeploy**

OR just push a new commit:
```bash
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

---

### **Step 3: Run the Indexing Script**

Once redeployed (takes 2-3 minutes), run:

```bash
npm run index-pages
```

This will submit your 33 most important pages to Google for indexing!

---

## 📊 **What Pages Will Be Indexed**

### Priority Pages (33 total):
- ✅ Homepage
- ✅ 7 main service pages
- ✅ 10 new service pages (just created)
- ✅ 5 key pages (contact, pricing, about, etc.)
- ✅ 5 top city pages
- ✅ 10 new blog posts (just created)

---

## 🔒 **Security Note**

Your API credentials are stored securely in:
1. **Local:** `.env.local` (git-ignored, never committed)
2. **Production:** Vercel environment variables (encrypted)
3. **Script:** Uses HTTPS and API key authentication

**The credentials are never exposed publicly!**

---

## 🚀 **Alternative: Submit Sitemap (Easier)**

If you prefer not to use the API, you can:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Sitemaps** in the left menu
3. Submit: `https://www.webvello.com/sitemap.xml`

Google will automatically crawl all 4,922 pages!

**Pros:** One-time setup, automatic  
**Cons:** Takes 1-3 days vs instant with API

---

## 📈 **Expected Results**

### With Indexing API:
- Pages submitted to Google instantly
- Appears in search within 24-48 hours
- Priority indexing for new content

### Timeline:
- **Hour 1:** Pages queued for crawling
- **Day 1:** Google crawls and indexes pages
- **Day 2-3:** Pages appear in search results
- **Week 1:** Full indexing and ranking

---

## 🛠️ **Troubleshooting**

### Issue: "Google API credentials not configured"
**Solution:** Add environment variables to Vercel (Step 1 above)

### Issue: "Unauthorized" error
**Solution:** Check that API_SECRET_KEY is set in Vercel

### Issue: "Quota exceeded"
**Solution:** Google allows 200 URLs per day. Wait 24 hours or use sitemap method.

---

## 📝 **Commands Reference**

```bash
# Index priority pages (33 pages)
npm run index-pages

# Check if credentials are set locally
grep "GOOGLE_" .env.local

# Test API endpoint
curl -X POST https://www.webvello.com/api/indexing/notify \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{"url":"https://www.webvello.com/","type":"URL_UPDATED"}'
```

---

## ✅ **Quick Checklist**

- [ ] Add `GOOGLE_SERVICE_ACCOUNT_EMAIL` to Vercel
- [ ] Add `GOOGLE_PRIVATE_KEY` to Vercel  
- [ ] Add `GOOGLE_SEARCH_CONSOLE_SITE_URL` to Vercel
- [ ] Redeploy site on Vercel
- [ ] Wait 2-3 minutes for deployment
- [ ] Run `npm run index-pages`
- [ ] Verify pages are indexed (check Google Search Console)

---

**Once you complete Step 1 & 2, let me know and we'll index all your pages!** 🚀

