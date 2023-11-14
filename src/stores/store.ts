import {configureStore} from '@reduxjs/toolkit';
import cardsReducer from './slices/CardsSlice';

export const store = configureStore({
  reducer: {
    card: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
