import {PokemonCard} from '../../src/types';

export const mockPokemonCard: PokemonCard = {
  artist: 'Ken Sugimori',
  attacks: [
    {
      convertedEnergyCost: 2,
      cost: ['Water', 'Colorless'],
      damage: '30+',
      name: 'BubbleBeam',
      text: 'Does 30 damage plus 10 more damage for each Water Energy attached to this Pokémon.',
    },
  ],
  cardmarket: {
    prices: {
      averageSellPrice: 5.99,
      avg1: 6.5,
      avg30: 5.8,
      avg7: 6.2,
      germanProLow: 0,
      lowPrice: 0,
      lowPriceExPlus: 0,
      reverseHoloAvg1: 0,
      reverseHoloAvg30: 0,
      reverseHoloAvg7: 0,
      reverseHoloLow: 0,
      reverseHoloSell: 0,
      reverseHoloTrend: 0,
      suggestedPrice: 0,
      trendPrice: 0,
    },
    updatedAt: '2023-11-14T12:00:00Z',
    url: 'https://www.cardmarket.com/en/Pokemon',
  },
  convertedRetreatCost: 1,
  evolvesFrom: 'Squirtle',
  flavorText:
    "When it's in a good mood, it flies around, shooting water everywhere.",
  hp: '60',
  id: 'base1-47',
  images: {
    large: 'https://example.com/large-image.jpg',
    small: 'https://example.com/small-image.jpg',
  },
  legalities: {
    unlimited: 'Legal',
  },
  name: 'Wartortle',
  nationalPokedexNumbers: [8],
  number: '42/102',
  rarity: 'Uncommon',
  resistances: [
    {
      type: 'Fighting',
      value: '-30',
    },
  ],
  retreatCost: ['Colorless'],
  set: {
    id: 'base1',
    images: {
      logo: 'https://example.com/set-logo.jpg',
      symbol: 'https://example.com/set-symbol.jpg',
    },
    legalities: {
      unlimited: 'Legal',
    },
    name: 'Base Set',
    printedTotal: 102,
    ptcgoCode: 'BS',
    releaseDate: '1999-01-09',
    series: 'Base',
    total: 102,
    updatedAt: '2023-11-14T12:00:00Z',
  },
  subtypes: ['Stage 1'],
  supertype: 'Pokémon',
  tcgplayer: {
    prices: {
      holofoil: {
        low: 5.0,
        mid: 6.0,
        high: 7.0,
        market: 6.5,
        directLow: 5.0,
      },
      reverseHolofoil: {
        low: 5.5,
        mid: 6.5,
        high: 8.0,
        market: 7.0,
        directLow: 5.5,
      },
    },
    updatedAt: '2023-11-14T12:00:00Z',
    url: 'https://www.tcgplayer.com/',
  },
  types: ['Water'],
  weaknesses: [
    {
      type: 'Lightning',
      value: '×2',
    },
  ],
};
