/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(30, 30, 30)",
        surface: "rgb(40, 40, 40)",
        surfaceElevated: "rgb(50, 50, 50)",
        text: "#ffffff",
        textMuted: "#d9d9d9",
        accent: "rgb(255, 255, 0)",
      },
      maxWidth: {
        container: "75rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
