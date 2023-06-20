import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#cc4800',
            contrastText: '#fff',
          },
          secondary: {
            main: '#505050',
            contrastText: '#000',
          },
          background: {
            default: '#eceeeb',
            paper: '#d1d5dc',
          },
          success: {
            main: '#31C39750',
          },
          info: {
            main: '#FFA270',
            light: '#FFA27010',
            dark: '#FFA27050',
          },
          text: {
            primary: '#1c1c1c',
            secondary: '#505050',
          },
          divider: '#bbb',
        }
      : {
          primary: {
            main: '#cc4800',
            contrastText: '#fff',
          },
          secondary: {
            main: '#cc4800',
            contrastText: '#fff',
          },
          background: {
            default: '#000',
            paper: '#000',
          },
          text: {
            primary: '#1c1c1c',
            secondary: '#fff',
          },
          divider: '#000',
        }),
  },
  typography: {
    fontFamily: 'Russo One',
  },
});
