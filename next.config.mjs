/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s8gf90.p3cdn1.secureserver.net", "cdn-images-1.medium.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: "http://localhost:4000/api",
  },
};

export default nextConfig;
