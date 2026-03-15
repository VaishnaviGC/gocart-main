/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["inngest", "@prisma/client", "prisma"],
};

export default nextConfig;