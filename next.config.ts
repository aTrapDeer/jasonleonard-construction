import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['app', 'components', 'lib'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bonantowers.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // You can also configure ESLint rules here if needed
};

export default nextConfig;
