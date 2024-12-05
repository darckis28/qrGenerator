/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blueDesign: "#3662E3",
        blackDesign: "#111729",
        grayText: "#364153",
      },
    },
  },
  plugins: [],
};
