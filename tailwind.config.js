/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#020202",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        tetra: ["Tetra", "sans-serif"],
      },
    },
  },
  plugins: [],
};
