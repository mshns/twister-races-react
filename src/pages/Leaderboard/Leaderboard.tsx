import { FC } from 'react';
import { Box, Paper } from '@mui/material';

import { Score } from 'widgets';
import { Benefit } from 'entities';
import { BENEFIT_LIST } from 'shared';

export const Leaderboard: FC = () => {
  return (
    <Box
      component='main'
      sx={{
        width: '100%',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: '20px',
          width: `calc(50% - 360px)`,
          height: '100%',
        }}
      >
        {BENEFIT_LIST.map((benefit) => (
          <Benefit benefit={benefit} />
        ))}
      </Box>
      <Paper
        sx={{
          width: '680px',
          padding: '10px 20px',

          backgroundColor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Score />
      </Paper>
      <Box
        sx={{
          width: `calc(50% - 360px)`,
          padding: '20px',
        }}
      ></Box>
    </Box>
  );
};
