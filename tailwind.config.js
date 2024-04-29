/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // Some useful comment
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],

    },
  },
  plugins: [],
  extend: {
    boxShadow: {
      'dark': '2px 2px 5px rgba(0, 0, 0, 0.8)',
    }
  }
}