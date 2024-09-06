/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sanskuy: ["Open Sans"],
        jetbrains: ["JetBrains Mono"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
