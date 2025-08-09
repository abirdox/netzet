/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC004E",
        secondary: "#10CBE0",
        semi_secondary: "#00E7F9",
        gray: "#ABABAB",
        semi_gray: "#A9A9A9",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        figtree: ["var(--font-figtree)", "sans-serif"],
      },
      fontSize: {},
      screens: {},
    },
  },
  plugins: [],
};
