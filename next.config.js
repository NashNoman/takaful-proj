/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  disable: false,
  reloadOnOnline: true,
  register: true,
  swMinify: true,
  // scope: "/app/",
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = withPWA(nextConfig);
