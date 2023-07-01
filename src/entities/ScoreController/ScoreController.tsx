import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import RefreshIcon from '@mui/icons-material/Refresh';

import { ScoreControllerWrapper, SelectRaceButton } from './styled';

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
    <ScoreControllerWrapper>
      <SelectRaceButton
        isNetworkRace={isNetworkRace}
        variant='outlined'
        startIcon={<FormatListNumberedIcon />}
        onClick={() => handleToogleRace('private')}
      >
        {t('Private race')}
      </SelectRaceButton>

      <SelectRaceButton
        isNetworkRace={!isNetworkRace}
        variant='outlined'
        startIcon={<FormatListNumberedIcon />}
        onClick={() => handleToogleRace('network')}
      >
        {t('Network race')}
      </SelectRaceButton>

      <Button
        sx={{ width: { xs: '100%', md: '30%' }, color: 'text.secondary' }}
        variant='outlined'
        endIcon={<RefreshIcon />}
        onClick={() => setUpdateScore(true)}
      >
        {t('Update')}
      </Button>
    </ScoreControllerWrapper>
  );
};
