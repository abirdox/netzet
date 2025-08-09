/** @type {import('tailwindcss').Config} */
const colors = {
  primary: "#FC004E",
  secondary: "#10CBE0",
  semi_secondary: "#00E7F9",
  gray: "#ABABAB",
  semi_gray: "#A9A9A9",
};
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        figtree: ["var(--font-figtree)", "sans-serif"],
      },
      fontSize: {},
      screens: {},
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          "--color-secondary": theme("colors.secondary"),
          "--color-semi-secondary": theme("colors.semi_secondary"),
          "--color-gray": theme("colors.gray"),
          "--color-semi-gray": theme("colors.semi_gray"),
        },
      });
    },
  ],
};
