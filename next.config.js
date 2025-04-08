/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yt3.googleusercontent.com', 'i.ytimg.com', 'img.youtube.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig; 