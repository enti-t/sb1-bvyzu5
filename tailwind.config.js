/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: 'var(--color-coral)',
        text: 'var(--color-text)',
        accent1: 'var(--color-accent-1)',
        accent2: 'var(--color-accent-2)',
        accent3: 'var(--color-accent-3)',
        accent4: 'var(--color-accent-4)',
        accent5: 'var(--color-accent-5)',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        quattrocento: ['Quattrocento', 'serif'],
      },
    },
  },
  plugins: [],
}