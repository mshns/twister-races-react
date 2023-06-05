import { styled } from '@mui/material';

export const LogoTitle = styled('h1')(({ theme }) => ({
  position: 'relative',
  margin: 0,
  fontFamily: 'Russo One',
  fontSize: 22,
  fontWeight: 400,
  color: theme.palette.primary.main,
  transition: 'ease-in-out 0.3s'
}));
