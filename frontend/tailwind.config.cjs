module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3F51B5', // indigo
        accent: '#7C4DFF', // violet
        sidebar: '#1A2634', // dark navy
        surface: '#F5F7FA', // light gray
      },
    },
  },
  plugins: [],
};
