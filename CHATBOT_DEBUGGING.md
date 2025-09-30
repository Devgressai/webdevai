# 🔍 Chatbot Debugging Guide

## Issues to Check:

### 1. **Is the chatbot visible on the page?**

**Check:**
- Go to https://webvello.com
- Look for blue pulsing chat button (bottom right)
- Open browser console (F12) and look for any errors

**If not visible:**
- Chatbot loads dynamically (client-side only)
- May take 1-2 seconds to appear
- Check if JavaScript is enabled

---

### 2. **Is the API endpoint working?**

**Test the API directly:**

```bash
curl -X POST https://webvello.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "hello"}
    ],
    "leadCaptured": false
  }'
```

**Expected response:**
```json
{
  "message": "Hello! Thanks for reaching out...",
  "shouldCaptureLead": false,
  "leadCaptured": false
}
```

---

### 3. **Check Vercel Deployment**

1. Go to https://vercel.com/your-dashboard
2. Find your webdevai project
3. Check latest deployment status
4. Look at deployment logs
5. Check "Functions" tab for `/api/chat`

---

### 4. **Check Environment Variables**

In Vercel Dashboard → Settings → Environment Variables:

**Required for emails:**
- `RESEND_API_KEY` (should already be set for contact form)
- `CONTACT_TO_EMAIL` (should already be set for contact form)
- `CONTACT_FROM_EMAIL` (optional, has fallback)

**If missing:**
- Chatbot will still work
- But emails won't send
- Check browser console for warning: "⚠️ EMAIL_API_KEY not configured"

---

### 5. **Test Locally First**

```bash
cd /Users/george/webdevai
npm run dev
```

Then:
1. Go to http://localhost:3000
2. Click chat button
3. Type: "test@example.com"
4. Check terminal for logs:
   - `✅ Lead notification sent successfully` (good!)
   - `⚠️ EMAIL_API_KEY not configured` (need to set env vars)

---

### 6. **Check Browser Console**

1. Open https://webvello.com
2. Press F12 (Developer Tools)
3. Go to "Console" tab
4. Look for errors:
   - Red errors about chatbot
   - Network errors about `/api/chat`
   - Component loading errors

---

### 7. **Common Issues**

#### **Issue: Chatbot button not showing**
**Solution:**
- Wait 2-3 seconds (it loads dynamically)
- Check if JavaScript is blocked
- Check browser console for errors
- Try hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

#### **Issue: Chatbot shows but doesn't respond**
**Solution:**
- Check `/api/chat` endpoint exists
- Look at Network tab in browser console
- See if API calls are failing

#### **Issue: Email captured but not sent**
**Solution:**
- Check Vercel environment variables
- Verify `RESEND_API_KEY` is set
- Check Vercel function logs for errors

#### **Issue: Deployment not updating**
**Solution:**
```bash
# Force new deployment
git commit --allow-empty -m "Force redeploy"
git push origin main
```

---

## Quick Verification Steps:

### ✅ Step 1: Check Files Exist
```bash
ls -la app/api/chat/route.ts
ls -la components/chat/ai-chatbot.tsx
ls -la lib/email-service.ts
ls -la app/layout.tsx  # Should import AIChatbot
```

### ✅ Step 2: Check Layout Integration
```bash
grep -n "AIChatbot" app/layout.tsx
# Should show import and usage
```

### ✅ Step 3: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Try chatbot
```

### ✅ Step 4: Check Production Build
```bash
npm run build
# Should build without errors
# Check for chat API route in output
```

### ✅ Step 5: Check Vercel Logs
- Go to Vercel Dashboard
- Click on latest deployment
- Check "Functions" tab
- Look for `/api/chat` function
- Check logs for any errors

---

## Emergency Fix:

If nothing works, try:

```bash
# 1. Clean build
rm -rf .next
npm run build

# 2. Test locally
npm run dev
# Visit localhost:3000 and test

# 3. If local works, redeploy
git add -A
git commit -m "Fix: Ensure chatbot deploys"
git push origin main

# 4. Wait 2-3 minutes for Vercel deployment
# 5. Hard refresh browser: Cmd+Shift+R
```

---

## What Should Work:

1. **Visit https://webvello.com**
2. **See blue pulsing button** (bottom right, after 1-2 seconds)
3. **Click button** → Chat opens
4. **Type message** → Bot responds
5. **Type email** → Bot captures it and sends notification

---

## Need Help?

Share these details:
1. Screenshot of browser console (F12)
2. Screenshot of chatbot area (bottom right of screen)
3. Vercel deployment URL
4. Any error messages you see

I'll help debug! 🔧

