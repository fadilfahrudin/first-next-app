/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
        ],
    },

}

module.exports = nextConfig
