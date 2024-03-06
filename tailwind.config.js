/** @type {import('tailwindcss').Config} */

const fontFamily = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#12372A",
        second: "#436850",
        third: "#ADBC9F",
        back: "#FCFCFC",
        cyan: "#ABE2D8",
        darkcyan: "#86BEC1",
      },
      colors: {
        primary: "#12372A",
        second: "#436850",
        third: "#ADBC9F",
        back: "#FBFADA",
        fgcolor: "#043F6D",
      },
      fontFamily: {
        mont: ["Montserrat"],
        pop: ["Poppins"],
        sans: ["var(--font-sofia)"],
      },
    },
  },
  plugins: [],
};
