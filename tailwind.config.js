/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#222831',
        color2: '#393E46',
        color3: '#00ADB5',
        color4: '#EEEEEE',
      },
      fontFamily: {
        poppins: 'Poppins, sans',
        catamaran: 'Oswald, sans',
        dosis: 'Dosis, sans',
      },
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '860px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}