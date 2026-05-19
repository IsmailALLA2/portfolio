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
        bg: "#080B12",
        surface: "#0D1117",
        "surface-2": "#131920",
        border: "#1E2A38",
        "border-bright": "#2A3A4E",
        accent: "#00D9FF",
        "accent-dim": "#00A8C6",
        "accent-glow": "rgba(0,217,255,0.15)",
        purple: "#7C3AED",
        "purple-glow": "rgba(124,58,237,0.15)",
        amber: "#F59E0B",
        text: "#F0EDE8",
        "text-dim": "#8892A4",
        "text-muted": "#4A5568",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,217,255,0.12) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(13,17,23,0.9) 0%, rgba(19,25,32,0.9) 100%)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
      boxShadow: {
        "glow-accent": "0 0 30px rgba(0,217,255,0.25), 0 0 60px rgba(0,217,255,0.1)",
        "glow-purple": "0 0 30px rgba(124,58,237,0.25), 0 0 60px rgba(124,58,237,0.1)",
        "card": "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
