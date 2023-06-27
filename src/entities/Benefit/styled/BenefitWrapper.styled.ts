import { Paper, styled } from '@mui/material';

export const BenefitWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  ':not(:last-child)': { marginBottom: '20px' },
  transition: 'ease-in-out 0.25s',

  '&:hover': {
    background: theme.palette.secondary.contrastText,
  },
}));
