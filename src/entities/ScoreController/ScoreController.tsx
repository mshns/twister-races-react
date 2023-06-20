import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import RefreshIcon from '@mui/icons-material/Refresh';

interface IScoreController {
  isNetworkRace: boolean;
  SetNetworkRace: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<number>>;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  setUpdateScore: Dispatch<SetStateAction<boolean>>;
}

export const ScoreController: FC<IScoreController> = ({
  isNetworkRace,
  SetNetworkRace,
  setPage,
  setRowsPerPage,
  setUpdateScore,
}) => {
  const { t } = useTranslation(['leaderboard']);

  const handleToogleRace = (race: string) => {
    SetNetworkRace(race === 'network' ? true : false);
    setPage(0);
    setRowsPerPage(55);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '10px 0',
      }}
    >
      <Button
        sx={{
          width: { xs: '100%', md: '30%' },
          marginBottom: { xs: '10px', md: 0 },
          color: isNetworkRace ? 'secondary.main' : 'primary.main',
        }}
        variant='outlined'
        startIcon={<FormatListNumberedIcon />}
        onClick={() => handleToogleRace('private')}
      >
        {t('Private race')}
      </Button>
      <Button
        sx={{
          width: { xs: '100%', md: '30%' },
          marginBottom: { xs: '10px', md: 0 },
          color: isNetworkRace ? 'primary.main' : 'secondary.main',
        }}
        variant='outlined'
        startIcon={<FormatListNumberedIcon />}
        onClick={() => handleToogleRace('network')}
      >
        {t('Network race')}
      </Button>
      <Button
        sx={{ width: { xs: '100%', md: '30%' }, color: 'secondary.main' }}
        variant='outlined'
        endIcon={<RefreshIcon />}
        onClick={() => setUpdateScore(true)}
      >
        {t('Update')}
      </Button>
    </Box>
  );
};
