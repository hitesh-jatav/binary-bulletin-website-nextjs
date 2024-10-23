// tailwind.config.js
module.exports = {
  darkMode: "class", // Enable dark mode based on the class
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#832584", // Optional: lighter variant
          DEFAULT: "#640D5F", // Primary color as default
          dark: "#4A0947", // Optional: darker variant
        },
        secondary: {
          light: "#E94479", // Optional: lighter variant
          DEFAULT: "#D91656", // Secondary color as default
          dark: "#B11048", // Optional: darker variant
        },
      },
    },
  },
  plugins: [],
};
