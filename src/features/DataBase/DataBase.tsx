import { FC, useEffect, useState } from 'react';

import {
  Box,
  Divider,
  IconButton,
  Pagination,
  TextField,
  Typography,
} from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { IPlayerDB } from 'shared';
import { PlayerDataBase } from 'entities';

export const DataBase: FC = () => {
  const [players, setPlayers] = useState<IPlayerDB[]>([]);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState('');

  const [newLogin, setNewLogin] = useState('');
  const [newNickname, setNewNickname] = useState('');

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch('https://twister-races.onrender.com/players')
      .then((response) => response.json())
      .then((players) => {
        setPlayers(players);
        setUpdate(false);
      });
  }, [update]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const searchPlayer = (search: string) => {
    return search
      ? players.filter(({ login }) =>
          login?.toLowerCase().includes(search.toLowerCase())
        )
      : players;
  };

  const handleAdd = () => {
    fetch(`https://twister-races.onrender.com/players`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        login: newLogin,
        nickname: {
          current: newNickname,
          previous: newNickname,
        },
        update: new Date(),
      }),
    }).then(() => setUpdate(true));
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
      <Box
        component='form'
        sx={{ display: 'flex', alignItems: 'center', m: 1 }}
      >
        <TextField
          label='Login'
          variant='standard'
          sx={{ color: 'primary.main' }}
          value={newLogin}
          onChange={(event) => setNewLogin(event.target.value)}
        />
        <TextField
          label='Nickname'
          variant='standard'
          value={newNickname}
          onChange={(event) => setNewNickname(event.target.value)}
        />
        <IconButton aria-label='edit' size='large' onClick={handleAdd}>
          <PersonAddAlt1Icon />
        </IconButton>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          m: 2,
        }}
      >
        <TextField
          label='Поиск по логину'
          variant='standard'
          value={search}
          onChange={(event) => setSearch(event?.target.value)}
        />
        <Typography>Всего игроков: {players.length}</Typography>
      </Box>

      {searchPlayer(search)
        .slice(page * 10 - 10, page * 10)
        .map((player) => (
          <PlayerDataBase player={player} setUpdate={setUpdate} key={player.nickname.current} />
        ))}

      <Divider sx={{ width: '50%', mt: 4 }} />

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
