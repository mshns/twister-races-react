import { Paper, styled } from '@mui/material';
import { IPlayer } from 'shared';

export const TableLineWrapper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'player',
})<{ player: IPlayer }>(({ theme, player }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  backgroundColor: player.isAffiliate
    ? theme.palette.success.light
    : player.position % 2
    ? theme.palette.secondary.main
    : theme.palette.secondary.contrastText,
  transition: 'ease-in-out 0.2s',

  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
}));
