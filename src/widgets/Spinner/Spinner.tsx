import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, LinearProgress, Typography } from '@mui/material';

export const Spinner = () => {
  const { t } = useTranslation(['leaderboard']);

  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {
    ('');
  });

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography sx={{ color: 'primary.main' }}>{t('Loading...')}</Typography>
      <Box sx={{ width: '60%', m: 2 }}>
        <LinearProgress
          variant='buffer'
          value={progress}
          valueBuffer={buffer}
        />
      </Box>
      <Typography sx={{ color: 'primary.light' }}>
        {t('Please wait...')}
      </Typography>
    </Box>
  );
};
