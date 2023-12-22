'use client';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLazyGetPokemonByNameQuery } from '@/api/pokemonService';
import { addEntry, setStatus } from '@/redux/searchHistorySlice';

type Dispatcher = ReturnType<typeof useAppDispatch>;

interface SubcomponentProps {
  dispatch: Dispatcher;
}

export function useSearch() {
  const dispatch = useAppDispatch();
  const [searchName, setSearchName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [getPokemonByName, { isLoading, isFetching, data: pokemon, error }] =
    useLazyGetPokemonByNameQuery();

  const loading = isLoading || isFetching;

  useEffect(() => {
    if (loading) {
      dispatch(setStatus('loading'));
    } else if (error) {
      dispatch(setStatus('error'));
    } else if (pokemon) {
      dispatch(addEntry(pokemon));
    }
  }, [loading, pokemon, error, dispatch]);

  return {
    searchName,
    setSearchName,
    inputRef,
    getPokemonByName,
    result: { loading, pokemon, error },
  };
}

const SearchForm = () => {
  const {
    searchName,
    setSearchName,
    inputRef,
    getPokemonByName,
    result: { loading },
  } = useSearch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (searchName) {
      getPokemonByName(searchName, true);
    }
    setSearchName('');
    inputRef.current?.focus();
  }

  return (
    <div data-testid="search-form">
      <form onSubmit={handleSubmit}>
        <label
          className="block"
          htmlFor="search"
        >
          Find Pokemon
        </label>
        <div className="flex">
          <input
            data-testid="search-input"
            className="border p-2 w-full"
            id="search"
            name="search"
            type="text"
            ref={inputRef}
            autoFocus={true}
            placeholder="Pokemon name..."
            value={searchName}
            onChange={(event) =>
              setSearchName(event.target.value.toLowerCase())
            }
            autoComplete="off"
          />
          <button
            data-testid="search-submit"
            type="submit"
            className="search-button"
            disabled={searchName.length === 0 || loading}
          >
            search
          </button>
        </div>
      </form>
    </div>
  );
};

const SearchHistory = () => {
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    (state) => state.searchHistory.value.history,
  );
  return (
    <>
      {searchHistory.length > 0 && (
        <nav
          className="mt-2"
          data-testid="search-history"
        >
          <label>History</label>
          <ul
            className="list-inside list-[square]"
            id="history"
          >
            {searchHistory.map((p, index) => (
              <li key={p.id}>
                <button
                  className="history-entry-button"
                  onClick={() => dispatch(addEntry(p))}
                  disabled={index === 0}
                >
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

const LeftSideBar = () => {
  return (
    <aside
      id="left-panel"
      className="left-sidebar"
      data-testid="left-sidebar"
    >
      <SearchForm />
      <SearchHistory />
    </aside>
  );
};

export default LeftSideBar;
