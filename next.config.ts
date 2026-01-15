import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prchan-tourism.com",
      },
    ],
  },
};

export default nextConfig;
