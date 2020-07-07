import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase: state => state + 1,
    decrease: state => state - 1,
  },
})

export const { name, actions, reducer } = slice
