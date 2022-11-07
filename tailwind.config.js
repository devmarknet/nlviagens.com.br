/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'darkest-blue': '#001C42',
        'dark-blue': '#003175',
        blue: '#0050BE',
        yellow: '#FFF400',
        gray: '#454545',
        'light-gray': '#AFB6C8',
        'light-green': '#079461',
        'green-primary': '#214B39',
        'darkest-text': '#102643',
      },
      fontFamily: {
        title: ['Montserrat'],
        sans: ['Inter'],
      },
    },
  },
  plugins: [],
}
