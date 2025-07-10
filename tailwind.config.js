/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'padauk  ','sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

