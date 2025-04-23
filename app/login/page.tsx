import { redirect } from "next/navigation"
import { LoginForm } from "@/components/login-form"
import { createClient } from "@/utils/supabase/server"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { redirectedFrom?: string }
}) {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If user is already logged in, redirect to dashboard
  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign in to your account</h1>
          <p className="mt-2 text-gray-600">Sign in to access your apartment listings dashboard</p>
        </div>
        <LoginForm redirectTo={searchParams.redirectedFrom || "/dashboard"} />
      </div>
    </div>
  )
}
