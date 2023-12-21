/**
 * Pokemon type declarations borrowed from "pokenode-ts",
 * which pokenode-ts is published under the MIT license.
 *
 * https://github.com/Gabb-c/pokenode-ts/tree/main
 */

/**
 * The name and the URL of the referenced resource
 */
export interface NamedAPIResource {
  /** The name of the referenced resource */
  name: string;
  /** The URL of the referenced resource */
  url: string;
}
/**
 * Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API.
 * By default, a list "page" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter
 * to the GET request, e.g. ?=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60
 */
export interface NamedAPIResourceList {
  /** The total number of resources available from this API */
  count: number;
  /** The URL for the next page in the list */
  next: string | null;
  /** The URL for the previous page in the list */
  previous: string | null;
  /** A list of named API resources */
  results: NamedAPIResource[];
}
/** An URL for another resource in the API */
export interface APIResource {
  /** The URL of the referenced resource */
  url: string;
}

/**
 * The localized name for an API resource in a specific language
 */
export interface Name {
  /** The localized name for an API resource in a specific language */
  name: string;
  /** The language this name is in */
  language: NamedAPIResource;
}

/**
 * Languages for translations of API resource information
 */
export interface Language {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource  */
  name: string;
  /** Whether or not the games are published in this language */
  official: boolean;
  /** The two-letter code of the country where this language is spoken. Note that it is not unique */
  iso639: string;
  /** The two-letter code of the language. Note that it is not unique */
  iso3166: string;
  /** The name of this resource listed in different languages */
  names: Name[];
}

/**
 * The localized description for an API resource in a specific language
 */
export interface Description {
  /** The localized description for an API resource in a specific language. */
  description: string;
  /** The language this name is in */
  language: NamedAPIResource;
}

/**
 * The localized effect text for an API resource in a specific language
 */
export interface Effect {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The language this effect is in */
  language: NamedAPIResource;
}

/** Information of a pokemon encounter */
export interface Encounter {
  /** The lowest level the Pokémon could be encountered at */
  min_level: number;
  /** The highest level the Pokémon could be encountered at */
  max_level: number;
  /** A list of condition values that must be in effect for this encounter to occur */
  condition_values: NamedAPIResource[];
  /** Percent chance that this encounter will occur */
  chance: number;
  /** The method by which this encounter happens */
  method: NamedAPIResource;
}

/**
 * The localized flavor text for an API resource in a specific language
 */
export interface FlavorText {
  /** The localized flavor text for an API resource in a specific language */
  flavor_text: string;
  /** The language this name is in */
  language: NamedAPIResource;
}

/**
 * The generation relevent to this game index
 */
export interface GenerationGameIndex {
  /** The internal id of an API resource within game data */
  game_index: number;
  /** The generation relevent to this game index */
  generation: NamedAPIResource;
}

/**
 * The machine that teaches a move from an item
 */
export interface MachineVersionDetail {
  /** The machine that teaches a move from an item */
  machine: APIResource;
  /** The version group of this specific machine */
  version_group: NamedAPIResource;
}

/**
 * The localized effect for an API resource
 */
export interface VerboseEffect {
  /** The localized effect text for an API resource in a specific language */
  effect: string;
  /** The localized effect text in brief */
  short_effect: string;
  /** The language this effect is in */
  language: NamedAPIResource;
}

/**
 * Encounters and their specifics details
 */
export interface VersionEncounterDetail {
  /** The game version this encounter happens in */
  version: NamedAPIResource;
  /** The total percentage of all encounter potential */
  max_chance: number;
  /** A list of encounters and their specifics */
  encounter_details: Encounter[];
}
/**
 * The internal id and version of an API resource
 */
export interface VersionGameIndex {
  /** The internal id of an API resource within game data */
  game_index: number;
  /** The version relevent to this game index */
  version: NamedAPIResource;
}
/**
 * The flavor text of an API resource
 */
export interface VersionGroupFlavorText {
  /** The localized name for an API resource in a specific language */
  text: string;
  /** The language this name is in */
  language: NamedAPIResource;
  /** The version group which uses this flavor text */
  version_group: NamedAPIResource;
}

/**
 * ## Berry
 * Berries are small fruits that can provide HP and status condition restoration,
 * stat enhancement, and even damage negation when eaten by Pokémon.
 *
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail
 */
export interface Berry {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked */
  growth_time: number;
  /** The maximum number of these berries that can grow on one tree in Generation IV */
  max_harvest: number;
  /** The power of the move "Natural Gift" when used with this Berry */
  natural_gift_power: number;
  /** The size of this Berry, in millimeters */
  size: number;
  /** The smoothness of this Berry, used in making Pokéblocks or Poffins */
  smoothness: number;
  /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly */
  soil_dryness: number;
  /** The firmness of this berry, used in making Pokéblocks or Poffins */
  firmness: NamedAPIResource;
  /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry */
  flavors: BerryFlavorMap[];
  /** Berries are actually items. This is a reference to the item specific data for this berry */
  item: NamedAPIResource;
  /** The type inherited by "Natural Gift" when used with this Berry */
  natural_gift_type: NamedAPIResource;
}
/**
 * Reference to the flavor a berry can have and the potency of each of those flavors in regard to this berry
 */
export interface BerryFlavorMap {
  /** How powerful the referenced flavor is for this berry */
  potency: number;
  /** The referenced berry flavor */
  flavor: NamedAPIResource;
}
/**
 * ## Berry Flavor
 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
 *
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 */
export interface BerryFlavor {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: 'spicy' | 'dry' | 'sweet' | 'bitter' | 'sour';
  /** A list of the berries with this flavor */
  berries: FlavorBerryMap[];
  /** The contest type that correlates with this berry flavor */
  contest_type: NamedAPIResource;
  /** The name of this resource listed in different languages */
  names: Name[];
}
/**
 * Berry with the given flavor
 */
export interface FlavorBerryMap {
  /** How powerful the referenced flavor is for this berry */
  potency: number;
  /** The berry with the referenced flavor */
  berry: NamedAPIResource;
}
/**
 * ## Berry Firmness
 * Berries can be soft, very soft, hard, super hard or very hard.
 *
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail
 */
export interface BerryFirmness {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: 'very-soft' | 'soft' | 'hard' | 'very-hard' | 'super-hard';
  /** A list of the berries with this firmness */
  berries: NamedAPIResource[];
  /** The name of this resource listed in different languages */
  names: Name[];
}

/**
 * ## Contest Type
 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail
 */
export interface ContestType {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: 'cool' | 'beauty' | 'cute' | 'smart' | 'tough';
  /** The berry flavor that correlates with this contest type */
  berry_flavor: NamedAPIResource;
  /** The name of this contest type listed in different languages */
  names: ContestName[];
}
/**
 * The name of the given contest type
 */
export interface ContestName {
  /** The name for this contest */
  name: string;
  /** The color associated with this contest's name */
  color: string;
  /** The language that this name is in */
  language: NamedAPIResource;
}
/**
 * ## Contest Effect
 * Contest effects refer to the effects of moves when used in contests
 */
