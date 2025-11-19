# 🎰 Leads Management System Documentation

Complete lead tracking system for raffle entries and contact form submissions with admin dashboard, authentication, and data export functionality.

## 📋 Overview

The raffle system allows visitors to enter a giveaway/raffle for a free custom website. All entries are saved to a JSON file and can be viewed, managed, and exported through a secure admin dashboard.

## 🚀 Features

- ✅ **Raffle Entry Form** - Public form at `/raffle`
- ✅ **Contact Form Integration** - Tracks all contact form submissions
- ✅ **Unified Lead Storage** - All leads saved to `data/leads.json`
- ✅ **Admin Authentication** - Password-protected login
- ✅ **Admin Dashboard** - View, filter, delete, and export leads at `/admin/dashboard`
- ✅ **Lead Filtering** - Filter by type (All, Raffle, Contact)
- ✅ **Export Functionality** - Export all leads or filtered by type as CSV or JSON
- ✅ **Session Management** - Secure cookie-based sessions
- ✅ **Lead Statistics** - View counts for total, raffle, and contact leads

## 📁 File Structure

```
app/
├── raffle/
│   └── page.tsx                    # Public raffle landing page
├── admin/
│   ├── login/
│   │   └── page.tsx               # Admin login page
│   └── dashboard/
│       └── page.tsx               # Admin dashboard
├── api/
│   ├── raffle/
│   │   ├── submit/route.ts        # Submit raffle entry
│   │   ├── entries/route.ts       # Get/delete entries
│   │   └── export/route.ts        # Export entries
│   └── auth/
│       ├── login/route.ts         # Login endpoint
│       ├── logout/route.ts        # Logout endpoint
│       └── check/route.ts         # Check auth status

components/
└── raffle/
    └── raffle-form.tsx            # Client-side form component

lib/
├── lead-storage.ts                # Unified lead storage utilities (raffle + contact)
└── auth.ts                        # Authentication utilities

data/
└── leads.json                     # All stored leads (auto-created)
```

## 🔐 Authentication Setup

### 1. Set Admin Password

Add to your `.env.local` file:

```env
ADMIN_PASSWORD=your-secure-password-here
SESSION_SECRET=your-random-secret-here
```

**⚠️ Important:** 
- Change the default password (`admin123`) in production!
- Use a strong, unique password
- Never commit `.env.local` to git

### 2. Access Admin Dashboard

1. Go to `/admin/login`
2. Enter your admin password
3. You'll be redirected to `/admin/dashboard`

**Default Password (if not set):** `admin123`

## 📊 Using the Admin Dashboard

### Viewing Leads

The dashboard displays all leads (raffle entries and contact form submissions) with:
- Full name and email
- Business name (if provided)
- Phone number (if provided)
- Website URL (if provided)
- Marketing budget
- Submitted timestamp
- IP address
- Full entry details

### Filtering Leads

Use the filter tabs at the top to view:
- **All** - All leads (raffle + contact)
- **Raffle** - Only raffle entries
- **Contact** - Only contact form leads

### Exporting Leads

1. Select a filter (All, Raffle, or Contact)
2. Click **"Export CSV"** or **"Export JSON"** to download

Files are automatically named with type and date:
- `all-leads-2025-01-15.csv`
- `raffle-2025-01-15.csv`
- `contact-2025-01-15.csv`

### Deleting Leads

1. Click **"Delete"** on any lead
2. Confirm deletion
3. Lead is permanently removed

### Refreshing Data

Click **"Refresh"** to reload entries from storage.

## 🔒 Security Features

- **Password Authentication** - Secure password-based login
- **Session Management** - HttpOnly cookies prevent XSS attacks
- **Server-Side Validation** - All API routes validate requests
- **Protected Routes** - Dashboard requires authentication
- **Data Protection** - Raffle data stored locally, not exposed to client

## 📝 Data Storage

All leads are stored in `data/leads.json`:

**Raffle Entry Example:**
```json
{
  "id": "raffle-1234567890-abc123",
  "type": "raffle",
  "fullName": "John Smith",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "businessName": "Smith & Associates",
  "websiteUrl": "https://example.com",
  "needs": "Need a new website for my business",
  "budget": "1000-3000",
  "consent": true,
  "submittedAt": "2025-01-15T10:30:00.000Z",
  "ipAddress": "192.168.1.1"
}
```

