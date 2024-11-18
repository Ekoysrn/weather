/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./src/js/script.js'],
  theme: {
    extend: {
      backgroundImage: {
        image : "url('/src/images/bg.jpg')"
      }
    },
  },
  plugins: [],
}

