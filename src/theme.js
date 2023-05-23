import { createTheme } from '@theme-ui/core';

const theme = createTheme({
  colors: {
    text: '#333',
    background: '#f7f7f7',
    primary: '#007bff',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  fontSizes: [14, 16, 18, 20, 24, 32],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: [5, 6],
      mt: 4,
      mb: 3,
    },
    p: {
      mt: 0,
      mb: 3,
    },
  },
});

export default theme;