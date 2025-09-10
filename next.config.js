/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts')

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
    unoptimized: true,
    domains: ['sierra.keydesign.xyz', 'images.pexels.com', 'ui-avatars.com'],
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
    // Workaround per a Next 15 + next-intl perquè registri els aliases correctament
    turbo: {},
  },
  serverExternalPackages: ['stripe'],
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Configuració per a Netlify (SSR amb plugin)
  trailingSlash: false,
}

module.exports = withNextIntl(nextConfig)
