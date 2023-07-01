import { Box, styled } from '@mui/material';

export const PrizeWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(to right, transparent 0,
    ${theme.palette.secondary.light} 50%,
    transparent 100%)`,
}));
