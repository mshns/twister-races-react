import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Skeleton,
  Switch,
  TablePagination,
  Typography,
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { Spinner } from 'widgets';
import { TableLine, TablePaginationActions } from 'entities';
import { IPlayer, useAppSelector } from 'shared';

interface ScoreTable {
  setUpdateScore: Dispatch<SetStateAction<boolean>>;
}

export const ScoreTable: FC<ScoreTable> = ({ setUpdateScore }) => {
  const { t } = useTranslation(['leaderboard']);
  const isFetching = useAppSelector((state) => state.dataReducer.isFetching);

  const storoPlayers = useAppSelector(
    (state) => state.dataReducer.storoPlayers
  );
  const networkPlayers = useAppSelector(
    (state) => state.dataReducer.networkPlayers
  );

  const [isNetworkRace, SetNetworkRace] = useState(false);
  const [players, setPlayers] = useState<IPlayer[]>(storoPlayers);

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
            <Button variant='contained' sx={{ ml: 1, height: 24, backgroundColor: 'primary.light' }}>
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

      <Divider sx={{ mb: 1 }} />

      {isFetching ? (
        <Skeleton variant='rounded' width={640} height={60} />
      ) : (
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
          rowsPerPageOptions={[
            10,
            55,
            100,
            250,
            { label: t('All'), value: -1 },
          ]}
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
      )}
      {isFetching ? (
        <Spinner />
      ) : (
        <Box>
          {(rowsPerPage > 0
            ? players.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : players
          ).map((player) => (
            <TableLine key={player.position} player={player} />
          ))}
        </Box>
      )}
    </Box>
  );
};
