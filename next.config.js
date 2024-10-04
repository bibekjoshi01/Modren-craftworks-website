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
        protocol: 'https',
        hostname: 'api-stars-of-africa.merakitechs.com',
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
