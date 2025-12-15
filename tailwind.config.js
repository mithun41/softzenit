// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // আপনার বিদ্যমান কন্টেন্ট পাথ:
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
  // 👇👇 এই অংশটি যুক্ত করুন যাতে ডিফল্ট স্টাইল রিসেট না হয় 👇👇
  corePlugins: {
    preflight: false,
  }
};