import { Box, styled } from '@mui/material';

export const LogoWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  minWidth: 300,
  textAlign: 'right',

  '&:before': {
    position: 'absolute',
    content: "''",
    left: 10,
    top: 26,
    width: '100%',
    height: 18,
    background: 'linear-gradient(to right, black 0%, transparent 100%)',
  },

  '&:after': {
    position: 'absolute',
    content: "''",
    left: 10,
    top: 34,
    width: '100%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderImage: `linear-gradient(to right, ${theme.palette.background.default} 0%, transparent 60%) 10`,
  },
}));
