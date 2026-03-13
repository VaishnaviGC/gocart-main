/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: ["inngest", "@prisma/client", "prisma"],
    },
};

export default nextConfig;
