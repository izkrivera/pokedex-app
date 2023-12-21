import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from '@/types/pokemon';
import { ENDPOINTS, BaseURL } from '@/types/pokemon';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL.REST }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `${ENDPOINTS.POKEMON}/${name}`,
      transformResponse: (data: Pokemon) => {
        return data;
      },
    }),
  }),
});

export const { useLazyGetPokemonByNameQuery } = pokemonApi;
