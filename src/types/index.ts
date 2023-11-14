export interface RouteProps {
  route: {
    params: {
      cardId: string;
    };
  };
}

export interface CardAbility {
  title: string;
  ability: string;
  vertical?: boolean;
}

interface Attack {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string;
}

interface CardmarketPrices {
  averageSellPrice: number;
  avg1: number;
  avg30: number;
  avg7: number;
  germanProLow: number;
  lowPrice: number;
  lowPriceExPlus: number;
  reverseHoloAvg1: number;
  reverseHoloAvg30: number;
  reverseHoloAvg7: number;
  reverseHoloLow: number;
  reverseHoloSell: number;
  reverseHoloTrend: number;
  suggestedPrice: number;
  trendPrice: number;
}

interface Cardmarket {
  prices: CardmarketPrices;
  updatedAt: string;
  url: string;
}

interface ImageUrls {
  large: string;
  small: string;
}

interface Legalities {
  unlimited: string;
}

interface Resistance {
  type: string;
  value: string;
}

interface Set {
  id: string;
  images: {
    logo: string;
    symbol: string;
  };
  legalities: {
    unlimited: string;
  };
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  total: number;
  updatedAt: string;
}

interface TcgplayerPrices {
  holofoil: {
    [key: string]: number;
  };
  reverseHolofoil: {
    [key: string]: number;
  };
}

interface Tcgplayer {
  prices: TcgplayerPrices;
  updatedAt: string;
  url: string;
}

interface Weakness {
  type: string;
  value: string;
}

export interface PokemonCard {
  artist: string;
  attacks: Attack[];
  cardmarket: Cardmarket;
  convertedRetreatCost: number;
  evolvesFrom: string;
  flavorText: string;
  hp: string;
  id: string;
  images: ImageUrls;
  legalities: Legalities;
  name: string;
  nationalPokedexNumbers: number[];
  number: string;
  rarity: string;
  resistances: Resistance[];
  retreatCost: string[];
  set: Set;
  subtypes: string[];
  supertype: string;
  tcgplayer: Tcgplayer;
  types: string[];
  weaknesses: Weakness[];
}
