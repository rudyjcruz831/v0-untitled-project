'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Cookies from 'js-cookie'
import { AvatarImage, AvatarFallback } from '@/components/ui/avatar'
// import { useAuth } from '@/hooks/useAuth'
// import { supabase } from '@/lib/supabaseClient'

export function AuthForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, mode: 'signin' | 'signup') => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    // Only get firstName and lastName for signup
    const firstName = mode === 'signup' ? (formData.get('firstName') as string) : undefined
    const lastName = mode === 'signup' ? (formData.get('lastName') as string) : undefined

    try {
      console.log('Starting authentication process...')
      const endpoint = mode === 'signin' 
        ? `${process.env.NEXT_PUBLIC_API_URL}/user/signin`
        : `${process.env.NEXT_PUBLIC_API_URL}/user/signup`

      console.log('Sending request to:', endpoint)
      const body = mode === 'signin'
        ? JSON.stringify({ email, password })
        : JSON.stringify({ email, password, firstName, lastName })
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Authentication failed')
      }

      const data = await response.json()
      console.log('Received response:', data)
      
      if (mode === 'signin') {
        // Store tokens in cookies
        if (data.tokens) {
          console.log('Storing tokens...')
          Cookies.set('idToken', data.tokens.IDToken, { 
            expires: 7, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/'
          })
          Cookies.set('refreshToken', data.tokens.RefreshToken, {
            expires: 30, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/'
          })
          console.log('Tokens stored successfully')
        }
        if (data.user) {
          console.log('Storing user info...')
          Cookies.set('userEmail', data.user.email, { expires: 7, path: '/' })
          if (data.user.firstName) {
            Cookies.set('userFirstName', data.user.firstName, { expires: 7, path: '/' })
          }
          console.log('User info stored successfully')
        }
        console.log('Redirecting to dashboard...')
        window.location.href = '/dashboard'
      } else {
        // On successful signup, redirect to sign-in tab
        setTimeout(() => {
          document.querySelector('[data-state="signin"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        }, 100)
      }
    } catch (error) {
      console.error('Authentication error:', error)
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  function handleLogout() {
    Cookies.remove('idToken');
    Cookies.remove('refreshToken');
    Cookies.remove('userEmail');
    Cookies.remove('userFirstName');
    window.location.href = '/'; // or use router to redirect
  }

  return (
    <Tabs defaultValue="signin" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <form onSubmit={(e) => handleSubmit(e, 'signin')} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signin-email">Email</Label>
            <Input 
              id="signin-email"
              name="email"
              type="email" 
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signin-password">Password</Label>
            <Input
              id="signin-password"
              name="password"
              type="password"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Signing in...
              </div>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>
      </TabsContent>
      <TabsContent value="signup">
        <form onSubmit={(e) => handleSubmit(e, 'signup')} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-firstName">First Name</Label>
            <Input
              id="signup-firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-lastName">Last Name</Label>
            <Input
              id="signup-lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              name="password"
              type="password"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Creating account...
              </div>
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  )
} 