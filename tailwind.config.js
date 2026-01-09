/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'smoke-gray': '#E5E5E5',
        'petrol-blue': '#1A2B3C',
        'lime-green': '#A3FFB3',
        'charcoal': '#111111',
        'reddish': '#911350',
        'gray-base': '#d8e2dc',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'heading': ['Space Grotesk', 'JetBrains Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

