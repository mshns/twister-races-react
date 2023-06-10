import { FC } from 'react';
import { Avatar, Badge, Box, Paper, Typography } from '@mui/material';
import { IPlayer } from 'shared';
import { TableLineWrapper } from './styled';
import { PrizeAndBonusBox } from 'entities';

interface ITableLine {
  player: IPlayer;
}

export const TableLine: FC<ITableLine> = ({ player }) => (
  <TableLineWrapper player={player}>
    <Box sx={{ width: '40%', display: 'flex', alignItems: 'center' }}>
      <Badge
        overlap='circular'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          player.position === 1 ? (
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt='first place medal'
              src='assets/1st-place-medal.png'
            />
          ) : player.position === 2 ? (
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt='second place medal'
              src='assets/2nd-place-medal.png'
            />
          ) : player.position === 3 ? (
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
          {player.position}
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
      <PrizeAndBonusBox player={player} />

      <Typography sx={{ color: 'primary.main', fontSize: 16, m: 2 }}>
        {player.points}
      </Typography>
    </Box>
  </TableLineWrapper>
);
