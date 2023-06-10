import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IData, IPlayer, IRaceTime } from 'shared';

const initialState: IData = {
  storoCurrentPlayers: [],
  networkCurrentPlayers: [],
  storoPreviousPlayers: [],
  networkPreviousPlayers: [],
  currentRaceTime: { start: '', end: '', update: '' },
  previousRaceTime: { start: '', end: '', update: '' },
  isFetching: false,
};

const dataSlice = createSlice({
  name: 'storoPlayers',
  initialState,
  reducers: {
    setStoroCurrentPlayers(state, action: PayloadAction<IPlayer[]>) {
      state.storoCurrentPlayers = action.payload;
    },
    setNetworkCurrentPlayers(state, action: PayloadAction<IPlayer[]>) {
      state.networkCurrentPlayers = action.payload;
    },
    setCurrentRaceTime(state, action: PayloadAction<IRaceTime>) {
      state.currentRaceTime = action.payload;
    },
    setStoroPreviousPlayers(state, action: PayloadAction<IPlayer[]>) {
      state.storoPreviousPlayers = action.payload;
    },
    setNetworkPreviousPlayers(state, action: PayloadAction<IPlayer[]>) {
      state.networkPreviousPlayers = action.payload;
    },
    setPreviousRaceTime(state, action: PayloadAction<IRaceTime>) {
      state.previousRaceTime = action.payload;
    },
    setFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export const {
  setStoroCurrentPlayers,
  setNetworkCurrentPlayers,
  setCurrentRaceTime,
  setStoroPreviousPlayers,
  setNetworkPreviousPlayers,
  setPreviousRaceTime,
  setFetching,
} = dataSlice.actions;

export default dataSlice.reducer;
