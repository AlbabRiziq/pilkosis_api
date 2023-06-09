/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'login' : "url('./src/assets/login-bg.png')"
      }
    },
  },
  plugins: [],
}