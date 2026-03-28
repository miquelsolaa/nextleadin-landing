import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'
import {NextRequest, NextResponse} from 'next/server'

const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: false,
})

function requestWithPathnameHeader(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.set('x-pathname', request.nextUrl.pathname)
  return new NextRequest(request, {headers})
}

function nextWithPathname(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.set('x-pathname', request.nextUrl.pathname)
  return NextResponse.next({request: {headers}})
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return nextWithPathname(request)
  }
  if (request.nextUrl.pathname === '/sitemap.xml') {
    return nextWithPathname(request)
  }
  return intlMiddleware(requestWithPathnameHeader(request))
}

export const config = {
  matcher: [
    // Exclou API, _next, _vercel i fitxers amb extensió. /admin i la resta passen per injectar x-pathname i aplicar intl.
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
