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

};

export default nextConfig;
