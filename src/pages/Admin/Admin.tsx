import { FC } from 'react';

import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'shared';
import { Login } from 'widgets';
import { DataBase } from 'features';
import { setAdmin } from 'app/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const Admin: FC = () => {
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector((state) => state.authReducer.isAdmin);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setAdmin(true));
    }
  });

  return isAdmin ? (
    <Box component='main'>

      <DataBase />
    </Box>
  ) : (
    <Login />
  );
};
