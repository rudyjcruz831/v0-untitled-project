import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    const redirectTo = requestUrl.searchParams.get("redirectTo") || "/dashboard"

    if (code) {
      const supabase = await createClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      if (error) {
        return NextResponse.redirect(new URL(`/login?error=${error.message}`, request.url))
      }
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(new URL(redirectTo, request.url))
  } catch (error) {
    console.error("Error in auth callback:", error)
    return NextResponse.redirect(new URL("/login?error=An error occurred", request.url))
  }
}
