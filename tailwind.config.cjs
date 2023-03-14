/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        openclose: {
          '0%': { top: '0rem', width: '0' },
          '5%': { width: '0' },
          '15%': { width: '150px' },
          '30%': { top: '0rem', width: '150px' },
          '33%': { top: '0rem', width: '0' },
          '35%': { top: '0rem', width: '0' },
          '38%': { top: '-1.75rem' },
          '48%': { top: '-1.75rem', width: '120px' },
          '62%': { top: '-1.75rem', width: '120px' },
          '66%': { top: '-1.75rem', width: '0', textIndent: '0' },
          '71%': { top: '-3.5rem', width: '0', textIndent: '5px' },
          '86%': { top: '-3.5rem', width: '170px' },
          '95%': { top: '-3.5rem', width: '170px' },
          '98%': { top: '-3.5rem', width: '0', textIndent: '5px' },
          '100%': { top: '0', width: '0', textIndent: '0' },
        },
      },
      animation: {
        'open-close': 'openclose 5s ease-in-out infinite',
      },
      colors:{
        'yellowgreen': '#cef972',
        'yellowgreendark': '#bbe366',
        'footer': '#101727',
      },
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
