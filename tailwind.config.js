/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mukta: ['"Mukta Mahee"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-gray': '#B8C7D9',
      }
    },
  },
  plugins: [],
}
