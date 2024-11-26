/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cream-white": "#F8F9FA",
        "green-success": "#1F7B22",
        "green-success-light": "#CCFFCE",
        "green-1": "#008804",
        "red-failed": "#9F0000",
        "red-failed-light": "#FFD9D9",
        "cream-pink": "#D2B0F633",
        "gray-1": "#D9D9D9",
        "gray-2": "#7A7A7A",
        "purple-1": "#420083",
        "purple-2": "#2E1C41",
        "slate-blue-1": "#4A6681",
        "slate-blue-2": "#92B6D8",
        "slate-blue-3": "#CADAEA",
        blue: "#1F6BFF",
        "orange-1": "#D27200",
      },
    },
  },
  plugins: [],
};
