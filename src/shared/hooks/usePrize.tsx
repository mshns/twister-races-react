import { Box, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NETWORK_PRIZES, STORO_PRIZES } from 'shared';

export const usePrize = (
  isNetworkRace: boolean,
  position: number,
  points: number
) => {
  const { t } = useTranslation(['leaderboard']);

  let prize, bonus;

  if (isNetworkRace) {
    position === 1
      ? (prize = STORO_PRIZES.step1)
      : position === 2
      ? (prize = STORO_PRIZES.step2)
      : position === 3
      ? (prize = STORO_PRIZES.step3)
      : position === 4
      ? (prize = STORO_PRIZES.step4)
      : position === 5
      ? (prize = STORO_PRIZES.step5)
      : position === 6
      ? (prize = STORO_PRIZES.step6)
      : position === 7
      ? (prize = STORO_PRIZES.step7)
      : position === 8
      ? (prize = STORO_PRIZES.step8)
      : position === 9
      ? (prize = STORO_PRIZES.step9)
      : position === 10
      ? (prize = STORO_PRIZES.step10)
      : position >= 11 && position < 15
      ? (prize = STORO_PRIZES.step11)
      : position >= 15 && position < 31
      ? (prize = STORO_PRIZES.step12)
      : position >= 31 && position < 50
      ? (prize = STORO_PRIZES.step13)
      : position >= 50 && position < 56
      ? (prize = STORO_PRIZES.step14)
      : (prize = null);

    points >= 100000
      ? (bonus = STORO_PRIZES.bonus100)
      : points >= 50000
      ? (bonus = STORO_PRIZES.bonus50)
      : (bonus = null);
  } else {
    position === 1
      ? (prize = NETWORK_PRIZES.step1)
      : position === 2
      ? (prize = NETWORK_PRIZES.step2)
      : position === 3
      ? (prize = NETWORK_PRIZES.step3)
      : position === 4
      ? (prize = NETWORK_PRIZES.step4)
      : position === 5
      ? (prize = NETWORK_PRIZES.step5)
      : position === 6
      ? (prize = NETWORK_PRIZES.step6)
      : position >= 7 && position < 11
      ? (prize = NETWORK_PRIZES.step7)
      : position >= 11 && position < 26
      ? (prize = NETWORK_PRIZES.step8)
      : position >= 26 && position < 51
      ? (prize = NETWORK_PRIZES.step9)
      : position >= 51 && position < 101
      ? (prize = NETWORK_PRIZES.step10)
      : position >= 101 && position < 151
      ? (prize = NETWORK_PRIZES.step11)
      : position >= 151 && position < 251
      ? (prize = NETWORK_PRIZES.step12)
      : (prize = null);
  }

  return (
    <Box>
      {prize && <Box>{prize}</Box>}

      {bonus && (
        <>
          <Divider sx={{m: 1}} />
          <Box>
            {t('+ Bonus')} {bonus} <br />
            {bonus.slice(0, 1) === '1' ? t('за 50K очков') : t('за 100K очков')}
          </Box>{' '}
        </>
      )}
    </Box>
  );
};
