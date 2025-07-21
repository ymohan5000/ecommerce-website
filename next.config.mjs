/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ecommerce-website', // Required for GitHub Pages!
  assetPrefix: '/ecommerce-website',
  experimental: {
    allowedDevOrigins: ['http://192.168.0.123:3000'],
  },
};

export default nextConfig;
