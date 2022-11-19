/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Bai Jamjuree, sans-serif'
      },
      colors: {
        bg: {
          1: "#FFF"
        },

        geral: {
          1: "#404041",
          2: "#222223",
          3: "#535354"
        }
      },
    },
  },
  plugins: [],
}