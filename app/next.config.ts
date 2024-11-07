import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
    basePath: "/jv-agile6.github.io/app/",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
