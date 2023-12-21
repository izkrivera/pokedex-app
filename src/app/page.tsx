'use client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import LeftSideBar from '@/components/LeftSideBar';
import PokemonDisplay from '@/components/PokemonDisplay';

export default function Home() {
  return (
    <main className="w-10/12 max-w-7xl mx-auto my-3 p-3 h-[calc(100vh-1.5rem)] shadow-dark-gray shadow grid grid-cols-main gap-3">
      <Provider store={store}>
        <LeftSideBar />
        <PokemonDisplay />
      </Provider>
    </main>
  );
}
