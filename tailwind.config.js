/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0070f3',
        'secondary': '#1f2937',
        'light-bg': '#ffffff',
        'light-text': '#111827',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
