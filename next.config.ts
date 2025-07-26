import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@/ui/src"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
