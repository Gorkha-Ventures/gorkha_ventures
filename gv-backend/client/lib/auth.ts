const ACCESS_COOKIE = 'gv_access_token'
const REFRESH_COOKIE = 'gv_refresh_token'

function setCookie(name: string, value: string, days = 7) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; Expires=${expires}; Path=/; SameSite=Lax`
}

function readCookie(name: string) {
  if (typeof document === 'undefined') return ''
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : ''
}

export function persistTokens(accessToken: string, refreshToken: string) {
  setCookie(ACCESS_COOKIE, accessToken, 1)
  setCookie(REFRESH_COOKIE, refreshToken, 14)
}

export function getAccessToken() {
  return readCookie(ACCESS_COOKIE)
}

export function getRefreshToken() {
  return readCookie(REFRESH_COOKIE)
}

export function clearTokens() {
  setCookie(ACCESS_COOKIE, '', -1)
  setCookie(REFRESH_COOKIE, '', -1)
}
