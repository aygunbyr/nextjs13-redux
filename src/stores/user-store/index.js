import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  return Promise.resolve({ id: 1, name: 'John Doe' })
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

export const { reducer, actions } = userSlice
