/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "gray-20" : "#070A52",
        "gray-50" : "#070A52", //blue
        "gray-100" : "#070A52",
        // "gray-500" : "#D21312",
        // "primary-100" : "#263A29",
        "primary-100" : "#3B5249", //green
        // "primary-100" : "#245953",
        // "primary-100" : "#005555",

        "primary-300" : "#070A52",
        "primary-500" : "#070A52",
        // "secondary-400" : "#D21312",
        "secondary-500" : "#04293A" //green-blue

      },
      backgroundImage : (theme) => ({
        "gradient-yellowred" : "liner-gradient(90deg, #FF616A 0% #FFC837 100%)",
        "mobile-home" : "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily:{
        dmsans : ["DM Sans", "sans-serif"],
        montserrat : ["Montserrat", "sans-serif"]
      },
      content:{
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        cirlces: "url('./assets/Circles.png')",
      }
    },
    screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
    }
  },
  plugins: [],
}
