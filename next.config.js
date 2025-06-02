/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio", // Replace with your repository name
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
