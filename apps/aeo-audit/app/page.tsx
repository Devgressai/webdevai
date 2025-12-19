import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function IndexPage() {
  // Check if authenticated
  const cookieStore = await cookies()
  const requiredPassword = process.env.AEO_AUDIT_PASSWORD
  const cookiePassword = cookieStore.get('aeo_audit_auth')?.value

  // If password is required and not authenticated, redirect to auth
  if (requiredPassword && cookiePassword !== requiredPassword) {
    redirect('/auth')
  }

  // Otherwise redirect to dashboard
  redirect("/dashboard");
}


