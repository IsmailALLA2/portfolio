/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio", // Required for GitHub Pages deployment with subdirectory
  assetPrefix: "/portfolio", // Required for GitHub Pages to load assets correctly
};

module.exports = nextConfig;
