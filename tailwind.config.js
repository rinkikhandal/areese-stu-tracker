/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_blue: "#002647",
        secondary_blue: "#034769",
        primary_orange: " rgb(234 88 12 )",
        secondary_orange: "#F58026",
        primary_purple: "#5A4EA2",
        primary_gray: "#909590",
        primary_red: "#B10F2E",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
