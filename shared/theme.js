import { css } from 'styled-components';

export const theme = {};
theme.columns = 12;
theme.gutterWidth = 20;
theme.maxWidth = 1170;
theme.breakpoints = {
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200,
};
theme.spacer = 8;
theme.space = [
  0,
  theme.spacer, // 8px
  theme.spacer * 1.5, // 12px
  theme.spacer * 2, // 16px
  theme.spacer * 3, // 24px
  theme.spacer * 4, // 32px
  theme.spacer * 5, // 40px
  theme.spacer * 8, // 64px
  theme.spacer * 12, // 96px
  theme.spacer * 14, // 112px
];
theme.colors = {
  black: '#000',
  grey14: '#222326',
  grey40: '#616467',
  grey55: '#919496',
  grey75: '#C1C3C6',
  grey85: '#D9DADC',
  grey90: '#EFEFEF',
  grey95: '#F8F8F8',
  white: '#fff',
  green: '#1DB954',
  greenHighlight: '#1ED760',
  darkGreen: '#278e40',
  powderGreen: '#C3F0C8',
  blueGreen: '#006450',
  blue: '#509bf5',
  medBlue: '#576bc7',
  darkBlue: '#1e3264',
  purple: '#af2896',
  red: '#eb1e32',
};

theme.ff = 'Circular, Helvetica, Arial, sans-serif';
theme.fontStyle = {
  hero: {
    fontSize: [42, 44, 80, 80],
    lineHeight: 1.1,
    fontWeight: 900,
    letterSpacing: '-0.03em',
  },
  h1: {
    fontSize: [42, 44, 80, 80],
    lineHeight: 1.1,
    fontWeight: 900,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontSize: [32, 40, 42, 48],
    lineHeight: 1,
    fontWeight: 900,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontSize: [32, 40, 48],
    lineHeight: 1.15,
    fontWeight: 900,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontSize: [20, 24, 24, 24],
    lineHeight: 1.5,
    fontWeight: 900,
    letterSpacing: '-0.025em',
  },
  h5: {
    fontSize: [18, 24, 24],
    lineHeight: 1.3,
    fontWeight: 400,
  },
  h6: {
    fontSize: [12],
    lineHeight: 1.5,
    fontWeight: 900,
    letterSpacing: '-0.08em',
  },
  p1: {
    fontSize: [18, 24],
    lineHeight: 1.33334,
    fontWeight: 400,
  },
  p2: {
    fontSize: [16, 18],
    lineHeight: 1.5,
    fontWeight: 400,
  },
  p3: {
    fontSize: [16],
    lineHeight: 1.5,
    fontWeight: 400,
  },
  p4: {
    fontSize: [12],
    lineHeight: 2,
    fontWeight: 400,
  },
  quote: {
    fontSize: [18, 22, 32],
    lineHeight: 1.5,
    fontWeight: 700,
  },
};

theme.buttons = {
  primary: {
    color: theme.colors.white,
    backgroundColor: theme.colors.blue,
  },
  secondary: {
    color: theme.colors.white,
    backgroundColor: theme.colors.green,
  },
  danger: {
    color: theme.colors.white,
    backgroundColor: theme.colors.red,
  },
};

// style-system values
export const themeProvider = {};
themeProvider.breakpoints = [
  `${theme.breakpoints.sm}px`,
  `${theme.breakpoints.md}px`,
  `${theme.breakpoints.lg}px`,
];
themeProvider.space = theme.space;

// iterate through the sizes and create a media template
// usage:
//  ${minWidth.xs`...`}
//  ${maxWidth.sm`...`}

function mediaQuery(prop) {
  return Object.keys(theme.breakpoints).reduce((acc, label) => {
    const query = `${prop}: ${theme.breakpoints[label]}px`;
    acc[label] = (...args) => css`
    @media (${query}) {
      ${css(...args)}
    }
  `;
    return acc;
  }, {});
}

export const minWidth = mediaQuery('min-width');
export const maxWidth = mediaQuery('max-width');
