import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AF52DE",
      },
      fontFamily: {
        neue: ["var(--font-neue-machina)"],
        apfel: ["var(--font-apfel)"],
      },
      animation: {
        slideIn: "slideIn 1s ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-200px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
