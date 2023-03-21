/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "blur-zoom-in": "blur-zoom-in 0.3s ease-out",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "blur-zoom-in": {
          "0%": {
            opacity: 0,
            // transform: "scale(0.9)",
            filter: "blur(6px)",
            // transform: "translateX(40%)",
          },
          '60%': {
            filter: "blur(5px)",
            // transform: "translateX(10%)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0)",
            transform: "translateX(0)",
          },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}