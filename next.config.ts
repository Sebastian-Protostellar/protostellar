import type { NextConfig } from "next";

const emailAssetCache = [
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/hero", destination: "/", permanent: true }];
  },
  async headers() {
    return [
      {
        source: "/email-assets/protostellar-icon.png",
        headers: [
          ...emailAssetCache,
          { key: "Content-Type", value: "image/png" },
        ],
      },
      {
        source: "/email-assets/protostellar-icon-dark.png",
        headers: [
          ...emailAssetCache,
          { key: "Content-Type", value: "image/png" },
        ],
      },
      {
        source: "/email-assets/fonts/instrument-serif-regular.woff2",
        headers: [
          ...emailAssetCache,
          { key: "Content-Type", value: "font/woff2" },
        ],
      },
      {
        source: "/email-assets/fonts/poppins-regular.woff2",
        headers: [
          ...emailAssetCache,
          { key: "Content-Type", value: "font/woff2" },
        ],
      },
    ];
  },
};

export default nextConfig;
