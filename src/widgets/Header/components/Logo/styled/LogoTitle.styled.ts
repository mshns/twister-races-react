import { styled } from '@mui/material';

export const LogoTitle = styled('h1')(({ theme }) => ({
  position: 'relative',
  margin: 0,
  fontFamily: 'Russo One',
  fontSize: 22,
  fontWeight: 400,
  textTransform: 'lowercase',
  color: theme.palette.secondary.main,
}));
