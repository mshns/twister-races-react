import { FC } from 'react';
import { Toolbar } from '@mui/material';

import { Logo, Navigation, Settings } from './components';

export const Header: FC = () => {
  return (
    <Toolbar component='header' sx={{ backgroundColor: 'background.paper' }}>
      <Logo />
      <Navigation />
      <Settings />
    </Toolbar>
  );
};
