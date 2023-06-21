import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/data.slice';
import authReducer from './reducers/authorization.slice';
import { redStarApi } from './reducers/api.slice';

const rootReducer = combineReducers({
  dataReducer,
  authReducer,
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
