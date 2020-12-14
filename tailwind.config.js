module.exports = {
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif', 'helvetica'],
      inter: ['Inter', 'sans-serif', 'helvetica'],
    },
    extend: {
      colors: {
        cleverDarkGray: '#707B94',
        cleverLighterGray: '#8B94AA',
        cleverBody: '#79889E',
        cleverDark400: '#09223D',
        cleverDark500: '#01152B',
        cleverIndigo500: '#3967D4',
        cleverBlue500: '#0B91DF',
        cleverBlueDisabled: '#C0D3E7',
      },
      boxShadow: {
        cleverBox: '0px 34.8px 34.8px rgba(144, 150, 179, 0.15)',
      },
      letterSpacing: {
        cleverTight: '-0.005em',
        medium: '0.08em',
      },
      fontSize: {
        tiny: '0.625rem', // 10px
        larger: '2rem', // 32px
        medium: '1.375rem', // 22px
        '28': '1.75rem', // 28px
        '36': '2.25rem', // 36px
      },
      lineHeight: {
        realTight: '0.5',
        cozy: '0.85',
        oneTwo: '1.2',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: [
    './src/**/*.js',
  ],
}