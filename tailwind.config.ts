import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgGradient: "var(--background-color)",
      },
    },
    colors: {
      primary: "var(--primary-color)",
      primaryBorder: "var(--primary-border)",
      secondaryBorder: "var(--secondary-color)",
      secondary: "var(--secondary-color)",
    },
  },
  plugins: [],
};
export default config;
