/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: '#f0fdfc',
          100: '#ccfbf5',
          200: '#99f6ea',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#59C3BC',
          600: '#4fb3ac',
          700: '#458f89',
          800: '#3b736e',
          900: '#345c59',
        }
      }
    },
  },
  plugins: [],
};
