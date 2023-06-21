import { Box, Typography } from '@mui/material';
import { IPlayerDB } from 'shared';

export const PlayerDataBase = ({ player }: { player: IPlayerDB }) => {
  return (
    <Box>
      <Typography>{player.login}</Typography>
    </Box>
  );
};
