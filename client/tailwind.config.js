/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss/forms').Config} */

export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {
      fontFamily: {
        'custom': ['"Poppins"', 'sans'], 
      },
     },
     
   },
   plugins: [
   ],
 }

