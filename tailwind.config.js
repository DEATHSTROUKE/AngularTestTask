/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        viol: {
          light: '#B77EFF',
          DEFAULT: '#8F36FF',
          'dark': '#6304DB'
        },
        red: {
          DEFAULT: '#F06969',
          'dark': '#D73A3A'
        },
        gray: {
          DEFAULT: '#E3E3E3',
          dark: '#808080'
        }
      }
    },
  },
  plugins: [],
}
