import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';

interface IScoreController {
  SetNetworkRace: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<number>>;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  setUpdateScore: Dispatch<SetStateAction<boolean>>;
}

export const ScoreController: FC<IScoreController> = ({
  SetNetworkRace,
  setPage,
  setRowsPerPage,
  setUpdateScore,
}) => {
  const { t } = useTranslation(['leaderboard']);

  const handleToogleRace = () => {
    SetNetworkRace((prev) => !prev);
    setPage(0);
    setRowsPerPage(55);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', m: 1 }}>
      <FormControlLabel
        sx={{ margin: 0 }}
        control={<Switch />}
        label={
          <Typography
            sx={{
              color: 'primary.main',
              textTransform: 'uppercase',
              fontSize: 14,
            }}
          >
            {t('Network race')}
          </Typography>
        }
        labelPlacement='start'
        onChange={handleToogleRace}
      />
      <FormControlLabel
        sx={{ '&:hover svg': { transform: 'rotate(180deg)' } }}
        control={
          <Button
            variant='contained'
            sx={{ ml: 1, height: 24, backgroundColor: 'primary.light' }}
          >
            <CachedIcon sx={{ transition: 'ease-in-out 0.3s' }} />
          </Button>
        }
        label={
          <Typography
            sx={{
              color: 'primary.main',
              textTransform: 'uppercase',
              fontSize: 14,
            }}
          >
            {t('Update')}
          </Typography>
        }
        labelPlacement='start'
        onClick={() => setUpdateScore(true)}
      />
    </Box>
  );
};
