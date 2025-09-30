# 📧 Simple Email Setup - 5 Minutes!

## 🎯 What You Need

Both your **contact form** and **chatbot** are ready to send you emails!
You just need to add 3 environment variables.

---

## ⚡ Quick Setup (Choose ONE Option)

### ✅ OPTION 1: Resend (Recommended - 100% FREE)

**Why?** Free forever, super easy, 100 emails/day

**Steps:**

1. **Sign up:** Go to https://resend.com and create account

2. **Get API Key:**
   - Dashboard → API Keys → "Create API Key"
   - Copy the key (starts with `re_`)

3. **Create `.env.local` file** in your project root:
   ```env
   EMAIL_API_KEY=re_your_api_key_here
   EMAIL_FROM=chatbot@webvello.com
   EMAIL_TO=your-actual-email@gmail.com
   ```

4. **Restart your dev server:**
   ```bash
   npm run dev
   ```

5. **Test it:**
   - Open localhost:3000
   - Fill out contact form OR use chatbot
   - Check your email! 🎉

**That's it!** You're done.

---

### 🔧 OPTION 2: Gmail (If you want to use Gmail)

**Note:** This requires "App Password" from Google

1. **Enable 2-Step Verification** in your Google Account

2. **Get App Password:**
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Copy the 16-character password

3. **Use Resend anyway** (easier!)
   - Gmail SMTP is more complex
   - Resend is free and works better
   - Seriously, just use Resend 😄

---

## 📝 Environment Variables Explained

Create `.env.local` in your project root:

```env
# Option 1: Resend (easiest)
EMAIL_API_KEY=re_your_key_here

# Your email where leads go
EMAIL_TO=george@webvello.com

# Email FROM address
EMAIL_FROM=chatbot@webvello.com
```

**Alternative names (all work):**
```env
# These all do the same thing:
EMAIL_API_KEY=...
RESEND_API_KEY=...  # Also works

# To email:
EMAIL_TO=...
CONTACT_EMAIL=...   # Also works
```

---

## 🎯 What Gets Sent to You

### From Contact Form:
```
📨 New Contact Form: John Doe - Web Development

👤 Contact Information
Name: John Doe
Email: john@example.com
Phone: (555) 123-4567
Company: Acme Inc

📋 Project Details
Service: Web Development
Budget: $10,000 - $25,000
Timeline: 1-3 months

💬 Message
We need a new website that converts better...

✅ Next Steps
1. Reply within 24 hours
2. Review requirements
3. Schedule consultation
4. Send proposal
```

### From Chatbot:
```
🚀 New Lead from Chatbot: john@example.com

📧 Lead Information
Email: john@example.com
Time: Sept 30, 2024 at 2:30 PM
Source: AI Chatbot

💬 Conversation History
👤 User: How much does SEO cost?
🤖 Bot: Our pricing is transparent...
👤 User: Tell me more about local SEO
🤖 Bot: We specialize in local SEO...
👤 User: john@example.com

✅ Next Steps
1. Reply within 24 hours
2. Review conversation
3. Schedule consultation
```

---

## 🧪 Testing

### Test Contact Form:
1. Go to https://webvello.com/contact
2. Fill out form
3. Submit
4. Check your email!

### Test Chatbot:
1. Go to any page
2. Click chat button
3. Type: "how much does seo cost"
4. Then type your email: "test@example.com"
5. Check your email!

---

## 🚀 Deploy to Production (Vercel)

Once it works locally:

1. **Go to Vercel Dashboard:**
   - https://vercel.com/your-project
   - Settings → Environment Variables

2. **Add these 3 variables:**
   ```
   EMAIL_API_KEY = re_your_key_here
   EMAIL_FROM = chatbot@webvello.com
   EMAIL_TO = your-email@gmail.com
   ```

3. **Redeploy:**
   ```bash
   git push origin main
   ```

4. **Test on production:**
   - Go to https://webvello.com/contact
   - Submit form
   - Check email! 🎉

---

## ⚠️ Important Notes

### 1. Don't Commit `.env.local`
It's already in `.gitignore` - good!

### 2. Email Limits (Free Tier)
- **Resend:** 100 emails/day, 3,000/month ✅
- **SendGrid:** 100 emails/day ✅
- **Mailgun:** 5,000 emails/month ✅

For 180-240 leads/month, you're fine!

### 3. Email Deliverability
For better deliverability:
- Verify your domain with Resend
- Add SPF/DKIM records (Resend guides you)
- Use your actual domain (webvello.com)

---

## 🆘 Troubleshooting

### "Email not sending"
✅ Check `.env.local` exists in project root
✅ Check API key is correct (starts with `re_`)
✅ Restart dev server: `npm run dev`
✅ Check console for errors

### "Email goes to spam"
✅ Verify your domain with Resend
✅ Add DNS records they provide
✅ Use FROM address from your domain

### "API key not found"
✅ File must be named `.env.local` (not `.env`)
✅ Must be in project root (next to package.json)
✅ Restart dev server after creating file

---

## 💰 Costs

**Resend Free Tier:**
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ 100% FREE forever
- ✅ No credit card required

**If you exceed:**
- $20/month = 50,000 emails
- You'd need 1,600+ leads/month to exceed free tier!

---

## ✅ Quick Checklist

- [ ] Sign up for Resend (https://resend.com)
- [ ] Get API key from dashboard
- [ ] Create `.env.local` file
- [ ] Add 3 environment variables
- [ ] Restart dev server
- [ ] Test contact form
- [ ] Test chatbot
- [ ] Add to Vercel environment variables
- [ ] Deploy and test production

---

## 🎉 That's It!

Once set up, you'll automatically get emails for:
- ✅ Every contact form submission
- ✅ Every chatbot lead capture
- ✅ Beautiful HTML emails with all info
- ✅ Mobile-friendly format

**Takes 5 minutes, works forever! 🚀**

---

## Need Help?

Just let me know:
1. Which email provider you want to use
2. If you get stuck anywhere
3. If you want to connect to a CRM instead

I'll walk you through it! 📧

