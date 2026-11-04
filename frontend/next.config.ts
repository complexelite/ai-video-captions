import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/ai-video-captions",
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/ai-video-captions/api/:path*",
        destination: "http://backend:5000/api/:path*",
        basePath: false,
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "500mb",
    },
  },
};

export default nextConfig;
