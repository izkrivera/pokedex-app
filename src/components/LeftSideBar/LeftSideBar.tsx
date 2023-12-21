'use client';
import { FormEvent, useEffect, useState } from 'react';
import { useLazyGetPokemonByNameQuery } from '@/api/pokemonService';

const LeftSideBar = () => {
  const [searchName, setSearchName] = useState<string>('');

  const [triggerGetPokemon, { isLoading, isFetching, data: pokemon, error }] =
    useLazyGetPokemonByNameQuery();

  const loading = isLoading || isFetching;

  useEffect(() => {
    if (loading) {
      console.info('-> LeftSideBar.triggerGetPokemon(), LOADING...');
    } else if (error) {
      console.info('-> LeftSideBar.triggerGetPokemon(), ERROR:', error);
    } else if (pokemon) {
      console.info('-> LeftSideBar.triggerGetPokemon(), POKEMON:', pokemon);
    }
  }, [loading, pokemon, error]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.group('(***) LeftSideBar.handleSubmit()');
    console.info('\t-> searchName:', searchName);
    console.groupEnd();
    if (searchName) {
      triggerGetPokemon(searchName, true);
    }

    setSearchName('');
  }
  return (
    <aside
      id="left-panel"
      className="left-sidebar"
    >
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
              placeholder="Pokemon name..."
              value={searchName}
              onChange={(event) =>
                setSearchName(event.target.value.toLowerCase())
              }
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-green hover:[&:not([disabled])]:text-white active:[&:not([disabled])]:brightness-110 p-2 border border-dark-gray border-l-transparent"
              disabled={searchName.length === 0}
            >
              search
            </button>
          </div>
        </form>
      </search>
      <nav className="mt-2">
        <label>History</label>
        <ul
          className="list-inside list-[square]"
          id="history"
        >
          <li>
            <button onClick={console.log}>PIKACHU</button>
          </li>
          <li>
            <button onClick={console.log}>SCYTHER</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSideBar;
