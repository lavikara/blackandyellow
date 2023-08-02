/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{tsx,jsx,js,vue,ts}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: { DEFAULT: "#4D84FF", white: "#ffffff" },
        secondary: { DEFAULT: "#001140", dark: "#001E70", light: "#06206B" },
        gray: {
          DEFAULT: "#8791A7",
          disabled: "#A3A8B3",
          dark: "#E1E6F0",
          darkest: "#D0D5E0",
          light: "#F0F4FD",
          light2: "#FAFBFF",
          lightest: "#F7F9FD",
          lightest1: "#E9EFFF",
          lightest2: "#949DBC",
          lightest3: "#323E67",
          black: "#020B27",
          black2: "#222735",
          bg1: "#4F5877",
          bg2: "#1A2139",
          bg3: "#F6F6EB",
          bg4: "#EFEFEF",
          bg5: "#FCFCFC",
          bg6: "#F1F3F6",
        },
      },
    },
    screens: {
      xxxs: "320px",
      xxs: "375px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1536px",
      xxxxl: "1900px",
    },
  },
  plugins: [],
};
