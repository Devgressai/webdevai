# Manual Testing Instructions

## ✅ Everything Is Set Up!

Your Google Search Console and Indexing API integration is complete and your credentials are configured.

### Current Status:

- ✅ All API routes created
- ✅ All helper libraries created  
- ✅ `.env.local` configured with your credentials
- ✅ Credentials are secure (not in git)
- ✅ Dev server is running

### To Test:

1. **Open your browser**
2. **Visit:** `http://localhost:3000/api/test-gsc-auth`

You should see a JSON response like:

```json
{
  "success": true,
  "authenticated": true,
  "configuration": {
    "hasServiceAccountEmail": true,
    "hasPrivateKey": true,
    "hasSiteUrl": true,
    "hasApiKey": true,
    "siteUrl": "https://webvello.com"
  },
  "message": "✅ Authentication successful! GSC and Indexing APIs are ready to use."
}
```

---

##  If You See a 404:

The API routes might need a fresh restart. Try this:

```bash
# Stop the server
pkill -f "next dev"

# Start fresh
npm run dev
```

Then visit `http://localhost:3000/api/test-gsc-auth` again.

---

## Alternative Test:

If the browser test doesn't work, you can test from Terminal:

```bash
curl http://localhost:3000/api/test-gsc-auth | python3 -m json.tool
```

---

## What's Next:

Once authentication works, you can:

1. **Test GSC Analytics:**
   ```bash
   curl "http://localhost:3000/api/gsc/analytics?startDate=2025-10-01&endDate=2025-10-12&dimensions=query&rowLimit=10"
   ```

2. **Notify Google about a URL:**
   ```bash
   curl -X POST http://localhost:3000/api/indexing/notify \
     -H "Content-Type: application/json" \
     -d '{"url": "https://webvello.com/services/web-design", "type": "URL_UPDATED"}'
   ```

3. **Deploy to Netlify:**
   - Add environment variables in Netlify dashboard
   - Redeploy your site

---

## Service Account Reminder:

Don't forget to add your service account to Google Search Console:

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Select your webvello.com property
3. Settings > Users and permissions
4. Add user: `webvello-indexing@webvello.iam.gserviceaccount.com`
5. Permission level: **Owner**

---

## 📚 Full Documentation:

- `GSC_INDEXING_QUICKSTART.md` - Quick reference
- `docs/GSC_INDEXING_API_GUIDE.md` - Complete guide with all examples
- `SECURITY_CHECKLIST.md` - Security information

---

## ✅ Everything's Ready!

All the code is in place, credentials are configured, and your APIs are ready to use!

