import { FC } from 'react';
import { Toolbar, useMediaQuery, useTheme } from '@mui/material';

import { Logo, Navigation, Settings } from 'entities';
import { BurgerMenu } from 'widgets';

export const Header: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Toolbar
      component='header'
      sx={{
        backgroundColor: 'secondary.main',
        justifyContent: 'space-between',
      }}
    >
      <Logo />
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <>
          <Navigation />
          <Settings />
        </>
      )}
    </Toolbar>
  );
};
