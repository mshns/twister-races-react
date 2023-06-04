import { FC } from 'react';
import { Toolbar } from '@mui/material';
import { Logo } from './components';

export const Header: FC = () => {
  return (
    <Toolbar component='header' sx={{ backgroundColor: 'background.paper'}}>
      <Logo />
    </Toolbar>
  );
};
