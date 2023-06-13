import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Tab, Tabs } from '@mui/material';

import { ScoreFetching } from 'features';

export const Score: FC = () => {
  const { t } = useTranslation(['leaderboard']);
  const [week, setWeek] = useState('current');

  const handleChange = () => {
    setWeek((prev) => (prev === 'current' ? 'previous' : 'current'));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={week} onChange={handleChange} variant='fullWidth'>
          <Tab value={'current'} label={t('Current leaderboard')} />
          <Tab value={'previous'} label={t('Previous results')} />
        </Tabs>
      </Box>

      <ScoreFetching week={week} />
    </Box>
  );
};
