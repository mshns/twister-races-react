import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthorizationInitial {
  isAdmin: boolean;
}

const initialState: IAuthorizationInitial = {
  isAdmin: false,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAdmin(state, { payload }: PayloadAction<boolean>) {
      state.isAdmin = payload;
    },
  },
});

export const { setAdmin } = authorizationSlice.actions;
export default authorizationSlice.reducer;
