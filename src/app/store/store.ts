import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/DataSlice';
import { redStarApi } from './reducers/ApiSlice';

const rootReducer = combineReducers({
  dataReducer,
  [redStarApi.reducerPath]: redStarApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(redStarApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
