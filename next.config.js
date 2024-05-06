/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            pathname: '**',
          },
        ],
      },
    reactStrictMode: true,
    swcMinify: true,
    productionBrowserSourceMaps: false, // Disable source maps in development
    optimizeFonts: true, // Disable font optimization
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.fallback.dns = false;
            config.resolve.fallback.net = false;
        }

        return config;
    },
    output: 'standalone'
};

module.exports = nextConfig;
