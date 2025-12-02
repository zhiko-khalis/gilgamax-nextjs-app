import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove turbopack experimental config to avoid font loading issues
  experimental: {
    // Enable other experimental features if needed
  },
};

export default nextConfig;
