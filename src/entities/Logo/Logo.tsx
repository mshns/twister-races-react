import { FC } from 'react';
import { Box } from '@mui/material';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

import { LogoIcon, LogoTitle, LogoWrapper } from './styled';

export const Logo: FC = () => {
  return (
    <LogoWrapper href='/twister-races-new'>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LogoIcon variant='rounded'>
          <SportsScoreIcon />
        </LogoIcon>
        <LogoTitle sx={{ fontSize: 32 }}>storo08</LogoTitle>
      </Box>
      <Box sx={{ display: 'flex', textTransform: 'uppercase' }}>
        <LogoTitle sx={{ fontSize: 24, marginLeft: '5px' }}>Twister</LogoTitle>
        <LogoTitle sx={{ fontSize: 18, marginLeft: '5px' }}>Races</LogoTitle>
      </Box>
    </LogoWrapper>
  );
};
