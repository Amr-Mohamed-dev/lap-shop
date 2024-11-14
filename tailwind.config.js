/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#f3f3f3",
        accent: "#f3f3f3",
        darkPrimary: "#1E3A8A",
        darkSecondary: "#1F2937",
        darkAccent: "#4B5563",
      },
    },
  },
  plugins: [],
};
