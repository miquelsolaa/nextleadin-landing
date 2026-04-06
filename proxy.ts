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

const normalizeTaxonomyPath = (pathname: string) => {
  const match = pathname.match(/^\/(?:(es|en|ca)\/)?blog\/(category|tag)\/(.+)$/i)
  if (!match) return null

  const locale = match[1] ?? ''
  const taxonomy = match[2].toLowerCase()
  const rawSlug = match[3]
  const decodedSlug = decodeURIComponent(rawSlug).trim()
  const normalizedSlug = decodedSlug
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  if (!normalizedSlug || normalizedSlug === decodedSlug) return null

  const localePrefix = locale ? `/${locale}` : ''
  return `${localePrefix}/blog/${taxonomy}/${normalizedSlug}`
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return nextWithPathname(request)
  }
  if (request.nextUrl.pathname === '/sitemap.xml') {
    return nextWithPathname(request)
  }
  const normalizedTaxonomyPath = normalizeTaxonomyPath(request.nextUrl.pathname)
  if (normalizedTaxonomyPath) {
    const url = request.nextUrl.clone()
    url.pathname = normalizedTaxonomyPath
    return NextResponse.redirect(url, 301)
  }
  return intlMiddleware(requestWithPathnameHeader(request))
}

export const config = {
  matcher: [
    // Exclou API, _next, _vercel i fitxers amb extensió. /admin i la resta passen per injectar x-pathname i aplicar intl.
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
