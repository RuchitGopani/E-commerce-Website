/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{"sidebar": 'rgb(43,47,64)',"dashboard": 'rgb(213,219,246)',"dashboard-text": 'rgb(99, 85, 181)','sidebar-border': 'rgba(137, 137, 137, 0.386)','sidebar-menu': 'rgba(208, 208, 208, 0.9)'},
      boxShadow: {
        '3xl': '0px 0px 15px 7px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        'regcard': '40rem',
        '15': '20rem'
      },
      gridAutoRows: {
        '180-auto': 'minmax(1.5rem, auto)',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8'
      }
    },
  },
  plugins: [],
}

