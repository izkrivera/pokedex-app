import { act, renderHook } from '@testing-library/react';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { useLazyGetPokemonByNameQuery } from '@/api/pokemonService';
import { BaseURL, ENDPOINTS } from '@/types/pokemon';
import data from './data.json' with { type: 'json' };

const pokemonName = 'pikachu';
const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

type LazyGetPokemonByNameReturnType = ReturnType<
  typeof useLazyGetPokemonByNameQuery
>;

beforeAll(() => {
  fetchMock.mockOnceIf(
    `${BaseURL.REST}/${ENDPOINTS.POKEMON}/${pokemonName}`,
    () => {
      return Promise.resolve({
        status: 200,
        body: JSON.stringify({ data: data[pokemonName] }),
      });
    },
  );
});

describe('useLazyGetPokemonByNameQuery hook', () => {
  it('renders', async () => {
    const { result, unmount } = renderHook<LazyGetPokemonByNameReturnType, {}>(
      () => useLazyGetPokemonByNameQuery(),
      {
        wrapper: Wrapper,
      },
    );

    let [getPokemonByName, response] = result.current;

    expect(response.isLoading).toBe(false);
    expect(response.isFetching).toBe(false);
    expect(response.data).toBe(undefined);
    expect(response.error).toBe(undefined);

    act(() => {
      getPokemonByName('pikachu');
    });

    await new Promise(process.nextTick);

    [getPokemonByName, response] = result.current;

    expect(response.isLoading).toBe(true);
    expect(response.isFetching).toBe(true);
    expect(response.data).toBe(undefined);
    expect(response.error).toBe(undefined);

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    });

    [getPokemonByName, response] = result.current;

    expect(response.isLoading).toBe(false);
    expect(response.isFetching).toBe(false);
    expect(response.data).toBeDefined();
    expect(response.data.name).toEqual(pokemonName);
    expect(response.error).toBe(undefined);

    unmount();
  });
});
