import { Paper, styled } from '@mui/material';

export const PromoWrapper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'ease-in-out 0.25s',

  '&:hover': {
    background: theme.palette.secondary.main,
  },
}));