export interface ContestEffect {
  /** The identifier for this resource */
  id: number;
  /** The base number of hearts the user of this move gets */
  appeal: number;
  /** The base number of hearts the user's opponent loses */
  jam: number;
  /** The result of this contest effect listed in different languages */
  effect_entries: Effect[];
  /** The flavor text of this contest effect listed in different languages */
  flavor_text_entries: FlavorText[];
}
/**
 * ## Super Contest Effect
 * Super contest effects refer to the effects of moves when used in super contests.
 * A Pokémon Super Contest is an expanded format of the [Pokémon Contests](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Contest)
 * for the Generation IV games,
 * specifically in [Diamond, Pearl](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Diamond_and_Pearl_Versions),
 * and [Platinum](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Platinum_Version).
 * In it, Pokémon are rated on their appearance and performance, rather than strength.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Super_Contest)
 */
export interface SuperContestEffect {
  /** The identifier for this resource */
  id: number;
  /** The level of appeal this super contest effect has */
  appeal: number;
  /** The flavor text of this super contest effect listed in different languages */
  flavor_text_entries: FlavorText[];
  /** A list of moves that have the effect when used in super contests */
  moves: NamedAPIResource[];
}

/**
 * ## Encounter Method
 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Wild_Pok%C3%A9mon) for greater detail.
 */
export interface EncounterMethod {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** A good value for sorting */
  order: number;
  /** The name of this resource listed in different languages */
  names: Name[];
}
/**
 * ## Encounter Condition
 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 *  - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Time)
 */
export interface EncounterCondition {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of possible values for this encounter condition */
  values: NamedAPIResource[];
}
/**
 * ## Encounter Condition Value
 * Encounter condition values are the various states that an encounter
 * condition can have, i.e., time of day can be either **day** or **night**
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Time)
 */
export interface EncounterConditionValue {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The condition this encounter condition value pertains to */
  condition: NamedAPIResource;
  /** The name of this resource listed in different languages */
  names: Name[];
}

/**
 * Evolution Detail
 * All details regarding the specific details of the referenced Pokémon species evolution.
 */
export interface EvolutionDetail {
  /** The item required to cause evolution this into Pokémon species. */
  item: NamedAPIResource | null;
  /** The type of event that triggers evolution into this Pokémon species. */
  trigger: NamedAPIResource;
  /** The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. */
  gender: number | null;
  /** The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. */
  held_item: NamedAPIResource | null;
  /** The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. */
  known_move: NamedAPIResource | null;
  /** The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. */
  known_move_type: NamedAPIResource | null;
  /** The location the evolution must be triggered at. */
  location: NamedAPIResource | null;
  /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
  min_level: number | null;
  /** The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species. */
  min_happiness: number | null;
  /** The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species. */
  min_beauty: number | null;
  /** The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species. */
  min_affection: number | null;
  /** Whether or not it must be raining in the overworld to cause evolution this Pokémon species. */
  needs_overworld_rain: boolean;
  /** The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species. */
  party_species: NamedAPIResource | null;
  /**
   * The player must have a Pokémon of this type in their party during the evolution trigger event
   * in order for the evolving Pokémon species to evolve into this Pokémon species.
   */
  party_type: NamedAPIResource | null;
  /** The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
  relative_physical_stats: 1 | 0 | -1 | null;
  /** The required time of day. Day or night. */
  time_of_day: 'Day' | 'Night' | '';
  /** Pokémon species for which this one must be traded. */
  trade_species: NamedAPIResource | null;
  /** Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up. */
  turn_upside_down: boolean;
}
/**
 * ## Chain Link
 * Contains evolution details for a Pokémon in the chain.
 * Each link references the next Pokémon in the natural evolution order
 */
export interface ChainLink {
  /** Whether or not this link is for a baby Pokémon. This would only ever be true on the base link */
  is_baby: boolean;
  /** The Pokémon species at this point in the evolution chain */
  species: NamedAPIResource;
  /** All details regarding the specific details of the referenced Pokémon species evolution */
  evolution_details: EvolutionDetail[];
  /** A List of chain objects */
  evolves_to: ChainLink[];
}
/**
 * ## Evolution Chain
 * Evolution chains are essentially family trees.
 * They start with the lowest stage within a family and detail
 * evolution conditions for each as well as Pokémon they can evolve
 * into up through the hierarchy.
 */
export interface EvolutionChain {
  /** The identifier for this resource */
  id: number;
  /**
   * The item that a Pokémon would be holding when mating that would trigger
   * the egg hatching a baby Pokémon rather than a basic Pokémon
   */
  baby_trigger_item: NamedAPIResource | null;
  /**
   * The base chain link object. Each link contains evolution details for a Pokémon in the chain.
   * Each link references the next Pokémon in the natural evolution order
   */
  chain: ChainLink;
}
/**
 * ## Evolution Trigger
 * Evolution triggers are the events and conditions that cause a Pokémon to evolve.
 * There are numerous methods of evolution which define how and when Pokémon evolve.
 * Most Pokémon will evolve by leveling up while others evolve through specific means,
 * such as being traded, achieving a certain amount of friendship or leveling at certain times, among others.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 */
export interface EvolutionTrigger {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: 'level-up' | 'trade' | 'use-item' | 'shed' | 'other';
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of pokemon species that result from this evolution trigger. */
  pokemon_species: NamedAPIResource[];
}

/**
 * ## Generation
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include.
 * In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Generation) for greater details.
 */
export interface Generation {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** A list of abilities that were introduced in this generation */
  abilities: NamedAPIResource[];
  /** The name of this resource listed in different languages */
  names: Name[];
  /** The main region travelled in this generation */
  main_region: NamedAPIResource;
  /** A list of moves that were introduced in this generation */
  moves: NamedAPIResource[];
  /** A list of Pokémon species that were introduced in this generation */
  pokemon_species: NamedAPIResource[];
  /** A list of types that were introduced in this generation */
  types: NamedAPIResource[];
  /** A list of version groups that were introduced in this generation */
  version_groups: NamedAPIResource[];
}

/**
 * Catalogued pokémon for pokedex
 */
export interface PokemonEntry {
  /** The index of this Pokémon species entry within the Pokédex */
  entry_number: number;
  /** The Pokémon species being encountered */
  pokemon_species: NamedAPIResource;
}

/**
 * ## Pokedex
 * A Pokédex is a handheld electronic encyclopedia device;
 * one which is capable of recording and retaining information of the various Pokémon in a given region
 * with the exception of the national dex and some smaller dexes related to portions of a region.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex) for greater detail
 */
export interface Pokedex {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** Whether or not this Pokédex originated in the main series of the video games */
  is_main_series: boolean;
  /** The description of this resource listed in different languages */
  descriptions: Description[];
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of Pokémon catalogued in this Pokédex and their indexes */
  pokemon_entries: PokemonEntry[];
  /** The region this Pokédex catalogues Pokémon for */
  region: NamedAPIResource | null;
  /** A list of version groups this Pokédex is relevant to */
  version_groups: NamedAPIResource[];
}

/**
 * ## Version
 * Versions of the games, e.g., Red, Blue or Yellow,
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Core_series) for greater details.
 */
export interface Version {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** The version group this version belongs to */
  version_group: NamedAPIResource;
}
/**
 * ## Version Group
 * Version groups categorize highly similar versions of the games
 */
