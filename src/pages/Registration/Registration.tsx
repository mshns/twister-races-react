import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GavelIcon from '@mui/icons-material/Gavel';

export const Registration: FC = () => {
  const { t } = useTranslation(['registration']);

  return (
    <Box
      component='main'
      sx={{
        width: '680px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant='h4' sx={{ color: 'primary.main', mt: 4 }}>
        {t('Race registration')}
      </Typography>
      <Divider textAlign='right' sx={{ mb: 2 }}>
        <Avatar variant='rounded'>
          <HowToRegIcon />
        </Avatar>
      </Divider>

      <Paper sx={{ p: 2, m: 2, textAlign: 'center' }}>
        <Typography sx={{ m: 2 }}>{t('registration.part1')}</Typography>
        <Link
          href='https://c.rsppartners.com/clickthrgh?btag=a_9631b_75l_9'
          sx={{ textAlign: 'center' }}
        >
          <Button variant='contained' sx={{ mb: 2 }}>
            {t('Register for redstar')}
          </Button>
        </Link>
      </Paper>

      <Typography sx={{ m: 2 }}>{t('registration.part2')}</Typography>
      <Typography sx={{ m: 2 }}>{t('registration.part3')}</Typography>

      <Typography variant='h4' sx={{ color: 'primary.main', mt: 4 }}>
        {t('Race rules')}
      </Typography>
      <Divider textAlign='right' sx={{ mb: 2 }}>
        <Avatar variant='rounded'>
          <GavelIcon />
        </Avatar>
      </Divider>
      <Typography sx={{ m: 2 }}>{t('rules.part1')}</Typography>
      <Typography sx={{ m: 2 }}>{t('rules.part2')}</Typography>
      <Typography sx={{ m: 2 }}>{t('rules.part3')}</Typography>
      <Typography sx={{ m: 2, mb: 4 }}>{t('rules.part4')}</Typography>
    </Box>
  );
};
