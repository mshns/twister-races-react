import { Avatar, styled } from '@mui/material';

export const LogoIcon = styled(Avatar)(({ theme }) => ({
  width: 36,
  height: 24,
  marginRight: 5,
  marginBottom: 2,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  transform: 'skew(-10deg)',
}));
