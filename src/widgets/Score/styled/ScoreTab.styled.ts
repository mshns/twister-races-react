import { Tab, styled } from '@mui/material';

export const ScoreTab = styled(Tab)(({ theme }) => ({
  transition: 'ease-in-out 0.25s',

  ':hover': {
    color: theme.palette.primary.light,
  },
}));
