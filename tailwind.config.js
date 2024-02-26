module.exports = {
  darkMode: 'class',
  content: ["./*.html", "./assets/**/*.js"],

  theme: {
    // screens: {
    //   sm: "540px",
    //   // => @media (min-width: 576px) { ... }

    //   md: "720px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "960px",
    //   // => @media (min-width: 992px) { ... }

    //   xl: "1140px",
    //   // => @media (min-width: 1200px) { ... }

    //   "2xl": "1320px",
    //   // => @media (min-width: 1400px) { ... }
    // },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        black: "#212b36",
        dark: "#111928",
        "dark-3": "#374151",
        "dark-6": "#9CA3AF",
        "dark-700": "#090e34b3",
        // primary: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);",
        // background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
        // linear-gradient(108.94deg, #16093B 18.43%, #221228 52.22%);
        primary: "#3758F9",
        "blue-dark": "#1B44C8",
        'body-dark': "rgb(24 28 49)",
        secondary: "#13C296",
        "body-color": "#637381",
        "body-secondary": "#8899A8",
        warning: "#FBBF24",
        stroke: "#DFE4EA",
        "gray-1": "#F9FAFB",
        "gray-2": "#F3F4F6",
        "gray-7": "#CED4DA",
        // "gradian1": "#c9d6ff",
        // "gradian2": "#e2e2e2",
        "gradian1": "#fbc2eb",
        "gradian2": "#a6c1ee",
        "dark-1": "#16093B 18.43%",
        "dark-2": "#221228 52.22%",
        'blue-marguerite': {
          '50': '#f5f4fe',
          '100': '#edecfb',
          '200': '#dcdbf9',
          '300': '#c2bef4',
          '400': '#a399ec',
          '500': '#826fe3',
          '600': '#7a5dda',
          '700': '#603ec3',
          '800': '#5033a4',
          '900': '#432c86',
          '950': '#281a5b',
      },
      
       
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
