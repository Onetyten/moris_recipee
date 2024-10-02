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
          'dark-grey' : '#838283',
          'my-grey' : '#ecebec',
          'dark-blue' : '#8dacc8',
          'my-blue' : '#bddeef',
          'soft-yellow':'#FEF5EC',
          'my-orange':'#F68712'
        },
        fontFamily:{
          epic:['epic'],
          wulan:['wulan'],
          
        }
        

    },
  },
  plugins: [],
}