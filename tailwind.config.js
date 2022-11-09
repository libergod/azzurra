/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azzurra-navy-blue': '#242e63',
        'azzurra-dark-blue': '#0f1337',
        'azzurra-gold': '#bf9638',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(180deg, rgba(0,0,0,0.2511379551820728) 0%, rgba(0,0,0,0) 62%)',
        'gradient-light': 'radial-gradient(circle, rgb(255 255 255 / 70%) 0%, rgb(255 255 255 / 0%) 50%)',
      },
      backgroundPosition: {
        brandHighlights: 'center 18px'
      }
    },
  },
  plugins: [],
}
