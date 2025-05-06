import { createClient } from '@/utils/supabase/client'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

interface SignInResponse {
  tokens: {
    IDToken: string
    RefreshToken: string
  }
}

interface SignUpResponse {
  tokens: {
    IDToken: string
    RefreshToken: string
  }
}

export async function signIn(email: string, password: string): Promise<SignInResponse> {
  const response = await fetch(`${API_BASE_URL}/user/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to sign in')
  }

  return response.json()
}

export async function signUp(
  email: string,
  password: string,
  username: string,
  firstName: string,
  lastName: string
): Promise<SignUpResponse> {
  const response = await fetch(`${API_BASE_URL}/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      username,
      first_name: firstName,
      last_name: lastName,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to sign up')
  }

  return response.json()
}

export async function googleSignIn(idToken: string): Promise<SignInResponse> {
  const response = await fetch(`${API_BASE_URL}/user/google`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idToken }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to sign in with Google')
  }

  return response.json()
}

export async function refreshToken(refreshToken: string): Promise<SignInResponse> {
  const response = await fetch(`${API_BASE_URL}/user/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to refresh token')
  }

  return response.json()
} 