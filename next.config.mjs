import createNextIntlPlugin from 'next-intl/plugin'
import withSerwistInit from '@serwist/next'

// GA4 ID must be in the client bundle at build time. Netlify often defines GA_MEASUREMENT_ID only.
if (
  !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() &&
  process.env.GA_MEASUREMENT_ID?.trim()
) {
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID.trim()
}

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion'],
  },
  serverExternalPackages: ['stripe'],
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  // SEO: redireccions 301 per URLs 404 detectades per Google
  async redirects() {
    const categorySpaceRedirects = [
      ['ai%20for%20sales', 'ai-for-sales'],
      ['lead%20generation', 'lead-generation'],
      ['b2b%20sales', 'b2b-sales'],
      ['ai%20prospecting', 'ai-prospecting'],
      ['sales%20automation', 'sales-automation'],
      ['b2b%20strategy', 'b2b-strategy'],
      ['local%20business', 'local-business'],
      ['crm%20integration', 'crm-integration'],
    ]
    const catRedirects = categorySpaceRedirects.flatMap(([oldSlug, newSlug]) => [
      { source: `/blog/category/${oldSlug}`, destination: `/blog/category/${newSlug}`, permanent: true },
      { source: `/:locale(en|ca)/blog/category/${oldSlug}`, destination: `/:locale/blog/category/${newSlug}`, permanent: true },
    ])
    return [
      ...catRedirects,
      { source: '/get-started', destination: '/contact', permanent: true },
      { source: '/:locale(en|es|ca)/get-started', destination: '/:locale/contact', permanent: true },
      { source: '/comparador', destination: '/compare', permanent: true },
      { source: '/:locale(en|es|ca)/comparador', destination: '/:locale/compare', permanent: true },
      { source: '/blog/author/:path*', destination: '/blog', permanent: true },
      { source: '/:locale(en|es|ca)/blog/author/:path*', destination: '/:locale/blog', permanent: true },
      { source: '/blog/category/vendes', destination: '/blog/category/b2b-sales', permanent: true },
      { source: '/:locale(en|es|ca)/blog/category/vendes', destination: '/:locale/blog/category/b2b-sales', permanent: true },
      { source: '/blog/category/prospecting', destination: '/blog/tag/prospecting', permanent: true },
      { source: '/:locale(en|es|ca)/blog/category/prospecting', destination: '/:locale/blog/tag/prospecting', permanent: true },
      { source: '/blog/tag/sales-leads', destination: '/blog/tag/lead-generation', permanent: true },
      { source: '/blog/tag/sales%20leads', destination: '/blog/tag/lead-generation', permanent: true },
      { source: '/:locale(en|es|ca)/blog/tag/sales-leads', destination: '/:locale/blog/tag/lead-generation', permanent: true },
      { source: '/:locale(en|es|ca)/blog/tag/sales%20leads', destination: '/:locale/blog/tag/lead-generation', permanent: true },
      { source: '/resources/guia-prospeccion-local', destination: '/resources/local-prospecting-guide', permanent: true },
      { source: '/:locale(en|es|ca)/resources/guia-prospeccion-local', destination: '/:locale/resources/local-prospecting-guide', permanent: true },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/images/logo/logo-icon.svg',
      },
    ]
  },
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./content/**/*'],
    '/robots.txt': ['./content/**/*'],
    '/\\[locale\\]/**': ['./content/**/*'],
  },
}

export default withSerwist(withNextIntl(nextConfig))
