import { Box, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import { Navigation, Settings } from 'entities';
import { FC, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const BurgerMenu: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => (prev === true ? false : true));
  };

  return (
    <>
      <IconButton color='primary' sx={{ zIndex: 2000 }} onClick={toggleMenu}>
        {isMenuOpen ? (
          <CloseIcon fontSize='large' />
        ) : (
          <MenuIcon fontSize='large' />
        )}
      </IconButton>

      <Drawer anchor='right' open={isMenuOpen} onClose={toggleMenu}>
        <Box sx={{ textAlign: 'center' }}>
          <Toolbar />
          <Navigation />
          <Divider sx={{ margin: '20px' }} />
          <Settings />
        </Box>
      </Drawer>
    </>
  );
};
