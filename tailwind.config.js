/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
              brand: {
                light: '#e0f2ff',
                DEFAULT: '#3b82f6',
                dark: '#1e40af',
              },
            },
            fontFamily: {
              sans: ['"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
          },
    },
    plugins: [],
  }
  