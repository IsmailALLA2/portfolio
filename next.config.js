/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio" : "", // Required for GitHub Pages deployment with subdirectory
  assetPrefix: isProd ? "/portfolio" : "", // Required for GitHub Pages to load assets correctly
};

module.exports = nextConfig;
