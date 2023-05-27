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
        "dark-gray": "#737373",
        "gray": "#E8E8E8",
        "yellow": "#D99904",
        "navy-blue": "#1F2937"
    },
    },
  },
  plugins: [require("daisyui")],
}

