/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik-glitch': ['"Rubik Glitch"', 'system-ui'],
        'pt-serif': ['"PT Serif"', 'serif'],
      },
      colors: {
        customColor:'#D19A64',
        customColor1:'#F48C06',
      },
    },
  },
  plugins: [],
}



