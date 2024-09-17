/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js'],
  theme: {
    extend: {
      fontSize: {
        20: '20px',
        60: '60px',
      },
      colors: {
        dark_green: '#62673E',
        light_gray: '#413432',
        blue: '#24ABE2',
      },
    },
  },
  plugins: [],
};