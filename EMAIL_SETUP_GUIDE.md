# 📧 Email Setup Guide for Chatbot Leads

## 🎯 Current Status

Right now, when someone gives their email to the chatbot:
- ✅ Email is captured
- ✅ Logged to console
- ❌ **Not sent anywhere (you need to configure this)**

## 🚀 Quick Setup (5 minutes)

### Option 1: Resend (Recommended - FREE & Easy)

**Why Resend?**
- ✅ 100% free for 100 emails/day (3,000/month)
- ✅ Super easy setup (3 steps)
- ✅ Best deliverability
- ✅ Clean interface

**Steps:**

1. **Sign up:** https://resend.com
2. **Get API Key:**
   - Go to Dashboard → API Keys
   - Click "Create API Key"
   - Copy the key (starts with `re_`)
3. **Add to your `.env.local` file:**
   ```env
   EMAIL_PROVIDER=resend
   EMAIL_API_KEY=re_your_api_key_here
   EMAIL_FROM=chatbot@webvello.com
   EMAIL_TO=your-email@webvello.com  # YOUR ACTUAL EMAIL!
   ```
4. **Verify Domain (Optional but recommended):**
   - Go to Domains → Add Domain
   - Add your domain (webvello.com)
   - Add DNS records they provide
   - Wait for verification

**That's it!** Restart your dev server and test.

---

### Option 2: SendGrid (Also FREE)

**Steps:**

1. **Sign up:** https://sendgrid.com
2. **Create API Key:**
   - Settings → API Keys → Create API Key
   - Give it "Mail Send" permissions
   - Copy the key (starts with `SG.`)
3. **Verify Sender Email:**
   - Settings → Sender Authentication
   - Verify your email address
4. **Add to `.env.local`:**
   ```env
   EMAIL_PROVIDER=sendgrid
   EMAIL_API_KEY=SG.your_api_key_here
   EMAIL_FROM=your-verified-email@webvello.com
   EMAIL_TO=your-email@webvello.com
   ```

---

### Option 3: Webhook → Gmail (No Code!)

**Perfect if you don't want to deal with email APIs.**

**Steps:**

1. **Sign up for Zapier:** https://zapier.com (free)
2. **Create a Zap:**
   - Trigger: "Webhooks by Zapier"
   - Choose "Catch Hook"
   - Copy webhook URL
3. **Add Action:**
   - Action: "Gmail" → "Send Email"
   - To: your-email@gmail.com
   - Subject: "New Lead: {{email}}"
   - Body: Use the data fields from webhook
4. **Turn on Zap**
5. **Add to `.env.local`:**
   ```env
   EMAIL_PROVIDER=webhook
   WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/
   ```

**Bonus:** You can also send to Slack, Google Sheets, CRM, etc!

---

## 📝 Environment Variables Explained

Create a `.env.local` file in your project root:

```env
# Choose ONE provider
EMAIL_PROVIDER=resend

# API Key from your chosen provider
EMAIL_API_KEY=your_api_key_here

# Email FROM (must be verified with provider)
EMAIL_FROM=chatbot@webvello.com

# YOUR email (where leads go)
EMAIL_TO=george@webvello.com  # CHANGE THIS!

# Only needed for webhook option
# WEBHOOK_URL=https://hooks.zapier.com/...
```

---

## 🧪 Testing

### 1. Start your dev server:
```bash
npm run dev
```

### 2. Open chatbot on localhost:3000

### 3. Type an email address:
```
User: "john@example.com"
```

### 4. Check your email inbox!

You should receive an email with:
- ✅ Lead's email address
- ✅ Full conversation history
- ✅ Timestamp
- ✅ Next steps recommendations

---

## 📧 Email Template Preview

You'll receive beautiful emails like this:

```
🚀 New Lead Captured!
From AI Chatbot

📧 Lead Information
Email: john@example.com
Time: Sept 30, 2024 at 2:30 PM
Source: AI Chatbot

💬 Conversation History

👤 User: How much does SEO cost?

🤖 Bot: Our pricing is transparent:
• Starter: $2,500/month
• Growth: $5,000/month
• Enterprise: Custom

👤 User: Tell me about local SEO

🤖 Bot: We specialize in local SEO across 100 US cities!
• Google My Business optimization
• Local citations
• City-specific content

👤 User: john@example.com

✅ Next Steps
1. Reply within 24 hours
2. Review conversation to understand needs
3. Schedule consultation call
4. Follow up if no response in 48 hours
```

