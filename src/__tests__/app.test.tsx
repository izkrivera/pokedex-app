import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { useLazyGetPokemonByNameQuery } from '@/api/pokemonService';
import Home from '@/app/page';
import { BaseURL, ENDPOINTS } from '@/types/pokemon';
import data from './data.json' with { type: 'json' };

type LazyGetPokemonByNameReturnType = ReturnType<
  typeof useLazyGetPokemonByNameQuery
>;

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

const pokemonName = 'pikachu';
const errorName = 'sdfkasdfdsk';

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
  fetchMock.mockIf(`${BaseURL.REST}/${ENDPOINTS.POKEMON}/${errorName}`, () => {
    return Promise.resolve({
      status: 200,
      body: JSON.stringify({ data: 'Not Found' }),
    });
  });
});

afterEach(() => {
  fetchMock.mockClear();
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('renders initial components', () => {
    render(<Home />);

    expect(screen.getByTestId('left-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
    expect(screen.getByTestId('content-panel')).toBeInTheDocument();
    expect(screen.getByTestId('content-initial')).toBeInTheDocument();
  });

  it('renders content error component after bad fetch', async () => {
    render(<Home />);

    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: errorName } });

    const searchSubmit = screen.getByTestId(
      'search-submit',
    ) as HTMLButtonElement;
    expect(searchSubmit).toBeInTheDocument();

    fireEvent.click(searchSubmit);

    const contentLoading = await screen.findByTestId('content-loading');
    expect(contentLoading).toBeInTheDocument();

    const contentError = await screen.findByTestId('content-error');
    expect(contentError).toBeInTheDocument();
  });

  it('renders content loading, content success & search history components after fetch', async () => {
    render(<Home />);

    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: pokemonName } });

    const searchSubmit = screen.getByTestId(
      'search-submit',
    ) as HTMLButtonElement;
    expect(searchSubmit).toBeInTheDocument();

    fireEvent.click(searchSubmit);

    const contentLoading = await screen.findByTestId('content-loading');
    expect(contentLoading).toBeInTheDocument();

    const contentSuccess = await screen.findByTestId('content-success');
    expect(contentSuccess).toBeInTheDocument();

    const nameContainer = await screen.findByTestId('attribute-name');
    expect(nameContainer).toBeInTheDocument();

    const searchHistory = await screen.findByTestId('search-history');
    expect(searchHistory).toBeInTheDocument();
  });
});
