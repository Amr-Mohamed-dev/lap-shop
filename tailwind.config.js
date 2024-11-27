/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#eee",
        third: "#3b82f6",
        iconsBg: "#e6e6e6cf",
        darkPrimary: "#eee",
        darkSecondary: "#1F2937",
        darkAccent: "#4B5563",
      },
    },
  },
  plugins: [],
};
