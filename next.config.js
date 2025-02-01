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
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  env: {
    _next_intl_trailing_slash: '',
  },
};

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(withFonts(nextConfig));
