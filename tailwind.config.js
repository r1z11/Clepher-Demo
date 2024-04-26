/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'golos-regular': ['GolosText-Regular', 'sans-serif'],
      'golos-bold': ['GolosText-Bold', 'sans-serif'],
      'golos-extra-bold': ['GolosText-ExtraBold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}