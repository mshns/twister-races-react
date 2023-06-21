import { FC, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { IPlayerDB } from 'shared';
import { PlayerDataBase } from 'entities';

export const DataBase: FC = () => {
  const [players, setPlayers] = useState<IPlayerDB[]>([]);

  useEffect(() => {
    fetch('https://twister-races.onrender.com/players')
      .then((response) => response.json())
      .then((players) => setPlayers(players));
  }, [players]);

  return (
    <Box
      component='main'
      sx={{
        maxWidth: '560px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {players.map((player, index) => (
        <PlayerDataBase player={player} key={index} />
      ))}
    </Box>
  );
};
