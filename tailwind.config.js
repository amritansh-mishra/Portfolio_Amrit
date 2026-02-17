/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        blob:{
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
        },
        animation:{
          blob:'blob 10s infinte'
        },
       backgroundImage: {
          'skills-gradient': 'linear-gradient(38.73deg, rgba(252, 163, 17, 0.15) 0%, rgba(252, 163, 17, 0) 50%), linear-gradient(141.27deg, rgba(252, 163, 17, 0) 50%, rgba(252, 163, 17, 0.15) 100%)',
        },
      },
    },
  },
  plugins: [],
}