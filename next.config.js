/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src none;
  style-src 'any' ;
  font-src 'any';  
`;
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: "/:path*",
  //       headers: [
  //         // {
  //         //   key: "X-Content-Type-Options",
  //         //   value: "nosniff",
  //         // },
  //         // {
  //         //   key: "X-Frame-Options",
  //         //   value: "allow-from https://fonts.gstatic.com ",
  //         // },
  //         // {
  //         //   key: "X-XSS-Protection",
  //         //   value: "1; mode=block",
  //         // },
  //         // {
  //         //   key: "X-DNS-Prefetch-Control",
  //         //   value: "on",
  //         // },
  //         // {
  //         //   key: "Permissions-Policy",
  //         //   value:
  //         //     "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  //         // },
  //         // {
  //         //   key: "Content-Security-Policy",
  //         //   value: "*",
  //         // },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
