import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCard: (state: any, action: PayloadAction) => {
      Object.assign(state, action.payload);
    },
  },
});

export const {setCard} = cardSlice.actions;
export default cardSlice.reducer;
