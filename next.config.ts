import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/privacidade",
        destination: "/politica-de-privacidade",
        permanent: true, // 301 Redirect para SEO
      },
    ];
  },
};

export default nextConfig;
