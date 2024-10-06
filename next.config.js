/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');
const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000', 
      },
      {
        protocol: 'https',
        hostname: 'emkaan.merakitechs.com',
      },
    ],
  },
  webpack(config, options) {
    return config;
  },
  enableSvg: true,
};

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(withFonts(nextConfig));
