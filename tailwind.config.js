/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#003175',
        'blue': '#0050BE',
        'yellow': '#FFF400',
        'gray': '#454545'
      },
      fontFamily: {
        'title': ['Montserrat'],
        'sans': ['Inter']
      },
    }
  },
  plugins: [],
}
