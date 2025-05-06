'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SearchBar } from "@/components/ui/search-bar"
import Cookies from 'js-cookie'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const idToken = Cookies.get('idToken')
    if (!idToken) {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center">Find Your Perfect Home</h1>
        <p className="text-muted-foreground text-center mb-8">
          Search through our extensive collection of properties to find your dream home
        </p>
        <SearchBar />
      </div>
    </div>
  )
}
