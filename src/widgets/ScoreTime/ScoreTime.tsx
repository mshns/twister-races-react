import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Divider,
  Paper,
  Skeleton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

import { useAppSelector, useLocalDate, useLocalTime } from 'shared';

import { TimeLineWrapper } from './styled';

export const ScoreTime: FC = () => {
  const { t } = useTranslation(['leaderboard']);
  const time = useAppSelector((state) => state.dataReducer.raceTime);
  const isFetching = useAppSelector((state) => state.dataReducer.isFetching);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const startRace = useLocalDate(time.start.slice(0, 10)),
    endRace = useLocalDate(time.end.slice(0, 10)),
    lastUpdate = useLocalTime(time?.update);

  return (
    <Paper sx={{ bgcolor: 'background.default' }}>
      <TimeLineWrapper>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Tooltip title={t('Race start')}>
            <EventAvailableIcon />
          </Tooltip>
          <Typography sx={{ ml: 1, fontSize: 14 }}>
            {t(isMobile ? 'Start' : 'Race start')}
          </Typography>
        </Box>
        {isFetching ? (
          <Skeleton variant='text' sx={{ fontSize: 16, width: '60%' }} />
        ) : (
          <Typography variant='body2'>{startRace}</Typography>
        )}
      </TimeLineWrapper>

      <Divider />

      <TimeLineWrapper>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Tooltip title={t('Race finish')}>
            <EventBusyIcon />
          </Tooltip>

          <Typography sx={{ ml: 1, fontSize: 14 }}>
            {t(isMobile ? 'Finish' : 'Race finish')}
          </Typography>
        </Box>
        {isFetching ? (
          <Skeleton variant='text' sx={{ fontSize: 16, width: '60%' }} />
        ) : (
          <Typography variant='body2'>{endRace}</Typography>
        )}
      </TimeLineWrapper>

      <Divider />

      <TimeLineWrapper>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Tooltip title={t('Updated')}>
            <EventRepeatIcon />
          </Tooltip>
          <Typography sx={{ ml: 1, fontSize: 14 }}>{t('Updated')}</Typography>
        </Box>
        {isFetching ? (
          <Skeleton variant='text' sx={{ fontSize: 16, width: '60%' }} />
        ) : (
          <Typography variant='body2'>{lastUpdate}</Typography>
        )}
      </TimeLineWrapper>
    </Paper>
  );
};
