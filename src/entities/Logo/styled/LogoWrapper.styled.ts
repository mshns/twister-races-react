import { Link, styled } from '@mui/material';

export const LogoWrapper = styled(Link)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  transition: 'ease-in-out 0.25s',

  '&::before': {
    position: 'absolute',
    content: "''",
    left: '-10%',
    top: 0,
    width: '120%',
    height: '100%',
    background: `linear-gradient(to right, transparent 0, ${theme.palette.background.default} 50%, transparent 100%)`,
  },

  '&:hover h2': {
    color: theme.palette.primary.light,
  },
}));
