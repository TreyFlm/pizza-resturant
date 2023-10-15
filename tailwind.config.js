/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        lightred: '#EF5959',
        beige: '#E5D8BF',
      },
    },
  },

  plugins: [],
};
