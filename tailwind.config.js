export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#F8F7F2',
        sand: '#E8E0D2',
        terracotta: '#B9684A',
        burgundy: '#432D32',
        sage: { DEFAULT: '#A8B09B', deep: '#5E6852' },
        ink: '#202321',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
