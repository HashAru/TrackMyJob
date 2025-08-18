/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7c3aed', // Purple 600
          DEFAULT: '#6366f1', // Indigo 500
          dark: '#4f46e5', // Indigo 600
        },
        accent: {
          light: '#a78bfa', // Purple 400
          DEFAULT: '#8b5cf6', // Purple 500
          dark: '#7c3aed', // Purple 600
        },
        background: '#f5f7ff', // light bluish background
      },
    },
  },
  plugins: [],
}
