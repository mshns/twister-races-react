import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Divider, Link, Paper, Typography } from '@mui/material';

import { Benefit } from 'entities';
import { CHALLENGE_LIST } from 'shared';

export const Promo: FC = () => {
  const { t } = useTranslation(['benefits']);

  return (
    <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant='h5'
        sx={{
          margin: '10px',
          color: 'primary.main',
          textAlign: 'center',
        }}
      >
        {t('challenges.title')}
      </Typography>
      <Divider>
        <Typography
          sx={{
            fontSize: '12px',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          {t('challenges.subtitle')}
        </Typography>
      </Divider>
      <Typography variant='body2' sx={{ margin: '10px 0' }}>
        {t('challenges.description')}
      </Typography>
      {CHALLENGE_LIST.map((benefit) => (
        <Benefit benefit={benefit} key={benefit.title} />
      ))}
      <Link href={''} sx={{ textAlign: 'center' }}>
        <Button variant='contained' color='warning'>
          {t('challenges.button')}
        </Button>
      </Link>
    </Paper>
  );
};
