import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../../widgets';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
        color: 'text.primary'
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
