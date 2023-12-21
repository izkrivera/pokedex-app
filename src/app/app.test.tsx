import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import LeftSideBar from '@/components/LeftSideBar';
import PokemonDisplay from '@/components/PokemonDisplay';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <LeftSideBar />
        <PokemonDisplay />
      </Provider>,
    );
  });

  it('renders main components', () => {
    render(
      <Provider store={store}>
        <LeftSideBar />
        <PokemonDisplay />
      </Provider>,
    );

    expect(screen.getByTestId('left-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
    expect(screen.getByTestId('content-panel')).toBeInTheDocument();
  });
});
