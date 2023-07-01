import { Avatar, styled } from '@mui/material';

export const NavigationIcon = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 24,
  marginRight: 10,
  color: 'inherit',
  backgroundColor: theme.palette.background.default,
  transform: 'skew(-10deg)',
}));
