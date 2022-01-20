module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        "play-Fair": ["Playfair Display"],
      },
      spacing: {
        592: "37rem",
        969: "60.5625rem",
        216: "13.5rem",
        530: "33.125rem",
        367: "22.9375rem",
        330: "21.8rem",
      },
      margin: {
        18: "1.125rem",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      textColor: {
        orange: "#F2994A",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
