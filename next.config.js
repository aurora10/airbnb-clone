/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYXVyb3JhMTAiLCJhIjoiY2w4c3AwZHk4MGdtbzNwczQ1d3ZhM2Q5eSJ9.MJRvY765KhmYoyCdHIsgbA",
  },
  env: {
    google_maps_key: process.env.GOOGLE_MAPS_KEY,
  },
};

module.exports = nextConfig;
