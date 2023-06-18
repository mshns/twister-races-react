import { FC } from 'react';

import { Box, Paper } from '@mui/material';

import { Promo, Score } from 'widgets';
import { Benefit } from 'entities';
import { BENEFIT_LIST } from 'shared';

import { SidebarWrapper } from './styled/SidebarWrapper.styled';

export const Leaderboard: FC = () => (
  <Box component='main' sx={{ display: 'flex', justifyContent: 'center' }}>
    <SidebarWrapper
      component='section'
      sx={{
        display: { lg: 'block', xs: 'none' },
        width: { xl: 'calc(50% - 390px)', lg: '400px' },
      }}
    >
      {BENEFIT_LIST.map((benefit) => (
        <Benefit benefit={benefit} key={benefit.title} />
      ))}
    </SidebarWrapper>

    <Paper component='section' sx={{ width: 700, margin: '10px' }}>
      <Score />
    </Paper>

    <SidebarWrapper
      component='section'
      sx={{ display: { xl: 'block', xs: 'none' } }}
    >
      <Promo />
    </SidebarWrapper>
  </Box>
);
