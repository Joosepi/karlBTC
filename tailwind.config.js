/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#010010",
        "accent-color": "#fff",
        secondarycolor: "#73fdaa",
        palegreen: {
          "100": "rgba(115, 253, 170, 0.56)",
          "200": "rgba(115, 253, 170, 0.5)",
          "300": "rgba(115, 253, 170, 0.69)",
        },
        silver: "rgba(182, 182, 182, 0.3)",
        "wireframe-color-grey-subtitle": "#808080",
        background: "#bbffff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "subtitle-subtitle-1-medium": "Roboto",
        raleway: "Raleway",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        lg: "18px",
      },
    },
    fontSize: {
      "13xl": "2rem",
      "5xl": "1.5rem",
      base: "1rem",
      "17xl": "2.25rem",
      "29xl": "3rem",
      lg: "1.13rem",
      "3xs": "0.63rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
