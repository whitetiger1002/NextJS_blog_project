const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
        xl: "1400px",
        desktop: "992px",
      },
      colors: {
        primary: " #EE8D8B",
        brownDark: "#716360",
        brownMiddle: "#958582",
        brownLight: "#C1AEAC",
        whiteLight: "rgba(255, 255, 255, 0.3)",
        darkbrown: "#7F6A5E",
        peach: "#EE8D8B",
        lightbrown: "#C1AEAC",
        lightcyan: "#56B9C0",
        lightgrey: "#F2F4F4",
        dark: "#4A4D4F",
        aqua: "#56B9C0",
        grass: "#65AA9E",
        beige: "#f3f0e9",
        whiteL: "rgba(255, 255, 255, .1)",
        darkL: "rgba(0,0,0,.4)",
        lightgrass: "#8BBDC1",
        yellowdark: "#FBEAD5",
        wine: "#5C2933",
        eva: {
          red: "#5B2732",
        },
        darkLight: "rgba(0, 0, 0, 0.1)",
        prevention20: {
          pink: "#FBF2EF",
          purple: "#CEA8C0",
          peach: "#E9A68C",
          lightpink: "#FFF4EF",
          lightgrey: "#c8c8c8",
          lightgrey2: "rgb(113 99 96 / 0.5)",
          brownDarkLight: "rgb(113, 99, 96,0.5)",
          lightGreySelect: "#F4F3F2",
          lightGreySelectHover: "#EAE9E8",
          red: "#C77379",
        },
      },
      spacing: {
        "80px": "80px",
      },
      fontFamily: {
        hthaptik: ["hthaptik"],
        spectral: ["Spectral"],
      },
      padding: {
        sm: "10px",
        md: "12px",
        lg: "24px",
        xl: "40px",
        sl: "100px",
        "100px": "100px",
        "10px": "10px",
      },

      fontSize: {
        64: "64px",
        40: "40px",
        32: "32px",
        22: "22px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px",
        10: "10px",
        3: "3em",
        "3em": "3.7em",
        "2.7em": "2.7em",
        "2.3em": "2.3em",
        "72px": "72px",
        "100px": "90px",
        "18px": "18px",
        "34px": "34px",
        "64px": "64px",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "24px": "24px",
        "44px": "44px",
        "7xl": "5rem",
        "116px": "116px",
        "1.4rem": "1.4rem",
        "3.3rem": "3.3rem",
        "28px": "28px",
      },
      lineHeight: {
        140: "140%",
        110: "110%",
        100: "100%",
        37: "37px",
        28: "28px",
        24: "24px",
        23: "23px",
        20: "20px",
        18: "18px",
        15: "15px",
        13: "13px",
        12: "3rem",
        120: "120%",
      },
      letterSpacing: {
        custom: "-0.02em",
        "03em": "0.03em",
        "04em": "0.04em",
        "06em": "0.06em",
      },
      borderRadius: {
        lite: "4px",
        mid: "8px",
        "1.25rem": "1.25rem",
        "24px": "24px",
        "80px": "80px",
      },
      height: {
        400: "400px",
        340: "340px",
        320: "320px",
        315: "315px",
        220: "220px",
        200: "200px",
        175: "175px",
        180: "180px",
        160: "160px",
        108: "108px",
        90: "90px",
        "60p": "60%",
        "40p": "40%",
        "85p": "85%",
        650: "650px",
        "20r": "20rem",
        "339px": "339px",
        "1200px": "1200px",
        600: "600px",
        80: "80vh",
        650: "650px",
        760: "760px",
        265: "265px",
        450: "450px",
        "40px": "40px",
        "417px": "417px",
        500: "500px",
        "15px": "15px",
        440: "440px",
        "50px": "50px",
      },
      width: {
        160: "160px",
        108: "108px",
        200: "200px",
        300: "300px",
        180: "180px",
        420: "420px",
        "80p": "80%",
        "50px": "50px",
      },
      backgroundImage: (theme) => ({
        "hero-body-lg": "url('../../src/assets/images/hero-body.png')",
        "hero-body-sm": "url('../../src/assets/images/hero-body-sm.png')",
        "we-are-here-lg": "url('../../src/assets/images/we-are-here.png')",
        "we-are-here-sm": "url('../../src/assets/images/we-are-here-sm.png')",
        "love-lg": "url('../../src/assets/images/love.png')",
        "love-sm": "url('../../src/assets/images/love-sm.png')",
        "insurance-lg":
          "url('../../src/assets/images/insurance/desktop/hero.jpg')",
        "insurance-sm":
          "url('../../src/assets/images/insurance/mobile/hero.jpg')",
        "Ibenefits-lg":
          "url('../../src/assets/images/insurance/desktop/benefits.jpg')",
        "Ibenefits-sm":
          "url('../../src/assets/images/insurance/mobile/benefits.jpg')",
        "Irequirements-lg":
          "url('../../src/assets/images/insurance/desktop/requirements.jpg')",
        "Imembership-sm":
          "url('../../src/assets/images/insurance/mobile/membership.jpg')",
        "Imembership-lg":
          "url('../../src/assets/images/insurance/desktop/membership.jpg')",
        "Iconditions-sm":
          "url('../../src/assets/images/insurance/mobile/conditions.jpg')",
        "Iconditions-lg":
          "url('../../src/assets/images/insurance/desktop/conditions.jpg')",
        bodyOpinion:
          "url('../../src/assets/images/preventionRange/bodyOpinion.png')",
      }),
      textOpacity: {
        7: ".70",
      },
      margin: {
        "45rem": "4.5rem",
        "48rem": "48rem",
        "-38rem": "-38rem",
      },
    },
    fontFamily: {
      oswald: ["Oswald"],
      california: ["california"],
      dm: ["DM"],
      chronicle: ["chronicle", ...defaultTheme.fontFamily.serif],
      noto: ["Noto", ...defaultTheme.fontFamily.serif],
      work: ["Work", ...defaultTheme.fontFamily.sans],
    },
    inset: {
      "65%": "65%",
      0: "0",
      "30px": "30px",
    },
    customForms: (theme) => ({
      default: {
        radio: {
          "&:focus": {
            outline: "none",
            boxShadow: "none",
            borderColor: "#EE8D8B",
          },
        },
      },
    }),
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      prevention40F: "rgba(0, 0, 0, 0) -11.7%",
      prevention40T: "rgba(0, 0, 0, 0.25) 71.87%",
      prevention20F: "rgba(0, 0, 0, .10) -11.7%",
      prevention20T: "rgba(0, 0, 0, 0.15) 71.87%",
      prevention50F: "rgba(0, 0, 0, 0.08) 25.26%",
      prevention50T: "rgba(0, 0, 0, 0.2) 71.87%",
    }),
    maxHeight: {
      "240px": "240px",
    },
  },
  variants: {
    opacity: ["responsive", "disabled"],
    cursor: ["responsive", "disabled"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
};