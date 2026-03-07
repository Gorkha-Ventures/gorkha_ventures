import { getAccessToken, getRefreshToken, persistTokens } from './auth'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const accessToken = getAccessToken()

  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...(init?.headers ?? {}),
    },
    cache: 'no-store',
  })

  if (res.status === 401) {
    const refreshed = await refreshAccessToken()
    if (refreshed) {
      return apiFetch<T>(path, init)
    }
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.error || `Request failed with ${res.status}`)
  }

  return res.json() as Promise<T>
}

export async function refreshAccessToken() {
  const refreshToken = getRefreshToken()
  if (!refreshToken) return false

  const res = await fetch(`${API_BASE}/api/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  })
  if (!res.ok) return false
  const data = (await res.json()) as { accessToken: string }
  persistTokens(data.accessToken, refreshToken)
  return true
}

export async function logoutApi() {
  const refreshToken = getRefreshToken()
  if (!refreshToken) return
  await fetch(`${API_BASE}/api/auth/logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  }).catch(() => undefined)
}
