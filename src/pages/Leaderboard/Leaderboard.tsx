import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

export const Leaderboard: FC = () => {
  const { t } = useTranslation();

  return <Box component='main'>{t('storo08 Twister Races')}</Box>;
};
