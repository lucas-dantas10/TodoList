/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        categoryPinkLess: "#FF9680",
        categoryGreenWater: "#80FFFF",
        categoryBlue: "#809CFF"
      },
      keyframes: {
        "fade-in-down": {
          from: {
            transform: "translateY(-0.75rem)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0rem)",
            opacity: "1",
          },
        },
      },

      animation: {
        'fade-in-down': 'fade-in-down .2s ease-in-out both',
      },
    },

    // plugins: [require("@tailwindcss/forms")],
  },
  plugins: [],
};