export interface VersionGroup {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** Order for sorting. Almost by date of release, except similar versions are grouped together */
  order: number;
  /** The generation this version was introduced in */
  generation: NamedAPIResource;
  /** A list of methods in which Pokémon can learn moves in this version group */
  move_learn_methods: NamedAPIResource[];
  /** A list of Pokédexes introduces in this version group */
  pokedexes: NamedAPIResource[];
  /** A list of regions that can be visited in this version group */
  regions: NamedAPIResource[];
  /** The versions this version group owns */
  versions: NamedAPIResource[];
}

/**
 * Sprites used to depict the given item in the game
 */
export interface ItemSprites {
  /** The default depiction of this item */
  default: string;
}
/**
 * Pokémon that might be found in the wild holding the given item
 */
export interface ItemHolderPokemon {
  /** The Pokémon that holds this item */
  pokemon: NamedAPIResource;
  /** The details for the version that this item is held in by the Pokémon */
  version_details: ItemHolderPokemonVersionDetail[];
}
/**
 * The details for the version that the given item is held in by the Pokémon
 */
export interface ItemHolderPokemonVersionDetail {
  /** How often this Pokémon holds this item in this version */
  rarity: number;
  /** The version that this item is held in by the Pokémon */
  version: NamedAPIResource;
}
/**
 * ## Item Attribute
 * Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable"
 */
export interface ItemAttribute {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** A list of items that have this attribute */
  items: NamedAPIResource[];
  /** The name of this item attribute listed in different languages */
  names: Name[];
  /** The description of this item attribute listed in different languages */
  descriptions: Description[];
}
/**
 * ## Item Category
 * Item categories determine where items will be placed in the players bag
 */
export interface ItemCategory {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** A list of items that are a part of this category */
  items: NamedAPIResource[];
  /** The name of this item category listed in different languages */
  names: Name[];
  /** The pocket items in this category would be put in */
  pocket: NamedAPIResource;
}
/**
 * ## Item Fling Effect
 * The various effects of the move "Fling" when used with different items
 */
export interface ItemFlingEffect {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The result of this fling effect listed in different languages */
  effect_entries: Effect[];
  /** A list of items that have this fling effect */
  items: NamedAPIResource[];
}
/**
 * ## Item Pocket
 * Pockets within the players bag used for storing items by category
 */
export interface ItemPocket {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** A list of item categories that are relevant to this item pocket */
  categories: NamedAPIResource[];
  /** The name of this resource listed in different languages */
  names: Name[];
}
/**
 * ## Item
 * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner.
 * They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Item)
 */
export interface Item {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The price of this item in stores */
  cost: number;
  /** The power of the move Fling when used with this item. */
  fling_power: number | null;
  /** The effect of the move Fling when used with this item */
  fling_effect: NamedAPIResource | null;
  /** A list of attributes this item has */
  attributes: NamedAPIResource[];
  /** The category of items this item falls into */
  category: NamedAPIResource;
  /** The effect of this ability listed in different languages */
  effect_entries: VerboseEffect[];
  /** The flavor text of this ability listed in different languages */
  flavor_text_entries: VersionGroupFlavorText[];
  /** A list of game indices relevent to this item by generation */
  game_indices: GenerationGameIndex[];
  /** The name of this item listed in different languages */
  names: Name[];
  /** A set of sprites used to depict this item in the game */
  sprites: ItemSprites;
  /** A list of Pokémon that might be found in the wild holding this item */
  held_by_pokemon: ItemHolderPokemon[];
  /** An evolution chain this item requires to produce a bay during mating */
  baby_trigger_for: APIResource | null;
  /** A list of the machines related to this item */
  machines: MachineVersionDetail[];
}

/**
 * Method in which Pokémon may be encountered in the given area
 * and how likely the method will occur depending on the version of the game
 */
export interface EncounterMethodRate {
  /** The method in which Pokémon may be encountered in an area */
  encounter_method: NamedAPIResource;
  /** The chance of the encounter to occur on a version of the game */
  version_details: EncounterVersionDetails[];
}
/**
 * The chance of the encounter to occur on a version of the game
 */
export interface EncounterVersionDetails {
  /** The chance of an encounter to occur */
  rate: number;
  /** The version of the game in which the encounter can occur with the given chance */
  version: NamedAPIResource;
}
/**
 * Describes a pokémon encounter in a given area
 */
export interface PokemonEncounter {
  /** The Pokémon being encountered */
  pokemon: NamedAPIResource;
  /** A list of versions and encounters with Pokémon that might happen in the referenced location area */
  version_details: VersionEncounterDetail[];
}

/**
 * ## Location
 * Locations that can be visited within the games.
 * Locations make up sizable portions of regions, like cities or routes.
 * - Check the [List of Locations](https://bulbapedia.bulbagarden.net/wiki/List_of_locations_by_name)
 */
export interface Location {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The region this location can be found in */
  region: NamedAPIResource | null;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of game indices relevent to this location by generation */
  game_indices: GenerationGameIndex[];
  /** Areas that can be found within this location */
  areas: NamedAPIResource[];
}
/**
 * ## Location Area
 * Location areas are sections of areas, such as floors in a building or cave.
 * Each area has its own set of possible Pokémon encounters.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Area) for more details.
 */
export interface LocationArea {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The internal id of an API resource within game data */
  game_index: number;
  /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game */
  encounter_method_rates: EncounterMethodRate[];
  /** The region this location area can be found in */
  location: NamedAPIResource;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter */
  pokemon_encounters: PokemonEncounter[];
}

/**
 * ## Pal Park Area
 * Areas used for grouping Pokémon encounters in Pal Park.
 * They're like habitats that are specific to Pal Park.
 * Pal Park is divided into five separate areas:
 * ---
 * - [Field](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Field)
 * - [Forest](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Forest)
 * - [Mountain](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Mountain)
 * - [Pond](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Pound)
 * - [Sea](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Sea)
 * - [Trivia](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Trivia)
 * ---
 * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pal_Park) for greater details.
 */
export interface PalParkArea {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of Pokémon encountered in thi pal park area along with details */
  pokemon_encounters: PalParkEncounterSpecies[];
}
/**
 * Detais of a Pokémon encountered in thi Pal Park area
 */
export interface PalParkEncounterSpecies {
  /** The base score given to the player when this Pokémon is caught during a pal park run */
  base_score: number;
  /** The base rate for encountering this Pokémon in this pal park area */
  rate: number;
  /** The Pokémon species being encountered */
  pokemon_species: NamedAPIResource;
}

/**
 * ## Region
 * A region is an organized area of the Pokémon world.
 * Most often, the main difference between regions is
 * the species of Pokémon that can be encountered within them.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Region) for greater details.
 */
export interface Region {
  /** The identifier for this resource */
  id: number;
  /** A list of locations that can be found in this region */
  locations: NamedAPIResource[];
  /** The name for this resource */
  name: string;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** The generation this region was introduced in */
  main_generation: NamedAPIResource;
  /** A list of pokédexes that catalogue Pokémon in this region */
  pokedexes: NamedAPIResource[];
  /** A list of version groups where this region can be visited */
  version_groups: NamedAPIResource[];
}

/**
 * ## Machine
 * Machines are the representation of items that teach moves to Pokémon.
 * They vary from version to version, so it is not certain that one specific
 * [TM (Technical Machine)](https://bulbapedia.bulbagarden.net/wiki/TM) or
 * [HM (Hidden Machine)](https://bulbapedia.bulbagarden.net/wiki/HM) corresponds to a single Machine.
 */
