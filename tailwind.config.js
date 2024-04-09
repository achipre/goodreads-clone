/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'millbrook': {
        '50': '#f7f6ef',
        '100': '#eae8d7',
        '200': '#d8d1b0',
        '300': '#c1b483',
        '400': '#ae9b61',
        '500': '#9f8953',
        '600': '#896f45',
        '700': '#6e563a',
        '800': '#5d4835',
        '900': '#523f31',
        '950': '#2e221a',
    },
    
    }
  },
  plugins: [],
};