---

## 🔥 Advanced Setup

### Save to Database (Optional)

If you want to save leads to a database, edit `/lib/email-service.ts`:

```typescript
export async function saveLeadToDatabase(lead: LeadData) {
  // Prisma example:
  await prisma.lead.create({
    data: {
      email: lead.email,
      conversation: JSON.stringify(lead.conversation),
      source: 'chatbot',
      timestamp: lead.timestamp
    }
  })
  
  return { success: true }
}
```

### Send to Multiple Emails

Edit `.env.local`:
```env
EMAIL_TO=team@webvello.com,sales@webvello.com,george@webvello.com
```

### Send to CRM (HubSpot, Salesforce)

I can help you set this up! Just let me know which CRM you use.

---

## ⚠️ Important Notes

### 1. **Never commit `.env.local` to git!**
   - It's already in `.gitignore`
   - Contains secret API keys

### 2. **Use production credentials on Vercel:**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add the same variables from `.env.local`
   - Redeploy

### 3. **Verify sender email/domain:**
   - Most email providers require verification
   - Use your actual domain (webvello.com)
   - Follow provider's verification steps

### 4. **Free tier limits:**
   - Resend: 100/day, 3,000/month ✅
   - SendGrid: 100/day ✅  
   - Mailgun: 5,000/month ✅
   - These should be plenty for most businesses!

---

## 🎯 What You Get

Once configured, **every time someone gives their email:**

1. ✅ **Instant email notification** to your inbox
2. ✅ **Full conversation context** so you know what they need
3. ✅ **Automatic timestamp** for follow-up tracking
4. ✅ **Beautiful HTML email** that's easy to read
5. ✅ **Mobile-friendly** format

---

## 🆘 Troubleshooting

### "Email not sending"
- ✅ Check `.env.local` exists
- ✅ Check API key is correct
- ✅ Check sender email is verified
- ✅ Restart dev server after changing `.env.local`
- ✅ Check console for error messages

### "Email goes to spam"
- ✅ Verify your domain with email provider
- ✅ Add SPF, DKIM records (provider will guide you)
- ✅ Use your actual domain (not @gmail.com for sending)

### "API key not found"
- ✅ Make sure `.env.local` is in project root
- ✅ Restart dev server
- ✅ Check spelling of environment variables

---

## 💰 Cost Comparison

| Provider | Free Tier | Paid Plans | Best For |
|----------|-----------|------------|----------|
| **Resend** | 3,000/month | $20/mo (50K) | Developers (easiest) |
| **SendGrid** | 100/day | $20/mo (50K) | Everyone |
| **Mailgun** | 5,000/month | $35/mo (50K) | High volume |
| **Webhook** | Zapier free | $20/mo | No-code users |

**For your volume (180-240 leads/month), free tier is perfect!**

---

## 🚀 Quick Start Command

Just run this and follow the prompts:

```bash
# Option 1: Resend (Recommended)
echo "EMAIL_PROVIDER=resend
EMAIL_API_KEY=your_api_key_here
EMAIL_FROM=chatbot@webvello.com
EMAIL_TO=your-email@webvello.com" > .env.local

# Then edit .env.local with your actual values
```

---

## ✅ Final Checklist

Before going live:

- [ ] Sign up for email provider (Resend recommended)
- [ ] Get API key
- [ ] Create `.env.local` file
- [ ] Add environment variables
- [ ] Verify sender email/domain
- [ ] Test locally (send yourself a test lead)
- [ ] Add same variables to Vercel
- [ ] Deploy and test in production
- [ ] Send a real lead to verify it works

---

## 🎉 You're Done!

Once set up, you'll get an email every time someone gives their email to the chatbot.

**Need help setting this up?** Let me know which option you want and I can walk you through it! 🚀

