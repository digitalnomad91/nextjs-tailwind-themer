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
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        elevated: "var(--color-elevated)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
