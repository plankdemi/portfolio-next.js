/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  exclude: /app\/api\/.*$/,
  nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
