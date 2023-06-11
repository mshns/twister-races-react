import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Typography } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { PrizeWrapper } from './styled/PrizeWrapper.styled';
import { IPlayer } from 'shared';

interface IPrizeAndBonusBox {
  player: IPlayer;
}

export const PrizeAndBonusBox: FC<IPrizeAndBonusBox> = ({ player }) => {
  const { t } = useTranslation(['leaderboard']);

  return (
    <Box>
      {player.prize && (
        <PrizeWrapper>
          <ConfirmationNumberIcon
            sx={{
              mr: 0.3,
              color: 'primary.light',
            }}
          />
          <Typography sx={{ fontSize: 14 }}>{player.prize}</Typography>
        </PrizeWrapper>
      )}

      {player.bonus && (
        <>
          <Divider />
          <PrizeWrapper>
            <LocalActivityIcon
              sx={{
                mr: 0.3,
                color: 'primary.light',
                position: 'absolute',
                left: -26,
              }}
            />
            <Typography sx={{ fontSize: 14 }}>
              {t('Bonus')} {player.bonus}{' '}
              {player.bonus.slice(0, 1) === '1'
                ? t('for 50K points')
                : t('for 100K points')}
            </Typography>
          </PrizeWrapper>
        </>
      )}
    </Box>
  );
};
