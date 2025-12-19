import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export type AuditUser = {
  id: string;
  name: string;
  role: "admin" | "viewer";
};

/**
 * Require authentication for audit tool pages
 * Checks password cookie and redirects to /auth if not authenticated
 */
export async function requireAuditAuth(): Promise<AuditUser> {
  const requiredPassword = process.env.AEO_AUDIT_PASSWORD

  // If no password is set, allow access (dev mode)
  if (!requiredPassword) {
    return {
      id: "dev-user",
      name: "Development User",
      role: "admin"
    };
  }

  // Check password cookie
  const cookieStore = await cookies()
  const cookiePassword = cookieStore.get('aeo_audit_auth')?.value

  if (cookiePassword === requiredPassword) {
    return {
      id: "authenticated-user",
      name: "Audit Tool User",
      role: "admin"
    };
  }

  // Not authenticated - redirect to auth page
  // Note: This will only work in server components
  // Middleware handles API routes and client-side redirects
  redirect('/auth')
}


