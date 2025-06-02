/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ae-concept-test-2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ae-concept-test-2' : ''
}

module.exports = nextConfig