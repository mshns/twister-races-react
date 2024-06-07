import { FC, useEffect, useState } from 'react';
import { Box, Pagination, TextField, Typography } from '@mui/material';

import { IPlayerDB } from 'shared';
import { PlayerDataBase } from 'entities';
import { AddPlayer, DownloadReport } from 'features';

export const DataBase: FC = () => {
  const [players, setPlayers] = useState<IPlayerDB[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/players`)
      .then((response) => response.json())
      .then((players) => {
        setPlayers(players);
        setUpdate(false);
      });
  }, [update]);

  const searchPlayer = (search: string) => {
    return search
      ? players.filter(
          (player) =>
            player.login?.toLowerCase().includes(search.toLowerCase()) ||
            player.nickname.current.toLowerCase().includes(search.toLowerCase())
        )
      : players;
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setPage((prev) => (prev === 1 ? prev : 1));
  };

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AddPlayer setUpdate={setUpdate} />

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          m: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '30%',
          }}
        >
          <Typography sx={{ m: 1, textTransform: 'uppercase' }}>
            Игроков в базе
          </Typography>
          <Typography color='primary' variant='h4'>
            {players.length}
          </Typography>
        </Box>

        <TextField
          sx={{ width: '30%' }}
          label='Поиск игрока'
          variant='standard'
          value={search}
          onChange={handleSearch}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '30%',
          }}
        >
          <DownloadReport />
        </Box>
      </Box>

      {searchPlayer(search)
        .slice(page * 10 - 10, page * 10)
        .map((player) => (
          <PlayerDataBase
            player={player}
            setUpdate={setUpdate}
            key={player.nickname.current}
          />
        ))}

      {!search && (
        <Pagination
          sx={{ m: 4 }}
          count={Math.ceil(players.length / 10)}
          shape='rounded'
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
      )}
    </Box>
  );
};
