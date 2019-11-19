import React, { useEffect } from 'react'
import { BackHandler, Platform } from 'react-native'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { useDispatch, useSelector } from 'react-redux'

import { navSelector } from 'appSrc/Redux/NavigationRedux'
import AppNavigation, { FIRST_SCREEN } from './AppNavigation'

createReactNavigationReduxMiddleware(navSelector)

const ReduxAppNavigator = createReduxContainer(AppNavigation)

const ReduxNavigation = () => {
  const nav = useSelector(navSelector)
  const dispatch = useDispatch()

  const componentWillUnmount = () => {
    if (Platform.OS === 'ios') {
      return
    }
    BackHandler.removeEventListener('hardwareBackPress', () => {})
  }

  useEffect(() => {
    if (Platform.OS === 'ios') {
      return
    }
    BackHandler.addEventListener('hardwareBackPress', () => {
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && nav.routes[0].routeName === FIRST_SCREEN) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })

    return componentWillUnmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <ReduxAppNavigator dispatch={dispatch} state={nav} />
}

export default ReduxNavigation
