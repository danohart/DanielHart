/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    deviceSizes: [480, 768, 1200],
  },
};

module.exports = nextConfig;
