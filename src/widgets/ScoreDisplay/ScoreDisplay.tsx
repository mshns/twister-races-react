import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Box, Divider, Skeleton } from '@mui/material';

import { ScorePagination, ScoreTime, Spinner } from 'widgets';
import { Player, ScoreController } from 'entities';
import { IPlayer, useAppSelector } from 'shared';

interface IScoreDisplay {
  setUpdateScore: Dispatch<SetStateAction<boolean>>;
}

export const ScoreDisplay: FC<IScoreDisplay> = ({ setUpdateScore }) => {
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
        <Spinner />
      ) : (
        <ScorePagination
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          players={players}
        />
      )}

      <Divider sx={{ mb: 1 }} />

      {isFetching ? (
        Array(10)
          .fill('')
          .map((_item, index) => (
            <Skeleton
              variant='rounded'
              sx={{ height: '56px', marginBottom: '10px' }}
              key={index}
            />
          ))
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

      {!isFetching && (
        <>
          <Divider sx={{ margin: '10px 0' }} />
          <ScorePagination
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            players={players}
          />
        </>
      )}
    </Box>
  );
};
