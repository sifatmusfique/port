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

    async redirects() {
        return [
            {
                source: '/resume.pdf',
                destination: '/',
                permanent: false,
            },
            {
                source: '/apple-app-site-association',
                destination: '/.well-known/apple-app-site-association',
                permanent: true,
            },
        ];
    },

    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['react-icons', 'framer-motion', 'aos'],
    },
};

export default nextConfig;
