import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Switch,
  TablePagination,
  Typography,
} from '@mui/material';

import { TableLine, TablePaginationActions } from 'entities';
import { IPlayer, useAppSelector } from 'shared';

export const CurrentScoreTable: FC = () => {
  const { t } = useTranslation(['leaderboard']);

  const storoPlayers = useAppSelector(
    (state) => state.dataReducer.storoPlayers
  );
  const networkPlayers = useAppSelector(
    (state) => state.dataReducer.networkPlayers
  );

  const [isNetworkRace, SetNetworkRace] = useState(false);
  const [players, setPlayers] = useState<IPlayer[]>(
    storoPlayers
  );

  useEffect(() => {
    isNetworkRace ? setPlayers(networkPlayers) : setPlayers(storoPlayers);
  }, [isNetworkRace, networkPlayers, storoPlayers]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(55);

  const handleToogleRace = () => {
    SetNetworkRace((prev) => !prev);
    setPage(0);
    setRowsPerPage(55);
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormControlLabel
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
          control={<Checkbox />}
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
        />
      </Box>

      <Divider sx={{ mb: 1 }} />

      <TablePagination
        component={'div'}
        sx={{
          width: 640,
          '.MuiTablePagination-toolbar': {
            padding: '0 10px',
            flexWrap: 'wrap',
          },
          '.MuiTablePagination-selectLabel': { order: 0, margin: 0 },
          '.MuiTablePagination-select': { order: 1, padding: 0 },
          '.MuiTablePagination-displayedRows': {
            order: 3,
            width: '100%',
            marginTop: 0,
          },
        }}
        rowsPerPageOptions={[10, 55, 100, 250, { label: t('All'), value: -1 }]}
        count={players.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage={t('Rows per page')}
        labelDisplayedRows={({ from, to, count }) =>
          `${t('Displaying places')} ${from} ${t('to')} ${to} ${t(
            'of'
          )} ${count}`
        }
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />

      <Box>
        {(rowsPerPage > 0
          ? players.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : players
        ).map((player) => (
          <TableLine key={player.position} player={player} />
        ))}
      </Box>
    </Box>
  );
};
