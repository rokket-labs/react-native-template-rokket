import { createAction, createSelector, createSlice } from '@reduxjs/toolkit'

/* ------------- Initial State ------------- */

const initialState = {
  avatar: undefined,
  fetching: false,
  error: false,
  username: undefined,
}

export const slice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    catRequest: (state, { payload }) => ({
      avatar: undefined,
      username: payload.username,
      fetching: true,
      error: state.error,
    }),
    catSuccess: (state, { payload }) => ({
      fetching: false,
      error: false,
      avatar: payload,
      username: state.username,
    }),
    catFailure: state => ({
      fetching: false,
      error: true,
      avatar: undefined,
      username: state.username,
    }),
  },
})

export const { name, actions, reducer } = slice
