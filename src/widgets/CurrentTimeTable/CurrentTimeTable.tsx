import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Paper, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

import { IRaceTime, useLocalDate, useLocalTime } from 'shared';

export const CurrentTimeTable: FC<{ time: IRaceTime }> = ({ time }) => {
  const { t } = useTranslation(['leaderboard']);
  return (
    <Paper sx={{ bgcolor: 'background.default'}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <EventAvailableIcon />
          <Typography sx={{ ml: 1 }}>{t('Race start')}</Typography>
        </Box>
        <Typography>{useLocalDate(time.start)}</Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <EventBusyIcon />
          <Typography sx={{ ml: 1 }}>{t('Race finish')}</Typography>
        </Box>
        <Typography>{useLocalDate(time.end.slice(0, 10))}</Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <EventRepeatIcon />
          <Typography sx={{ ml: 1 }}>{t('Updated')}</Typography>
        </Box>
        <Typography>{useLocalTime(time.update)}</Typography>
      </Box>
    </Paper>
  );
};
