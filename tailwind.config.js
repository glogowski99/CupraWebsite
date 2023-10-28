/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray':'#F4F4F3',
        'oxygen-white':'#F8F8F8',
        'desert-sand':'#D9CDBD',
        'sand':'#DBD3CB',
        'dark-gray':'#1B1B1B',
        'cupra-petrol':'#093E52',
        'engine-grey':'#75787B',
        'dark-peacock':'#006072',
        'black-type':'#000000',
        'nav-font-color':'#242221',
        'font-color':'#242221',
        'box-bgc':'#190F14',
      }
    },
  },
  plugins: [],
}

