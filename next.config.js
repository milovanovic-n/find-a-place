/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "links.papareact.com"]
  },
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY
  }
}
