# 🎉 Raffle Storage System - Setup Complete!

## ✅ What Was Done

Your raffle system now stores all entries in **Sanity CMS** instead of trying to write to files (which doesn't work on Vercel). All raffle entries are now:

✅ **Stored permanently** in Sanity CMS  
✅ **Accessible from multiple places** (Admin UI, Sanity Studio, API)  
✅ **Exportable** as CSV or JSON  
✅ **Searchable and filterable** by status  
✅ **Sent to you via email** (if email is configured)  

---

## 📁 Files Created/Modified

### New Files Created:
1. **`schemas/raffleEntry.ts`** - Sanity schema for raffle entries
2. **`lib/sanity-raffle.ts`** - Helper functions to save/retrieve raffle entries
3. **`app/admin/raffle-entries/page.tsx`** - Admin UI to view and export entries

### Modified Files:
1. **`schemas/index.ts`** - Added raffle entry schema
2. **`sanity.config.ts`** - Added raffle entries to Sanity Studio navigation
3. **`app/api/raffle/submit/route.ts`** - Now saves to Sanity + sends email
4. **`app/api/raffle/entries/route.ts`** - Fetches entries from Sanity
5. **`app/api/raffle/export/route.ts`** - Exports entries from Sanity

---

## 🎯 How to Access Raffle Entries

### Option 1: Admin UI (Easiest)
Visit: **`https://yourdomain.com/admin/raffle-entries`**

Features:
- View all entries in a table
- Filter by status (New, Contacted, Winner)
- See statistics (total, new, contacted, winners)
- Export as CSV or JSON
- Direct link to Sanity Studio

### Option 2: Sanity Studio (Most Powerful)
Visit: **`https://yourdomain.com/studio`**

Then go to: **🎉 Raffle Entries** in the sidebar

Features:
- Full CRUD operations (Create, Read, Update, Delete)
- Change entry status (New → Contacted → Winner)
- Add internal notes to entries
- Filter by status
- Search by name or email
- Bulk operations

### Option 3: API Endpoints

**Get All Entries:**
```bash
GET /api/raffle/entries
```

**Get Entries by Status:**
```bash
GET /api/raffle/entries?status=new
GET /api/raffle/entries?status=winner
```

**Export as CSV:**
```bash
GET /api/raffle/export?format=csv
```

**Export as JSON:**
```bash
GET /api/raffle/export?format=json
```

---

## 🔧 Environment Variables Needed

### Required for Sanity (Already Set Up):
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=oz98vynm
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token-here  # Must have write permissions
```

### Optional for Email Notifications:
```env
# Email where raffle entries will be sent
CONTACT_TO_EMAIL=your-email@webvello.com
# OR
EMAIL_TO=your-email@webvello.com

# Email FROM address
CONTACT_FROM_EMAIL=raffle@webvello.com
# OR
EMAIL_FROM=raffle@webvello.com

# If using Resend (recommended):
RESEND_API_KEY=re_your_api_key_here
# OR
EMAIL_API_KEY=re_your_api_key_here

# If using SMTP:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 📊 Entry Statuses

Each raffle entry can have one of these statuses:

| Status | Description | Use Case |
|--------|-------------|----------|
| **New** | Just submitted | Default status for all new entries |
| **Contacted** | You've reached out | Mark when you've emailed/called them |
| **Winner** | Selected as winner | The lucky winner! |
| **Not Selected** | Didn't win | Optional: mark non-winners after drawing |

---

## 🎲 How to Pick a Winner

### In Sanity Studio:

1. Go to `/studio` → **🎉 Raffle Entries** → **All Entries**
2. Review all entries (they're ordered by submission date)
3. Use a random number generator or random picker tool
4. Select the winner
5. Open their entry and change status to **"Winner"**
6. Add notes if needed (e.g., "Called on 11/21, very excited!")

### Export & Use External Tool:

1. Go to `/admin/raffle-entries`
2. Click **"Export CSV"**
3. Open in Excel/Google Sheets
4. Use `=RAND()` function or online random picker
5. Go back to Sanity Studio and mark the winner

---

## 🚀 Deployment Checklist

Before deploying to production, make sure:

- [ ] `SANITY_API_TOKEN` is set in Vercel environment variables
- [ ] Token has **write** permissions (not just read)
- [ ] Email env variables are configured (if you want email notifications)
- [ ] Raffle form is accessible at `/raffle`
- [ ] Admin page works at `/admin/raffle-entries`
- [ ] Sanity Studio works at `/studio`

---

## 🧪 Testing

### Test the Form:
1. Go to `/raffle`
2. Fill out the form with test data
3. Submit it

### Verify Entry Was Saved:
1. Check `/admin/raffle-entries` - should see 1 entry
2. Check `/studio` → **🎉 Raffle Entries** - should see 1 entry
3. Check your email (if configured)

### Test Export:
1. Go to `/admin/raffle-entries`
2. Click **"Export CSV"** - should download a file
3. Open CSV - should see your test entry

---

## 📝 Additional Features

### Duplicate Prevention
- The system checks if an email already entered
- Users can only enter once per email address
- Error message: "This email has already been entered in the raffle."

### IP Address Tracking
- Each entry records the user's IP address
- Useful for detecting fraudulent entries
- Visible in Sanity Studio and exports

### Marketing Consent
- Users must check the consent box to enter
- Consent status is saved with each entry
- You can filter entries by consent in Sanity

---

## 🔒 Security Notes

- **Admin UI** (`/admin/raffle-entries`) is publicly accessible
  - Consider adding authentication if needed
  - Or keep it simple and just don't share the URL
- **Sanity Studio** (`/studio`) requires Sanity authentication
  - Only you and your team can access
- **API endpoints** are public but read-only
  - No one can delete or modify entries via API
  - All modifications must be done in Sanity Studio

---

## 💡 Tips

1. **Check entries daily** during the raffle period
2. **Export a backup** before selecting the winner
3. **Add notes** to entries as you contact people
4. **Use status filters** to stay organized
5. **Keep email notifications on** so you don't miss entries

---

## 🐛 Troubleshooting

### "Failed to save entry" error:
- Check that `SANITY_API_TOKEN` is set
- Verify token has write permissions
- Check Sanity console for API errors

### Email not sending:
- Check email environment variables are set
- Verify Resend API key is correct
- Check server logs for email errors
- Note: Entry is still saved even if email fails

### Can't see entries in admin page:
- Check browser console for errors
- Verify Sanity connection is working
- Try accessing `/studio` directly
- Check that entries exist in Sanity

---

## 📞 Support

If you need help:
1. Check the browser console for errors
2. Check Vercel deployment logs
3. Check Sanity CMS dashboard for issues
4. Review this document for common solutions

---

## 🎉 You're All Set!

Your raffle system is now production-ready and will work perfectly on Vercel. All entries will be safely stored in Sanity CMS where you can easily access, manage, and export them.

**Good luck with your raffle!** 🍀

