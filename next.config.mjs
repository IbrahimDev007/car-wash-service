/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // webpackDevMiddleware ফাংশন যোগ করা হচ্ছে
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,           // প্রতি সেকেন্ডে ফাইল পরিবর্তন চেক করবে
      aggregateTimeout: 300, // বিল্ডের আগে বিলম্ব করবে
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
      },
    ],
  },
};

export default nextConfig;
