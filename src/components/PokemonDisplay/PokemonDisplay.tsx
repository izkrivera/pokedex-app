'use client';
import { FC, ReactNode } from 'react';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import type { Pokemon, PokemonAbility, PokemonSprites } from '@/types/pokemon';
import type { SearchStatus } from '@/types/model';
import { DEFAULT_IMAGE } from '@/config';

type PokemonKeys = Extract<keyof Pokemon, 'name' | 'height' | 'weight'>;
type PokemonProps = {
  [K in PokemonKeys]: Pokemon[K];
};

const displayKeys: PokemonKeys[] = ['name', 'height', 'weight'];

type PokemonSpriteKeys = Exclude<keyof PokemonSprites, 'other' | 'versions'> &
  string;

const pokemonSpriteKeysList: { [K in PokemonSpriteKeys]: true } = {
  front_default: true,
  front_shiny: true,
  front_female: true,
  front_shiny_female: true,
  back_default: true,
  back_shiny: true,
  back_female: true,
  back_shiny_female: true,
} as const;

function isPokemonSpriteKey(key: string): key is PokemonSpriteKeys {
  return pokemonSpriteKeysList[key as PokemonSpriteKeys] === true;
}

interface AttributeRowProps {
  name: string;
  value: string | number;
}

const AttributeRow: FC<AttributeRowProps> = ({ name, value }) => {
  return (
    <div className="flex flex-row">
      <div className={`w-40 flex-shrink-0`}>{`${name}${value && ':'}`}</div>
      <div
        className="flex-grow"
        data-testid={`attribute-${name.toLowerCase()}`}
      >
        {value}
      </div>
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
      data-testid="content-panel"
    >
      <div
        data-testid={`content-${status}`}
        className={statusToClassNames[status]}
      >
        {children}
      </div>
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

interface SpriteGalleryProps {
  sprites: PokemonSprites;
}
const SpriteGallery: FC<SpriteGalleryProps> = ({ sprites }) => {
  const spritesList: { name: string; url: string }[] = [];

  for (const key in sprites) {
    if (isPokemonSpriteKey(key)) {
      const url = sprites[key];
      if (url !== null) {
        spritesList[spritesList.length] = {
          name: key
            .split('_')
            .join(' ')
            .replace('front', 'frnt')
            .replace('back', 'bk')
            .replace('female', 'fmle'),
          url,
        };
      }
    }
  }

  return spritesList.length ? (
    <>
      <div className="border-t-8 border-green">
        <label
          htmlFor="sprites"
          className="pb-2 block bg-green"
        >
          OTHER SPRITES:
        </label>
        <ul
          id="sprites"
          className="border list-none"
        >
          {spritesList.map((entry) => (
            <li
              key={entry.url}
              className="block w-1/4 md:w-1/5 lg:w-1/6 float-start relative"
            >
              <Image
                className="w-full h-auto border-r border-b border-green"
                width={100}
                height={100}
                alt={`${entry.name} sprite`}
                src={entry.url}
              />
              <div className="text-green brightness-90 text-[9px] absolute top-0 left-1 z-10">
                {entry.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
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
      <div className="flex flex-col">
        <div className="relative mx-auto w-full h-full max-h-[500px] max-w-[500px] aspect-square overflow-hidden object-cover">
          <Image
            alt={`Sprite image for pokemon ${pokemon.name}.`}
            className="mx-auto xl:mx-0"
            width={500}
            height={500}
            priority={true}
            src={
              pokemon.sprites.other?.home?.front_default ??
              pokemon.sprites.front_default ??
              DEFAULT_IMAGE
            }
          />
        </div>
        <SpriteGallery sprites={pokemon.sprites} />
      </div>
      <div
        className="pokemon-info-panel"
        data-testid="pokemon-info-panel"
      >
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
