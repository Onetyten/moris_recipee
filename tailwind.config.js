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
          'dark' : '#100F0A',
        },
        fontFamily:{
          body:['specialFont']
        }

    },
  },
  plugins: [],
}