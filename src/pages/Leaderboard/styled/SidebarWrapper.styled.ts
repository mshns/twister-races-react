import { Box, styled } from '@mui/material';

export const SidebarWrapper = styled(Box)(() => ({
  position: 'sticky',
  top: '20px',
  width: 'calc(50% - 390px)',
  height: '100%',
  margin: '10px',
}));
