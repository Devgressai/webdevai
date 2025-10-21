# 📊 Google Indexing API - Tracking System

This folder contains scripts and logs for managing Google Indexing API submissions.

## 🗂️ Files

### `indexed-pages-log.json`
**Purpose:** Master log of all pages that have been submitted to Google Indexing API
**Format:**
```json
{
  "lastUpdated": "2025-10-21T18:43:00Z",
  "totalIndexed": 200,
  "indexedPages": [
    "/",
    "/about",
    ...
  ]
}
```

### `index-smart.js`
**Purpose:** Smart indexing script that automatically avoids re-indexing pages

**Features:**
- ✅ Reads `indexed-pages-log.json` to check what's already indexed
- ✅ Only submits NEW pages to Google
- ✅ Automatically updates the log after successful indexing
- ✅ Respects daily quota limits (default: 200)
- ✅ Shows progress and statistics

**Usage:**
```bash
# Index up to 200 new pages (default)
node scripts/index-smart.js

# Index up to 50 new pages (custom limit)
node scripts/index-smart.js --limit 50
```

### Other Scripts (Manual/Legacy)
- `index-200-pages.js` - Original script (indexes first 200 pages)
- `index-remaining-pages.js` - Indexes pages not in first batch
- `index-final-28.js` - Completes daily quota (200 total)

---

## 🚀 How to Use

### Daily Indexing Workflow

**1. Check Status**
```bash
cat scripts/indexed-pages-log.json | grep totalIndexed
```

**2. Run Smart Indexer**
```bash
# Make sure dev server is running
npm run dev

# In another terminal
node scripts/index-smart.js
```

**3. Results**
- ✅ Script automatically finds unindexed pages
- ✅ Submits them to Google (respects 200/day limit)
- ✅ Updates log with newly indexed pages
- ✅ Shows remaining pages count

---

## 📈 Quota Management

### Google's Limits
- **Daily Quota:** 200 requests per day
- **Reset Time:** Midnight Pacific Time (3am Eastern)
- **Per Second:** No strict limit, but 3-second delay recommended

### Custom Limits
If you want to index fewer pages per day:
```bash
# Index only 50 pages today
node scripts/index-smart.js --limit 50
```

---

## 🔍 Checking What's Indexed

### View Log Summary
```bash
# Count total indexed
jq '.totalIndexed' scripts/indexed-pages-log.json

# List all indexed pages
jq '.indexedPages[]' scripts/indexed-pages-log.json

# Check if specific page is indexed
jq '.indexedPages[] | select(. == "/services/ai-seo")' scripts/indexed-pages-log.json
```

### Find Unindexed Pages
The smart script automatically shows you:
- Total pages available
- Already indexed count
- Remaining to index

---

## 📊 Current Status (Oct 21, 2025)

**✅ Indexed Today:** 200/200 pages (100% quota used)

**Categories Indexed:**
- ✅ All core pages (13)
- ✅ All service pages (63)
- ✅ All solution pages (6)
- ✅ Top blog posts (28)
- ✅ Top 90 city pages

**Remaining:** ~29 secondary city pages

**Next Run:** Tomorrow after midnight PT

---

## 🛠️ Troubleshooting

### "Server not responding"
```bash
# Start dev server
npm run dev

# Wait 10 seconds, then run indexing
```

### "Quota exceeded"
- Google's daily limit reached (200 requests)
- Wait until midnight PT (3am ET) for reset
- Script will automatically stop when quota is reached

### "Page already indexed" (false warning)
- Log file might be out of date
- Check `indexed-pages-log.json` manually
- Script prevents duplicate submissions automatically

### Manually Add Page to Log
```bash
# Edit indexed-pages-log.json and add the page path
# Then increment totalIndexed count
```

---

## 📝 Adding New Pages to Index

When you create new pages on the site:

1. **Add to `index-smart.js`** in the `ALL_PAGES` array
2. **Run the script** - it will automatically detect and index new pages
3. **Log updates automatically** - no manual intervention needed

---

## 🎯 Best Practices

1. **Run daily** after midnight PT to use fresh quota
2. **Use smart script** instead of manual scripts
3. **Check log** before running to avoid confusion
4. **Monitor GSC** (Google Search Console) for actual indexing status
5. **Keep log file** - it's your source of truth

---

## 📞 Support

If indexing fails repeatedly:
1. Check dev server is running (`npm run dev`)
2. Verify API credentials in `.env.local`
3. Check Google Search Console for API quota status
4. Review error messages in script output

---

**Last Updated:** October 21, 2025  
**Total Pages Indexed:** 200  
**Remaining Pages:** ~29

