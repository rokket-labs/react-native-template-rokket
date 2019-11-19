import { has, when } from 'ramda'

import { NavigationActions } from 'react-navigation'
import { store } from '../Containers/App'

function navigate(routeName, params) {
  store.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

function goBack(key) {
  store.dispatch(NavigationActions.back({ key }))
}

const _getCurrentRoute = when(has('index'), _obj =>
  _getCurrentRoute(_obj.routes[_obj.index])
)
function getCurrentRoute() {
  const nav = store.getState().nav
  return _getCurrentRoute(nav)
}
// add other navigation functions that you need and export them

// add other navigation functions that you need and export them
export default {
  navigate,
  goBack,
  getCurrentRoute
}
