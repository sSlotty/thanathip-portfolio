const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Clay palette — see src/index.css for the CSS custom properties
        violet: "#7C6CF5",
        pink: "#FF7B9C",
        mint: "#35CBB8",
        amber: "#FFB547",
        sky: "#4CC2F0",
        ink: "#2A2350",
        "ink-dim": "#6F68A0",
        "ink-faint": "#A49EC7",
        surface: "#FFFFFF",
        "surface-2": "#F7F5FF",
        clay: "#EEF0FF",
      },
      fontFamily: {
        display: ["Nunito", "ui-rounded", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        clay: "34px",
        "clay-sm": "20px",
      },
      boxShadow: {
        clay: "22px 26px 48px -18px rgba(124, 108, 245, 0.42), inset -7px -9px 18px -8px rgba(124, 108, 245, 0.28), inset 8px 10px 20px -6px rgba(255, 255, 255, 0.95)",
        "clay-sm":
          "10px 14px 26px -12px rgba(124, 108, 245, 0.5), inset -4px -5px 12px -5px rgba(124, 108, 245, 0.28), inset 5px 6px 14px -5px rgba(255, 255, 255, 1)",
        "clay-press":
          "inset 6px 8px 16px -6px rgba(124, 108, 245, 0.45), inset -4px -4px 12px -6px rgba(255, 255, 255, 0.9)",
      },
      keyframes: {
        "float-z": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -22px, 0)" },
        },
        "clay-drift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "float-z": "float-z 7s ease-in-out infinite",
        "clay-drift": "clay-drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    // Tailwind 3.3 ships no 3D-transform utilities; these are the ones the
    // clay system actually uses.
    plugin(({ addUtilities }) => {
      addUtilities({
        ".perspective-near": { perspective: "800px" },
        ".perspective-mid": { perspective: "1200px" },
        ".perspective-far": { perspective: "1800px" },
        ".preserve-3d": { "transform-style": "preserve-3d" },
        ".backface-hidden": { "backface-visibility": "hidden" },
        ".translate-z-0": { transform: "translateZ(0)" },
        ".translate-z-12": { transform: "translateZ(12px)" },
        ".translate-z-24": { transform: "translateZ(24px)" },
      });
    }),
  ],
};
