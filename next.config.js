// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
module.exports = {
  headers: () => [
    {
      source: "/admin",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};
