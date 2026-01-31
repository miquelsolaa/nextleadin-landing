import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'
import {NextRequest, NextResponse} from 'next/server'

const intlMiddleware = createMiddleware(routing)

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next()
  }
  if (request.nextUrl.pathname === '/sitemap.xml') {
    return NextResponse.next()
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    // Exclou API, _next, _vercel, admin, sitemap.xml i fitxers amb extensió (imatges, manifest, etc.)
    '/((?!api|_next|_vercel|admin|sitemap\\.xml|.*\\..*).*)'
  ]
}
