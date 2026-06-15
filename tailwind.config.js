module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Neobrutalism + Glassmorphism Color Palette
        "neon-cyan": "#00F5FF",
        "neon-purple": "#BD00FF",
        "neon-pink": "#FF006E",
        "neon-yellow": "#FFD60A",
        "neon-green": "#39FF14",
        "deep-space": "#0A0E27",
        "space-navy": "#151B3B",
        "glass-white": "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px rgba(0, 0, 0, 1)",
        "brutal-sm": "4px 4px 0px 0px rgba(0, 0, 0, 1)",
        "brutal-lg": "12px 12px 0px 0px rgba(0, 0, 0, 1)",
        "brutal-cyan": "8px 8px 0px 0px rgba(0, 245, 255, 1)",
        "brutal-purple": "8px 8px 0px 0px rgba(189, 0, 255, 1)",
        "brutal-pink": "8px 8px 0px 0px rgba(255, 0, 110, 1)",
        "brutal-yellow": "8px 8px 0px 0px rgba(255, 214, 10, 1)",
        "glow-cyan":
          "0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3)",
        "glow-purple":
          "0 0 20px rgba(189, 0, 255, 0.5), 0 0 40px rgba(189, 0, 255, 0.3)",
        "glow-pink":
          "0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backdropBlur: {
        glass: "10px",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        tilt: {
          "0%, 100%": {
            transform: "rotate(-2deg)",
          },
          "50%": {
            transform: "rotate(2deg)",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        float: "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        tilt: "tilt 3s ease-in-out infinite",
      },
      height: {
        "80vh": "80vh",
      },
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
