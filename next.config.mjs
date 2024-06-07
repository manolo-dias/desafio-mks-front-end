/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ["./src"],
        prependData: `@import "./src/styles/settings.module.scss";`,
    },
    eslint:{
        ignoreDuringBuilds:true
    }
};

export default nextConfig;
