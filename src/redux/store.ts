import { configureStore } from '@reduxjs/toolkit';
import searchHistory from './searchHistorySlice';
import { pokemonApi } from '@/api/pokemonService';

const store = configureStore({
  reducer: {
    searchHistory,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
