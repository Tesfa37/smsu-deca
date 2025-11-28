import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SMSU Brand Colors
        primary: {
          brown: "hsl(var(--primary-brown))",
          gold: "hsl(var(--primary-gold))",
          DEFAULT: "hsl(var(--primary-brown))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Secondary Colors (Accessible)
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        // Neutral Colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        // Typography Scale
        h1: ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }], // 56px
        "h1-mobile": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }], // 40px
        h2: ["3rem", { lineHeight: "1.25", fontWeight: "700" }], // 48px
        "h2-mobile": ["2rem", { lineHeight: "1.25", fontWeight: "700" }], // 32px
        h3: ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }], // 36px
        "h3-mobile": ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }], // 28px
        h4: ["1.875rem", { lineHeight: "1.35", fontWeight: "600" }], // 30px
        "h4-mobile": ["1.5rem", { lineHeight: "1.35", fontWeight: "600" }], // 24px
        h5: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        "h5-mobile": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }], // 20px
        h6: ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }], // 20px
        "h6-mobile": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }], // 18px
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px
        "body-large": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }], // 18px
        "body-small": ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }], // 14px
        caption: ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }], // 12px
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;


