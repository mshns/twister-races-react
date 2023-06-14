import { FC } from 'react';
import { Toolbar } from '@mui/material';

import { Logo, Navigation, Settings } from 'entities';

export const Header: FC = () => {
  return (
    <Toolbar
      component='header'
      sx={{
        backgroundColor: 'background.paper',
        justifyContent: 'space-between',
      }}
    >
      <Logo />
      <Navigation />
      <Settings />
    </Toolbar>
  );
};
