/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Vary',
                        value: 'User-Agent',
                    },
                ],
            },
        ];
    },

    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['react-icons', 'framer-motion', 'aos'],
    },
};

export default nextConfig;
