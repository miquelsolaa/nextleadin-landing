/** @type {import('next').NextConfig} */
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
    domains: ['sierra.keydesign.xyz'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sierra.keydesign.xyz',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  serverExternalPackages: [],
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Configuració específica per a Netlify
  trailingSlash: true,
  output: 'export',
}

module.exports = nextConfig
