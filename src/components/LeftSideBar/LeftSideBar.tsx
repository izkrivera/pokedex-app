'use client';
import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLazyGetPokemonByNameQuery } from '@/api/pokemonService';
import { addEntry, setStatus } from '@/redux/searchHistorySlice';

type Dispatcher = ReturnType<typeof useAppDispatch>;

interface SubcomponentProps {
  dispatch: Dispatcher;
}

const SearchForm: FC<SubcomponentProps> = ({ dispatch }) => {
  const [searchName, setSearchName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [triggerGetPokemon, { isLoading, isFetching, data: pokemon, error }] =
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (searchName) {
      triggerGetPokemon(searchName, true);
    }
    setSearchName('');
    inputRef.current?.focus();
  }
  return (
    <search>
      <form onSubmit={handleSubmit}>
        <label
          className="block"
          htmlFor="search"
        >
          Find Pokemon
        </label>
        <div className="flex">
          <input
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
            type="submit"
            className="search-button"
            disabled={searchName.length === 0 || loading}
          >
            search
          </button>
        </div>
      </form>
    </search>
  );
};

const SearchHistory: FC<SubcomponentProps> = ({ dispatch }) => {
  const searchHistory = useAppSelector(
    (state) => state.searchHistory.value.history,
  );
  return (
    <>
      {searchHistory.length > 0 && (
        <nav className="mt-2">
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
  const dispatch = useAppDispatch();
  return (
    <aside
      id="left-panel"
      className="left-sidebar"
    >
      <SearchForm dispatch={dispatch} />
      <SearchHistory dispatch={dispatch} />
    </aside>
  );
};

export default LeftSideBar;
