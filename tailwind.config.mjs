/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Serif", 'serif'],
        hind: ["Hind", 'sans-serif'],
      },

      colors: {
        'bg-green': '#16191B', 
        'black': '#070707', 
        'british-green': '#004225', 
        'smoke-white': '#F3F3F3', 
        'tan': '#D1B494',
        'maya-blue': '#85C4FF', 

      }
    },
  },
  plugins: [],
};
