import { Box, styled } from '@mui/material';

export const LogoWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: 314,
  textAlign: 'right',
  transition: 'ease-in-out 0.2s',

  '&:before': {
    position: 'absolute',
    content: "''",
    left: 10,
    top: 26,
    width: 304,
    height: 18,
    background: `linear-gradient(to right, ${theme.palette.text.primary} 0%, transparent 100%)`,
  },

  '&:after': {
    position: 'absolute',
    content: "''",
    left: 10,
    top: 34,
    width: 140,
    height: 2,
    backgroundImage: `linear-gradient(90deg, transparent, transparent 60%, ${theme.palette.background.paper} 50%)`,
    backgroundSize: 20,
  },

  '&:hover h1': {
    color: theme.palette.primary.light,
  }


}));
