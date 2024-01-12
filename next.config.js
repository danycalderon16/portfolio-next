/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/git",
        destination: "https://github.com/danycalderon16",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
