/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "bb-ivory": '#FEFAF1',
        'bb-rosalie': '#F5C2BF',
        'bb-sienna': '#E8542F',
        'bb-ruby': '#FF0000',
        'bb-scarlett': '#6B030A',
        'bb-sage': '#56967B',
        'bb-olivia': '#C5D86D',
        'bb-violet': '#5A5DB9',
        'bb-celeste': '#84B0F8',
      }
    },
  },
  plugins: [],
}

