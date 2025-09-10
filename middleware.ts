import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: [
    '/',
    // Exclou API, _next i QUALSSEVOL camí amb extensió (.*\..*) per no interceptar imatges, SVG, manifest, etc.
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}


