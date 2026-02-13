/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/roi-calculator",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/roi-calculator/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/downloads",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/downloads/:path*",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/manual",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/manual/:path*",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/user-manual",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/user-manual/:path*",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/manual.pdf",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/user-manual.pdf",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/support/downloads",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/support/downloads/:path*",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/support/manual",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/support/manual/:path*",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/support/user-manual",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/support/user-manual/:path*",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/support/software-downloads",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/support/software-downloads/:path*",
        destination: "/support",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
