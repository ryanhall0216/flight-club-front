// tailwind.config.js
module.exports = {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        brandon_black: ['Brandon Grotesque Black', 'sans-serif'],
        brandon_bold: ['Brandon Grotesque Bold', 'sans-serif'],
        brandon_regular: ['Brandon Grotesque Regular', 'sans-serif'],
      },
      colors: {
        green: '#49a27c',
        red: '#EF4358',
        brown: '#464030',
        nav_black: '#0E1915'
      },
    },
  },
};

