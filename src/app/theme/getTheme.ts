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
            main: '#cc4800',
            contrastText: '#fff',
          },
          background: {
            default: '#eceeeb',
            paper: '#d1d5dc',
          },
          text: {
            primary: '#1c1c1c',
            secondary: '#fff',
          },
          divider: '#000',
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
            default: '#eceeeb',
            paper: '#d1d5dc',
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
