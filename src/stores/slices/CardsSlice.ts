import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PokemonCard} from '../../types';

interface CardsState {
  selectedCard: PokemonCard;
  cards: PokemonCard[];
  loading: boolean;
  page: number;
  isCardSaved: boolean;
}

const initialState: CardsState = {
  selectedCard: {} as PokemonCard,
  cards: [],
  loading: true,
  page: 1,
  isCardSaved: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<PokemonCard[]>) => {
      Object.assign(state.cards, action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    incrementPage: state => {
      state.page = state.page + 1;
    },
    setSelectedCard: (state, action: PayloadAction<PokemonCard>) => {
      state.selectedCard = action.payload;
    },
    setIsCardSaved: (state, action: PayloadAction<boolean>) => {
      state.isCardSaved = action.payload;
    },
  },
});

export const {
  setCards,
  setLoading,
  incrementPage,
  setSelectedCard,
  setIsCardSaved,
} = cardsSlice.actions;
export default cardsSlice.reducer;
