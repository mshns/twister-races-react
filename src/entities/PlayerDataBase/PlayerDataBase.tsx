import { Box, IconButton, TextField } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { IPlayerDB } from 'shared';
import { Dispatch, FC, SetStateAction, useState } from 'react';

interface IPlayerDataBase {
  player: IPlayerDB;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}

export const PlayerDataBase: FC<IPlayerDataBase> = ({ player, setUpdate }) => {
  const [nickname, setNickname] = useState(player.nickname.current);

  const handleEdit = () => {
    fetch(`https://twister-races.onrender.com/players/${player._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        nickname: {
          current: nickname,
          previous: player.nickname.current,
        },
        update: new Date(),
      }),
    }).then(() => setUpdate(true));
  };

  const handleDelete = () => {
    fetch(`https://twister-races.onrender.com/players/${player._id}`, {
      method: 'DELETE',
    }).then(() => setUpdate(true));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
      <TextField
        InputProps={{ readOnly: true }}
        label='Login'
        variant='standard'
        value={player.login}
        sx={{ color: 'primary.main' }}
      />
      <TextField
        label='Nickname'
        variant='standard'
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
      />
      <IconButton aria-label='edit' size='large' onClick={handleEdit}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label='delete' size='large' onClick={handleDelete}>
        <DeleteForeverIcon />
      </IconButton>
    </Box>
  );
};
