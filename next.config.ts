import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for optimal performance
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lockpickworld.com',
      },
    ],
  },

  // Compress responses
  compress: true,

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|gif|ico|svg|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/shop',
        destination: 'https://www.lockpickworld.com/collections/dangerfield?utm_source=dangerfieldlockpicks&utm_medium=website&utm_campaign=redirect',
        permanent: false,
      },
      {
        source: '/buy',
        destination: 'https://www.lockpickworld.com/collections/dangerfield?utm_source=dangerfieldlockpicks&utm_medium=website&utm_campaign=redirect',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
