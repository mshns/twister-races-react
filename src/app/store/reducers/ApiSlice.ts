import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPlayerDB } from 'shared';

export const redStarApi = createApi({
  reducerPath: 'redStarApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://twister-races.onrender.com/' }),
  endpoints: (build) => ({
    fetchStoroPlayers: build.query<IPlayerDB, void>({
      query: () => 'players',
    }),

    fetchCurrentResult: build.query({
      query: () => 'current',
    }),

    fetchPreviousWeek: build.query({
      query: () => 'previous',
    }),
  }),
});
