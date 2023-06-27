/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.html",
    "./**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'cute-pink': '#FEF2F2',
        'cute-brown': '#525252',
        'cute-black': '#0A0A0A',
      },
    },
  },
  plugins: [],
}

