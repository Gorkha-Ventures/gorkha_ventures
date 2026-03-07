import { NextRequest, NextResponse } from 'next/server'

const protectedPrefixes = ['/dashboard', '/submissions']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('gv_access_token')?.value
  const isProtected = protectedPrefixes.some((prefix) => pathname.startsWith(prefix))

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/submissions/:path*'],
}
