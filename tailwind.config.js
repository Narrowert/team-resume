/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      max_3xl: { max: "1660px" },
      max_2xl: { max: "1552px" },
      max_2big: {max: "1400px"},
      max_big: {max: "1350px"},
      max_xl: { max: "1279px" },
      max_lg: { max: "1023px" },
      max_md: { max: "767px" },
      max_sm: { max: "639px" },
      max_lit: { max: "400px" },
    },
    extend: {},
  },
  plugins: [],
}

