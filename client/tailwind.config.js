/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffffff',
          content: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#f3f4f6',
          content: '#4b5563',
        },
        dark: {
          primary: {
            DEFAULT: '#1a1a1a',
            content: '#ffffff',
          },
          secondary: {
            DEFAULT: '#2d2d2d',
            content: '#9ca3af',
          },
        },
      },
    },
  },
  plugins: [],
} 