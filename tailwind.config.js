/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'brand': {
        1: '#02466A',
        2: '#1DBBBE',
        3: '#B6BE34',
      },
      'state': {
        'blue': '#0077FF',
        'green': '#3AE374',
        'yellow': '#FF9F1A',
        'red': '#FF3838'
      },
      'grayColor' : {
        100: '#FAFAFA',
        200: '#D3D3D3',
        300: '#A7A7A7',
        400: '#7C7C7C',
        500: '#505050'
      }
    },
    extend: {},
  },
  plugins: [],
}