export interface Machine {
  /** The identifier for this resource */
  id: number;
  /** The TM or HM item that corresponds to this machine */
  item: NamedAPIResource;
  /** The move that is taught by this machine */
  move: NamedAPIResource;
  /** The version group that this machine applies to */
  version_group: NamedAPIResource;
}

/**
 * ## Ability
 * Abilities provide passive effects for Pokémon in battle or in the overworld.
 * Pokémon have multiple possible abilities but can have only one ability at a time.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 */
export interface Ability {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** Whether or not this ability originated in the main series of the video games */
  is_main_series: boolean;
  /** The generation this ability originated in */
  generation: NamedAPIResource;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** The effect of this ability listed in different languages */
  effect_entries: VerboseEffect[];
  /** The list of previous effects this ability has had across version groups */
  effect_changes: AbilityEffectChange[];
  /** The flavor text of this ability listed in different languages */
  flavor_text_entries: AbilityFlavorText[];
  /** A list of Pokémon that could potentially have this ability */
  pokemon: AbilityPokemon[];
}
/**
 * Previous effects an ability has had across version groups
 */
export interface AbilityEffectChange {
  /** The previous effect of this ability listed in different languages */
  effect_entries: Effect[];
  /** The version group in which the previous effect of this ability originated */
  version_group: NamedAPIResource;
}
/**
 * The flavor text of an ability
 */
export interface AbilityFlavorText {
  /** The localized name for an API resource in a specific language */
  flavor_text: string;
  /** The language this text resource is in */
  language: NamedAPIResource;
  /** The version group that uses this flavor text */
  version_group: NamedAPIResource;
}
/**
 * Pokémon that could potentially have the given ability
 */
export interface AbilityPokemon {
  /** Whether or not this a hidden ability for the referenced Pokémon */
  is_hidden: boolean;
  /**
   * Pokémon have 3 ability 'slots' which hold references to possible abilities they could have.
   * This is the slot of this ability for the referenced pokemon
   */
  slot: number;
  /** The Pokémon this ability could belong to */
  pokemon: NamedAPIResource;
}

/**
 * ## Characteristic
 * Characteristics indicate which stat contains a Pokémon's highest IV.
 * A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo).
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail
 */
export interface Characteristic {
  /** The identifier for this resource */
  id: number;
  /** The remainder of the highest stat/IV divided by 5 */
  gene_modulo: number;
  /** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5 */
  possible_values: number[];
  /** The highest stat for the referenced characteristic */
  highest_stat: NamedAPIResource;
  /** Descriptions for the referenced characteristic */
  descriptions: Description[];
}

/**
 * ## Egg Group
 * Egg Groups are categories which determine which Pokémon are able to interbreed.
 * Pokémon may belong to either one or two Egg Groups.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater details.
 */
export interface EggGroup {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name:
    | 'monster'
    | 'water1'
    | 'water2'
    | 'water3'
    | 'bug'
    | 'flying'
    | 'ground'
    | 'fairy'
    | 'plant'
    | 'humanshape'
    | 'mineral'
    | 'indeterminate'
    | 'ditto'
    | 'dragon'
    | 'no-eggs';
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of all Pokémon species that are members of this egg group */
  pokemon_species: NamedAPIResource[];
}

/**
 * ## Gender
 * Genders were introduced in Generation II for the purposes of breeding Pokémon
 * but can also result in visual differences or even different evolutionary lines.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Gender) for greater details.
 */
export interface Gender {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: 'male' | 'female' | 'genderless';
  /** A list of Pokémon species that can be this gender and how likely it is that they will be */
  pokemon_species_details: PokemonSpeciesGender[];
  /** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them */
  required_for_evolution: NamedAPIResource[];
}
/**
 * Pokémon species that can be this gender and how likely it is that they will be
 */
export interface PokemonSpeciesGender {
  /** The chance of this Pokémon being female, in eighths; or -1 for genderless */
  rate: number;
  /** A Pokémon species that can be the referenced gender */
  pokemon_species: NamedAPIResource;
}

/**
 * Levels and the amount of experienced needed to atain them based on the given growth rate.
 */
export interface GrowthRateExperienceLevel {
  /** The level gained. */
  level: number;
  /** The amount of experience required to reach the referenced level. */
  experience: number;
}
/**
 * ## Growth Rate
 * Growth rates are the speed with which Pokémon gain levels through experience.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Experience) for greater details.
 */
export interface GrowthRate {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name:
    | 'slow'
    | 'medium'
    | 'fast'
    | 'medium-slow'
    | 'slow-then-very-fast'
    | 'fast-then-very-slow';
  /** The formula used to calculate the rate at which the Pokémon species gains level */
  formula: string;
  /** The descriptions of this characteristic listed in different languages */
  descriptions: Description[];
  /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
  levels: GrowthRateExperienceLevel[];
  /** A list of Pokémon species that gain levels at this growth rate */
  pokemon_species: NamedAPIResource[];
}

/**
 * ## Nature
 * Natures influence how a Pokémon's stats grow.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail
 */
export interface Nature {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The stat decreased by 10% in Pokémon with this nature */
  decreased_stat: NamedAPIResource | null;
  /** The stat increased by 10% in Pokémon with this nature */
  increased_stat: NamedAPIResource | null;
  /** The flavor hated by Pokémon with this nature */
  hates_flavor: NamedAPIResource | null;
  /** The flavor liked by Pokémon with this nature */
  likes_flavor: NamedAPIResource | null;
  /** A list of Pokéathlon stats this nature effects and how much it effects them */
  pokeathlon_stat_changes: NatureStatChange[];
  /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent */
  move_battle_style_preferences: MoveBattleStylePreference[];
  /** The name of this resource listed in different languages */
  names: Name[];
}
/**
 * Pokéathlon stats a nature effects and how much it effects it
 */
export interface NatureStatChange {
  /** The amount of change */
  max_change: -1 | 1 | -2 | 2;
  /** The stat being affected */
  pokeathlon_stat: NamedAPIResource;
}
/**
 * Battle Style and how likely a Pokémon with the given nature is to use them
 * in the Battle Palace or Battle Tent
 */
export interface MoveBattleStylePreference {
  /** Chance of using the move, in percent, if HP is under one half */
  low_hp_preference: number;
  /** Chance of using the move, in percent, if HP is over one half */
  high_hp_preference: number;
  /** The move battle style */
  move_battle_style: NamedAPIResource;
}

/**
 * ## Pokeathlon Stat
 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons.
 * In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater details.
 */
export interface PokeathlonStat {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: 'speed' | 'power' | 'skill' | 'stamina' | 'jump';
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A detail of natures which affect this Pokéathlon stat positively or negatively */
  affecting_natures: NaturePokeathlonStatAffectSets;
}
/**
 * A nature and how it change the referenced Pokéathlon stat
 */
export interface NaturePokeathlonStatAffect {
  /** The maximum amount of change to the referenced Pokéathlon stat. */
  max_change: -1 | -2 | 1 | 2;
  /** The nature causing the change */
  nature: NamedAPIResource;
}
/**
 * A detail of natures which affect this Pokéathlon stat positively or negatively
 */
