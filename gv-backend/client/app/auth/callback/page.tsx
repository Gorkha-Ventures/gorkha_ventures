'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { persistTokens } from '@/lib/auth'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const url = new URL(window.location.href)
    const accessToken = url.searchParams.get('accessToken')
    const refreshToken = url.searchParams.get('refreshToken')
    if (!accessToken || !refreshToken) {
      router.replace('/?error=auth_failed')
      return
    }
    persistTokens(accessToken as string, refreshToken as string)
    router.replace('/dashboard')
  }, [router])

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1 className="auth-title">Authentication</h1>
        <p className="auth-subtitle">Signing you in...</p>
      </section>
    </main>
  )
}
