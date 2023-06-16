import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Divider, Link, Paper, Typography } from '@mui/material';

import { Score } from 'widgets';
import { Benefit } from 'entities';
import { BENEFIT_LIST, CHALLENGE_LIST } from 'shared';

export const Leaderboard: FC = () => {
  const { t } = useTranslation(['benefits']);

  return (
    <Box
      component='main'
      sx={{
        width: '100%',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: '20px',
          width: `calc(50% - 360px)`,
          height: '100%',
        }}
      >
        {BENEFIT_LIST.map((benefit) => (
          <Benefit benefit={benefit} key={benefit.title} />
        ))}
      </Box>
      <Paper
        sx={{
          width: '680px',
          padding: '10px 20px',

          backgroundColor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Score />
      </Paper>
      <Box
        sx={{
          position: 'sticky',
          top: '20px',
          width: `calc(50% - 360px)`,
          height: '100%',
        }}
      >
        <Paper
          sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}
        >
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
      </Box>
    </Box>
  );
};
