import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, PaletteMode } from '@mui/material';

import { Layout } from './Layout/Layout';
import { Leaderboard, Login, Prizes, Registration } from '../pages';
import { ColorModeContext } from './theme/colorModeContext';
import { getTheme } from './theme/getTheme';

const App = () => {
  const currentMode: PaletteMode =
    localStorage.getItem('mode') === 'dark' ? 'dark' : 'light';
  const [mode, setMode] = useState<PaletteMode>(currentMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/twister-races-new' element={<Layout />}>
            <Route index element={<Leaderboard />} />
            <Route path='registration' element={<Registration />} />
            <Route path='prizes' element={<Prizes />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
