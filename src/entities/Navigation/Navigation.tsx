import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Toolbar, useTheme } from '@mui/material';

import { NavigationIcon, NavigationItem, NavigationTitle } from './styled';
import { NAVIGATION_LIST } from './constants';

export const Navigation: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Toolbar component='nav'>
      {NAVIGATION_LIST.map((item) => (
        <NavLink
          to={item.path}
          end
          key={item.title}
          style={({ isActive }) => ({
            color: isActive
              ? theme.palette.primary.main
              : theme.palette.text.primary,
            textDecoration: 'none',
          })}
        >
          <NavigationItem>
            <NavigationIcon variant='rounded'>{item.icon}</NavigationIcon>
            <NavigationTitle>{t(item.title)}</NavigationTitle>
          </NavigationItem>
        </NavLink>
      ))}
    </Toolbar>
  );
};
