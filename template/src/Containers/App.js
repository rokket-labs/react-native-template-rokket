import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import SplashScreen from 'react-native-splash-screen'

import 'appSrc/Config'
import DebugConfig from 'appSrc/Config/DebugConfig'
import createStore from 'appSrc/Redux'
import RootContainer from './RootContainer'

// create our store
export const store = createStore()
const persistor = persistStore(store)

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" />}
        persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  )
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App
