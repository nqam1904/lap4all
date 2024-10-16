/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "/**",
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fsgn2-11.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    IMG_URL: process.env.CLOUDINARY_URL,
  },
};

module.exports = nextConfig;
