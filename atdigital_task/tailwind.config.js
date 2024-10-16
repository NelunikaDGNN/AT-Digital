/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        "primary-color":" #6B3CC9",
        "secondary-color":"#F28D35",
        "light-white":"#FFFFFF",
        "faqfill-color":" #FAF8FF",
        "title-color":"#6B3CC9",
        'gradient-start': '#1CBDDD',
        'gradient-end': '#4DCA79',
        "black-color":"#000000",
        
  
  
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)',
      }),
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lato:['Lato','sans-serif']
      },
    },
  },
  plugins: [],
}



