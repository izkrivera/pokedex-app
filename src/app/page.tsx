'use client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import LeftSideBar from '@/components/LeftSideBar';
import PokemonDisplay from '@/components/PokemonDisplay';

export default function Home() {
  return (
    <main className="main">
      <Provider store={store}>
        <LeftSideBar />
        <PokemonDisplay />
      </Provider>
    </main>
  );
}
