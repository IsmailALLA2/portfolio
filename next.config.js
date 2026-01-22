/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/portfolio", // Uncomment if deploying to GitHub Pages with subdirectory
};

module.exports = nextConfig;
