/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      // Override purple globally to use blue
      purple: {
        50:  '#f5faff',
        100: '#e0f0fa',
        200: '#b3d9f2',
        300: '#80bfe6',
        400: '#4da5db',
        500: '#1a8bd0',
        600: '#005FA1', // Main blue
        700: '#005FA1',
        800: '#005FA1',
        900: '#00395c',
      },
      // You may want to add the rest of the default Tailwind colors here as well!
    },
    extend: {},
  },
  plugins: [],
}; 