/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["taxinetghana.xyz/","https://taxinetghana.xyz/"]
  }
}

module.exports = nextConfig
