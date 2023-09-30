/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        brand:
          "rgba(50, 86, 130, 0.2) 0px 6px 10px 0px, rgba(50, 86, 130, 0.1) 0px 1px 2px 0px, rgba(50, 86, 130, 0.05) 0px 0px 0px 1px inset",
      },
      colors: {
        brand: "#325682",
        darkGrey: "#202020",
      },
    },
  },
  plugins: [],
};
