import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#C4222B", dark: "#9E1A22", soft: "#FCE9EA" },
        ink: { DEFAULT: "#1A1740", soft: "#4B4872" },
        haldi: "#F4B223",
        mist: "#F6F5FA",
        line: "#E4E2EE",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "system-ui", "sans-serif"],
        body: ["Hind", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
