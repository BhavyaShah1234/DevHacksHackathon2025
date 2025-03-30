const plugin = require('tailwindcss/plugin');
const { cva } = require('class-variance-authority');

const borderUtilities = plugin(function ({ addUtilities, e, variants }) {
  addUtilities(
    {
      [`.${e('border-border')}`]: {
        borderColor: 'hsl(var(--border))',
      },
    },
    variants('borderColor')
  );
});

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", // Added transition-transform and duration
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:animate-pop", // Added hover:scale-105 and hover:animate-pop
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 hover:animate-pop",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:animate-pop",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 hover:animate-pop",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:animate-pop",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 hover:animate-pop",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        prosthetic: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        destructive: 'hsl(var(--destructive))',
        
        // 'dark-border': 'hsl(var(--dark-border))',
        // 'dark-background': 'hsl(var(--dark-background))',
        // 'dark-foreground': 'hsl(var(--dark-foreground))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
      },
      boxShadow: {
        smooth: '0 2px 4px rgba(0, 0, 0, 0.1)',
        hover: '0 4px 8px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.border-border': {
          borderColor: 'hsl(var(--border))',
        },
      });
    }
    ),
  ],
};

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function App() {
  return (
    <button className={cn(buttonVariants({ variant: "default", size: "default" }))}>
      Hover Me
    </button>
  );
}
