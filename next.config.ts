import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: "export",
  basePath: "/brilhodaana",
  assetPrefix: "/brilhodaana/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
