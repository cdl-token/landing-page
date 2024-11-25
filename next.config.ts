import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "(s2.coinmarketcap.com)",
        port: "",
        pathname: "/**",
      },
    ],
  },
  headers: () => {
    return Promise.resolve([
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ]);
  },
};

export default nextConfig;
