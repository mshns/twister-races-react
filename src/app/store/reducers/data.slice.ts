import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IData, IPlayer, IRaceTime } from 'shared';

const initialState: IData = {
  storoPlayers: [],
  networkPlayers: [],
  raceTime: { start: '', end: '', update: '' },
  isFetching: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setStoroPlayers(state, action: PayloadAction<IPlayer[]>) {
      state.storoPlayers = action.payload;
    },
    setNetworkPlayers(state, action: PayloadAction<IPlayer[]>) {
      state.networkPlayers = action.payload;
    },
    setRaceTime(state, action: PayloadAction<IRaceTime>) {
      state.raceTime = action.payload;
    },
    setFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export const {
  setStoroPlayers,
  setNetworkPlayers,
  setRaceTime,
  setFetching,
} = dataSlice.actions;

export default dataSlice.reducer;
