/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-exo_2)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
