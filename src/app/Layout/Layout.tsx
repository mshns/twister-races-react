import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../../widgets';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1920px',
        minHeight: '100vh',
        margin: '0 auto',
        backgroundColor: 'background.default',
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
