/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // already static export
  images: {
    unoptimized: true, // disables default loader
  },
};
