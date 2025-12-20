import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'
import {NextRequest, NextResponse} from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function(request: NextRequest) {
  console.log('🔍 Middleware - URL:', request.nextUrl.pathname)
  
  // Excloure completament la ruta /admin del processament d'i18n
  if (request.nextUrl.pathname.startsWith('/admin')) {
    console.log('🔍 Middleware - Skipping i18n for /admin route')
    return NextResponse.next()
  }
  
  // Excloure sitemap.xml del processament d'i18n
  if (request.nextUrl.pathname === '/sitemap.xml') {
    console.log('🔍 Middleware - Skipping i18n for /sitemap.xml route')
    return NextResponse.next()
  }
  
  console.log('🔍 Middleware - Locale from URL:', request.nextUrl.pathname.split('/')[1])
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    // Exclou API, _next, _vercel, admin, sitemap.xml i QUALSSEVOL camí amb extensió (.*\..*) per no interceptar imatges, SVG, manifest, etc.
    '/((?!api|_next|_vercel|admin|sitemap\\.xml|.*\\..*).*)'
  ]
}


