/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        md: '12px',

      },
    },
    fontSize: {
      base: [
        "24px",
        {
          lineHeight: "32px",
        },
      ],
      "xl": [
        "20px",
        {
          lineHeight: "30px",
        },
      ],
      "xxl": [
        "20px",
        {
          lineHeight: "42px",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "36px",
        },
      ],
      "3xl": [
        "36px",
        {
          lineHeight: "54px",
        },
      ],
      "4xl": [
        "64px",
        {
          lineHeight: "84px",
        },
      ],
      "5xl": [
        "80px",
        {
          lineHeight: "106px",
        },
      ],
    },
    spacing: {
      0: "0px",
      0.5:"4px",
      1: "8px",
      1.5: "12px",
      1.75: "14px",
      2: "16px",
      2.5: "20px",
      3: "24px",
      3.5: "28px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      8.5:"68px",
      9: "45px",
      10: "50px",
      11: "55px",
      12: "60px",
      13: "65px",
      14: "70px",
      16: "80px",
      18: "144px",
      19: "95px",
      20: "160px",
      21: "105px",
      24.5: "124px",
      38.5: "308px",
    },
    extend: {
      colors: {
        resume: {
          first: "#707070",
          DEFAULT: "#000",
          second: "#891818",
        },
      },
      fontFamily: {
        TC: ['"Noto Sans TC"', "sans-serif"],
        EN: ['"Roboto"', "sans-serif"],
      },
      spacing: {
        74: "296px",
      },
      boxShadow: {
        "2xl": "0px 0px 0px 1px #fff",
        "3xl": "0px 0px 0px 1px #3F5D45;",
      },
    },
    screens: {
      md: "768px",
      lg: "992px",
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",

          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
}

