/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@meadowbrook/ui-core"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
