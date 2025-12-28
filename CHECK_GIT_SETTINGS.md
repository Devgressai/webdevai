# ✅ Check Git Settings in Vercel

## Current Page You're On
You're viewing: **Build and Deployment** settings

## ✅ What to Do Next

### Step 1: Go to Git Settings
1. **In the left sidebar**, click on **"Git"** (it's below "Environment Variables")
2. This will show the Git integration settings

### Step 2: Verify Repository Connection
In the Git settings page, you should see:

- **Repository:** Should show `Devgressai/webdevai`
- **Production Branch:** Should be `main`
- **Status:** Should show "Connected" or similar

### Step 3: If Not Connected
If you don't see the repository:
1. Click **"Connect Git Repository"** button
2. Select: `Devgressai/webdevai` from the list
3. Set Production Branch to: `main`
4. Authorize if prompted

### Step 4: Verify Webhook Created
After connecting (or if already connected):
1. Go to: https://github.com/Devgressai/webdevai/settings/hooks
2. You should see a webhook with `vercel.com` in the URL
3. This confirms auto-deploy is set up

---

## 🔍 About the Warning You See

The warning: *"Configuration Settings in the current Production deployment differ from your current Project Settings"*

This is about build settings, not Git/auto-deploy. You can:
- Click "Production Overrides" to see what's different
- Or ignore it for now (it won't affect auto-deploy)

---

## 🎯 Main Goal

**Check the "Git" section in the left sidebar** - that's where the repository connection and auto-deploy settings are.

