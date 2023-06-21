import { Box, Button, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { useAppDispatch } from 'shared';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setAdmin } from 'app/store';

export const Login: FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          dispatch(setAdmin(true));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      component='form'
      sx={{
        maxWidth: '320px',
        margin: '20px auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TextField
        id='login'
        label='Enter login'
        variant='outlined'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id='password'
        label='Enter password'
        variant='outlined'
        sx={{ margin: '20px 0' }}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant='contained' onClick={() => handleLogin(email, password)}>
        Login
      </Button>
    </Box>
  );
};
