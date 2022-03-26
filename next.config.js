/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resume/professional',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
