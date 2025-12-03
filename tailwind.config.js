/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mittia': {
          'dark': '#1a365d',
          'light': '#f7fafc',
        },
        'skogstransport': '#F59E0B',
        'gardskog': '#22C55E', 
        'parkgata': '#F97316',
        'expo': '#06B6D4',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
