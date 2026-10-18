/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:        '#F8F4EC',
        sand:         '#EFE7D8',
        charcoal:     '#221F1A',
        stone:        '#5C5347',
        gold:         '#A87C4F',
        'gold-dark':  '#8C6539',
        'gold-light': '#D4B896',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
