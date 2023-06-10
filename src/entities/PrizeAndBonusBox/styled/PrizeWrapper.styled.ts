import { Box, styled } from '@mui/material';

export const PrizeWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  '&::before': {
    position: 'absolute',
    content: "''",
    left: '-10%',
    top: 0,
    width: '120%',
    height: '100%',
    background: `linear-gradient(to right, transparent 0, ${theme.palette.success.main} 50%, transparent 100%)`,
    opacity: 0.75,
  },
}));
