import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "primary": "#33FF85"
      },
      fontFamily: {
        "inter": "var(--inter)",
        "jarkata": "var(--plus-jarkata)"
      }
    },
  },
  plugins: [],
};
export default config;
