/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    domains: ['images.microcms-assets.io'],
  },
};

export default nextConfig;
