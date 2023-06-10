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
    ? theme.palette.info.light
    : theme.palette.info.dark,
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
}));
