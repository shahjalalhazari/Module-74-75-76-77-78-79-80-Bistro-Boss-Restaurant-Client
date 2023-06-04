/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        "black": "#151515",
        "black2": "#444444",
        "dark-gray": "#737373",
        "gray": "#E8E8E8",
        "yellow": "#D99904",
        "navy-blue": "#1F2937"
      },
      boxShadow: {
        '3xl': '10px 10px 10px 10px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [require("daisyui")],
}

