import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        terracotta: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#c86d51",
          600: "#b85438",
          700: "#9c3f27",
          800: "#7c3320",
          900: "#652c1d",
        },
        indigoCraft: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#4338ca",
          600: "#3730a3",
          700: "#312e81",
          900: "#1e1b4b",
        },
        saffron: {
          50: "#fffbeb",
          100: "#fef3c7",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
        floating: "0 20px 40px -15px rgba(184, 84, 56, 0.2)",
      }
    },
  },
  plugins: [],
};

export default config;
