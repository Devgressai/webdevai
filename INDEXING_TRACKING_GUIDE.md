# Indexing Tracking Guide

**Created**: October 26, 2025  
**Purpose**: Track already-indexed pages to avoid wasting daily quota

---

## 📁 Files

### `indexed-pages-reference.json`
- **Location**: Root directory
- **Purpose**: Contains list of ALL pages already submitted to Google
- **Updates**: Automatically updated after each indexing run
- **Total Pages**: 187 already indexed

### `scripts/index-next-200.js`
- **Location**: scripts directory
- **Purpose**: Index next 200 pages, skips already indexed ones
- **Updates**: Updates `indexed-pages-reference.json` automatically
- **Usage**: `node scripts/index-next-200.js`

---

## 🚀 How to Index Next 200 Pages

### Step 1: Make sure you're in the right directory
```bash
cd /Users/george/webdevai
```

### Step 2: Start your local server (if not running)
```bash
npm run dev
```
Wait for it to start (usually 10-15 seconds)

### Step 3: Run the indexing script
```bash
node scripts/index-next-200.js
```

### What it does:
1. ✅ Loads already indexed pages from `indexed-pages-reference.json`
2. ✅ Finds 200 NEW pages not yet indexed
3. ✅ Submits them to Google Indexing API
4. ✅ Skips duplicates automatically
5. ✅ Updates the reference file when done

---

## 📊 Current Status

### Already Indexed: 187 pages
- 13 core pages (home, about, contact, etc.)
- 49 service pages
- 98 city pages
- 5 solutions pages
- 22 blog posts

### Remaining to Index: ~8,900+ pages
- ~4,700 city-service combinations
- ~1,744 city-industry hub pages
- ~5,000 city-industry-service combinations
- Various other pages

---

## 🎯 Daily Workflow

### Morning (Check Quota Reset)
- Google quota resets at midnight PST
- Best time to run: 9 AM - 6 PM EST

### Run Script
```bash
cd /Users/george/webdevai
npm run dev  # In one terminal
node scripts/index-next-200.js  # In another terminal
```

### After Script Completes
- ✅ Reference file automatically updated
- ✅ Next day: run again to index another 200
- ✅ No duplicates will be submitted

---

## 📋 What Gets Indexed

### Priority Order:
1. **Core pages** (✅ Done - 13 pages)
2. **Service pages** (✅ Done - 49 pages)
3. **City pages** (✅ 98 done, ~4,600 remaining)
4. **Solutions pages** (✅ Done - 5 pages)
5. **Blog posts** (✅ Done - 22 pages)
6. **City-service combinations** (⏳ Next - thousands)
7. **City-industry pages** (⏳ Later - 1,744 pages)
8. **City-industry-service** (⏳ Last - 5,000+ pages)

---

## 🚨 Important Notes

### Don't Waste Your Daily Quota!
- ✅ Script automatically skips already-indexed pages
- ✅ Reference file prevents duplicates
- ✅ Check `indexed-pages-reference.json` to see what's done
- ❌ Never manually edit the reference file during indexing

### Daily Limits:
- **200 requests per day** (Google limit)
- **Reset time**: Midnight PST
- **Best practice**: Run once daily, maximum 200 pages

### If Script Fails:
1. Don't run again the same day
2. Wait for quota reset (midnight PST)
3. Check error messages in terminal
4. Reference file NOT updated on failure

---

## 🔍 Check What's Already Indexed

```bash
# View the reference file
cat indexed-pages-reference.json | less

# Count how many pages indexed
grep -c '"alreadyIndexed"' indexed-pages-reference.json
```

---

## 📝 Manual Tracking (If Needed)

If you ever need to manually check:
1. Open `indexed-pages-reference.json`
2. Look for `"alreadyIndexed"` array
3. All URLs in that array won't be submitted again

---

## ⚡ Quick Commands

```bash
# See how many pages already indexed
node -e "console.log(require('./indexed-pages-reference.json').metadata.totalIndexed)"

# View first 20 indexed pages
node -e "const data = require('./indexed-pages-reference.json'); console.log(data.alreadyIndexed.slice(0, 20).join('\n'))"

# Run indexing (requires dev server running)
node scripts/index-next-200.js
```

---

## ✅ You're All Set!

- **187 pages** already indexed
- **Daily quota**: 200 pages
- **Reference tracking**: ✅ Working
- **No duplicates**: ✅ Prevented
- **Ready to index**: ✅ Yes

Just run the script daily and it will handle everything!