export interface NaturePokeathlonStatAffectSets {
  /** A list of natures and how they change the referenced Pokéathlon stat */
  increase: NaturePokeathlonStatAffect[];
  /** A list of natures and how they change the referenced Pokéathlon stat */
  decrease: NaturePokeathlonStatAffect[];
}

/**
 * ## Stat
 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat
 * which grows as they gain levels and can be altered momentarily by effects in battles
 */
export interface Stat {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name:
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special-attack'
    | 'special-defense'
    | 'speed'
    | 'accuracy'
    | 'evasion';
  /** ID the games use for this stat */
  game_index: number;
  /** Whether this stat only exists within a battle */
  is_battle_only: boolean;
  /** A detail of moves which affect this stat positively or negatively */
  affecting_moves: MoveStatAffectSets;
  /** A detail of natures which affect this stat positively or negatively */
  affecting_natures: NatureStatAffectSets;
  /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat */
  characteristics: APIResource[];
  /** The class of damage this stat is directly related to */
  move_damage_class: NamedAPIResource | null;
  /** The name of this resource listed in different languages */
  names: Name[];
}
/**
 * A detail of nature which affect the given stat stat positively or negatively
 */
export interface NatureStatAffectSets {
  /** A list of natures and how they change the referenced stat */
  increase: NamedAPIResource[];
  /** A list of nature sand how they change the referenced stat */
  decrease: NamedAPIResource[];
}
/**
 * Move and how it change the referenced stat
 */
export interface MoveStatAffect {
  /** The maximum amount of change to the referenced stat */
  change: -1 | -2 | 1 | 2;
  /** The move causing the change */
  move: NamedAPIResource;
}
/**
 * A detail of moves which affect an stat positively or negatively
 */
export interface MoveStatAffectSets {
  /** A list of moves and how they change the referenced stat */
  increase: MoveStatAffect[];
  /** A list of moves and how they change the referenced stat */
  decrease: MoveStatAffect[];
}

/**
 * Details of Pokémon for a specific type.
 */
export interface TypePokemon {
  /** The order the Pokémon's types are listed in */
  slot: number;
  /** The Pokémon that has the referenced type */
  pokemon: NamedAPIResource;
}
/**
 * Detail of how effective a type is toward others and vice versa
 */
export interface TypeRelations {
  /** A list of types this type has no effect on */
  no_damage_to: NamedAPIResource[];
  /** A list of types this type is not very effect against */
  half_damage_to: NamedAPIResource[];
  /** A list of types this type is very effect against */
  double_damage_to: NamedAPIResource[];
  /** A list of types that have no effect on this type */
  no_damage_from: NamedAPIResource[];
  /** A list of types that are not very effective against this type */
  half_damage_from: NamedAPIResource[];
  /** A list of types that are very effective against this type */
  double_damage_from: NamedAPIResource[];
}
/**
 * Details of how effective this type was toward others and vice versa in a previous generation
 */
export interface TypeRelationsPast {
  /** The last generation in which the referenced type had the listed damage relations */
  generation: NamedAPIResource;
  /** The damage relations the referenced type had up to and including the listed generation */
  damage_relations: TypeRelations;
}
/**
 * ## Type
 * Types are properties for Pokémon and their moves.
 * Each type has three properties: which types of Pokémon it is super effective against,
 * which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against
 */
export interface Type {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** A detail of how effective this type is toward others and vice versa */
  damage_relations: TypeRelations;
  /** A list of details of how effective this type was toward others and vice versa in previous generations */
  past_damage_relations: TypeRelationsPast[];
  /** A list of game indices relevent to this item by generation */
  game_indices: GenerationGameIndex[];
  /** The generation this type was introduced in */
  generation: NamedAPIResource;
  /** The class of damage inflicted by this type */
  move_damage_class: NamedAPIResource;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of details of Pokémon that have this type */
  pokemon: TypePokemon[];
  /** A list of moves that have this type */
  moves: NamedAPIResource[];
}

/**
 * ## Pokemon
 * Pokémon are the creatures that inhabit the world of the Pokémon games.
 * They can be caught using Pokéballs and trained by battling with other Pokémon.
 * Each Pokémon belongs to a specific species but may take on a variant
 * which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 */
export interface Pokemon {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The base experience gained for defeating this Pokémon */
  base_experience: number;
  /** The height of this Pokémon in decimetres */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number;
  /** The weight of this Pokémon in hectograms */
  weight: number;
  /** A list of abilities this Pokémon could potentially have */
  abilities: PokemonAbility[];
  /** A list of forms this Pokémon can take on */
  forms: NamedAPIResource[];
  /** A list of game indices relevent to Pokémon item by generation */
  game_indices: VersionGameIndex[];
  /** A list of items this Pokémon may be holding when encountered */
  held_items: PokemonHeldItem[];
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: PokemonMove[];
  /** A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: PokemonSprites;
  /** The species this Pokémon belongs to */
  species: NamedAPIResource;
  /** A list of base stat values for this Pokémon */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has */
  types: PokemonType[];
  /** Data describing a Pokemon's types in a previous generation. */
  past_types: PokemonPastType[];
}
/**
 * Abilities the given pokémon could potentially have
 */
export interface PokemonAbility {
  /** Whether or not this is a hidden ability */
  is_hidden: boolean;
  /** The slot this ability occupies in this Pokémon species */
  slot: number;
  /** The ability the Pokémon may have */
  ability: NamedAPIResource;
}
/**
 * Details showing types the given Pokémon has
 */
export interface PokemonType {
  /** The order the Pokémon's types are listed in */
  slot: number;
  /** The type the referenced Pokémon has */
  type: NamedAPIResource;
}
/**
 * Data describing a Pokemon's types in a previous generation.
 */
export interface PokemonPastType {
  /** The generation of this Pokémon Type. */
  generation: NamedAPIResource;
  /** Types this of this Pokémon in a previos generation. */
  types: PokemonType[];
}
/**
 * Items the given Pokémon may be holding when encountered
 */
export interface PokemonHeldItem {
  /** The item the referenced Pokémon holds */
  item: NamedAPIResource;
  /** The details of the different versions in which the item is held */
  version_details: PokemonHeldItemVersion[];
}
/**
 * The details of the different versions in which the item is held
 */
export interface PokemonHeldItemVersion {
  /** The version in which the item is held */
  version: NamedAPIResource;
  /** How often the item is held */
  rarity: number;
}
/**
 * A Move along with learn methods and level details pertaining to specific version groups
 */
export interface PokemonMove {
  /** The move the Pokémon can learn */
  move: NamedAPIResource;
  /** The details of the version in which the Pokémon can learn the move */
  version_group_details: PokemonMoveVersion[];
}
/**
 * The details of the version in which the Pokémon can learn the move
 */
export interface PokemonMoveVersion {
  /** The method by which the move is learned */
  move_learn_method: NamedAPIResource;
  /** The version group in which the move is learned */
  version_group: NamedAPIResource;
  /** The minimum level to learn the move */
  level_learned_at: number;
}
/**
 * Base stat values for the given Pokémon
 */
