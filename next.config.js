/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://pranshus-blog.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://pranshus-blog.vercel.app/blog/:path*",
      }
    ];
  }
}

module.exports = nextConfig
