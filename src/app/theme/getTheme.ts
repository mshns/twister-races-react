import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#CC4800',
            contrastText: '#FFF',
          },
          secondary: {
            main: '#CCD6DD',
            light: '#bdecb6',
            contrastText: '#E1E8ED',
          },
          background: {
            default: '#FFF',
            paper: '#F3F6F9',
          },
          text: {
            primary: '#0C1929',
            secondary: '#405060',
          },
          success: {
            main: '#66BB6A',
            light: '#E2F7DF',
          },
          divider: '#CDD2D7',
        }
      : {
          primary: {
            main: '#CC4800',
            contrastText: '#FFF',
          },
          secondary: {
            main: '#041020',
            light: '#2F5D96',
            contrastText: '#0a264c',
          },
          background: {
            default: '#041E3C',
            paper: '#091B2F',
          },
          text: {
            primary: '#B3BAC2',
            secondary: '#B3BAC2',
          },
          success: {
            main: '#66BB6A',
            light: '#253128',
          },
          divider: '#2F5D96',
        }),
  },
  typography: {
    fontFamily: 'Russo One',
  },
});
