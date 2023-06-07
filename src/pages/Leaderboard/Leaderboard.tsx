import { FC } from 'react';
import { Box } from '@mui/material';

import { Score } from 'widgets';

export const Leaderboard: FC = () => {
  return (
    <Box component='main' sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '20%' }}></Box>
      <Box
        sx={{
          width: '50%',
          margin: 2,
          padding: 2,
          backgroundColor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Score />
      </Box>
      <Box sx={{ width: '20%' }}></Box>
    </Box>
  );
};