**Contact Lead Example:**
```json
{
  "id": "contact-1234567890-xyz789",
  "type": "contact",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Doe Industries",
  "phone": "(555) 987-6543",
  "service": "SEO Services",
  "budget": "$5,000 - $10,000",
  "urgency": "Within 1 month",
  "message": "Looking for SEO help",
  "submittedAt": "2025-01-15T11:00:00.000Z",
  "ipAddress": "192.168.1.2"
}
```

## 🛠️ API Endpoints

### Public Endpoints

#### POST `/api/raffle/submit`
Submit a raffle entry.

**Request Body:**
```json
{
  "fullName": "John Smith",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "businessName": "Smith & Associates",
  "websiteUrl": "https://example.com",
  "needs": "Need help with website",
  "budget": "1000-3000",
  "consent": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for entering!",
  "entryId": "entry-1234567890-abc123"
}
```

### Protected Endpoints (Require Authentication)

#### GET `/api/raffle/entries?type=raffle|contact`
Get all leads, optionally filtered by type.

**Query Parameters:**
- `type` (optional): `raffle`, `contact`, or omit for all

**Response:**
```json
{
  "success": true,
  "leads": [...],
  "count": 10
}
```

#### DELETE `/api/raffle/entries?id=lead-id`
Delete a specific lead.

#### GET `/api/raffle/export?format=csv|json&type=raffle|contact`
Export leads as CSV or JSON (downloads file).

**Query Parameters:**
- `format`: `csv` or `json`
- `type` (optional): `raffle`, `contact`, or omit for all

#### POST `/api/auth/login`
Login with password.

**Request Body:**
```json
{
  "password": "your-password"
}
```

#### POST `/api/auth/logout`
Logout and clear session.

#### GET `/api/auth/check`
Check authentication status.

## 🔄 Upgrading to Database

Currently, leads are stored in a JSON file. To upgrade to a database:

1. Replace functions in `lib/lead-storage.ts` with database queries
2. Recommended: Use Prisma, MongoDB, or PostgreSQL
3. Update API routes if needed

Example with Prisma:
```typescript
import { prisma } from '@/lib/prisma'

export function getAllLeads(): Lead[] {
  return await prisma.lead.findMany({
    orderBy: { submittedAt: 'desc' }
  })
}
```

## 📱 Pages

### `/raffle`
Public raffle landing page with entry form.

### `/admin/login`
Admin login page. Requires password.

### `/admin/dashboard`
Admin dashboard to view and manage entries. Requires authentication.

## 🔧 Environment Variables

Required (or will use defaults):
- `ADMIN_PASSWORD` - Admin login password (default: `admin123`)
- `SESSION_SECRET` - Session encryption secret (auto-generated if not set)

## ⚠️ Important Notes

1. **Change Default Password** - The default password is `admin123`. Change it in production!
2. **Data Backup** - The `data/leads.json` file contains all leads. Back it up regularly.
3. **Security** - Use strong passwords and HTTPS in production.
4. **Git Ignore** - The `data/` directory is in `.gitignore` to protect leads.
5. **Contact Form Integration** - Contact form submissions are automatically saved when submitted via `/api/contact`.

## 🐛 Troubleshooting

### "Unauthorized" Error
- Make sure you're logged in
- Check your password is correct
- Clear cookies and try logging in again

### Leads Not Saving
- Check `data/` directory exists and is writable
- Check server logs for errors
- Verify form is submitting correctly
- For contact leads, ensure `/api/contact` route is working

### Export Not Working
- Make sure you have entries
- Check browser allows downloads
- Try a different browser

## 📚 Next Steps

1. **Set your admin password** in `.env.local`
2. **Test the raffle form** at `/raffle`
3. **Test the contact form** at `/contact`
4. **Login to dashboard** at `/admin/login`
5. **Review leads** - Use filters to view raffle entries or contact leads
6. **Export leads** - Export all or filtered by type

For questions or issues, check the API routes in `app/api/raffle/`, `app/api/contact/`, and `app/api/auth/`.

