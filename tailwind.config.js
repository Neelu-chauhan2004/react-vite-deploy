/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx.html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
     fontFamily: {
      popppins: ['Poppins', 'sans-serif'],

    },
    colors:{
        primaryGreen: ' #12715B',
        


    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        
      }
    }
  }
},
  plugins: [],
};

