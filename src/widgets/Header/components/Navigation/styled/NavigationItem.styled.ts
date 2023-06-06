import { ListItem, styled } from '@mui/material';

export const NavigationItem = styled(ListItem)(({ theme }) => ({
  transition: 'ease-in-out 0.25s',

  '&:hover': {
    color: theme.palette.primary.light,
  },
}));
