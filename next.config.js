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
    return [
      { source: '/get-started', destination: '/contact', permanent: true },
      { source: '/:locale(en|es|ca)/get-started', destination: '/:locale/contact', permanent: true },
      { source: '/blog/author/:path*', destination: '/blog', permanent: true },
      { source: '/:locale(en|es|ca)/blog/author/:path*', destination: '/:locale/blog', permanent: true },
      { source: '/blog/category/vendes', destination: '/blog/category/b2b%20sales', permanent: true },
      { source: '/:locale(en|es|ca)/blog/category/vendes', destination: '/:locale/blog/category/b2b%20sales', permanent: true },
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
