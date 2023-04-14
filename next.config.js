/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /* domains: ['boring-avatars-api.vercel.app'] */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'boring-avatars-api.vercel.app',
      },
    ],
  },
};

module.exports = nextConfig;
