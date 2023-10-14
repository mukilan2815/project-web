/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "windmill":"url(../Images/windmill.jpeg)"
      }
    },
  },
  plugins: [],
}

