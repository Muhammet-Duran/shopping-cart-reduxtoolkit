/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-1":
          "-5px -5px 10px rgba(255,255,255, 0.5),2px 2px 5px rgba(94,104,121,0.3)",
      },
      gridTemplateColumns: {
        "template-col-1": "3fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
