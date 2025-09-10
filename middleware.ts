import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'

const middleware = createMiddleware(routing)

export default function(request: any) {
  console.log('🔍 Middleware - URL:', request.nextUrl.pathname)
  console.log('🔍 Middleware - Locale from URL:', request.nextUrl.pathname.split('/')[1])
  return middleware(request)
}

export const config = {
  matcher: [
    '/',
    // Exclou API, _next i QUALSSEVOL camí amb extensió (.*\..*) per no interceptar imatges, SVG, manifest, etc.
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}


