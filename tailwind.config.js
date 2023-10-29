/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "roboto-condensed": ["'Roboto Condensed'", "sans-serif"],
      },
      colors: {
        primary: "#004E89",
        "black-100": "#111827",
        "black-75": "#6B707A",
        "black-10": "#DEE2E6",
        white: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
