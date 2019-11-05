import AppNavigation from 'appSrc/Navigation/AppNavigation'

/* ------------- Selectors ------------- */

export const navSelector = state => state.nav

/* ------------- Reducers ------------- */
export const reducer = (state, action) => {
  // We'll augment the action type on the switch case to make sure we have
  // all the cases handled.
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
