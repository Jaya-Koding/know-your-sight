/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aksen: "#3956B2",
        secondary: "#FAFAFA"
      }
    },
  },
  plugins: [],
}

