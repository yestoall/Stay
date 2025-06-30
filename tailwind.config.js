/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ["BarlowSemiCondensed_400Regular"],
        regularItalic: ["BarlowSemiCondensed_400Regular_Italic"],
        medium: ["BarlowSemiCondensed_500Medium"],
        mediumItalic: ["BarlowSemiCondensed_500Medium_Italic"],
        semibold: ["BarlowSemiCondensed_600SemiBold"],
        semiboldItalic: ["BarlowSemiCondensed_600SemiBold_Italic"],
        bold: ["BarlowSemiCondensed_700Bold"],
        boldItalic: ["BarlowSemiCondensed_700Bold_Italic"],
      },
      colors: {
        background: "#0DA5E9",
      },
    },
  },
  plugins: [],
}
