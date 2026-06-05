import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        axis: {
          ink: "#08264b",
          graphite: "#3e4d63",
          teal: "#0a3766",
          forest: "#08264b",
          sage: "#e7edf4",
          linen: "#faf8f3",
          mist: "#eef4f8",
          gold: "#d39b2d"
        }
      },
      boxShadow: {
        soft: "0 18px 55px rgba(29, 42, 47, 0.1)",
        button: "0 10px 24px rgba(8, 38, 75, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
