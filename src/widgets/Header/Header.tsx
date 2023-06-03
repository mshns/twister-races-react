import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Toolbar } from '@mui/material';

export const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <Toolbar component="header"  sx={{ backgroundColor: 'primary.main' }}>
      {t('Leaderboard')}
    </Toolbar>
  );
};
