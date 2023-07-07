import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: {},
})

export const { reducer, actions } = userSlice
