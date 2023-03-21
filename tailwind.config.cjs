/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "blur-zoom-in-slow": "blur-zoom-in 0.6s ease-out",
        "blur-zoom-in": "blur-zoom-in 0.4s ease-out",
        "blur-slide-down": "blur-slide-down 1s ease-out",
      },
      keyframes: {
        
        "blur-zoom-in": {
          "0%": {
            opacity: 0,
            filter: "blur(6px)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0)",
            transform: "translateX(0)",
          },
        },
        "blur-zoom-in-slow": {
          "0%": {
            opacity: 0,
            // transform: "scale(0.9)",
            filter: "blur(6px)",
            // transform: "translateX(40%)",
          },
          
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0)",
            transform: "translateX(0)",
          },
        },
        "blur-slide-down": {
          "0%": {
            opacity: 0,
            transform: "scale(0.5)",
            filter: "blur(6px)",
            transform: "translateY(-50%)",
          },
          '60%': {
            // filter: "blur(5px)",
            transform: "translateY(-10%)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}