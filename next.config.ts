/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 disables automatic image optimization
  },
};

module.exports = nextConfig;