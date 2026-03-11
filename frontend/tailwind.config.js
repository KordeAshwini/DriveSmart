/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        secondary: "#14B8A6",
        accent: "#22D3EE",
        dark: "#0F172A",
        light: "#F8FAFC",
      },

      // Add inside extend: { ... }
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        drivesmart: {
          primary: "#0F766E",
          secondary: "#14B8A6",
          accent: "#22D3EE",
          neutral: "#0F172A",
          "base-100": "#F8FAFC",
        },
      },
    ],
  },
};
