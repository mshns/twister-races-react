import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Divider,
  Link,
  SvgIcon,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { ReactComponent as RedStarLogo } from './assets/RedStar.svg';
import { SocialMediaList } from 'entities';
import { PROMO_LINKS } from 'shared';

export const Footer: FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Toolbar
      component='footer'
      sx={{
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-around',
        backgroundColor: 'secondary.main',
        marginTop: 'auto',
      }}
    >
      <Box sx={{ textAlign: 'center', margin: isMobile ? '20px 0' : 0 }}>
        <Typography>{t('storo08 Twister Races')} © 2022</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{t('Supported by')}</Typography>
          <Link
            href={PROMO_LINKS.redstar}
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

      <Divider orientation='horizontal' flexItem />

      <SocialMediaList />

      <Divider orientation='horizontal' flexItem />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          margin: isMobile ? '20px 0' : 0,
        }}
      >
        <Typography>{t('Developed by')}</Typography>
        <Link
          href='https://github.com/mshns/twister-races-react'
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
