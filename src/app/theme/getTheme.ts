import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#66bb6a',
            contrastText: '#FFF',
          },
          divider: '#000',
          background: {
            default: '#e0e4ea',
            paper: '#d1d5dc',
          },
          text: {
            primary: '#0d0d4c',
            secondary: '#66bb6a',
          },
        }
      : {
          // palette values for dark mode
          divider: '#000',
          background: {
            default: '#000',
            paper: '#000',
          },
          text: {
            primary: '#fff',
            secondary: '#000',
          },
        }),
  },
  typography: {
    fontFamily: 'Russo One',
  },
});
