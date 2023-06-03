import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Toolbar } from '@mui/material';

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <Toolbar
      component='footer'
      sx={{ backgroundColor: 'primary.main', mt: 'auto' }}
    >
      {t('Leaderboard')}
    </Toolbar>
  );
};
