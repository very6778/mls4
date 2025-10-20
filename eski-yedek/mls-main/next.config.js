/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost']
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  swcMinify: false,
  compiler: {
    removeConsole: false
  }
}

module.exports = nextConfig