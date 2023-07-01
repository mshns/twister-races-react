import { Tabs, styled } from '@mui/material';

export const ScoreTabs = styled(Tabs)(({ theme }) => ({
  '.Mui-selected': {
    backgroundColor: theme.palette.background.default,
  },
}));
