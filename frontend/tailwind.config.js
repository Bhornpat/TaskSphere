/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{js,ts,jsx,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // enable dark/light theme toggle
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('/milkyway-8190232_1920.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        'monkey-dark': '#121212',
        'monkey-gray': '#1e1e1e',
        'monkey-accent': '#facc15',
      },
    },
  },
  plugins: [],
};

