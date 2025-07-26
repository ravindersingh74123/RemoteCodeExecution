import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@/ui/src"],
  eslint: {
    ignoreDuringBuilds: true,
  },
   typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
