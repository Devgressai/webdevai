# Security Hardening Summary

## Created Files

### Authentication
1. `middleware.ts` - Next.js middleware for auth and security headers
2. `app/auth/page.tsx` - Password authentication page
3. `app/api/auth/login/route.ts` - Login endpoint (sets password cookie)
4. `app/api/auth/logout/route.ts` - Logout endpoint (clears cookie)

### Components
5. `components/ShellLayoutClient.tsx` - Client component with logout button

### Updates
6. `lib/auth.ts` - Updated to check password cookie
7. `app/layout.tsx` - Added noindex meta tags, updated to use ShellLayoutClient
8. `app/scans/[scanId]/page.tsx` - Added noindex metadata
9. `app/page.tsx` - Added auth check before redirect
10. `ENV.md` - Added AEO_AUDIT_PASSWORD documentation

## Authentication

### Password-Based Auth (MVP)

**How it works**:
1. User visits any audit tool route
2. Middleware checks for password cookie
3. If not authenticated, redirects to `/auth` page
4. User enters password
5. Password is validated against `AEO_AUDIT_PASSWORD` env var
6. If correct, password is stored in httpOnly cookie
7. User is redirected to requested page

### Configuration

**Development Mode** (no password):
```bash
# Don't set AEO_AUDIT_PASSWORD
# Tool is accessible without authentication
```

**Production Mode** (password required):
```bash
AEO_AUDIT_PASSWORD=your-secure-password-here
```

### Authentication Methods

1. **Cookie-based** (primary):
   - Password stored in `aeo_audit_auth` cookie
   - HttpOnly, Secure (in production), SameSite: lax
   - 7-day expiration

2. **Basic Auth** (fallback):
   - Supports HTTP Basic Authentication
   - Username can be anything, password must match `AEO_AUDIT_PASSWORD`
   - Useful for API access

### Auth Flow

```
1. User requests /dashboard
   ↓
2. Middleware checks cookie
   ↓
3. No cookie → Redirect to /auth?redirect=/dashboard
   ↓
4. User enters password
   ↓
5. POST /api/auth/login
   ↓
6. Password validated → Cookie set
   ↓
7. Redirect to /dashboard
```

## Security Headers

### Headers Set by Middleware

All audit tool routes receive these headers:

- **X-Frame-Options**: `DENY` - Prevents clickjacking
- **X-Content-Type-Options**: `nosniff` - Prevents MIME sniffing
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controls referrer information
- **Permissions-Policy**: `geolocation=(), microphone=(), camera=()` - Restricts browser features
- **Content-Security-Policy**: Basic CSP allowing:
  - `default-src 'self'` - Only same-origin resources
  - `script-src 'self' 'unsafe-inline' 'unsafe-eval'` - Scripts (needed for Next.js)
  - `style-src 'self' 'unsafe-inline'` - Styles (needed for Tailwind)
  - `img-src 'self' data: https:` - Images
  - `font-src 'self' data:` - Fonts
  - `connect-src 'self'` - API calls
  - `frame-ancestors 'none'` - No embedding

### CSP-Lite

The Content Security Policy is "lite" because:
- Allows `unsafe-inline` for scripts/styles (required for Next.js)
- Allows `unsafe-eval` for scripts (required for Next.js)
- More restrictive CSP can be added later if needed

## Noindex Protection

### Meta Tags

All pages include:
```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
```

### HTTP Headers

Scan results pages (`/scans/[scanId]`) also receive:
```
X-Robots-Tag: noindex, nofollow
```

### Metadata

Layout and scan results pages have:
```typescript
robots: {
  index: false,
  follow: false,
  noarchive: true,
  nosnippet: true,
}
```

## Protected Routes

Middleware protects:
- `/dashboard`
- `/scans/*`
- `/domains/*`
- `/methodology`
- `/limitations`
- `/api/scans/*`

Allowed without auth:
- `/auth` (authentication page)
- `/api/auth/*` (auth endpoints)

## Logout

Users can logout via:
- "Sign Out" button in left sidebar
- Calls `/api/auth/logout` to clear cookie
- Redirects to `/auth` page

## Development vs Production

### Development Mode

**No password required**:
- `AEO_AUDIT_PASSWORD` not set
- Tool accessible without authentication
- Cookie set to "dev-mode" for convenience

### Production Mode

**Password required**:
- `AEO_AUDIT_PASSWORD` set
- All routes require authentication
- Cookie is httpOnly and secure
- Basic Auth also supported

## Security Considerations

1. **Password Storage**: Password is stored in environment variable, not in code
2. **Cookie Security**: HttpOnly, Secure (production), SameSite: lax
3. **No Public Access**: All pages have noindex meta tags
4. **CSP Protection**: Basic CSP prevents XSS attacks
5. **Frame Protection**: X-Frame-Options prevents clickjacking
6. **MIME Sniffing**: X-Content-Type-Options prevents MIME confusion

## Next Steps for Production

1. **Replace with proper auth**: Use NextAuth.js, Auth0, or similar
2. **Add session management**: Track user sessions, expiration
3. **Add user management**: Multiple users, roles, permissions
4. **Add audit logging**: Log authentication events
5. **Strengthen CSP**: Remove unsafe-inline/unsafe-eval if possible
6. **Add rate limiting**: Prevent brute force attacks on auth endpoint

## Testing

### Test Authentication

1. **Without password** (dev mode):
   ```bash
   # Don't set AEO_AUDIT_PASSWORD
   # Visit /dashboard - should work without auth
   ```

2. **With password** (production mode):
   ```bash
   AEO_AUDIT_PASSWORD=test123
   # Visit /dashboard - should redirect to /auth
   # Enter password "test123" - should redirect to /dashboard
   ```

3. **Test logout**:
   - Click "Sign Out" in sidebar
   - Should redirect to /auth
   - Visiting /dashboard should require auth again

### Test Security Headers

```bash
curl -I http://localhost:3000/dashboard
# Should see X-Frame-Options, X-Content-Type-Options, etc.
```

### Test Noindex

```bash
curl -I http://localhost:3000/scans/SCAN_ID
# Should see X-Robots-Tag: noindex, nofollow
```

