import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Temporarily ignore build errors due to Next.js 16.x validator.ts bug
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
