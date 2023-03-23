/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "blur-in": "blur-in 0.3s ease-out",
        "blur-in-0": "blur-in-0 0.5s ease-out",
        "blur-slide-down": "blur-slide-down 0.3s ease-out",
        "blur-slide-down-10": "blur-slide-down-10 0.3s ease-out",
        "blur-slide-up": "blur-slide-up 0.3s ease-out",

      },
      keyframes: {
        
        "blur-in-0": {
          "0%": {
            opacity: 0,
            filter: "blur(7px)",
            transform: "translateX(10%)",
          },
          "50%":{
            filter: "blur(1px)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0px)",
            transform: "translateX(0)",
          },
        },
        "blur-in": {
          "0%": {
            opacity: 0,
            transform: "scale(0.98)",
            filter: "blur(16px)",
            // transform: "translateX(40%)",
          },
          
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0)",
            // transform: "translateX(0)",
          },
        },
        "blur-slide-down": {
          "0%": {
            opacity: 0,
            transform: "scale(0.2)",
            filter: "blur(10px)",
            transform: "translateY(-100%)",
          },
          
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        },
        "blur-slide-down-10": {
          "0%": {
            opacity: 0,
            transform: "scale(0.5)",
            filter: "blur(10px)",
            transform: "translateY(-10%)",
          },
          
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        },
        "blur-slide-up": {
          "0%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0)",
            transform: "translateY(10%)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(0.5)",
            filter: "blur(6px)",
            transform: "translateY(0%)",
          },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}