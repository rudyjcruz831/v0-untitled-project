import type React from "react"
import { Inter } from "next/font/google"
import { NextAuthProvider } from "@/components/next-auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dashboard",
  description: "A simple dashboard with Google Sign-In",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}


import './globals.css'