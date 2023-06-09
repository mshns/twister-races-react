import { Box, styled } from '@mui/material';

export const TimeLineWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '4px 10px',
  backgroundColor: theme.palette.background.paper,
  transition: 'ease-in-out 0.25s',

  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
}));
