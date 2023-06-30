/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.html",
    "./**/*.vue",
  ],
  theme: {
    fontFamily: {
      'sans': ['Fira Mono', 'system-ui'],
    },
    extend: {
      fontSize: {
        'xxs': '0.5rem',
      },
      colors: {
        'cute-pink': '#FEF2F2',
        'cute-brown': '#525252',
        'cute-black': '#0A0A0A',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}

