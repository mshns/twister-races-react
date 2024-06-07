import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Box, IconButton, TextField, Tooltip } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

interface IAddPlayer {
  setUpdate: Dispatch<SetStateAction<boolean>>;
}

export const AddPlayer: FC<IAddPlayer> = ({ setUpdate }) => {
  const [newLogin, setNewLogin] = useState('');
  const [newNickname, setNewNickname] = useState('');

  const handleAdd = () => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/players`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        login: newLogin,
        nickname: {
          current: newNickname,
        },
        update: new Date(),
      }),
    }).then(() => {
      setUpdate(true);
      setNewLogin('');
      setNewNickname('');
    });
  };

  return (
    <Box component='form' sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
      <TextField
        label='Введите login'
        variant='standard'
        sx={{ color: 'primary.main' }}
        value={newLogin}
        onChange={(event) => setNewLogin(event.target.value)}
      />
      <TextField
        label='Введите nickname'
        variant='standard'
        value={newNickname}
        onChange={(event) => setNewNickname(event.target.value)}
      />
      <Tooltip title='Добавить нового игрока в базу'>
        <IconButton
          aria-label='edit'
          size='large'
          color='success'
          onClick={handleAdd}
        >
          <PersonAddAlt1Icon color='primary' />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
