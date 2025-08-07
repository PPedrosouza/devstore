import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'github.com'
    ]
  },
  typescript: {
    ignoreBuildErrors: true, // Isso vai ignorar os erros de TypeScript durante o build
  },
  eslint: {
    ignoreDuringBuilds: true, // Isso vai ignorar os avisos do ESLint durante o build
  }
};

export default nextConfig;