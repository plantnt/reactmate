/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center: true
    },
    screens: {
      'tv': '1800px'
    },
    // colors:{
    //   white: '#FFFFFF',
    //   furnipurple: '#9A6CC8',
    //   furniorange: '#FF886D'
    // }
  },
  plugins: [],
}

