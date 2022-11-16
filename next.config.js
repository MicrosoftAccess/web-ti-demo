/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'steamcdn-a.akamaihd.net',
      },
    ],
  }
}

module.exports = nextConfig
