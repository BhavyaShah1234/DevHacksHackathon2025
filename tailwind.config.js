const plugin = require('tailwindcss/plugin');

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

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
  plugins: [
    borderUtilities,
  ],
};

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
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
    }),
  ],
};
