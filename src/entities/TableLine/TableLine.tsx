import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { IParticipant, usePrize } from 'shared';

interface ITableLine {
  player: IParticipant;
  isNetworkRace: boolean;
  isAffiliate: boolean;
  page: number;
  rowsPerPage: number;
  index: number;
}

export const TableLine: FC<ITableLine> = ({
  player,
  isNetworkRace,
  isAffiliate,
  page,
  rowsPerPage,
  index,
}) => {
  return (
    <TableRow
      sx={{
        backgroundColor:
          isAffiliate && !isNetworkRace ? 'success.light' : 'background.paper',
        '&:hover': { backgroundColor: 'background.default' },
      }}
    >
      <TableCell
        component='th'
        scope='row'
        align='center'
        sx={{ width: '10%', fontSize: 18 }}
      >
        {isNetworkRace ? page * rowsPerPage + index + 1 : player.position}
      </TableCell>
      <TableCell sx={{ width: '40%', fontSize: 18 }}>
        {player.nickname}
      </TableCell>
      <TableCell sx={{ width: '40%', fontSize: 18 }}>
        {usePrize(
          isNetworkRace,
          isNetworkRace
            ? page * rowsPerPage + index + 1
            : Number(player.position),
          Number(player.points)
        )}
      </TableCell>
      <TableCell sx={{ width: '10%', fontSize: 18 }} align='right'>
        {player.points}
      </TableCell>
    </TableRow>
  );
};
