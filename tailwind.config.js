// tailwind.config.js
module.exports = {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        brandonBlack: ['Brandon Grotesque Black', 'sans-serif'],
        bobrandonBold: ['Brandon Grotesque Bold', 'sans-serif'],
        brandonRegular: ['Brandon Grotesque Regular', 'sans-serif'],
      },
      colors: {
        green: '#49a27c',
        red: '#EF4358',
        brown: '#464030'
      },
    },
  },
};

