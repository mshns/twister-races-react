import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

import { ScoreFetching } from 'features';

import { ScoreTab, ScoreTabs } from './styled';

export const Score: FC = () => {
  const { t } = useTranslation(['leaderboard']);
  const [week, setWeek] = useState('current');

  const handleChange = () => {
    setWeek((prev) => (prev === 'current' ? 'previous' : 'current'));
  };

  return (
    <Box sx={{ padding: '10px 20px' }}>
      <ScoreTabs value={week} onChange={handleChange} variant='fullWidth'>
        <ScoreTab value={'current'} label={t('Current leaderboard')} />
        <ScoreTab value={'previous'} label={t('Previous results')} />
      </ScoreTabs>

      <ScoreFetching week={week} />
    </Box>
  );
};
