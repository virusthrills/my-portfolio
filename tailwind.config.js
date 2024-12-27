/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Replace with the paths to your HTML files
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Replace with the paths to your components
  ],
  theme: {
    
    screens:{
      sm: '595px',
      md: '768px',
      lg: '1024px'
    },
    extend: {},
  },
  plugins: [],
}