/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Inter', 'sans-serif']
      },
      colors:{
        'yellowgreen': '#cef972',
        'yellowgreendark': '#bbe366',
        'magenta': '#E8485F',
        'footer': '#101727',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}