/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui'],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
