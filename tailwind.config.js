/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        20: '20px',
        60: '60px',
      },
      colors: {
        dark_green: '#62673E',
        light_gray: '#413432',
      },
    },
  },
  plugins: [],
};