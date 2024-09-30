/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'my-green':'#93975C',
          'dark' : '#1b2546',
          'dark-grey' : '#4b515d',
          'my-grey' : '#787d87',
          'dark-blue' : '#8dacc8',
          'my-blue' : '#bddeef',
        },
        fontFamily:{
          epic:['epic'],
          wulan:['wulan'],
          
        }
        

    },
  },
  plugins: [],
}