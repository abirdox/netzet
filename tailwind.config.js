/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        'semi-secondary': "var(--semi-secondary)",
        gray: "var(--gray)",
        'semi-gray': "var(--semi-gray)",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        figtree: ["var(--font-figtree)", "sans-serif"],
      },
      fontSize: {},
      screens: {},
      spacing: {},
    },
  },
  plugins: [],
};
