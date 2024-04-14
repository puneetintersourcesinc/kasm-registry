/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://www.intersourcesinc.com/assets/imgs/template/logo.png',
    listUrl: 'https://puneetintersourcesinc.github.io/kasm-registry/',
    contactUrl: 'https://github.com/puneetintersourcesinc/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
