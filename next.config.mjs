/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    productionBrowserSourceMaps: true,
    devIndicators: {
        autoPrerender: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '',
            },
        ],
    },

    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@styles': path.resolve(__dirname, 'src/styles'),
        };
        return config;
    },
};

export default nextConfig;
