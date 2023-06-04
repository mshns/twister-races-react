import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, SvgIcon, Typography } from '@mui/material';

import { ReactComponent as FinishIcon } from './assets/finish.svg';

import { LogoWrapper } from './styled/LogoWrapper.styled';
import { LogoTitle } from './styled/LogoTitle.styled';

export const Logo: FC = () => {
  const { t } = useTranslation();

  return (
    <Link href='/' sx={{ textDecoration: 'none' }}>
      <LogoWrapper>
        <SvgIcon
          viewBox='0 0 128 128'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 56,
            height: 56,
            zIndex: 2000,
          }}
        >
          <FinishIcon />
        </SvgIcon>
        <LogoTitle>{t('storo08 Twister Races')}</LogoTitle>
        <Typography
          component='h2'
          sx={{
            position: 'relative',
            mt: -1,
            color: 'white',
            fontSize: 14,
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
        >
          {t('Leaderboard')}
        </Typography>
      </LogoWrapper>
    </Link>
  );
};
