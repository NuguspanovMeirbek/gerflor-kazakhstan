import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES ? "/gerflor-kazakhstan" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
