module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 12px 6px rgba(255, 255, 255, 1)',
          },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};