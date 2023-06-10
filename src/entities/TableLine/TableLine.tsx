import { FC } from 'react';
import { Avatar, Badge, Box, Typography } from '@mui/material';
import { IParticipant, usePrize } from 'shared';
import { TableLineWrapper } from './styled';

interface ITableLine {
  player: IParticipant;
  position: number;
  isNetworkRace: boolean;
  isAffiliate: boolean;
  index: number;
}

export const TableLine: FC<ITableLine> = ({
  player,
  position,
  isNetworkRace,
  isAffiliate,
  index,
}) => (
  <TableLineWrapper
    isAffiliate={isAffiliate}
    isNetworkRace={isNetworkRace}
    index={index}
  >
    <Box sx={{ width: '40%', display: 'flex', alignItems: 'center' }}>
      <Badge
        overlap='circular'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          (!isNetworkRace && position === 1) ||
          (isNetworkRace && player.position === '1') ? (
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt='first place medal'
              src='assets/1st-place-medal.png'
            />
          ) : (!isNetworkRace && position === 2) ||
            (isNetworkRace && player.position === '2') ? (
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt='second place medal'
              src='assets/2nd-place-medal.png'
            />
          ) : (!isNetworkRace && position === 3) ||
            (isNetworkRace && player.position === '3') ? (
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt='third place medal'
              src='assets/3rd-place-medal.png'
            />
          ) : null
        }
      >
        <Avatar
          variant='rounded'
          sx={{
            width: 60,
            m: 1,
            color: 'primary.contrastText',
            backgroundColor: 'primary.light',
            fontSize: 16,
          }}
        >
          {isNetworkRace ? player.position : position}
        </Avatar>
      </Badge>

      <Typography sx={{ fontSize: 16, ml: 1 }}>{player.nickname}</Typography>
    </Box>

    <Box
      sx={{
        width: '58%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ fontSize: 18 }}>
        {usePrize(
          isNetworkRace,
          isNetworkRace ? Number(player.position) : position,
          Number(player.points)
        )}
      </Box>
      <Typography sx={{ color: 'primary.main', fontSize: 16, m: 2 }}>
        {player.points}
      </Typography>
    </Box>
  </TableLineWrapper>
);
