import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Link,
  SvgIcon,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import { ReactComponent as RedStarLogo } from './assets/RedStar.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SocialMediaList } from './components/SocialMediaList/SocialMediaList';

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <Toolbar
      component='footer'
      sx={{
        justifyContent: 'space-between',
        backgroundColor: 'background.paper',
        mt: 'auto',
      }}
    >
      <Box>
        <Typography>{t('storo08 Twister Races')} © 2022</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{t('Supported by')}</Typography>
          <Link
            href='https://c.rsppartners.com/clickthrgh?btag=a_9631b_75l_9'
            sx={{ display: 'flex', textDecoration: 'none' }}
          >
            <Tooltip title={t('RedStar Poker')}>
              <SvgIcon
                viewBox='0 0 36 36'
                sx={{
                  width: 24,
                  height: 24,
                  ml: 1,
                  mr: 1,
                }}
              >
                <RedStarLogo />
              </SvgIcon>
            </Tooltip>
            <Typography>{t('RedStar Poker')}</Typography>
          </Link>
        </Box>
      </Box>

      <SocialMediaList />

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>{t('Developed by')}</Typography>
        <Link
          href='https://github.com/mshns'
          sx={{ display: 'flex', textDecoration: 'none' }}
        >
          <Tooltip title={t('github.con/mshns')}>
            <SvgIcon
              viewBox='0 0 36 36'
              sx={{
                width: 24,
                height: 24,
                ml: 1,
                mr: 1,
              }}
            >
              <GitHubIcon />
            </SvgIcon>
          </Tooltip>
          <Typography>{t('mshns')}</Typography>
        </Link>
      </Box>
    </Toolbar>
  );
};
