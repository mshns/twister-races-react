import { FC } from 'react';
import { Box } from '@mui/material';

import { Score } from 'widgets';

export const Leaderboard: FC = () => {
  return (
    <Box component='main' sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Box
        sx={{
          minWidth: 200,
          backgroundColor: 'background.paper',
          margin: 2,
          padding: 2,
        }}
      ></Box>
      <Box
        sx={{
          minWidth: 720,
          margin: 2,
          padding: 2,
          backgroundColor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Score />
      </Box>
      <Box
        sx={{
          minWidth: 200,
          backgroundColor: 'background.paper',
          margin: 2,
          padding: 2,
        }}
      ></Box>
    </Box>
  );
};
