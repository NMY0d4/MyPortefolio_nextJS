/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5651e5',
        secondary: '#709dff',
        nbgColor: '#ecf0f3',
        navLinkColor: '#1f2937',
      },
      width: {
        contWithXl: '1240px',
      },
      screens: {
        xs: '480px', // Custom extra small breakpoint
      },
    },
  },
  plugins: [],
};
