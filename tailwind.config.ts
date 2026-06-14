import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep charcoal — primary dark surface and heading colour
        ink: {
          DEFAULT: "#1E1D1B",
          soft: "#2B2A27",
        },
        // Warm off-white — primary background
        paper: "#FAF8F4",
        // Soft grey — section backgrounds, dividers
        mist: "#ECE8E1",
        // Muted stone — secondary text, borders
        stone: {
          DEFAULT: "#A39A8D",
          dark: "#7D7567",
        },
        // Warm dark grey — body copy
        slate: "#4A4540",
        // Warm clay accent — CTAs, highlights
        clay: {
          DEFAULT: "#B6764A",
          dark: "#9C6038",
          light: "#D9B79A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