export interface PokemonStat {
  /** The stat the Pokémon has */
  stat: NamedAPIResource;
  /** The effort points (EV) the Pokémon has in the stat */
  effort: number;
  /** The base value of the stat */
  base_stat: number;
}
/** Version Sprites */
export interface VersionSprites {
  /** Generation-I Sprites of this Pokémon */
  'generation-i': GenerationISprites;
  /** Generation-II Sprites of this Pokémon */
  'generation-ii': GenerationIISprites;
  /** Generation-III Sprites of this Pokémon */
  'generation-iii': GenerationIIISprites;
  /** Generation-IV Sprites of this Pokémon */
  'generation-iv': GenerationIVSprites;
  /** Generation-V Sprites of this Pokémon */
  'generation-v': GenerationVSprites;
  /** Generation-VI Sprites of this Pokémon */
  'generation-vi': GenerationVISprites;
  /** Generation-VII Sprites of this Pokémon */
  'generation-vii': GenerationVIISprites;
  /** Generation-VIII Sprites of this Pokémon */
  'generation-viii': GenerationVIIISprites;
}
/**
 * A set of sprites used to depict this Pokémon in the game.
 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
 */
export interface PokemonSprites {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the front in battle */
  front_shiny_female: string | null;
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  /** Dream World, Official Artwork and Home sprites */
  other?: OtherPokemonSprites;
  /** Version Sprites of this Pokémon */
  versions: VersionSprites;
}
/** Other Pokemon Sprites (Dream World and Official Artwork sprites) */
export interface OtherPokemonSprites {
  /** Dream World Sprites of this Pokémon */
  dream_world: DreamWorld;
  /** Official Artwork Sprites of this Pokémon */
  'official-artwork': OfficialArtwork;
  /** Home Artwork Sprites of this Pokémon */
  home: Home;
}
/** Dream World sprites */
export interface DreamWorld {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
}
/** Official Artwork sprites */
export interface OfficialArtwork {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
}
/** Home sprites */
export interface Home {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
/** Generation-I Srites */
export interface GenerationISprites {
  /** Red-blue sprites of this Pokémon */
  'red-blue': RedBlue;
  /** Yellow sprites of this Pokémon  */
  yellow: Yellow;
}
/** Red/Blue Sprites */
export interface RedBlue {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The gray depiction of this Pokémon from the back in battle */
  back_gray: string | null;
  /** The transparent depiction of this Pokémon from the back in battle */
  back_transparent: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The gray depiction of this Pokémon from the front in battle */
  front_gray: string | null;
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null;
}
/** Yellow sprites */
export interface Yellow {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The gray depiction of this Pokémon from the back in battle */
  back_gray: string | null;
  /** The transparent depiction of this Pokémon from the back in battle */
  back_transparent: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The gray depiction of this Pokémon from the front in battle */
  front_gray: string | null;
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null;
}
/** Generation-II Sprites */
export interface GenerationIISprites {
  /** Crystal sprites of this Pokémon */
  crystal: Crystal;
  /** Gold sprites of this Pokémon */
  gold: Gold;
  /** Silver sprites of this Pokémon */
  silver: Silver;
}
/** Crystal sprites */
export interface Crystal {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The back shiny transparent depiction of this Pokémon from the back in battle */
  back_shiny_transparent: string | null;
  /** The transparent depiction of this Pokémon from the back in battle */
  back_transparent: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The front shiny transparent depiction of this Pokémon from the front in battle */
  front_shiny_transparent: string | null;
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null;
}
export interface Gold {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null;
}
/** Silver sprites */
export interface Silver {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The transparent depiction of this Pokémon from the front in battle */
  front_transparent: string | null;
}
/** Generation-III Sprites */
export interface GenerationIIISprites {
  /** Emerald sprites of this Pokémon */
  emerald: Emerald;
  /** Firered-Leafgreen sprites of this Pokémon */
  'firered-leafgreen': FireredLeafgreen;
  /** Ruby-Sapphire sprites of this Pokémon */
  'ruby-sapphire': RubySapphire;
}
/** Emerald sprites */
export interface Emerald {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
}
/** FireRead LeafGreen sprites  */
export interface FireredLeafgreen {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
}
/** Ruby/Sapphire sprites */
export interface RubySapphire {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
}
/** Generation-IV Sprites */
export interface GenerationIVSprites {
  /** Diamond-pearl Generation sprites of this Pokémon */
  'diamond-pearl': DiamondPearl;
  /** Heartgold-Soulsilver sprites of this Pokémon */
  'heartgold-soulsilver': HeartgoldSoulsilver;
  /** Platinum sprites of this Pokémon */
  platinum: Platinum;
}
export interface DiamondPearl {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
export interface HeartgoldSoulsilver {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
export interface Platinum {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
/** Generation-V Sprites */
export interface GenerationVSprites {
  /** Black-white sprites of this Pokémon */
  'black-white': BlackWhite;
}
/** Black/White sprites */
export interface BlackWhite {
  /** The animated sprite of this pokémon */
  animated: Animated;
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
export interface Animated {
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
/** Generation-VI Sprites */
export interface GenerationVISprites {
  /** Omegaruby-Alphasapphire sprites of this Pokémon */
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  /** X-Y sprites of this Pokémon */
  'x-y': XY;
}
/** Omega/Ruby Alpha/Sapphire sprites */
export interface OmegarubyAlphasapphire {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
/** XY sprites */
export interface XY {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
/** Generation-VII Sprites */
export interface GenerationVIISprites {
  /** Icon sprites of this Pokémon */
  icons: GenerationViiIcons;
  /** Ultra-sun-ultra-moon sprites of this Pokémon */
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}
/** Generation VII icons */
export interface GenerationViiIcons {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
}
/** Ultra Sun Ultra Moon sprites */
export interface UltraSunUltraMoon {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}
/** Generation-VIII Sprites */
export interface GenerationVIIISprites {
  /** Icon sprites of this Pokémon */
  icons: GenerationViiiIcons;
}
/** Generation VIII icons */
export interface GenerationViiiIcons {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
}
/**
 * ## Location Area Encounter
 * Pokémon location areas where Pokémon can be found
 */
export interface LocationAreaEncounter {
  /** The location area the referenced Pokémon can be encountered in */
  location_area: NamedAPIResource;
  /** A list of versions and encounters with the referenced Pokémon that might happen */
  version_details: VersionEncounterDetail[];
}
/**
 * ## Pokemon Colors
 * Colors used for sorting Pokémon in a Pokédex.
 * The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body.
 * No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 */
export interface PokemonColor {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name:
    | 'black'
    | 'blue'
    | 'brown'
    | 'gray'
    | 'green'
    | 'pink'
    | 'purple'
    | 'red'
    | 'white'
    | 'yellow';
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of the Pokémon species that have this color */
  pokemon_species: NamedAPIResource[];
}
/**
 * ## Pokemon Form
 * Some Pokémon may appear in one of multiple, visually different forms.
 * These differences are purely cosmetic. For variations within a Pokémon species,
 * which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 */
export interface PokemonForm {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The order in which forms should be sorted within all forms.
   * Multiple forms may have equal order, in which case they should fall back on sorting by name
   */
  order: number;
  /** The order in which forms should be sorted within a species' forms */
  form_order: number;
  /** True for exactly one form used as the default for each Pokémon */
  is_default: boolean;
  /** Whether or not this form can only happen during battle */
  is_battle_only: boolean;
  /** Whether or not this form requires mega evolution */
  is_mega: boolean;
  /** The name of this form */
  form_name: string;
  /** The Pokémon that can take on this form */
  pokemon: NamedAPIResource;
  /** A set of sprites used to depict this Pokémon form in the game */
  sprites: PokemonFormSprites;
  /** The version group this Pokémon form was introduced in */
  version_group: NamedAPIResource;
  /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name */
  names: Name[];
  /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name */
  form_names: Name[];
  /** A list of details showing types this Pokémon has */
  types: PokemonType[];
}
/**
 * Sprites used to depict this Pokémon form in the game
 */
export interface PokemonFormSprites {
  /** The default depiction of this Pokémon form from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon form from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pokémon form from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon form from the front in battle */
  front_shiny_female: string | null;
  /** The default depiction of this Pokémon form from the back in battle */
  back_default: string | null;
  /** The female depiction of this Pokémon form from the back in battle */
  back_female: string | null;
  /** The shiny depiction of this Pokémon form from the back in battle */
  back_shiny: string | null;
  /** The shiny female depiction of this Pokémon form from the back in battle */
  back_shiny_female: string | null;
}
/**
 * ## Pokemon Habitat
 * Habitats are generally different terrain Pokémon can be found in
 * but can also be areas designated for rare or legendary Pokémon
 */
export interface PokemonHabitat {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name:
    | 'cave'
    | 'forest'
    | 'grassland'
    | 'mountain'
    | 'rare'
    | 'rough-terrain'
    | 'sea'
    | 'urban'
    | 'waters-edge';
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of the Pokémon species that can be found in this habitat */
  pokemon_species: NamedAPIResource[];
}
/**
 * ## Pokemon Shape
 * Shapes used for sorting Pokémon in a Pokédex
 */
export interface PokemonShape {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The "scientific" name of this Pokémon shape listed in different languages */
  awesome_names: AwesomeName[];
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of the Pokémon species that have this shape */
  pokemon_species: NamedAPIResource[];
}
/**
 * The "scientific" name of the Pokémon shape listed in different languages
 */
export interface AwesomeName {
  /** The localized "scientific" name for an API resource in a specific language */
  awesome_name: string;
  /** The language this "scientific" name is in */
  language: NamedAPIResource;
}
/**
 * ## Pokemon Species
 * A Pokémon Species forms the basis for at least one Pokémon.
 * Attributes of a Pokémon species are shared across all varieties of Pokémon within the species.
 * A good example is Wormadam; Wormadam is the species which can be found in three different varieties,
 * Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant */
export interface PokemonSpecies {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage */
  order: number;
  /** The chance of this Pokémon being female, in eighths; or -1 for genderless */
  gender_rate: number;
  /** The base capture rate; up to 255. The higher the number, the easier the catch */
  capture_rate: number;
  /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon */
  base_happiness: number;
  /** Whether or not this is a baby Pokémon */
  is_baby: boolean;
  /** Whether or not this is a legendary Pokémon */
  is_legendary: boolean;
  /** Whether or not this is a mythical Pokémon */
  is_mythical: boolean;
  /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's */
  hatch_counter: number;
  /** Whether or not this Pokémon has visual gender differences */
  has_gender_differences: boolean;
  /** Whether or not this Pokémon has multiple forms and can switch between them */
  forms_switchable: boolean;
  /** The rate at which this Pokémon species gains levels */
  growth_rate: NamedAPIResource;
  /** A list of Pokedexes and the indexes reserved within them for this Pokémon species */
  pokedex_numbers: PokemonSpeciesDexEntry[];
  /** A list of egg groups this Pokémon species is a member of */
  egg_groups: NamedAPIResource[];
  /** The color of this Pokémon for Pokédex search */
  color: NamedAPIResource;
  /** The shape of this Pokémon for Pokédex search */
  shape: NamedAPIResource;
  /** The Pokémon species that evolves into this Pokemon_species */
  evolves_from_species: NamedAPIResource;
  /** The evolution chain this Pokémon species is a member of */
  evolution_chain: APIResource;
  /** The habitat this Pokémon species can be encountered in */
  habitat: NamedAPIResource;
  /** The generation this Pokémon species was introduced in */
  generation: NamedAPIResource;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of encounters that can be had with this Pokémon species in pal park */
  pal_park_encounters: PalParkEncounterArea[];
  /** A list of flavor text entries for this Pokémon species */
  flavor_text_entries: FlavorText[];
  /** Descriptions of different forms Pokémon take on within the Pokémon species */
  form_descriptions: Description[];
  /** The genus of this Pokémon species listed in multiple languages */
  genera: Genus[];
  /** A list of the Pokémon that exist within this Pokémon species */
  varieties: PokemonSpeciesVariety[];
}
/**
 * The genus of the given Pokémon species listed in multiple languages
 */
export interface Genus {
  /** The localized genus for the referenced Pokémon species */
  genus: string;
  /** The language this genus is in */
  language: NamedAPIResource;
}
/** Pokedexes and the indexes reserved within them for the given Pokémon species */
export interface PokemonSpeciesDexEntry {
  /** The index number within the Pokédex */
  entry_number: number;
  /** The Pokédex the referenced Pokémon species can be found in */
  pokedex: NamedAPIResource;
}
/**
 * Encounter that can be had with the given Pokémon species in pal park
 */
export interface PalParkEncounterArea {
  /** The base score given to the player when the referenced Pokémon is caught during a pal park run */
  base_score: number;
  /** The base rate for encountering the referenced Pokémon in this pal park area */
  rate: number;
  /** The pal park area where this encounter happens */
  area: NamedAPIResource;
}
/**
 * Pokémons that exist within this Pokémon species
 */
export interface PokemonSpeciesVariety {
  /** Whether this variety is the default variety */
  is_default: boolean;
  /** The Pokémon variety */
  pokemon: NamedAPIResource;
}

/**
 * ## Move Target
 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 */
export interface MoveTarget {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The description of this resource listed in different languages. */
  descriptions: Description[];
  /** A list of moves that that are directed at this target. */
  moves: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
}
/**
 * ## Move Learn Method
 * Methods by which Pokémon can learn moves.
 */
export interface MoveLearnMethod {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The description of this resource listed in different languages. */
  descriptions: Description[];
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of version groups where moves can be learned through this method. */
  version_groups: NamedAPIResource[];
}
/**
 * ## Move Damage Class
 * Damage classes moves can have, e.g. physical, special, or non-damaging.
 */
export interface MoveDamageClass {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The description of this resource listed in different languages. */
  descriptions: Description[];
  /** A list of moves that fall into this damage class. */
  moves: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
}
/**
 * ## Move Category
 * Very general categories that loosely group move effects.
 */
export interface MoveCategory {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of moves that fall into this category. */
  moves: NamedAPIResource[];
  /** The description of this resource listed in different languages. */
  descriptions: Description[];
}
/**
 * ## Move Battle Style
 * Styles of moves when used in the Battle Palace.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater details.
 */
export interface MoveBattleStyle {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: 'attack' | 'defense' | 'support';
  /** The name of this resource listed in different languages. */
  names: Name[];
}
/**
 * ## Move Ailment
 * Move Ailments are status conditions caused by moves used during battle.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater details.
 */
export interface MoveAilment {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of moves that cause this ailment. */
  moves: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
}
export interface PastMoveStatValues {
  /** The percent value of how likely this move is to be successful. */
  accuracy: number | null;
  /** The percent value of how likely it is this moves effect will take effect. */
  effect_chance: number | null;
  /** The base power of this move with a value of 0 if it does not have a base power. */
  power: number | null;
  /** Power points. The number of times this move can be used. */
  pp: number | null;
  /** The effect of this move listed in different languages. */
  effect_entries: VerboseEffect[];
  /** The elemental type of this move. */
  type: NamedAPIResource | null;
  /** The version group in which these move stat values were in effect. */
  version_group: NamedAPIResource;
}
/** */
export interface MoveStatChange {
  /** The amount of change. */
  change: number;
  /** The stat being affected. */
  stat: NamedAPIResource;
}
/**
 * Metadata about this move
 */
export interface MoveMetaData {
  /** The status ailment this move inflicts on its target. */
  ailment: NamedAPIResource;
  /** The category of move this move falls under, e.g. damage or ailment. */
  category: NamedAPIResource;
  /** The minimum number of times this move hits. Null if it always only hits once. */
  min_hits: number | null;
  /** The maximum number of times this move hits. Null if it always only hits once. */
  max_hits: number | null;
  /** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
  min_turns: number | null;
  /** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
  max_turns: number | null;
  /** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
  drain: number;
  /** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
  healing: number;
  /**  Critical hit rate bonus. */
  crit_rate: number;
  /** The likelihood this attack will cause an ailment. */
  ailment_chance: number;
  /** The likelihood this attack will cause the target Pokémon to flinch. */
  flinch_chance: number;
  /** The likelihood this attack will cause a stat change in the target Pokémon. */
  stat_chance: number;
}
/**
 * The flavor text of this move.
 */
export interface MoveFlavorText {
  /** The localized flavor text for an api resource in a specific language. */
  flavor_text: string;
  /** The language this name is in. */
  language: NamedAPIResource;
  /** The version group that uses this flavor text. */
  version_group: NamedAPIResource;
}
/**
 * A detail of moves this move can be used before or after, granting additional appeal points in super contests.
 */
export interface ContestComboDetail {
  /** A list of moves to use before this move. */
  use_before: NamedAPIResource[] | null;
  /** A list of moves to use after this move. */
  use_after: NamedAPIResource[] | null;
}
/**
 * A detail of normal and super contest combos that require this move.
 */
export interface ContestComboSets {
  /** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
  normal: ContestComboDetail;
  /** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
  super: ContestComboDetail;
}
/**
 * ## Move
 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn.
 * Some moves (including those learned by Hidden Machine) can be used outside of battle as well,
 * usually for the purpose of removing obstacles or exploring new areas.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Move) for greater detaill
 */
export interface Move {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The percent value of how likely this move is to be successful */
  accuracy: number | null;
  /** The percent value of how likely it is this moves effect will happen */
  effect_chance: number | null;
  /** Power points. The number of times this move can be used */
  pp: number | null;
  /**
   * A value between -8 and 8. Sets the order in which moves are executed during battle.
   * See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail
   */
  priority:
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8;
  /** The base power of this move with a value of 0 if it does not have a base power */
  power: number | null;
  /** A detail of normal and super contest combos that require this move */
  contest_combos: ContestComboSets | null;
  /** The type of appeal this move gives a Pokémon when used in a contest */
  contest_types: NamedAPIResource | null;
  /** The effect the move has when used in a contest */
  contest_effect: APIResource | null;
  /** The type of damage the move inflicts on the target, e.g. physical */
  damage_class: NamedAPIResource | null;
  /** The effect of this move listed in different languages */
  effect_entries: VerboseEffect[];
  /** The list of previous effects this move has had across version groups of the games */
  effect_changes: AbilityEffectChange[];
  /** The flavor text of this move listed in different languages */
  flavor_text_entries: MoveFlavorText[];
  /** The generation in which this move was introduced */
  generation: NamedAPIResource;
  /** A list of the machines that teach this move */
  machines: MachineVersionDetail[];
  /** Metadata about this move */
  meta: MoveMetaData | null;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of move resource value changes across version groups of the game */
  past_values: PastMoveStatValues[];
  /** A list of stats this moves effects and how much it effects them */
  stat_changes: MoveStatChange[];
  /** The effect the move has when used in a super contest */
  super_contest_effect: APIResource | null;
  /** The type of target that will receive the effects of the attack */
  target: NamedAPIResource;
  /** The elemental type of this move */
  type: NamedAPIResource;
  /** A list of Pokémons that learned this move */
  learned_by_pokemon: NamedAPIResource[];
}

export enum BaseURL {
  REST = 'https://pokeapi.co/api/v2',
}

/**
 * Endpoints of the PokéAPI
 */
export const ENDPOINTS = {
  BERRY: '/berry',
  BERRY_FIRMNESS: '/berry-firmness',
  BERRY_FLAVOR: '/berry-flavor',
  CONTEST_TYPE: '/contest-type',
  CONTEST_EFFECT: '/contest-effect',
  SUPER_CONTEST_EFFECT: '/super-contest-effect',
  ENCOUNTER_METHOD: '/encounter-method',
  ENCOUNTER_CONDITION: '/encounter-condition',
  ENCOUNTER_CONDITION_VALUE: '/encounter-condition-value',
  EVOLUTION_CHAIN: '/evolution-chain',
  EVOLUTION_TRIGGER: '/evolution-trigger',
  GENERATION: '/generation',
  POKEDEX: '/pokedex',
  VERSION: '/version',
  VERSION_GROUP: '/version-group',
  ITEM: '/item',
  ITEM_ATTRIBUTE: '/item-attribute',
  ITEM_CATEGORY: '/item-category',
  ITEM_FLING_EFFECT: '/item-fling-effect',
  ITEM_POCKET: '/item-pocket',
  LOCATION: '/location',
  LOCATION_AREA: '/location-area',
  PALPARK_AREA: '/pal-park-area',
  REGION: '/region',
  MACHINE: '/machine',
  MOVE: '/move',
  MOVE_AILMENT: '/move-ailment',
  MOVE_BATTLE_STYLE: '/move-battle-style',
  MOVE_CATEGORY: '/move-category',
  MOVE_DAMAGE_CLASS: '/move-damage-class',
  MOVE_LEARN_METHOD: '/move-learn-method',
  MOVE_TARGET: '/move-target',
  ABILITY: '/ability',
  CHARACTERISTIC: '/characteristic',
  EGG_GROUP: '/egg-group',
  GENDER: '/gender',
  GROWTH_RATE: '/growth-rate',
  NATURE: '/nature',
  POKEATHLON_STAT: '/pokeathlon-stat',
  POKEMON: '/pokemon',
  POKEMON_LOCATION_AREA: '/pokemon/:id/encounters',
  POKEMON_COLOR: '/pokemon-color',
  POKEMON_FORM: '/pokemon-form',
  POKEMON_HABITAT: '/pokemon-habitat',
  POKEMON_SHAPE: '/pokemon-shape',
  POKEMON_SPECIES: '/pokemon-species',
  STAT: '/stat',
  TYPE: '/type',
  LANGUAGE: '/language',
};
