import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import { IPlayerDB } from 'shared';

interface IPlayerDataBase {
  player: IPlayerDB;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}

export const PlayerDataBase: FC<IPlayerDataBase> = ({ player, setUpdate }) => {
  const [nickname, setNickname] = useState(player.nickname.current);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleEdit = () => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/players/${player._id}`, {
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
    fetch(`${import.meta.env.VITE_SERVER_URL}/players/${player._id}`, {
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
      <Tooltip title='Изменить nickname игрока'>
        <IconButton size='large' color='success' onClick={handleEdit}>
          <EditIcon color='success' />
        </IconButton>
      </Tooltip>
      <Tooltip title='Удалить игрока из базы'>
        <IconButton
          size='large'
          color='error'
          onClick={() => setDialogOpen(true)}
        >
          <DeleteForeverIcon color='error' />
        </IconButton>
      </Tooltip>

      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{`Подтвердите удаление ${player.login}`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDelete}>Удалить</Button>
          <Button onClick={() => setDialogOpen(false)} autoFocus>
            Помиловать
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
