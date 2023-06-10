import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Divider,
  Paper,
  Skeleton,
  Tooltip,
  Typography,
} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

import { useAppSelector, useLocalDate, useLocalTime } from 'shared';
import { TimeLineWrapper } from './styled';

export const CurrentTimeTable: FC = () => {
  const { t } = useTranslation(['leaderboard']);
  const time = useAppSelector((state) => state.dataReducer.currentRaceTime);
  const isFetching = useAppSelector((state) => state.dataReducer.isFetching);

  const startRace = useLocalDate(time.start.slice(0, 10)),
    endRace = useLocalDate(time.end.slice(0, 10)),
    lastUpdate = useLocalTime(time?.update);

  return (
    <Paper sx={{ bgcolor: 'background.default' }}>
      <TimeLineWrapper>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title={t('Race start')}>
            <EventAvailableIcon />
          </Tooltip>
          <Typography sx={{ ml: 1 }}>{t('Race start')}</Typography>
        </Box>
        {isFetching ? (
          <Skeleton variant='text' sx={{ fontSize: 16, width: 240 }} />
        ) : (
          <Typography>{startRace}</Typography>
        )}
      </TimeLineWrapper>

      <Divider />

      <TimeLineWrapper>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title={t('Race finish')}>
            <EventBusyIcon />
          </Tooltip>
          <Typography sx={{ ml: 1 }}>{t('Race finish')}</Typography>
        </Box>
        {isFetching ? (
          <Skeleton variant='text' sx={{ fontSize: 16, width: 240 }} />
        ) : (
          <Typography>{endRace}</Typography>
        )}
      </TimeLineWrapper>

      <Divider />

      <TimeLineWrapper>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title={t('Updated')}>
            <EventRepeatIcon />
          </Tooltip>
          <Typography sx={{ ml: 1 }}>{t('Updated')}</Typography>
        </Box>
        {isFetching ? (
          <Skeleton variant='text' sx={{ fontSize: 16, width: 240 }} />
        ) : (
          <Typography>{lastUpdate}</Typography>
        )}
      </TimeLineWrapper>
    </Paper>
  );
};
