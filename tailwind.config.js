/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        choco: "#69330D",
        offWhite: "#FAFAFA",
        grey: "#857C73",
        input: "#493B2E",
      },
      backgroundImage: {
        ourcocoaimage: `url("/images/over2.png")`,
      },
    },
  },
  plugins: [],
};
