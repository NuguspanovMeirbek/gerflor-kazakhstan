import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gerflor: {
          navy: "rgb(var(--gf-navy) / <alpha-value>)",
          accent: "rgb(var(--gf-accent) / <alpha-value>)",
          teal: "#2A4164",
        },
        surface: "rgb(var(--gf-surface) / <alpha-value>)",
        ink: "rgb(var(--gf-ink) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      minHeight: {
        tap: "44px",
      },
      minWidth: {
        tap: "44px",
      },
    },
  },
  plugins: [],
};

export default config;
