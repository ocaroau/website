import type { NextConfig } from "next"

// The GitHub Pages workflow sets GITHUB_PAGES to build a static export.
// BASE_PATH is only needed when serving from github.io/<repo> instead of a custom domain.
const isPages = process.env.GITHUB_PAGES === "true"

const nextConfig: NextConfig = {
  ...(isPages && { output: "export", basePath: process.env.BASE_PATH || undefined }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
}

export default nextConfig
