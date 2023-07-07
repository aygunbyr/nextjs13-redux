import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [],
}

export const basketSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload]
    },
  },
})

export const { actions, reducer } = basketSlice
