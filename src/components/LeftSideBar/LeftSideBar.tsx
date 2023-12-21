'use client';
import { FormEvent, useState } from 'react';

const LeftSideBar = () => {
  const [searchName, setSearchName] = useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.group('(***) LeftSideBar.handleSubmit()');
    console.info('\t-> event:', event);
    console.groupEnd();

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
