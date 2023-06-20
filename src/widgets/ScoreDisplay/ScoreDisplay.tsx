import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Divider, Skeleton, TablePagination } from '@mui/material';
import { ScoreTime, Spinner } from 'widgets';
import { Player, PaginationActions, ScoreController } from 'entities';
import { IPlayer, useAppSelector } from 'shared';

interface IScoreDisplay {
  setUpdateScore: Dispatch<SetStateAction<boolean>>;
}

export const ScoreDisplay: FC<IScoreDisplay> = ({ setUpdateScore }) => {
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
      <ScoreTime />

      <ScoreController
        isNetworkRace={isNetworkRace}
        SetNetworkRace={SetNetworkRace}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        setUpdateScore={setUpdateScore}
      />

      <Divider sx={{ mb: 1 }} />

      {isFetching ? (
        <Skeleton variant='rounded' width='100%' height={60} />
      ) : (
        <TablePagination
          component={'div'}
          sx={{
            width: '100%',
            height: { xs: '82px', md: '54px' },
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
          ActionsComponent={PaginationActions}
        />
      )}

      <Divider sx={{ mb: 1 }} />

      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {(rowsPerPage > 0
            ? players.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : players
          ).map((player) => (
            <Player key={player.position} player={player} />
          ))}
        </>
      )}
    </Box>
  );
};
