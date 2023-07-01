import { styled } from '@mui/material';

export const LogoTitle = styled('h2')(({ theme }) => ({
  fontFamily: 'Russo One',
  fontWeight: 400,
  color: theme.palette.primary.main,
  margin: 0,
  lineHeight: .9,
  letterSpacing: 1.1,
  transform: 'skew(-10deg)',
  transition: 'ease-in-out 0.25s',
}));
