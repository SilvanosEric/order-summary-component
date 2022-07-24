/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-pale-blue": "hsl(225, 100%, 94%)",
        "p-bright-blue": "hsl(245, 75%, 52%)",
        "n-very-pale-blue": "hsl(225, 100%, 98%)",
        "n-desaturated-blue": "hsl(224, 23%, 55%)",
        "n-dark-blue": "hsl(223, 47%, 23%)",
      },
      fontFamily: {
        "Red-Hat-Display": ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
