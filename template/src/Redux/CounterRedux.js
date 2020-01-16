import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  increase: null,
  decrease: null,
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const initState = {
  value: 0,
}
export const INITIAL_STATE = Immutable(initState)

/* ------------- Selectors ------------- */

export const counterSelector = state => state.counter.value

/* ------------- Reducers ------------- */
const inc = x => x + 1
const dec = x => x - 1

export const increaseReducer = state => state.update('value', inc)

export const decreaseReducer = state => state.update('value', dec)
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREASE]: increaseReducer,
  [Types.DECREASE]: decreaseReducer,
})
