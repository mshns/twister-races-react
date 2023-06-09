import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Paper, Tooltip, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

import { IRaceTime, useLocalDate, useLocalTime } from 'shared';
import { TimeLineWrapper } from './styled';

interface ICurrentTimeTable {
  time: IRaceTime | undefined;
}

export const CurrentTimeTable: FC<ICurrentTimeTable> = ({ time }) => {
  const { t } = useTranslation(['leaderboard']);

  return (
    <Paper sx={{ bgcolor: 'background.default' }}>
      <TimeLineWrapper>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title={t('Race start')}>
            <EventAvailableIcon />
          </Tooltip>
          <Typography sx={{ ml: 1 }}>{t('Race start')}</Typography>
        </Box>
        <Typography>{useLocalDate(time?.start)}</Typography>
      </TimeLineWrapper>

      <Divider />

      <TimeLineWrapper>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title={t('Race finish')}>
            <EventBusyIcon />
          </Tooltip>
          <Typography sx={{ ml: 1 }}>{t('Race finish')}</Typography>
        </Box>
        <Typography>{useLocalDate(time?.end.slice(0, 10))}</Typography>
      </TimeLineWrapper>

      <Divider />

      <TimeLineWrapper>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title={t('Updated')}>
            <EventRepeatIcon />
          </Tooltip>
          <Typography sx={{ ml: 1 }}>{t('Updated')}</Typography>
        </Box>
        <Typography>{useLocalTime(time?.update)}</Typography>
      </TimeLineWrapper>
    </Paper>
  );
};
