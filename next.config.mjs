/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ["./src"],
        prependData: `@import "./src/styles/settings.module.scss";`,
    }
};

export default nextConfig;
