import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup, Typography } from '@mui/material';

import { NAVIGATION_LIST } from './constants';

export const Navigation: FC = () => {
  return (
    <ButtonGroup component='nav'>
      {NAVIGATION_LIST.map((item) => (
        <NavLink to={item.path} key={item.title}>
          <Button variant='contained'>
            {item.icon}
            <Typography>{item.title}</Typography>
          </Button>
        </NavLink>
      ))}
    </ButtonGroup>
  );
};
