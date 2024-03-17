/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    darkMode: ['class', '[data-mode="dark"]'],
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}