'use client';
import { FC, ReactNode } from 'react';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import type { Pokemon, PokemonAbility } from '@/types/pokemon';
import type { SearchStatus } from '@/types/model';
import type { ColorNames } from '@/types/ui';

type PokemonKeys = Extract<keyof Pokemon, 'name' | 'height' | 'weight'>;
type PokemonProps = {
  [K in PokemonKeys]: Pokemon[K];
};

const displayKeys: PokemonKeys[] = ['name', 'height', 'weight'] as const;

interface AttributeRowProps {
  name: string;
  value: string | number;
}

const AttributeRow: FC<AttributeRowProps> = ({ name, value }) => {
  return (
    <div className="flex flex-row">
      <div className={`w-40 flex-shrink-0`}>{`${name}${value && ':'}`}</div>
      <div className="flex-grow">{value}</div>
    </div>
  );
};

interface ContentPanelProps {
  children: ReactNode;
  status: SearchStatus;
}

const statusToClassNames: Record<SearchStatus, string> = {
  loading:
    'flex flex-col flex-grow p-2 xl:flex-row border-8 border-blue text-white bg-blue',
  error:
    'flex flex-col flex-grow p-2 xl:flex-row border-8 border-red text-white bg-red',
  initial:
    'flex flex-col flex-grow p-2 xl:flex-row border-8 border-gray text-white bg-gray',
  success:
    'flex flex-col flex-grow xl:flex-row border-8 border-green text-white',
} as const;

const ContentPanel: FC<ContentPanelProps> = ({ children, status }) => {
  return (
    <section
      id="content-panel"
      className="h-full overflow-hidden"
    >
      <div className={statusToClassNames[status]}>{children}</div>
    </section>
  );
};

interface AbilitiesListProps {
  abilities: PokemonAbility[];
}

const AbilitiesList: FC<AbilitiesListProps> = ({ abilities }) => {
  return abilities.length > 0 ? (
    <>
      <label
        htmlFor="abilities"
        className="mt-4 mb-2"
      >
        ABILITIES:
      </label>
      <ul
        id="abilities"
        className="list-inside list-square"
      >
        {abilities.map((a) => (
          <li key={a.ability.url}>{a.ability.name.toUpperCase()}</li>
        ))}
      </ul>
    </>
  ) : null;
};

const PokemonDisplay = () => {
  const { history, status } = useAppSelector(
    (state) => state.searchHistory.value,
  );

  if (status === 'loading') {
    return <ContentPanel status={status}>Loading...</ContentPanel>;
  }

  if (status === 'error') {
    return <ContentPanel status={status}>Error!</ContentPanel>;
  }

  if (status === 'initial') {
    return <ContentPanel status={status}>Search for a pokemon.</ContentPanel>;
  }

  const pokemon = history[0];

  return (
    <ContentPanel status={status}>
      <Image
        alt="pokemon"
        width={500}
        height={500}
        className="pokemon-image"
        src={
          pokemon.sprites.other?.home?.front_default ??
          pokemon.sprites.front_default ??
          '/img/fallback-pokemon.jpg'
        }
      />
      <div className="pokemon-info-panel">
        {displayKeys.map((prop) => (
          <AttributeRow
            key={`${pokemon.id}-${prop}`}
            name={prop.toUpperCase()}
            value={pokemon[prop]}
          />
        ))}
        <AbilitiesList abilities={pokemon.abilities} />
      </div>
    </ContentPanel>
  );
};

export default PokemonDisplay;
