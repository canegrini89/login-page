import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: colors.gray,
      blue: {
        50: "#95bce2",
        100: "#8ab6e0",
        200: "#7eb0de",
      },
      danger: "#CA2F2D",
    },
  },
  plugins: [],
};
