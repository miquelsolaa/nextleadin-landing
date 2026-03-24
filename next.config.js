/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts')
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig = {
  productionBrowserSourceMaps: false,
  typescript: {
    // TODO: treure quan es resolguin els errors TS (features, industries, resources, manifest, BlogJsonLd, BlogPostCTA, LanguageSwitcher, i18n/routing, etc.)
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
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
  generateEtags: false,
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
      { source: '/resources/local-prospecting-guide', destination: '/resources', permanent: true },
      { source: '/:locale(en|es|ca)/resources/local-prospecting-guide', destination: '/:locale/resources', permanent: true },
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
    ]
  },
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./content/**/*'],
    '/robots.txt': ['./content/**/*'],
    '/\\[locale\\]/**': ['./content/**/*'],
  },
}

module.exports = withPWA(withNextIntl(nextConfig))
