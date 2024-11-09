/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://trandainghia.id.vn/api/:path*", // URL của backend
      },
    ];
  },
};

export default nextConfig;
