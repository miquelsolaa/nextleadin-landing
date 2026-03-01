/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig = {
  typescript: {
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sierra.keydesign.xyz',
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
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  serverExternalPackages: ['stripe'],
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./content/**/*'],
    '/robots.txt': ['./content/**/*'],
    '/\\[locale\\]/**': ['./content/**/*'],
  },
}

module.exports = withPWA(withNextIntl(nextConfig))
