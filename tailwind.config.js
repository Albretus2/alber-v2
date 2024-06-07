/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["pixel", "sans-serif"],
        spaceMono: ["Space Mono"],
      },
      colors: {
        dark: "#1A1A1D",
        primary: "#CFCFCF",
        secondary: "#CEC4AB",
        accent: "#F3CF71",
      },
      animation: {
        'blink': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;' 
      }
    },
  },
  plugins: [daisyui],
};
