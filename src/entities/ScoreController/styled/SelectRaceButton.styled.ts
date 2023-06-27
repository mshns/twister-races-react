import { Button, styled } from '@mui/material';

export const SelectRaceButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isNetworkRace',
})<{ isNetworkRace: boolean }>(({ theme, isNetworkRace }) => ({
  color: isNetworkRace
    ? theme.palette.text.secondary
    : theme.palette.primary.main,

  backgroundColor: isNetworkRace
    ? theme.palette.background.paper
    : theme.palette.background.default,

  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: '10px',
  },

  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
}));
